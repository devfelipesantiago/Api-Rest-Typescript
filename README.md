# Rest API Typescript

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

Uma API REST completa para gestão de bibliotecas, desenvolvida com boas práticas, testes automatizados e arquitetura em camadas.

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **[Node.js](https://nodejs.org/en/)**
*   **[TypeScript](https://www.typescriptlang.org/)**
*   **[Express](https://expressjs.com/)**
*   **[Sequelize](https://sequelize.org/)** (ORM)
*   **[MySQL](https://www.mysql.com/)**
*   **[Docker](https://www.docker.com/)** e **Docker Compose**
*   **[Mocha](https://mochajs.org/)**, **[Chai](https://www.chaijs.com/)** e **[Sinon](https://sinonjs.org/)** para Testes Unitários

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/) (Opcional, para rodar localmente sem Docker)

## Iniciando o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

**1. Clone o repositório:**
```bash
git clone git@github.com:devfelipesantiago/Api-Rest-Typescript.git
```

**2. Entre no diretório raiz do projeto:**
```bash
cd rest-api-typescript
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Inicie os containers (Banco de dados e Backend):**
```bash
docker-compose up -d
```

A aplicação estará disponível na porta `3001`. Você pode acessar a rota raiz em `http://localhost:3001/`.

Para acompanhar os logs da aplicação no Docker:
```bash
docker logs -f rest_api
```

## Comandos Úteis (Scripts)

O projeto possui vários scripts configurados no `package.json`:

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento com hot-reload. (Roda o `npm run db:reset` antes de iniciar).
- `npm start`: Inicia a aplicação.
- `npm run db:reset`: Recria e popula o banco de dados (Drop, Create, Migrate, Seed).
- `npm run lint`: Executa a verificação de linting no código usando ESLint.
- `npm test`: Roda os testes unitários da aplicação.
- `npm run test:coverage`: Roda os testes e exibe a cobertura de código (coverage) usando NYC.

> **Nota:** O comando de testes (`npm test`) pode ser rodado tanto fora quanto dentro do container Docker.

## Documentação da API

Abaixo estão os detalhes dos endpoints disponíveis na aplicação. A URL base é `http://localhost:3001`.

### Livros (`/books`)

Modelo de dados do Livro (Book):
- `id` (Inteiro, Autoincremento)
- `title` (String)
- `price` (Decimal)
- `author` (String)
- `isbn` (String)

| Método | Rota         | Descrição                            |
| :----- | :----------- | :----------------------------------- |
| `GET`  | `/books`     | Retorna a lista de todos os livros.  |
| `GET`  | `/books/:id` | Retorna os detalhes de um livro.     |
| `POST` | `/books`     | Cria um novo livro no sistema.       |
| `PUT`  | `/books/:id` | Atualiza os dados de um livro.       |
| `DELETE`| `/books/:id` | Remove um livro do sistema.          |

*(Nota: O projeto também contém a estrutura inicial para rotas de usuários (`/users`) em `routes/user.routes.ts`.)*

## Estrutura do Projeto

O projeto segue uma arquitetura baseada em camadas (MSC - Model, Service, Controller):

```
src/
├── controllers/    # Controladores da aplicação (Lidam com requisições e respostas)
├── database/       # Configurações do banco de dados (Migrations, Seeders, Config)
├── interfaces/     # Contratos e Tipagens TypeScript
├── middlewares/    # Middlewares do Express (Validações, Erros, etc)
├── models/         # Modelos de dados e interação com o Sequelize
├── routes/         # Definição das rotas da API
├── services/       # Regras de negócio da aplicação
├── utils/          # Funções utilitárias
├── App.ts          # Classe principal de configuração do Express
└── server.ts       # Ponto de entrada (Entrypoint) da aplicação
```
