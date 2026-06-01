export default function ErroPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-md w-full text-center">

        <h1 className="text-4xl font-black text-red-500">
          Pagamento Falhou
        </h1>

        <p className="text-zinc-400 mt-4">
          O pagamento não foi concluído.
        </p>

        <a
          href="/bilhete"
          className="inline-block mt-8 bg-orange-500 px-6 py-3 rounded-2xl font-bold"
        >
          Tentar Novamente
        </a>

      </div>

    </main>
  );
}