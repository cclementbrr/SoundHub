/**
 * SoundHub — Module de persistance Supabase
 * ==========================================
 * Remplace les données DEMO_PLAYLISTS dans hub.html.
 *
 * SETUP :
 *  1. Créer un projet sur supabase.com (Free tier OK)
 *  2. Coller supabase-schema.sql dans SQL Editor → Run
 *  3. Remplir SUPABASE_URL et SUPABASE_ANON_KEY ci-dessous
 *     (Settings → API dans le dashboard Supabase)
 *  4. Importer ce fichier dans hub.html :
 *     <script type="module" src="soundhub-db.js"></script>
 *     puis remplacer les appels DEMO_PLAYLISTS par les fonctions exportées.
 *
 * FINGERPRINT :
 *  Identifiant anonyme basé sur navigator + screen, jamais l'IP.
 *  Sert uniquement à éviter le double-like.
 */

// ─── Config ───────────────────────────────────────────────────────────────────
const SUPABASE_URL      = 'https://VOTRE_ID.supabase.co';       // ← à remplir
const SUPABASE_ANON_KEY = 'VOTRE_ANON_KEY';                     // ← à remplir

// ─── Client Supabase (CDN, pas de bundler requis) ─────────────────────────────
// Dans hub.html, ajouter avant ce script :
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
const { createClient } = window.supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── Fingerprint anonyme ──────────────────────────────────────────────────────
async function getFingerprint() {
  const cached = sessionStorage.getItem('sh_fp');
  if (cached) return cached;

  const raw = [
    navigator.language,
    navigator.platform,
    screen.width,
    screen.height,
    screen.colorDepth,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.hardwareConcurrency,
  ].join('|');

  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  const fp   = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('').slice(0, 16);
  sessionStorage.setItem('sh_fp', fp);
  return fp;
}

// ─── LECTURE ──────────────────────────────────────────────────────────────────

/**
 * Charge toutes les playlists depuis Supabase.
 * @param {{ genre?: string, sort?: string, search?: string, limit?: number }} opts
 * @returns {Promise<Array>}
 */
export async function fetchPlaylists({ genre, sort = 'recent', search, limit = 200 } = {}) {
  let q = db.from('playlists').select('*');

  if (genre && genre !== 'ALL') q = q.eq('genre', genre);
  if (search) q = q.or(`name.ilike.%${search}%,author.ilike.%${search}%`);

  switch (sort) {
    case 'recent': q = q.order('created_at', { ascending: false }); break;
    case 'likes':  q = q.order('likes',      { ascending: false }); break;
    case 'tracks': q = q.order('track_count', { ascending: false }); break;
    case 'alpha':  q = q.order('name',        { ascending: true });  break;
  }

  q = q.limit(limit);

  const { data, error } = await q;
  if (error) { console.error('[SoundHub] fetchPlaylists:', error.message); return []; }

  // Normaliser vers le format attendu par hub.html
  return (data || []).map(row => ({
    id:      row.id,
    name:    row.name,
    genre:   row.genre,
    service: row.service,
    tracks:  row.track_count,
    tags:    row.tags || [],
    likes:   row.likes,
    url:     row.url,
    author:  row.author || 'Anonyme',
    ts:      new Date(row.created_at).getTime(),
  }));
}

/**
 * Stats globales pour le bandeau en haut du Hub.
 * @returns {Promise<{ playlists: number, tracks: number, genres: number }>}
 */
export async function fetchStats() {
  const { data, error } = await db
    .from('playlists')
    .select('genre, track_count');

  if (error) return { playlists: 0, tracks: 0, genres: 0 };

  return {
    playlists: data.length,
    tracks:    data.reduce((a, b) => a + (b.track_count || 0), 0),
    genres:    new Set(data.map(d => d.genre)).size,
  };
}

// ─── ÉCRITURE ─────────────────────────────────────────────────────────────────

/**
 * Soumettre une nouvelle playlist partagée.
 * @param {{ name, url, genre, service, tags, track_count, author }} payload
 * @returns {Promise<{ success: boolean, data?: object, error?: string }>}
 */
export async function submitPlaylist({ name, url, genre, service, tags = [], track_count = 0, author = 'Anonyme' }) {
  // Validation basique côté client avant d'envoyer
  if (!name || !url || !genre || !service) return { success: false, error: 'Champs requis manquants' };
  if (!url.startsWith('http')) return { success: false, error: 'URL invalide' };

  const fp = await getFingerprint();

  const { data, error } = await db
    .from('playlists')
    .insert({
      name:        name.trim().slice(0, 120),
      url:         url.trim(),
      genre,
      service,
      tags:        tags.map(t => t.trim()).filter(Boolean).slice(0, 8),
      track_count: Math.max(0, parseInt(track_count) || 0),
      author:      (author || 'Anonyme').trim().slice(0, 40),
      fingerprint: fp,
    })
    .select()
    .single();

  if (error) {
    console.error('[SoundHub] submitPlaylist:', error.message);
    return { success: false, error: error.message };
  }

  return {
    success: true,
    data: {
      id:      data.id,
      name:    data.name,
      genre:   data.genre,
      service: data.service,
      tracks:  data.track_count,
      tags:    data.tags || [],
      likes:   data.likes,
      url:     data.url,
      author:  data.author,
      ts:      new Date(data.created_at).getTime(),
    },
  };
}

// ─── LIKE ─────────────────────────────────────────────────────────────────────

/**
 * Toggle like sur une playlist (appelle la RPC PostgreSQL).
 * @param {string} playlistId  — UUID de la playlist
 * @returns {Promise<{ action: 'liked'|'unliked', likes: number } | null>}
 */
export async function toggleLike(playlistId) {
  const fp = await getFingerprint();

  const { data, error } = await db.rpc('toggle_like', {
    p_playlist_id: playlistId,
    p_fingerprint: fp,
  });

  if (error) { console.error('[SoundHub] toggleLike:', error.message); return null; }
  return data; // { action: 'liked'|'unliked', likes: number }
}

/**
 * Retourne les IDs des playlists likées par ce browser.
 * @returns {Promise<string[]>}
 */
export async function fetchMyLikes() {
  const fp = await getFingerprint();
  const { data, error } = await db
    .from('playlist_likes')
    .select('playlist_id')
    .eq('fingerprint', fp);

  if (error) return [];
  return (data || []).map(r => r.playlist_id);
}

// ─── REALTIME (optionnel) ─────────────────────────────────────────────────────

/**
 * Écoute les nouvelles playlists en temps réel.
 * @param {function} callback  — appelé avec la nouvelle playlist normalisée
 * @returns {function} unsubscribe
 */
export function subscribeNewPlaylists(callback) {
  const channel = db
    .channel('playlists-realtime')
    .on('postgres_changes', {
      event:  'INSERT',
      schema: 'public',
      table:  'playlists',
    }, payload => {
      const row = payload.new;
      callback({
        id:      row.id,
        name:    row.name,
        genre:   row.genre,
        service: row.service,
        tracks:  row.track_count,
        tags:    row.tags || [],
        likes:   row.likes,
        url:     row.url,
        author:  row.author || 'Anonyme',
        ts:      new Date(row.created_at).getTime(),
      });
    })
    .subscribe();

  return () => db.removeChannel(channel);
}

// ─── Export par défaut ────────────────────────────────────────────────────────
export default { fetchPlaylists, fetchStats, submitPlaylist, toggleLike, fetchMyLikes, subscribeNewPlaylists };
