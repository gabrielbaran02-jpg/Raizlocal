'use client';

import { useMemo, useState } from 'react';
import { useStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ProductCard } from '@/components/catalogo/product-card';

export default function CatalogoPage() {
  const { products } = useStore();
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const categorias = ['Todas', ...new Set(products.map((p) => p.categoria))];

  const filtered = useMemo(
    () => products.filter((p) => p.ativo && (categoria === 'Todas' || p.categoria === categoria) && p.nome.toLowerCase().includes(query.toLowerCase())),
    [products, query, categoria]
  );

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Catálogo da loja</h1>
      <p className="mb-4 text-sm text-slate-600">Vitrine digital com busca, categorias e produtos em destaque.</p>
      <div className="mb-4 grid gap-3 md:grid-cols-3">
        <Input placeholder="Buscar produto" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>{categorias.map((c) => <option key={c}>{c}</option>)}</Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      {filtered.length === 0 && <div className="card mt-4 text-sm text-slate-600">Nenhum produto encontrado. Tente outra busca ou categoria.</div>}
    </main>
  );
}
