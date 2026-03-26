import './globals.css';
import type { Metadata } from 'next';
import { StoreProvider } from '@/lib/store';

export const metadata: Metadata = {
  title: 'RaizLocal',
  description: 'Plataforma para pequenos varejistas venderem melhor.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
