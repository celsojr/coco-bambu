# Mongo Image

## Alimentando o Mongo DB com dados padrão

A inicialização do banco de dados do mongo db e dos dados é realizados através do `docker-entrypoint-initdb.d` e dos arquivos shell que se encontram na pasta correspondente.

Aqui, um exemplo de alimentação de um das tabelas do banco:

```bat
mongoimport --jsonArray --authenticationDatabase=admin \
   --username=$MONGO_INITDB_ROOT_USERNAME \
   --password=$MONGO_INITDB_ROOT_PASSWORD \
   --mode upsert \
   --host 127.0.0.1 \
   --db $MONGO_DB \
   --collection receitas \
   /docker-entrypoint-initdb.d/receitas.json
```

Neste outro exemplo são criadas as credenciais do admin. Tenha em mente que talvez seja necessário criar as credenciais por último para que não seja preciso logar com o admin para alimentar o banco de dados de forma automatizada.

```bat
#!/bin/bash
set -e

mongo <<EOF
use admin
db.createUser({
  user: '$MONGO_DB_USERNAME',
  pwd:  '$MONGO_DB_PASSWORD',
  roles: [
     { role: 'readWrite', db: '$MONGO_DB'}]
})
EOF
```
