'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="mx-auto grid min-h-screen max-w-md place-content-center p-6">
      <div className="card w-full min-w-80">
        <h1 className="text-2xl font-bold">Acesso ao RaizLocal</h1>
        <p className="mb-4 mt-1 text-sm text-slate-600">Entre para gerenciar produtos e promoções da sua loja.</p>
        <div className="grid gap-3">
          <Input placeholder="E-mail da loja" />
          <Input placeholder="Senha" type="password" />
          <Button onClick={() => router.push('/painel')}>Entrar</Button>
          <Button variant="outline" onClick={() => router.push('/painel')}>Entrar em modo demonstração</Button>
        </div>
      </div>
    </main>
  );
}
