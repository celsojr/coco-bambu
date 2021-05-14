# Frontend (em Angular)

Frontend da aplicação usando o Angular 11.0.9

## Development server

Execute `npm start` em ambiente de desenvolvimento. Isso irá abrir `http://localhost:4200/` no seu navegador padrão. O app vai atualizar automaticamente se você alterar qualquer um dos arquivos fonte.

Ou você pode executar `npm run dev-server`. Isso irá levantar o frontend e a API juntas. Abra `http://localhost:4200/` para acessar a aplicação.

## Build

Execute `ng build` para buildar o projeto. Os artefatos de build serão armazenados no diretório `dist /`. Use a flag `--prod` para um build de produção. Além disso, o SSR está habilitado (renderização do lado do servidor) para um primeiro carregamento rápido da IU em produção.

### Dockerfile Production

```dockerfile
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
COPY --from=builder /app/dist/frontend /app

WORKDIR /app
# Exponha a porta em que o app é executado
EXPOSE 4000

CMD ["node", "server/main.js"]

```

## Mais informações

Para obter mais ajuda sobre o CLI do Angular, use `ng help` ou confira o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
