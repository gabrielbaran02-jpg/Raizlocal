'use client';

import { useStore } from '@/lib/store';
import { formatBRL } from '@/lib/format';

export default function PromocoesPage() {
  const { products } = useStore();
  const promocoes = products.filter((p) => p.precoPromocional && p.precoPromocional < p.preco);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Promoções ativas</h1>
      <p className="mb-4 text-sm text-slate-600">Ofertas da semana com validade visual e economia destacada.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promocoes.map((product) => {
          const economia = product.preco - product.precoPromocional!;
          const percentual = Math.round((economia / product.preco) * 100);
          return (
            <article key={product.id} className="card">
              <img src={product.imagem} alt={product.nome} className="h-40 w-full rounded-lg object-cover" />
              <p className="mt-3 font-semibold">{product.nome}</p>
              <p className="text-sm text-slate-500 line-through">{formatBRL(product.preco)}</p>
              <p className="text-xl font-bold text-brand-700">{formatBRL(product.precoPromocional!)}</p>
              <p className="text-sm text-emerald-700">Economize {formatBRL(economia)} ({percentual}% OFF)</p>
              <p className="mt-2 text-xs text-slate-500">Válido até domingo às 23h59</p>
            </article>
          );
        })}
      </div>
      {promocoes.length === 0 && <div className="card mt-4">Nenhuma promoção ativa no momento.</div>}
    </main>
  );
}
