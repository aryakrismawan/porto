/**
 * Cloudflare Pages Function - Contact API Endpoint
 * Handles POST requests to /api/contact at edge
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Security Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  };

  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Format data tidak valid. Silakan gunakan format JSON.',
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    const body = await request.json();
    const { name, email, topic, message, honeypot } = body;

    // 1. Anti-spam check (honeypot)
    if (honeypot && honeypot.trim() !== '') {
      // Return fake success for bots
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Pesan berhasil terkirim.',
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 2. Field validation
    const trimmedName = (name || '').trim();
    const trimmedEmail = (email || '').trim();
    const trimmedTopic = (topic || '').trim();
    const trimmedMessage = (message || '').trim();

    if (!trimmedName || trimmedName.length < 2) {
      return new Response(
        JSON.stringify({
          success: false,
          errorField: 'name',
          message: 'Mohon masukkan nama lengkap Anda (minimal 2 karakter).',
        }),
        { status: 422, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({
          success: false,
          errorField: 'email',
          message: 'Mohon masukkan alamat email yang valid dan aktif.',
        }),
        { status: 422, headers: corsHeaders }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          errorField: 'message',
          message: 'Pesan terlalu singkat (minimal 10 karakter). Ceritakan ide atau kebutuhan Anda.',
        }),
        { status: 422, headers: corsHeaders }
      );
    }

    // 3. Optional Webhook Notification (Discord / Slack / Telegram) if env var configured
    if (env && env.NOTIFICATION_WEBHOOK) {
      try {
        await fetch(env.NOTIFICATION_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🌿 **Pesan Masuk dari Nature Portfolio!**\n**Nama:** ${trimmedName}\n**Email:** ${trimmedEmail}\n**Topik:** ${trimmedTopic || 'Umum'}\n**Pesan:**\n${trimmedMessage}`,
          }),
        });
      } catch (err) {
        // Non-blocking error for webhook
        console.error('Webhook notification error:', err);
      }
    }

    const rayId = request.headers.get('cf-ray') || `local-${Date.now()}`;
    const clientCountry = request.headers.get('cf-ipcountry') || 'ID';

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Terima kasih! Pesan Anda telah terkirim melalui Cloudflare Edge. Saya akan membalas ke email Anda dalam kurun waktu 1x24 jam.',
        details: {
          requestId: rayId,
          region: clientCountry,
          timestamp: new Date().toISOString(),
        },
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Terjadi kendala saat memproses pesan di Edge. Silakan hubungi langsung melalui email resmi saya.',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
