'use client';

import { useMemo, useState } from 'react';
import { useStore } from '@/lib/store';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ProductForm } from '@/components/painel/product-form';
import { formatBRL } from '@/lib/format';

export default function ProdutosPage() {
  const { products, upsertProduct, deleteProduct } = useStore();
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const categorias = ['Todas', ...new Set(products.map((p) => p.categoria))];
  const filtrados = useMemo(
    () => products.filter((p) => (categoria === 'Todas' || p.categoria === categoria) && p.nome.toLowerCase().includes(query.toLowerCase())),
    [products, categoria, query]
  );

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Gestão de produtos</h1>
      <div className="card grid gap-3 md:grid-cols-4">
        <Input placeholder="Buscar por nome" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>{categorias.map((c) => <option key={c}>{c}</option>)}</Select>
        <Button onClick={() => { setEditing(null); setShowForm((s) => !s); }}>+ Novo produto</Button>
      </div>

      {showForm && (
        <ProductForm
          initial={editing ?? undefined}
          onSave={(product) => { upsertProduct(product); setShowForm(false); setEditing(null); }}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}

      <div className="grid gap-3">
        {filtrados.map((product) => (
          <div key={product.id} className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">{product.nome}</p>
              <p className="text-sm text-slate-600">{product.categoria} • Estoque: {product.estoque} • {product.ativo ? 'Disponível' : 'Indisponível'}</p>
              <p className="text-sm text-brand-700">{formatBRL(product.precoPromocional ?? product.preco)}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => { setEditing(product); setShowForm(true); }}>Editar</Button>
              <Button variant="ghost" onClick={() => deleteProduct(product.id)}>Excluir</Button>
              <Button variant="outline" onClick={() => upsertProduct({ ...product, destaque: !product.destaque })}>{product.destaque ? 'Remover destaque' : 'Marcar destaque'}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
