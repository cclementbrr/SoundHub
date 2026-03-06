// supabase/functions/sc-proxy/index.ts
// DÉPLOYER : Supabase Dashboard → Edge Functions → sc-proxy → Redéployer avec ce code

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-sc-token',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const { endpoint, token } = await req.json();
    if (!endpoint || !token)
      return new Response(JSON.stringify({ error: 'endpoint et token requis' }),
        { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } });

    // Whitelist : tous les endpoints api-v2.soundcloud.com
    if (!endpoint.startsWith('https://api-v2.soundcloud.com/'))
      return new Response(JSON.stringify({ error: 'Endpoint non autorisé' }),
        { status: 403, headers: { ...CORS, 'Content-Type': 'application/json' } });

    const h: Record<string, string> = { 'Accept': 'application/json' };
    if (token !== '_') h['Authorization'] = `OAuth ${token}`;

    const r = await fetch(endpoint, { headers: h });
    const d = await r.json();
    return new Response(JSON.stringify(d),
      { status: r.status, headers: { ...CORS, 'Content-Type': 'application/json' } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }
});
