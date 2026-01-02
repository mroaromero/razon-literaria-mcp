# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm install

# Copiamos código fuente y config
COPY tsconfig.json .
COPY src ./src

# Compilamos TypeScript a JavaScript
RUN npm run build

# Etapa de producción
FROM node:18-alpine

WORKDIR /app

# Copiamos solo lo necesario desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

# Instalamos solo dependencias de producción (más ligero)
RUN npm install --production

# Variables de entorno
ENV PORT=3000
EXPOSE 3000

# Comando de inicio
CMD ["node", "dist/server.js"]
