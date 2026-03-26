'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const links = [
  { href: '/painel', label: 'Dashboard' },
  { href: '/painel/produtos', label: 'Produtos' },
  { href: '/painel/estoque', label: 'Estoque' },
  { href: '/painel/contatos', label: 'Contatos' },
  { href: '/painel/relatorios', label: 'Relatórios' },
  { href: '/painel/ajuda', label: 'Ajuda' }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 p-4 md:flex-row">
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-4 md:w-56">
        <p className="text-lg font-bold text-brand-700">RaizLocal</p>
        <p className="mb-4 text-xs text-slate-500">Painel do lojista</p>
        <nav className="grid gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm',
                pathname === link.href ? 'bg-brand-50 font-semibold text-brand-700' : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
