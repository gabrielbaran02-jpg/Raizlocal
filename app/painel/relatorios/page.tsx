'use client';

import { useStore } from '@/lib/store';

export default function RelatoriosPage() {
  const { products, contacts } = useStore();
  const maisVistos = [...products].sort((a, b) => b.visualizacoes - a.visualizacoes).slice(0, 3);
  const baixoEstoque = products.filter((p) => p.estoque <= 5);
  const promocoes = products.filter((p) => p.precoPromocional && p.precoPromocional < p.preco);

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Relatórios simples</h1>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="card">
          <p className="mb-2 font-semibold">Produtos mais vistos</p>
          <ul className="space-y-2 text-sm text-slate-600">{maisVistos.map((p) => <li key={p.id}>{p.nome} • {p.visualizacoes} visualizações</li>)}</ul>
        </div>
        <div className="card">
          <p className="mb-2 font-semibold">Resumo geral</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Produtos cadastrados: {products.length}</li>
            <li>Produtos com estoque baixo: {baixoEstoque.length}</li>
            <li>Promoções ativas: {promocoes.length}</li>
            <li>Contatos recebidos: {contacts.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
