# Pick a Movie for Me (Fala um Filme Ai)

![Badge de Status](https://img.shields.io/static/v1?label=type&message=personal%20project&color=blue&style=for-the-badge)

Este projeto surgiu da necessidade de apoio a uma tomada de decisão simples: Escolher um filme para assistir.
Com tantos serviços de streaming e tantos filmes sendo lançados, fica difícil saber o que assistir? Este projeto te ajuda! 

O "Fala um Filme Ai" é uma aplicação full-stack que sugere um filme aleatório para você, com a possibilidade de aplicar filtros para encontrar a sugestão perfeita.

<img width="600px" src="https://drive.google.com/uc?export=view&id=1MQOKS_9gNIuvypmySdoke-DkjTvkfk99">


## Funcionalidades

*   **Sugestão Aleatória:** Obtenha uma sugestão de filme com um único clique.
*   **Opções de Filtro:** Filtre por gênero, classificação indicativa, ano de lançamento, etc.
*   **Detalhes do Filme:** Visualize o pôster, a sinopse e a avaliação do filme sugerido.
*   **Arquitetura Segura:** A chave da API externa é protegida no backend, nunca sendo exposta no lado do cliente.

## Funcionalidades

A aplicação é dividida em duas partes principais: o **Frontend (Client)**, que é a interface com o usuário, e o **Backend (Server)**, que centraliza a lógica de negócio e a comunicação com serviços externos.

### Frontend (Client)

O frontend foi construído com uma stack moderna, focada em performance e experiência de desenvolvimento:

*   **React:** Para a construção da interface de usuário de forma declarativa e componentizada.
*   **Vite:** Como ferramenta de build, oferecendo um desenvolvimento local extremamente rápido com Hot Module Replacement (HMR).
*   **Tailwind CSS:** Para uma estilização ágil e customizável através de classes utilitárias.
*   **Axios:** Para realizar as chamadas HTTP para o nosso backend de forma simples e robusta.

O fluxo é simples: quando o usuário interage com a interface (ex: clica no botão "Recomende"), o React dispara uma requisição para o nosso backend.

### Backend (Server)

O backend foi desenhado seguindo o padrão **BFF (Backend for Frontend)**. Ele atua como uma camada intermediária inteligente entre o cliente e a API externa de filmes (como a do [The Movie Database - TMDB](https://www.themoviedb.org/)), trazendo mais segurança e eficiência.

#### Possiveis Futuras Implelementações

-  Classificação Indicativa por nota
-  Adicionar uma nova sub-categoria
-  Campo de texto para pesquisar titulos semelhantes ao informado
-  Preparar recomendações de onde assistir ao interagir com o card do filme

#### Como Funciona
**Processamento e Lógica:** O TMDB retorna uma lista, muitas vezes com dezenas de filmes e uma grande quantidade de dados para cada um. O backend então aplica a lógica principal:
    *   Seleciona **um filme aleatório** da lista recebida (Atualmente limitado a quatro páginas por recomendações).

**Formatação da Resposta:** Em vez de retornar todos os dados do filme escolhido, o backend filtra e formata um objeto de resposta simples, contendo apenas as informações que o frontend realmente precisa (ex: `title`, `overview`, `poster_path`, `vote_average`).

**Entrega ao Cliente:** O backend envia esse objeto simplificado de volta para o frontend, que o exibe na tela.

Essa arquitetura desacoplada garante que a lógica de negócio e as chaves de API estejam seguras, além de otimizar o tráfego de dados para o cliente.

## Tecnologias Utilizadas

[![JavaScript](https://custom-icon-badges.demolab.com/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://custom-icon-badges.demolab.com/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![Vite](https://custom-icon-badges.demolab.com/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Axios](https://custom-icon-badges.demolab.com/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=flat-square)](https://axios-http.com/)
[![Tailwind CSS](https://custom-icon-badges.demolab.com/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/-VS%20Code-007ACC?logo=visualstudiocode&logoColor=white&style=flat-square)](https://code.visualstudio.com/)
<br>**API Externa:** [The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started)

## Contribuindo

 Este projeto é pessoal e não tem fins lucrativos. Toda ajuda é bem-vinda.
 Por favor veja [CONTRIBUTING.md](https://github.com/StricterBot/pick-a-movie/blob/main/CONTRIBUTING.md) para detalhes.

---
### Sobre mim:
[![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/victor-moreira-4210b9358/)
[![GitHub](https://custom-icon-badges.demolab.com/badge/GitHub-181717?logo=github&logoColor=fff)](https://github.com/StricterBot)