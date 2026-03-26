import Link from 'next/link';

const beneficios = [
  'Catálogo digital bonito e fácil de compartilhar',
  'Gestão simples de estoque e promoções',
  'Recebimento de contatos com organização',
  'Painel com indicadores que ajudam na decisão'
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <header className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-500 p-8 text-white">
        <p className="mb-2 text-sm">Produto digital para varejo local</p>
        <h1 className="text-4xl font-bold">RaizLocal</h1>
        <p className="mt-3 max-w-2xl text-brand-50">Ajude sua loja a vender mais com catálogo online, promoções visíveis e atendimento organizado.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/login" className="rounded-xl bg-white px-5 py-2 font-semibold text-brand-700">Entrar no painel</Link>
          <Link href="/catalogo" className="rounded-xl border border-white/60 px-5 py-2 font-semibold">Ver catálogo público</Link>
        </div>
      </header>

      <section className="my-10 grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-2 text-xl font-semibold">Como funciona</h2>
          <ol className="list-inside list-decimal space-y-2 text-slate-600">
            <li>Cadastre produtos e controle estoque.</li>
            <li>Ative promoções e destaque itens estratégicos.</li>
            <li>Compartilhe catálogo via WhatsApp e Instagram.</li>
            <li>Acompanhe contatos e indicadores no painel.</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="mb-2 text-xl font-semibold">Vantagens para pequeno varejo</h2>
          <ul className="space-y-2 text-slate-600">
            {beneficios.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-bold">Pronto para modernizar sua loja?</h2>
        <p className="text-slate-600">Comece em minutos com uma experiência pensada para quem vende no dia a dia.</p>
        <Link href="/login" className="rounded-xl bg-brand-500 px-6 py-2 font-semibold text-white">Começar demonstração</Link>
      </section>
    </main>
  );
}
