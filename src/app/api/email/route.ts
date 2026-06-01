import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const body = await req.json();

  try {

    await resend.emails.send({
      from: "Rambazamba <onboarding@resend.dev>",
      to: body.email,
      subject: "Bilhete Rambazamba",
      html: `
        <h1>Bilhete Confirmado</h1>
        <p>Obrigado pela compra.</p>
        <img src="${body.qr}" />
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json({
      error,
    });
  }
}