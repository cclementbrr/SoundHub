// supabase/functions/dz-proxy/index.ts
// DÉPLOYER : Supabase Dashboard → Edge Functions → New Function → "dz-proxy"
// Colle ce code dans l'éditeur et clique Deploy.
// URL finale : https://xbkkocwrrakkgurtmzss.supabase.co/functions/v1/dz-proxy

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const { url } = await req.json();
    if (!url?.startsWith('https://api.deezer.com/'))
      return new Response(JSON.stringify({ error: 'URL non autorisée' }),
        { status: 403, headers: { ...CORS, 'Content-Type': 'application/json' } });

    const r = await fetch(url, { headers: { 'Accept': 'application/json' } });
    const d = await r.json();
    return new Response(JSON.stringify(d),
      { status: r.status, headers: { ...CORS, 'Content-Type': 'application/json' } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }
});
