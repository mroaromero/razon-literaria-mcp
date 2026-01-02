#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, GNOSIS_TOOL } from './core.js';
import { logger } from './logger.js';

// ============================================================================
// GNOSIS MCP - CLI (Stdio Transport)
// Servidor de Construcción Gnoseológica - Materialismo Filosófico
// ============================================================================

const server = new Server(
  { 
    name: "gnosis-mcp", 
    version: "2.0.0" 
  },
  { 
    capabilities: { 
      tools: {} 
    } 
  }
);

// Instancia del servidor gnoseológico
const gnosisBackend = new RazonLiterariaServer();

// Registro de herramientas disponibles
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [GNOSIS_TOOL]
}));

// Manejo de llamadas a herramientas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === "gnosis" || name === "razon_literaria") {
    return gnosisBackend.processThought(args);
  }
  
  throw new Error(`Herramienta desconocida: ${name}. Usa 'gnosis'.`);
});

// Conexión vía Stdio
const transport = new StdioServerTransport();

server.connect(transport).catch((error) => {
  logger.error("Error fatal en GNOSIS MCP", { data: { error: String(error) } });
  process.exit(1);
});

logger.banner('GNOSIS MCP', '2.0.0', 'cli');
