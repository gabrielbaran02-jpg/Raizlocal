'use client';

import { useStore } from '@/lib/store';

export default function ContatosPage() {
  const { contacts, products } = useStore();

  if (contacts.length === 0) {
    return <div className="card text-sm text-slate-600">Ainda não há contatos. Compartilhe o catálogo para começar a receber interesses.</div>;
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Contatos e interesses</h1>
      {contacts.map((contact) => (
        <div key={contact.id} className="card">
          <p className="font-semibold">{contact.nomeCliente}</p>
          <p className="text-sm text-slate-600">Produto: {products.find((p) => p.id === contact.produtoId)?.nome ?? 'Produto removido'}</p>
          <p className="text-sm text-slate-600">Mensagem: {contact.mensagem}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <span>{new Date(contact.data).toLocaleString('pt-BR')}</span>
            <span className="badge bg-brand-50 text-brand-700">{contact.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
