<h1 align="center">Site para Imobiliárias - Back-end</h1>

<p align="center">Neste repositório, possui todo o código da parte Back-end de um site desenvolvido para imobiliárias. Projeto realizado com os conhecimentos adquiridos em aula.</p>

## 🚀 Instalação

1. Antes de tudo, tenha certeza que o DB PostgreSQL, NodeJS e NPM estão instalados e configurados corretamente em seu computador;

2. Clone o repositório
  ```bash
  git clone git@github.com:josebauer/real-estate-website_backend.git
  ```

3. Instale as dependências do app:
   ```bash
   npm install
   ```

4. Crie um arquivo .env na pasta raiz do projeto:
   ```bash
   touch .env
   ```
   Nele coloque os seguintes dados:
   ```bash
   EMAIL_USER: seuemail@email.com
   EMAIL_PASS: senha
   ```
   O email informado será usado para enviar emails para os usuários, quando esquecerem a senha ou quando fizerem agendamentos de visitas a imóveis.

5. Rode as migrations para criar as tabelas do DB:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Rode os seeders para criar user Admin e criar imóveis e categorias:
   ```bash
   npx sequelize-cli db:seed:all
   ```

7. Rode o projeto:
   ```bash
   npm run dev
   ```
   
## ⚙️ Funcionalidades
- Gerenciamento da Imobiliária com cadastramento, atualização e exclusão de usuários, imóveis, categorias e agendamento de visitas pelo AdminJS;
- Endpoints da API para conexão com o front-end;
- Autenticação.

## 💻 Tecnologias Utilizadas
- JavaScript / TypeScript (Node.JS)
- PostgreSQL
- Sequelize
- AdminJS
- Express
- bcrypt
- Nodemailer
  
## ✒️ Autor
<p>
  <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/104539756?v=4"/>
  <p>&nbsp&nbsp&nbspJosé Henrique Bauer<br><br>
  &nbsp&nbsp&nbsp<a href="https://github.com/josebauer">GitHub</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/jose-henrique-bauer">LinkedIn</a>&nbsp;|&nbsp;<a href="https://josebauer.com.br">Portfólio</a>
  </p>
