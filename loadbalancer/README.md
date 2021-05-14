# NGINX - loadbalancer Image

## nginx Dockerfile

```dockerfile
# Use a imagem Nginx padrão do Docker Hub
FROM nginx
# Copie o arquivo de configuração do diretório atual e cole
# dentro do contêiner para usá-lo como configuração padrão do Nginx.
COPY nginx.conf /etc/nginx/nginx.conf
# A porta 8080 do contêiner será exposta e, em seguida, mapeada para a porta
# 8080 de nossa máquina host via Compose. Assim poderemos
# acessar o servidor via localhost:8080 em nosso host.
EXPOSE 8000

# Inicie o Nginx quando o contêiner for provisionado.
CMD ["nginx", "-g", "daemon off;"]

```

### NGINX config

```
events {
   worker_connections 1024;
 }
http {
 upstream frontend {
   # Estas são referências aos nossos contêineres de back-end, facilitadas por
   # Compose, conforme definido em docker-compose.yml
   server angular:4000;
 }
 upstream backend {
   # Estas são referências aos nossos contêineres de back-end, facilitadas por
   # Compose, conforme definido em docker-compose.yml
   server express:3000;
 }


server {
   listen 8000;
   server_name frontend;
   server_name backend;

   location / {
      proxy_pass http://frontend;
      proxy_set_header Host $host;
   }
   location /api {
      proxy_pass http://backend;
      proxy_set_header Host $host;
   }
 }
}

```
