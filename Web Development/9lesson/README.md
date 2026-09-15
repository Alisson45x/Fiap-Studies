# Lição 9 — Listas, filtros e persistência

Projeto de contatos baseado na [aula de React](https://www.curso-webdev.com/?page=react-listas-filtros-deploy).

## Executar

Dentro de `Web Development/9lesson`:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra http://localhost:3000.

## Conteúdo aplicado

- Cadastro e exclusão com `useState`.
- `ContactForm`, `ContactList`, `ContactItem` e `FilterInput` separados.
- Lista com `map()` e `key` estável pelo ID.
- Busca por nome ou e-mail com `filter()`, ignorando maiúsculas.
- Leitura e gravação de `contatos` no `localStorage` com `useEffect`.
- Controle de carregamento para não apagar os contatos ao abrir a página.
- Detalhes em `/contact/[id]`, consultando o ID no armazenamento local.
- CSS puro, responsivo, com labels e foco visível para navegação por teclado.

Os contatos pertencem a este navegador e endereço. Não são compartilhados entre dispositivos; limpar os dados do site remove a lista. Falhas de armazenamento mostram uma mensagem.

## Verificar

```powershell
node --test app/lib/contacts.test.mjs
npm.cmd run lint
npm.cmd run build
```

Teste também: cadastre dois contatos, busque pelo nome e pelo e-mail, abra os detalhes, recarregue, volte e exclua um contato. A exclusão deve continuar após recarregar.

## Publicar na Vercel

1. Envie as alterações ao seu repositório GitHub quando quiser publicar.
2. Importe o repositório na Vercel.
3. Defina **Root Directory** como `Web Development/9lesson`.
4. Use o preset **Next.js** e o comando de build `npm run build`.
5. Mantenha o diretório de saída padrão do Next.js e clique em Deploy.

Este projeto mantém as versões instaladas e a rota dinâmica de detalhes. Não usa `output: 'export'` nem diretório `out`, pois os IDs são criados no navegador e não são conhecidos durante o build. A publicação deve usar o suporte nativo a Next.js.

A etapa acima é um guia; este trabalho não publica o site automaticamente.
