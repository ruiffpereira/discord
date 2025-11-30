# Dockerfile para Node.js Discord Bot
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install --production

# Copiar o resto do código
COPY . .

# Expor porta (opcional, bots normalmente não precisam)
# EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
