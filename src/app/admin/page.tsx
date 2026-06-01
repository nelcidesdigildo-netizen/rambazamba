"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase"; 

const [search, setSearch] = useState("");

interface Participante {
  id: string;
  nome: string;
  email: string;
  estado: string;
  valor: number;
}

<input
  type="text"
  placeholder="Pesquisar participante..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-6 p-4 rounded-2xl bg-slate-700 outline-none"
/>

export default function AdminPage() {

  const [participantes, setParticipantes] = useState<Participante[]>([]);

  useEffect(() => {
    fetchParticipantes();
  }, []);

  const fetchParticipantes = async () => {

    const { data, error } = await supabase
      .from("participantes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setParticipantes(data || []);
  };

  const total = participantes.reduce(
    (acc, item) => acc + item.valor,
    0
  );

  const filtrados = participantes.filter((p) =>
  p.nome.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-black mb-10">
        Dashboard Rambazamba
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-zinc-400">
            Participantes
          </h2>

          <p className="text-5xl font-black mt-2">
            {participantes.length}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-zinc-400">
            Total arrecadado
          </h2>

          <p className="text-5xl font-black mt-2">
            {total}€
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-3xl">
          <h2 className="text-zinc-400">
            Solidariedade
          </h2>

          <p className="text-5xl font-black mt-2">
            {participantes.length}€
          </p>
        </div>

      </div>

      <div className="mt-10 bg-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Participantes
        </h2>

        <div className="space-y-4">

          {filtrados.map((p) => (

            <div
              key={p.id}
              className="bg-slate-700 p-4 rounded-2xl flex justify-between items-center"
            >

              <div>
                <h3 className="font-bold">
                  {p.nome}
                </h3>

                <p className="text-zinc-300 text-sm">
                  {p.email}
                </p>
              </div>

              <span className="bg-green-500 px-4 py-1 rounded-full text-sm">
                {p.estado}
              </span>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}