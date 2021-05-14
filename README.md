# Coco Bambu Restaurante

Um projeto fullstack desenvolvido em MEAN Stack (MongoDB - Express - Angular - NodeJS) + Docker.

## Como rodar esse projeto

Requisitos mínimos para rodar o projeto em ambiente de desenvolvimento de forma rápida:

1. Git
1. Docker
1. Docker Compose

```sh
git clone https://github.com/celsojr/coco-bambu.git

cd coco-bambu

docker-compose -f ./docker-compose.debug.yml up -d --build
```

A primeira execução pode demorar mais um pouco, mas as execuções seguintes serão mais rápidas. Aapós isso basta navegar até [http://localhost:4200](http://localhost:4200) e digitar as credenciais do usuário de testes:

- Usuário: `testeusername`
- Senha: `testesenha`

Também é possível cadastrar novos usuários em [http://localhost:4200/register](http://localhost:4200/register) de forma provisória.

Exemplo de chamada direta na API via `curl`:

```sh
curl -H "Authorization: Bearer ${TOKEN}" http://localhost:3000/api/receitas | jq
```

Exemplo de string de conexão com o banco de dados do MongoDB

```sh
# String de conexão com o banco de dados
mongodb+svr://admin-user:admin-password@localhost:27017
```

Exemplo de uma chamada agora usando o **MongoDB Playground** via extensão do **VS Code**:

```javascript
/** MongoDB Playground **/

// Banco de dados em questão / contexto
use("coco-bambu");

// Buscar um documento específico via id
db.getCollection("receitas").find({ _id: "609c1a6c1b14d85c97fb107e" });
```

## Desfazendo o ambiente de desenvolvimento

Liberando recursos após utilização fora de produção

```sh
# O docker libera os containers, as redes e os volumes com esse comando
# Além disso, tem um comando combinado para remover os arquivos gerados pelo MongoDB
# (é necessário senha de usuário admin do sistema)
docker-compose -f ./docker-compose.debug.yml down -v && sudo rm -rf ./mongo/db

# Apagar images docker não usadas (sem tag) após os builds
docker image prune
```
