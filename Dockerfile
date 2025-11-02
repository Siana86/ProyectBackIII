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

