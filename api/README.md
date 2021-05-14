# Api (Node.js + Express.js) 

Esse projeto contain o Backend API em express.js

## Development server

Execute `npm run dev-server` para iniciar o servidor da API em modo de desenvolvimento (usando o nodemon).
### Dockerfile Production

```dockerfile
FROM node:12.8-alpine

# Copiando as dependências
COPY package.json package-lock.json ./

# Desabilitar ssl para o npm em Dev ou ao acessar via proxy
RUN npm set strict-ssl false

# Instalar e armazenar módulos do node em uma camada separada irá
# evitar instalações npm desnecessárias em cada docker build
RUN npm i && mkdir /app && mv ./node_modules ./app

# Mude o diretório para que nossos comandos sejam executados dentro deste novo diretório
WORKDIR /app

# Obtenha todo o código necessário para executar o app
COPY . /app/

# Exponha a porta em que o app é executado
EXPOSE 3000

# Levante o app
CMD ["npm", "start"]

```
### Dockerfile Development
```dockerfile
# Crie uma imagem com base oficialmente no 12.8-alpine
FROM node:14

# Desabilitar ssl para o npm em Dev ou ao acessar via proxy
RUN npm set strict-ssl false

# Mude o diretório para que nossos comandos sejam executados dentro deste novo diretório
WORKDIR /api

# Copiando as dependências
COPY package.json ./

# Instalando os módulos do node
RUN npm i


COPY . .

# Exponha a porta em que o app é executado
EXPOSE 3000

# Levante o app
CMD [ "npm", "run", "dev-server" ]

```
