import QRCode from "qrcode";

export async function POST(req: Request) {

  const body = await req.json();

  const qr = await QRCode.toDataURL(body.text);

  return Response.json({
    qr,
  });
}