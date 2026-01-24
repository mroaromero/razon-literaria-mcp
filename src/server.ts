import express from 'express';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, GNOSIS_TOOL } from './core.js';
import { GLOSARIO_TOOL, consultarGlosario } from './glossary.js';
import { MERMAID_TOOL, procesarMermaidTool } from './tools/mermaidVisualizer.js';
import { CULTURAL_PATHOLOGY_TOOL, procesarCulturalPathology } from './tools/culturalPathologyTool.js';
import { logger } from './logger.js';

// ============================================================================
// GNOSIS MCP - HTTP Server (SSE Transport)
// Servidor de Construcción Gnoseológica - Materialismo Filosófico
// ============================================================================

const app = express();
app.use(express.json());

// --- Estadísticas del servidor ---
const stats = {
  startTime: new Date().toISOString(),
  totalSessions: 0,
  totalOperations: 0,
  operationsByTag: {} as Record<string, number>,
  falaciasImpugnadas: {
    descriptivismo: 0,
    teoreticismo: 0,
    adecuacionismo: 0
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    name: 'gnosis-mcp',
    version: '2.0.0',
    framework: 'Materialismo Filosófico',
    uptime: Math.floor((Date.now() - new Date(stats.startTime).getTime()) / 1000) + 's'
  });
});

// Info endpoint
app.get('/info', (req, res) => {
  res.json({
    name: 'GNOSIS MCP',
    version: '3.0.0',
    description: 'Servidor de Construcción Gnoseológica basado en el Materialismo Filosófico',
    authors: ['Gustavo Bueno', 'Jesús G. Maestro'],
    domains: 8,
    tags: 26,  // Updated: 24 + 2 new (criticar, ejemplificar)
    falacias: ['descriptivismo', 'teoreticismo', 'adecuacionismo'],
    materialidad: ['M1 (físico)', 'M2 (psíquico)', 'M3 (lógico)'],
    tools: ['gnosis', 'gnosis_glosario', 'generate_symploke_graph', 'cultural_pathology_analysis'],
    flujo: 'comenzar → terminar → relacionar → fenomenizar → referenciar → esenciar → definir/clasificar/demostrar/modelar → impugnar → criticar → ejemplificar → conjugar → dialectizar → verificar → cerrar → transducir'
  });
});

// Stats endpoint (new)
app.get('/stats', (req, res) => {
  res.json({
    status: 'ok',
    ...stats,
    uptime: Math.floor((Date.now() - new Date(stats.startTime).getTime()) / 1000) + 's'
  });
});

// SSE endpoint para MCP
app.get('/mcp', async (req, res) => {
  logger.info('Nueva conexión SSE establecida');
  stats.totalSessions++;
  
  const transport = new SSEServerTransport('/mcp', res);
  
  const server = new Server(
    { name: "gnosis-mcp-http", version: "3.0.0" },
    { capabilities: { tools: {} } }
  );
  
  // Nueva instancia por conexión (estado aislado)
  const gnosisBackend = new RazonLiterariaServer();

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [GNOSIS_TOOL, GLOSARIO_TOOL, MERMAID_TOOL, CULTURAL_PATHOLOGY_TOOL]
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    
    if (name === "gnosis" || name === "razon_literaria") {
      stats.totalOperations++;
      const tag = (args as any).tag;
      stats.operationsByTag[tag] = (stats.operationsByTag[tag] || 0) + 1;
      
      // Track falacias
      if (tag === 'impugnar' && (args as any).falacia) {
        const falacia = (args as any).falacia as keyof typeof stats.falaciasImpugnadas;
        if (stats.falaciasImpugnadas[falacia] !== undefined) {
          stats.falaciasImpugnadas[falacia]++;
        }
      }
      
      return gnosisBackend.processThought(args);
    }
    
    if (name === "gnosis_glosario") {
      return consultarGlosario(args as any);
    }

    if (name === "generate_symploke_graph") {
      return procesarMermaidTool(args as any);
    }

    if (name === "cultural_pathology_analysis") {
      return procesarCulturalPathology(args as any);
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
  logger.banner('GNOSIS MCP', '3.0.0', 'http', Number(PORT));
  logger.info('Endpoints disponibles', {
    data: {
      health: 'GET /health',
      info: 'GET /info',
      stats: 'GET /stats',
      sse: 'GET /mcp',
      messages: 'POST /mcp'
    }
  });
});

