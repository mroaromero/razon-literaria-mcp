# ============================================================================
# GNOSIS MCP - Dockerfile
# Servidor de Construcción Gnoseológica - Materialismo Filosófico
# ============================================================================

# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar código fuente y config
COPY tsconfig.json .
COPY src ./src

# Compilar TypeScript
RUN npm run build

# ============================================================================
# Etapa de producción
# ============================================================================
FROM node:18-alpine

WORKDIR /app

# Metadatos
LABEL name="gnosis-mcp"
LABEL version="2.0.0"
LABEL description="Servidor MCP de Construcción Gnoseológica"
LABEL maintainer="Materialismo Filosófico"

# Copiar solo lo necesario
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json* ./

# Instalar solo dependencias de producción
RUN npm ci --production && npm cache clean --force

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Exponer puerto
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Comando de inicio (HTTP server para Smithery)
CMD ["node", "dist/server.js"]
