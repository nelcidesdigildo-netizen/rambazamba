export default function PagamentoPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl max-w-md w-full text-center">

        <div className="animate-spin w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto" />

        <h1 className="text-3xl font-black mt-8">
          Aguardando Pagamento
        </h1>

        <p className="text-zinc-400 mt-4">
          Estamos à espera da confirmação do pagamento.
        </p>

        <p className="text-zinc-500 mt-2 text-sm">
          Não feches esta página.
        </p>

      </div>

    </main>
  );
}