'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatBRL } from '@/lib/format';

export default function ProdutoDetalhePage() {
  const { id } = useParams<{ id: string }>();
  const { products, addInterest } = useStore();
  const product = products.find((p) => p.id === id);
  const relacionados = useMemo(() => products.filter((p) => p.id !== id && p.categoria === product?.categoria).slice(0, 3), [products, id, product]);
  const [nomeCliente, setNomeCliente] = useState('');
  const [enviado, setEnviado] = useState(false);

  if (!product) return <main className="mx-auto max-w-4xl p-6"><div className="card">Produto não encontrado.</div></main>;

  const emPromo = !!product.precoPromocional && product.precoPromocional < product.preco;
  const economia = emPromo ? product.preco - product.precoPromocional! : 0;

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <img src={product.imagem} alt={product.nome} className="h-80 w-full rounded-2xl object-cover" />
        <section className="card">
          <h1 className="text-2xl font-bold">{product.nome}</h1>
          <p className="mt-2 text-slate-600">{product.descricao}</p>
          <p className="mt-3 text-sm">Status: <strong>{product.estoque > 0 ? 'Disponível' : 'Indisponível'}</strong></p>
          <div className="mt-4">
            {emPromo ? (
              <div>
                <p className="text-2xl font-bold text-brand-700">{formatBRL(product.precoPromocional!)}</p>
                <p className="text-sm text-slate-500 line-through">{formatBRL(product.preco)}</p>
                <p className="text-sm text-emerald-700">Economia de {formatBRL(economia)}</p>
              </div>
            ) : (
              <p className="text-2xl font-bold text-brand-700">{formatBRL(product.preco)}</p>
            )}
          </div>
          <div className="mt-4 grid gap-2">
            <Input placeholder="Seu nome" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
            <Button
              onClick={() => {
                if (!nomeCliente) return;
                addInterest({ nomeCliente, produtoId: product.id, mensagem: `Tenho interesse no produto ${product.nome}.` });
                setEnviado(true);
              }}
            >
              Tenho interesse
            </Button>
            <a
              href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Quero comprar ${product.nome}.`)}`}
              target="_blank"
              className="rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold"
            >
              Chamar no WhatsApp
            </a>
            {enviado && <p className="text-sm text-emerald-700">Interesse enviado com sucesso!</p>}
          </div>
        </section>
      </div>
      <section className="mt-8">
        <h2 className="mb-3 text-xl font-semibold">Produtos relacionados</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {relacionados.map((p) => (
            <Link key={p.id} href={`/catalogo/produto/${p.id}`} className="card">
              <p className="font-semibold">{p.nome}</p>
              <p className="text-sm text-slate-600">{formatBRL(p.precoPromocional ?? p.preco)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
