'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';

export default function DashboardPage() {
  const { products, contacts } = useStore();
  const destaques = products.filter((p) => p.destaque).length;
  const promocoes = products.filter((p) => p.precoPromocional && p.precoPromocional < p.preco).length;
  const baixoEstoque = products.filter((p) => p.estoque > 0 && p.estoque <= 5).length;
  const visualizacoes = products.reduce((acc, p) => acc + p.visualizacoes, 0);

  const cards = [
    ['Total de produtos', products.length],
    ['Produtos em destaque', destaques],
    ['Promoções ativas', promocoes],
    ['Estoque baixo', baixoEstoque],
    ['Contatos recebidos', contacts.length],
    ['Visualizações simuladas', visualizacoes]
  ];

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Dashboard do lojista</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([label, value]) => (
          <div key={label} className="card">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-2xl font-bold text-brand-700">{value}</p>
          </div>
        ))}
      </div>
      <div className="card">
        <p className="font-semibold">Atalhos rápidos</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/painel/produtos" className="rounded-lg bg-slate-100 px-3 py-2">Gerenciar produtos</Link>
          <Link href="/catalogo" className="rounded-lg bg-slate-100 px-3 py-2">Abrir catálogo público</Link>
          <Link href="/promocoes" className="rounded-lg bg-slate-100 px-3 py-2">Ver promoções</Link>
        </div>
      </div>
    </div>
  );
}
