"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { supabase } from src/lib/supabase.ts

export default function BilhetePage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");

  const handleSubmit = async () => {

    if (email !== confirmarEmail) {
      alert("Os emails não coincidem");
      return;
    }

    if (!nome || !email) {
      alert("Preenche todos os campos");
      return;
    }

    const { error } = await supabase
      .from("participantes")
      .insert([
        {
          nome,
          email,
        },
      ]);

    if (error) {
      console.log(error);
      alert("Erro ao guardar participante");
      return;
    }

    alert("Bilhete registado com sucesso!");

    setNome("");
    setEmail("");
    setConfirmarEmail("");
  };

  return (
    <main className="min-h-screen bg-zinc-100 flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-slate-900 text-white p-6">
          <h1 className="text-2xl font-black">
            Rambazamba 2026
          </h1>

          <p className="text-zinc-300 mt-1">
            Bilhete Digital
          </p>
        </div>

        {/* FORM */}
        <div className="p-6">

          <h2 className="font-bold text-zinc-700 mb-4">
            OS TEUS DADOS
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="O teu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border rounded-2xl p-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-2xl p-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Confirmar email"
              value={confirmarEmail}
              onChange={(e) => setConfirmarEmail(e.target.value)}
              className="w-full border rounded-2xl p-4 outline-none focus:border-black"
            />

          </div>

          <p className="text-sm text-zinc-500 mt-2">
            Enviaremos o teu bilhete digital (PDF) para este email.
          </p>

          {/* RESUMO */}
          <div className="mt-8">

            <h2 className="font-bold text-zinc-700 mb-4">
              RESUMO DA COMPRA
            </h2>

            <div className="bg-zinc-100 rounded-2xl p-5 space-y-3">

              <div className="flex justify-between">
                <span>Bilhete Rambazamba 2026</span>
                <span>50,00 €</span>
              </div>

              <div className="flex justify-between">
                <span>Solidariedade Bragança</span>
                <span>1,00 €</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>51,00 €</span>
              </div>

            </div>

          </div>

          {/* MENSAGEM */}
          <div className="mt-6 flex gap-3 bg-red-50 p-4 rounded-2xl">

            <Heart className="text-red-500 mt-1" size={20} />

            <p className="text-sm text-zinc-700">
              O valor de 1,00 € será doado às comunidades
              carenciadas de Bragança. Juntos fazemos a diferença!
            </p>

          </div>

          {/* BOTÃO */}
          <button
            onClick={handleSubmit}
            className="w-full mt-8 bg-black text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 transition"
          >
            Ir para Pagamento
          </button>

        </div>

      </div>

    </main>
  );
}