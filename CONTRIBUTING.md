# Contributing

Fico feliz pelo seu interesse em contribuir com o projeto! Toda ajuda é bem-vinda.
Se você estiver fazendo uma alteração significativa, abra um issue antes de criar um pull request. Isso me permitirá discutir o design e a implementação.

Verifique se sua solicitação é significativa e se você testou o aplicativo localmente antes de enviar uma solicitação de pull.

## Installing Requirements
### Requisitos
 - JavaScript
 - Vite
 - React
 - Axios
 - TailwindCSS 4.1+
 - NodeJS

## Como contribuir

*   **Reportando Bugs:** Se encontrar um problema, me avise.
*   **Sugerindo Melhorias:** Tem uma ideia para uma nova funcionalidade? Adoraria ouvir a sua sugestão.
*   **Enviando Pull Requests:** Se você quer corrigir um bug ou implementar uma funcionalidade.

### Reportando Bugs

Antes de criar um novo bug report, por favor, [verifique se já não existe um](https://github.com/StricterBot/pick-a-movie/issues) sobre o mesmo problema.

Se não houver, crie uma nova *issue* e inclua o máximo de detalhes possível:

*   Um título claro e descritivo.
*   Passos para reproduzir o bug.
*   Qual era o comportamento esperado.
*   Qual foi o comportamento real (o que aconteceu de errado).
*   Screenshots ou GIFs, se possível.

### Sugerindo Melhorias

Para sugerir uma melhoria ou uma nova funcionalidade, [crie uma nova *issue*](https://github.com/StricterBot/Ppick-a-movie/issues/new/choose) com a label `enhancement`.

Descreva sua ideia em detalhes:

*   **Qual o seu objetivo?** Explique o problema que sua sugestão resolve.
*   **Qual a sua solução?** Descreva como a funcionalidade deveria funcionar.
*   **Contexto Adicional:** Qualquer outra informação que possa nos ajudar a entender sua sugestão.

## Start Here
### Preparando o Ambiente

1.  **Faça um Fork** do projeto clicando no botão "Fork" no canto superior direito da página do repositório.
2.  **Clone o seu fork** para sua máquina local:
    ```bash
    git clone https://github.com/StricterBot/pick-a-movie.git
    cd pick-a-movie
    ```
3.  **Crie uma nova branch** para sua contribuição. Use um nome descritivo.
    ```bash
    # Para uma nova funcionalidade
    git checkout -b feat/nome-da-funcionalidade

    # Para uma correção de bug
    git checkout -b fix/descricao-do-bug
    ```
4.  **Instale as dependências** do frontend e do backend.
    ```bash
    # Na pasta raiz, instale as dependências do backend (assumindo que existe uma pasta 'server')
    cd server
    npm install

    # Em outra aba do terminal, instale as do frontend
    cd ../client
    npm install
    ```
    > **Observação:** As instruções acima assumem uma estrutura com pastas `client` e `server`. Ajuste conforme necessário.
5. **Adicione seu .env** no /server para vincular seu Token do TMDB e poder usar a API.
    ```.env
    TMDB_API_KEY=SUA_API_KEY_AQUI
    PORT=3001
    ```
6. **Você ainda pode rodar tudo unificado.** Note que existe um `package.json` na raiz do projeto com `concurrently` de dependência. Você pode rodar o frontend e o backend com um comando:
    ```bash
    npm run start:dev

    # Você deve ver o server rodando na porta 3001. E acessar o site em http://localhost:5173/
    # Para encerrar basta apertar CTRL+C.
    ```

### Fazendo as Alterações

1.  **Escreva seu código!**
2.  **Siga o Estilo de Código:** O projeto usa ESLint para manter a consistência do código. Antes de commitar, rode o linter para checar por problemas.
    ```bash
    # Na pasta client ou server, dependendo de onde fez a alteração
    npm run lint
    ```
3.  **Faça Commits claros:** Use mensagens de commit que expliquem bem o que você fez. Seguir o padrão de Conventional Commits é uma ótima prática.
    *   **Exemplo de commit para feature:** `feat: Adiciona filtro de gênero de filmes`
    *   **Exemplo de commit para bugfix:** `fix: Corrige crash ao receber filme sem pôster`

### Enviando o Pull Request

1.  **Envie suas alterações** para o seu repositório no GitHub:
    ```bash
    git push origin feat/nome-da-funcionalidade
    ```
2.  **Abra um Pull Request (PR)** na página do seu fork no GitHub.
3.  **Descreva seu PR:** Preencha o template do Pull Request com uma descrição clara das suas alterações e, se aplicável, vincule a *issue* correspondente (ex: `Resolves #123`).

Depois de enviado, irei revisar seu PR. Posso sugerir algumas alterações ou aprovar e fazer o merge.

---

Obrigado por contribuir! ❤️