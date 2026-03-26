# RaizLocal

Aplicação web em Next.js para pequenos varejistas criarem catálogo digital, controlar estoque simples e receber contatos de clientes.

## Rodando localmente (modo app/site)

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Gerar versão estática (com `index.html`)

```bash
npm run build
```

Com a configuração de export estático, o build gera `out/index.html` para publicar como site estático.

## Arquivo `index.html` na raiz

Existe um `index.html` de compatibilidade na raiz do projeto para abrir/redirecionar rapidamente para `http://localhost:3000` durante desenvolvimento local.

## Rotas principais

- `/` landing page
- `/login` acesso mockado
- `/painel` dashboard do lojista
- `/painel/produtos` gestão de produtos
- `/catalogo` catálogo público
- `/catalogo/produto/[id]` página de produto
- `/promocoes` promoções ativas
