# Use a imagem Nginx padrão do Docker Hub
FROM nginx
# Copie o arquivo de configuração do diretório atual e cole
# dentro do contêiner para usá-lo como configuração padrão do Nginx.
COPY nginx.conf /etc/nginx/nginx.conf
# A porta 8080 do contêiner será exposta e, em seguida, mapeada para a porta
# 8080 de nossa máquina host via Compose. Assim poderemos
# acessar o servidor via localhost:8080 em nosso host.
EXPOSE 80

# Inicie o Nginx quando o contêiner for provisionado.
CMD ["nginx", "-g", "daemon off;"]
