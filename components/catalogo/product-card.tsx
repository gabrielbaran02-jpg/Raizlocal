import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatBRL } from '@/lib/format';

export function ProductCard({ product }: { product: Product }) {
  const emPromo = product.precoPromocional && product.precoPromocional < product.preco;

  return (
    <article className="card flex flex-col gap-3">
      <img src={product.imagem} alt={product.nome} className="h-44 w-full rounded-xl object-cover" />
      <div>
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="font-semibold">{product.nome}</h3>
          {product.destaque && <span className="badge bg-amber-100 text-amber-700">Destaque</span>}
        </div>
        <p className="text-sm text-slate-600">{product.descricao}</p>
      </div>
      <div className="mt-auto">
        {emPromo ? (
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-brand-700">{formatBRL(product.precoPromocional!)}</span>
            <span className="text-sm text-slate-400 line-through">{formatBRL(product.preco)}</span>
          </div>
        ) : (
          <span className="text-lg font-bold text-brand-700">{formatBRL(product.preco)}</span>
        )}
        <div className="mt-3">
          <Link href={`/catalogo/produto/${product.id}`} className="inline-flex rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white">
            Ver produto
          </Link>
        </div>
      </div>
    </article>
  );
}
