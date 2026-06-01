import { CheckCircle2 } from "lucide-react";

export default function SucessoPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-lg w-full text-center">

        <CheckCircle2
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="text-4xl font-black mt-6">
          Pagamento Confirmado
        </h1>

        <p className="text-zinc-400 mt-4">
          O teu bilhete foi confirmado com sucesso.
        </p>

        <div className="mt-10 bg-white p-6 rounded-3xl">

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Rambazamba2026"
            className="mx-auto"
          />

        </div>

        <p className="mt-6 text-zinc-500 text-sm">
          Apresenta este QR Code na entrada do evento.
        </p>

      </div>

    </main>
  );
}