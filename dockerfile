# Usar una imagen de Node.js
FROM node:16

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos
COPY package*.json ./
COPY src ./src

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
