'use client';

import { FormEvent, useState } from 'react';
import { Product, ProductCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { toSlug } from '@/lib/format';

const categories: ProductCategory[] = ['Roupas', 'Calçados', 'Papelaria', 'Acessórios', 'Perfumaria', 'Mercearia'];

export function ProductForm({ initial, onSave, onCancel }: { initial?: Product; onSave: (product: Product) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Product>(
    initial ?? {
      id: '',
      nome: '',
      descricao: '',
      categoria: 'Roupas',
      preco: 0,
      precoPromocional: undefined,
      estoque: 1,
      imagem: '',
      destaque: false,
      ativo: true,
      visualizacoes: Math.floor(40 + Math.random() * 120)
    }
  );
  const [erro, setErro] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.nome || form.preco <= 0 || !form.imagem) {
      setErro('Preencha nome, preço e imagem para continuar.');
      return;
    }
    if (form.precoPromocional && form.precoPromocional >= form.preco) {
      setErro('O preço promocional deve ser menor que o preço principal.');
      return;
    }
    onSave({ ...form, id: form.id || toSlug(form.nome), ativo: form.estoque > 0 ? form.ativo : false });
  };

  return (
    <form onSubmit={handleSubmit} className="card grid gap-3">
      <h3 className="text-lg font-semibold">{initial ? 'Editar produto' : 'Novo produto'}</h3>
      {erro && <p className="rounded-lg bg-rose-100 p-2 text-sm text-rose-700">{erro}</p>}
      <Input placeholder="Nome do produto" value={form.nome} onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))} />
      <Input placeholder="Descrição" value={form.descricao} onChange={(e) => setForm((p) => ({ ...p, descricao: e.target.value }))} />
      <Select value={form.categoria} onChange={(e) => setForm((p) => ({ ...p, categoria: e.target.value as ProductCategory }))}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </Select>
      <div className="grid gap-3 md:grid-cols-3">
        <Input type="number" step="0.01" placeholder="Preço" value={form.preco} onChange={(e) => setForm((p) => ({ ...p, preco: Number(e.target.value) }))} />
        <Input
          type="number"
          step="0.01"
          placeholder="Preço promocional"
          value={form.precoPromocional ?? ''}
          onChange={(e) => setForm((p) => ({ ...p, precoPromocional: e.target.value ? Number(e.target.value) : undefined }))}
        />
        <Input type="number" placeholder="Estoque" value={form.estoque} onChange={(e) => setForm((p) => ({ ...p, estoque: Number(e.target.value) }))} />
      </div>
      <Input placeholder="URL da imagem" value={form.imagem} onChange={(e) => setForm((p) => ({ ...p, imagem: e.target.value }))} />
      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.destaque} onChange={(e) => setForm((p) => ({ ...p, destaque: e.target.checked }))} />
          Produto em destaque
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.ativo} onChange={(e) => setForm((p) => ({ ...p, ativo: e.target.checked }))} />
          Disponível para venda
        </label>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Salvar produto</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
      <p className="text-xs text-slate-500">Você também pode usar upload demonstrativo: cole a URL da foto do produto.</p>
    </form>
  );
}
