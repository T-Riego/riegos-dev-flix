# 🎬 Riegos-Dev Flix: Sua Plataforma de Filmes Interativa


Link para acessar : https://riegos-dev.netlify.app/

## ✨ Uma Jornada de Aprendizado no Desenvolvimento Front-end

O **Riegos-Dev Flix** é um projeto desenvolvido como um marco fundamental em meu aprendizado com React, construído a partir das valiosas aulas do curso de React da Udemy. Este projeto não apenas solidificou conceitos essenciais do desenvolvimento front-end, mas também me desafiou a implementar funcionalidades robustas e uma experiência de usuário intuitiva.

## 🚀 Tecnologias e Ferramentas

Este projeto foi construído utilizando um conjunto de tecnologias modernas e amplamente utilizadas no mercado, garantindo performance e escalabilidade:

* **React:** Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.
* **React Router DOM:** Gerenciamento de rotas para navegação SPA (Single Page Application), garantindo transições fluidas entre as páginas de filmes, detalhes e favoritos.
* **Axios:** Cliente HTTP baseado em Promises, utilizado para realizar requisições assíncronas à API de filmes, otimizando o consumo de dados e a performance.
* **HTML5 & CSS3:** Fundamentos para a estrutura semântica e estilização completa do layout, com foco em responsividade.
* **React Toastify:** Biblioteca para notificações Toast, aprimorando o feedback visual e a experiência do usuário em ações como salvar um filme.

---

## 🎨 UI/UX: Design e Experiência do Usuário

A experiência do usuário e a interface visual foram pontos chave no desenvolvimento do Riegos-Dev Flix:

* **Design Responsivo:** O layout foi cuidadosamente desenvolvido para se adaptar a diferentes tamanhos de tela (desktops, tablets e smartphones), garantindo uma experiência consistente e agradável em qualquer dispositivo.
* **Estilização Customizada:** Utilização de CSS puro para criar uma identidade visual atraente e alinhada com o tema de filmes, com cores vibrantes e uma tipografia legível.
* **Feedback ao Usuário:** Implementação de `React Toastify` para fornecer notificações claras e visuais sobre ações do usuário (ex: "Filme salvo com sucesso!", "Erro ao carregar dados").

---

## 💡 Funcionalidades Principais

Explore as interações e recursos que o Riegos-Dev Flix oferece:

* **Consumo Dinâmico de API:** Exibição de uma vasta coleção de filmes, obtidos em tempo real através de requisições eficientes (Axios) a uma API externa.
* **Navegação Assertiva:** Rotas bem definidas (`useNavigate`, `useParams`) que permitem uma navegação intuitiva entre:
    * **Página Inicial:** Listagem de filmes populares.
    * **Página de Detalhes do Filme:** Informações completas (sinopse, elenco, etc.) ao clicar em um filme.
    * **Página de Favoritos:** Lista de filmes marcados pelo usuário.
* **Visualização de Trailer:** Redirecionamento direto para o YouTube para assistir ao trailer do filme selecionado, utilizando o ID do vídeo.
* **Gerenciamento de Estado:** Utilização eficaz de `useState` para gerenciar o estado da aplicação e `useEffect` para lidar com efeitos colaterais (ex: carregamento de dados da API).
* **Sistema de Favoritos:** Funcionalidade para o usuário salvar e acessar seus filmes favoritos para visualização posterior.

---

## ⚙️ Como Rodar o Projeto Localmente

Para ter o Riegos-Dev Flix rodando em sua máquina, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/riegos-dev-flix.git](https://github.com/SEU_USUARIO/riegos-dev-flix.git)
    ```
    *Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub.*
2.  **Acesse o diretório do projeto:**
    ```bash
    cd riegos-dev-flix
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Configuração da API Key (se aplicável):**
    * Se o seu projeto usa uma API Key, crie um arquivo `.env` na raiz do projeto (na mesma pasta onde está o `package.json`).
    * Adicione sua chave de API nele, seguindo o formato que a API exige (ex: `REACT_APP_API_KEY=SUA_CHAVE_DA_API`).
    * *Seu arquivo `.env` deve ser ignorado pelo `.gitignore` para não expor sua chave.*
5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```

O projeto será aberto automaticamente no seu navegador padrão em `http://localhost:3000`.

---

## 🌐 Acesse o Riegos-Dev Flix Online!

Explore o projeto deployado e veja-o em ação:

[**Visitar Riegos-Dev Flix no Netlify**](https://riegos-dev-flix.netlify.app/)
---

## 🚀 Próximos Passos e Aprendizados Futuros

* **Testes:** Implementação de testes unitários e de integração para garantir a robustez do código.
* **Autenticação:** Adicionar funcionalidades de login/cadastro de usuários.
* **Otimização:** Explorar técnicas de otimização de performance e lazy loading.
* **Gerenciamento de Estado Global:** Considerar a utilização de bibliotecas como Redux ou Zustand para gerenciamento de estado mais complexo.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou quiser melhorar o projeto, sinta-se à vontade para abrir uma issue ou um Pull Request.

---

## ✉️ Contato

Tiago Riego Dias Ribeiro
* **Email:** [tiagoriegodevjobs@gmail.com] (mailto:tiagoriegodevjobs@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/tiagoriegodr](https://www.linkedin.com/in/tiagoriegodr)
* **Portfólio:** [https://riegos.dev](https://riegos.dev)
