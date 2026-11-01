/**
 * Cloudflare Pages Function - Edge Health & Telemetry
 * Returns real-time Cloudflare Edge information
 */

export async function onRequestGet(context) {
  const { request } = context;

  const ray = request.headers.get('cf-ray') || 'local-edge';
  const country = request.headers.get('cf-ipcountry') || 'ID';
  const colo = request.cf?.colo || 'CGK'; // Cloudflare datacenter code (e.g. CGK for Jakarta)
  const clientHttp = request.headers.get('cf-visitor') || '{"scheme":"https"}';

  return new Response(
    JSON.stringify({
      status: 'healthy',
      edgeNetwork: 'Cloudflare Global Anycast',
      datacenter: colo,
      country: country,
      rayId: ray,
      timestamp: new Date().toISOString(),
      greenTier: '100% Carbon Neutral Compute',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}
