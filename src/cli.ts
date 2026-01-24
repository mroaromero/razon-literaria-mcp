#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { 
  CallToolRequestSchema, 
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, GNOSIS_TOOL } from './core.js';
import { GLOSARIO_TOOL, consultarGlosario, GLOSARIO } from './glossary.js';
import { MERMAID_TOOL, procesarMermaidTool } from './tools/mermaidVisualizer.js';
import { GNOSIS_RESOURCES, GNOSIS_PROMPT } from './prompts.js';
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
      tools: {},
      resources: {}
    } 
  }
);

// Instancia del servidor gnoseológico
const gnosisBackend = new RazonLiterariaServer();

// Registro de herramientas disponibles
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [GNOSIS_TOOL, GLOSARIO_TOOL, MERMAID_TOOL]
}));

// Manejo de llamadas a herramientas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === "gnosis" || name === "razon_literaria") {
    return gnosisBackend.processThought(args);
  }
  
  if (name === "gnosis_glosario") {
    return consultarGlosario(args as any);
  }

  if (name === "generate_symploke_graph") {
    return procesarMermaidTool(args as any);
  }

  throw new Error(`Herramienta desconocida: ${name}. Herramientas disponibles: 'gnosis', 'gnosis_glosario', 'generate_symploke_graph'.`);
});

// Registro de recursos MCP
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: GNOSIS_RESOURCES
}));

// Lectura de recursos MCP
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;
  
  if (uri === 'gnosis://prompt/principal') {
    return {
      contents: [{
        uri,
        mimeType: 'text/plain',
        text: GNOSIS_PROMPT
      }]
    };
  }
  
  if (uri === 'gnosis://glosario/completo') {
    return {
      contents: [{
        uri,
        mimeType: 'application/json',
        text: JSON.stringify(GLOSARIO, null, 2)
      }]
    };
  }
  
  throw new Error(`Recurso no encontrado: ${uri}`);
});

// Conexión vía Stdio
const transport = new StdioServerTransport();

server.connect(transport).catch((error) => {
  logger.error("Error fatal en GNOSIS MCP", { data: { error: String(error) } });
  process.exit(1);
});

logger.banner('GNOSIS MCP', '2.0.0', 'cli');

