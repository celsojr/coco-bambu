# Crie uma imagem com base oficialmente na imagem do node 10
FROM node:14.5-alpine as builder

# Copiando as dependências
COPY package.json package-lock.json ./

# Desabilitar ssl para o npm em Dev ou ao acessar via proxy
RUN npm set strict-ssl false

# Instalar e armazenar módulos do node em uma camada separada irá
# evitar instalações npm desnecessárias em cada docker build
RUN npm ci && mkdir /app && mv ./node_modules ./app

# Mude o diretório para que nossos comandos sejam executados dentro deste novo diretório
WORKDIR /app

# Obtenha todo o código necessário para executar o app
COPY . /app/

# Fazendo o build dos server side bundles
RUN npm run build:ssr

FROM node:14.5-alpine
## A partir do 'builder' copie a pasta publicada
COPY --from=builder /app /app

WORKDIR /app
# Exponha a porta em que o app é executado
EXPOSE 4000

CMD ["node", "dist/frontend/server/main.js"]
