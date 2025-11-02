# Versión
FROM node:20.11.0

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalar dependencias definidas en package.json
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY ./src ./src

# Exponer puerto
EXPOSE 3000 

# Comando para iniciar la aplicación
CMD ["npm", "start"]

#Se crea la imagen con: docker build -t nombre-imagen .
#Para ver las imagenes: docker images
#Se corre el contenedor con: docker run -p 3000:3000 nombre-imagen
#listar contenedores corriendo: docker ps
# docker run -d -p 8080:3000 --name app-tesback1-contenedor app-tesback1 para correr en segundo plano
