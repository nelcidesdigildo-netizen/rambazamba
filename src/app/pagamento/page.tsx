export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-4xl font-black mb-10">
        Dashboard Rambazamba
      </h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-800 rounded-3xl p-6">
          <h2 className="text-zinc-400">
            Bilhetes vendidos
          </h2>

          <p className="text-4xl font-bold mt-2">
            34
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6">
          <h2 className="text-zinc-400">
            Total arrecadado
          </h2>

          <p className="text-4xl font-bold mt-2">
            1734 €
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6">
          <h2 className="text-zinc-400">
            Solidariedade
          </h2>

          <p className="text-4xl font-bold mt-2">
            34 €
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6">
          <h2 className="text-zinc-400">
            Pagamentos
          </h2>

          <p className="text-4xl font-bold mt-2">
            34
          </p>
        </div>

      </div>

      {/* PARTICIPANTES */}
      <div className="mt-12 bg-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Lista de participantes
        </h2>

        <div className="space-y-4">

          <div className="bg-slate-700 rounded-2xl p-4 flex justify-between items-center">

            <div>
              <h3 className="font-bold">
                Ana Ferreira
              </h3>

              <p className="text-zinc-300 text-sm">
                Pago
              </p>
            </div>

            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              Confirmado
            </span>

          </div>

          <div className="bg-slate-700 rounded-2xl p-4 flex justify-between items-center">

            <div>
              <h3 className="font-bold">
                Carlos Mendes
              </h3>

              <p className="text-zinc-300 text-sm">
                Pago
              </p>
            </div>

            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              Confirmado
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}