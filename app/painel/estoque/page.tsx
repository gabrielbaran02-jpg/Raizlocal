'use client';

import { useStore } from '@/lib/store';

export default function EstoquePage() {
  const { products } = useStore();

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Controle de estoque</h1>
      <div className="grid gap-3">
        {products.map((product) => {
          const status = product.estoque === 0 ? 'Sem estoque' : product.estoque <= 5 ? 'Estoque baixo' : 'Normal';
          const color = product.estoque === 0 ? 'text-rose-700' : product.estoque <= 5 ? 'text-amber-700' : 'text-emerald-700';
          return (
            <div key={product.id} className="card flex items-center justify-between">
              <div>
                <p className="font-semibold">{product.nome}</p>
                <p className="text-sm text-slate-500">Quantidade disponível: {product.estoque}</p>
              </div>
              <span className={`text-sm font-semibold ${color}`}>{status}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
