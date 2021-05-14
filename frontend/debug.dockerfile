# Crie uma imagem com base oficialmente no 12.8-alpine
FROM node:14

#RUN echo "nameserver 8.8.8.8" |  tee /etc/resolv.conf > /dev/null
WORKDIR /app

# Copiando as dependências
COPY package.json package-lock.json ./

# Instalar e armazenar módulos do node em uma camada separada irá
# evitar instalações npm desnecessárias em cada docker build
RUN npm ci

# Obtenha todo o código necessário para executar o app
COPY . /app/

# Exponha as portas em que o app é executado
EXPOSE 4200 49153

#CMD ["npm", "start"]
# ENTRYPOINT ["/bin/bash", "-c", "if [ \"$ENABLE_POLLING\" = \"enabled\" ]; \
#   then npm run start:docker:poll; else npm run start:docker; fi"]
CMD [ "npm", "run", "start" ]
