#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, RAZON_TOOL } from './core.js';

// Inicialización del servidor MCP
const server = new Server(
  { name: "razon-literaria-cli", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// Instancia del cerebro
const razonBackend = new RazonLiterariaServer();

// Registro de herramientas
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [RAZON_TOOL]
}));

// Manejo de llamadas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "razon_literaria") {
    return razonBackend.processThought(request.params.arguments);
  }
  throw new Error(`Herramienta desconocida ${request.params.name}`);
});

// Conexión vía Stdio
const transport = new StdioServerTransport();
server.connect(transport).catch((error) => {
  console.error("Error fatal en el servidor CLI", error);
  process.exit(1);
});

console.error("Servidor Razón Literaria (CLI) iniciado. Esperando inputs...");
