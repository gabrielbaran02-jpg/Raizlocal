export type ProductCategory = 'Roupas' | 'Calçados' | 'Papelaria' | 'Acessórios' | 'Perfumaria' | 'Mercearia';

export type Product = {
  id: string;
  nome: string;
  descricao: string;
  categoria: ProductCategory;
  preco: number;
  precoPromocional?: number;
  estoque: number;
  imagem: string;
  destaque: boolean;
  ativo: boolean;
  visualizacoes: number;
};

export type Contact = {
  id: string;
  nomeCliente: string;
  produtoId: string;
  mensagem: string;
  data: string;
  status: 'Novo' | 'Em contato' | 'Fechado';
};
