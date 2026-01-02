import express from 'express';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, GNOSIS_TOOL } from './core.js';

// ============================================================================
// GNOSIS MCP - HTTP Server (SSE Transport)
// Servidor de Construcción Gnoseológica - Materialismo Filosófico
// ============================================================================

const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    name: 'gnosis-mcp',
    version: '2.0.0',
    framework: 'Materialismo Filosófico'
  });
});

// Info endpoint
app.get('/info', (req, res) => {
  res.json({
    name: 'GNOSIS MCP',
    version: '2.0.0',
    description: 'Servidor de Construcción Gnoseológica basado en el Materialismo Filosófico',
    authors: ['Gustavo Bueno', 'Jesús G. Maestro'],
    domains: 8,
    tags: 24,
    falacias: ['descriptivismo', 'teoreticismo', 'adecuacionismo'],
    materialidad: ['M1 (físico)', 'M2 (psíquico)', 'M3 (lógico)'],
    flujo: 'comenzar → terminar → relacionar → fenomenizar → referenciar → esenciar → definir/clasificar/demostrar/modelar → impugnar → conjugar → dialectizar → verificar → cerrar → transducir'
  });
});

// SSE endpoint para MCP
app.get('/mcp', async (req, res) => {
  console.log('Nueva conexión SSE establecida');
  
  const transport = new SSEServerTransport('/mcp', res);
  
  const server = new Server(
    { name: "gnosis-mcp-http", version: "2.0.0" },
    { capabilities: { tools: {} } }
  );
  
  // Nueva instancia por conexión (estado aislado)
  const gnosisBackend = new RazonLiterariaServer();

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [GNOSIS_TOOL]
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    
    if (name === "gnosis" || name === "razon_literaria") {
      return gnosisBackend.processThought(args);
    }
    
    throw new Error(`Herramienta desconocida: ${name}`);
  });

  await server.connect(transport);
});

// POST endpoint para mensajes
app.post('/mcp', async (req, res) => {
  const transport = new SSEServerTransport('/mcp', res);
  await transport.handlePostMessage(req, res);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  GNOSIS MCP v2.0.0 - HTTP Server                             ║
║  Materialismo Filosófico de Gustavo Bueno                    ║
╠══════════════════════════════════════════════════════════════╣
║  Endpoints:                                                  ║
║    GET  /health  - Health check                              ║
║    GET  /info    - Información del servidor                  ║
║    GET  /mcp     - SSE connection                            ║
║    POST /mcp     - MCP messages                              ║
╠══════════════════════════════════════════════════════════════╣
║  Puerto: ${PORT}                                                 ║
╚══════════════════════════════════════════════════════════════╝
  `);
});
