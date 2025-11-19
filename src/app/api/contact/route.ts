import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios: nome, email e mensagem.' }, { status: 400 });
    }

    // Aqui poderíamos integrar com um provedor (Resend, SES, SendGrid). Por enquanto apenas logamos.
    console.log('[contact] nova mensagem', { name, email, subject, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true, message: 'Mensagem recebida. Entraremos em contato em breve.' });
  } catch (err) {
    console.error('[contact] erro', err);
    return NextResponse.json({ ok: false, error: 'Não foi possível enviar sua mensagem.' }, { status: 500 });
  }
}
