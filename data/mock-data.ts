import { Contact, Product } from '@/lib/types';

export const mockProducts: Product[] = [
  {
    id: 'camiseta-linho-azul',
    nome: 'Camiseta Linho Azul',
    descricao: 'Modelagem confortável, ideal para dia a dia.',
    categoria: 'Roupas',
    preco: 89.9,
    precoPromocional: 69.9,
    estoque: 14,
    imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    destaque: true,
    ativo: true,
    visualizacoes: 320
  },
  {
    id: 'tenis-urbano-branco',
    nome: 'Tênis Urbano Branco',
    descricao: 'Leve, respirável e com solado antiderrapante.',
    categoria: 'Calçados',
    preco: 249.9,
    estoque: 5,
    imagem: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    destaque: true,
    ativo: true,
    visualizacoes: 410
  },
  {
    id: 'kit-canetas-gel',
    nome: 'Kit Canetas Gel Neon',
    descricao: '10 cores vibrantes para escola e escritório.',
    categoria: 'Papelaria',
    preco: 29.9,
    estoque: 3,
    imagem: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d',
    destaque: false,
    ativo: true,
    visualizacoes: 180
  },
  {
    id: 'bolsa-transversal-mini',
    nome: 'Bolsa Transversal Mini',
    descricao: 'Compacta e elegante para uso diário.',
    categoria: 'Acessórios',
    preco: 139.9,
    precoPromocional: 109.9,
    estoque: 0,
    imagem: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    destaque: false,
    ativo: false,
    visualizacoes: 290
  },
  {
    id: 'body-splash-floral',
    nome: 'Body Splash Floral 200ml',
    descricao: 'Fragrância suave e refrescante.',
    categoria: 'Perfumaria',
    preco: 59.9,
    estoque: 21,
    imagem: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    destaque: true,
    ativo: true,
    visualizacoes: 260
  },
  {
    id: 'cafe-gourmet-500g',
    nome: 'Café Gourmet 500g',
    descricao: 'Torra média com notas de chocolate.',
    categoria: 'Mercearia',
    preco: 34.9,
    precoPromocional: 29.9,
    estoque: 11,
    imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    destaque: false,
    ativo: true,
    visualizacoes: 145
  }
];

export const mockContacts: Contact[] = [
  {
    id: '1',
    nomeCliente: 'Mariana Lopes',
    produtoId: 'tenis-urbano-branco',
    mensagem: 'Consegue separar no tamanho 37 até amanhã?',
    data: '2026-03-22T10:30:00.000Z',
    status: 'Novo'
  },
  {
    id: '2',
    nomeCliente: 'José Carlos',
    produtoId: 'camiseta-linho-azul',
    mensagem: 'Tem outra cor disponível?',
    data: '2026-03-21T16:00:00.000Z',
    status: 'Em contato'
  }
];
