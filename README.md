# Rest API Typescript

App para gestão de bibliotecas

## Iniciando o Projeto

Clone esse repositório com o comando:

```bash
git clone git@github.com:devfelipesantiago/Api-Rest-Typescript.git
```

Entre no diretório raiz:

```bash
cd rest-api-typescript
```

Instale as dependências do projeto:

```bash
npm install
```

Inicie os containers do banco de dados e backend:

```bash
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3001`.

Também é possível ver os logs da aplicação com o comando:

```bash
docker logs -f rest_api
```

### Rodando os testes unitários

```bash
npm test
```

> Nota: O comando pode ser rodado tanto fora quanto dentro do container Docker.
