import express from 'express';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequestSchema, ListToolsRequestSchema, ListResourcesRequestSchema, ReadResourceRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, GNOSIS_TOOL } from './core.js';
import { GLOSARIO_TOOL, consultarGlosario } from './glossary.js';
import { MERMAID_TOOL, procesarMermaidTool } from './tools/mermaidVisualizer.js';
import { PATHOLOGY_TOOL, processPathologyAnalysis } from './tools/PathologyTool.js';
import { GNOSIS_RESOURCES, FRAMEWORK_RESOURCE_CONTENT } from './prompts_v4.js';
import { logger } from './logger.js';
import { createCulturalPathologist } from './diagnosticators/index.js';

// ============================================================================
// GNOSIS MCP v4.0 - HTTP Server (SSE Transport)
// Multi-Layer Cultural Diagnostic Engine (OOP Architecture)
// ============================================================================

const app = express();
app.use(express.json());

// --- Server statistics ---
const stats = {
  startTime: new Date().toISOString(),
  totalSessions: 0,
  totalOperations: 0,
  operationsByTool: {} as Record<string, number>,
  diagnosticsByLayer: { layer2: 0, layer3: 0 } as Record<string, number>
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    name: 'gnosis-mcp',
    version: '4.0.0',
    architecture: 'OOP Multi-Layer',
    framework: 'Philosophical Materialism',
    uptime: Math.floor((Date.now() - new Date(stats.startTime).getTime()) / 1000) + 's'
  });
});

// Info endpoint
app.get('/info', (req, res) => {
  const pathologist = createCulturalPathologist();
  const diagnosticators = pathologist.getDiagnosticators();

  res.json({
    name: 'GNOSIS MCP',
    version: '4.0.0',
    description: 'Multi-Layer Cultural Diagnostic Engine based on Philosophical Materialism',
    architecture: 'Object-Oriented Programming (OOP)',
    layers: {
      layer1: {
        name: 'Philosophical Materialism',
        authorities: ['Gustavo Bueno', 'Jesús G. Maestro', 'Santiago Armesilla'],
        function: 'Logical validation, Categorical Closure, Ontology (M1/M2/M3)'
      },
      layer2: {
        name: 'Cultural Diagnosis',
        authorities: diagnosticators.filter(d => d.layer === 2).map(d => d.name),
        count: diagnosticators.filter(d => d.layer === 2).length
      },
      layer3: {
        name: 'Emotional Economy',
        authorities: diagnosticators.filter(d => d.layer === 3).map(d => d.name),
        count: diagnosticators.filter(d => d.layer === 3).length
      }
    },
    diagnosticators: diagnosticators,
    tools: ['gnosis', 'gnosis_glosario', 'generate_symploke_graph', 'cultural_pathology_analysis'],
    materiality: ['M1 (Physical)', 'M2 (Psychological)', 'M3 (Logical)'],
    fallacies: ['descriptivism', 'theoreticism', 'adequationism']
  });
});

// Stats endpoint
app.get('/stats', (req, res) => {
  res.json({
    status: 'ok',
    ...stats,
    uptime: Math.floor((Date.now() - new Date(stats.startTime).getTime()) / 1000) + 's'
  });
});

// SSE endpoint for MCP
app.get('/mcp', async (req, res) => {
  logger.info('New SSE connection established');
  stats.totalSessions++;

  const transport = new SSEServerTransport('/mcp', res);

  const server = new Server(
    { name: "gnosis-mcp-http", version: "4.0.0" },
    { capabilities: { tools: {}, resources: {} } }
  );

  // New instance per connection (isolated state)
  const razonServer = new RazonLiterariaServer();

  // --- List Tools ---
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        GNOSIS_TOOL,
        GLOSARIO_TOOL,
        MERMAID_TOOL,
        PATHOLOGY_TOOL
      ]
    };
  });

  // --- List Resources ---
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
      resources: GNOSIS_RESOURCES
    };
  });

  // --- Read Resource ---
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const uri = request.params.uri;

    if (uri === "gnosis://framework") {
      return {
        contents: [{
          uri,
          mimeType: "text/markdown",
          text: FRAMEWORK_RESOURCE_CONTENT
        }]
      };
    }

    if (uri === "gnosis://diagnosticators") {
      const pathologist = createCulturalPathologist();
      return {
        contents: [{
          uri,
          mimeType: "application/json",
          text: JSON.stringify({
            version: "4.0.0",
            diagnosticators: pathologist.getDiagnosticators(),
            totalDiagnosticators: pathologist.getDiagnosticators().length,
            layers: {
              layer2: pathologist.getDiagnosticators().filter(d => d.layer === 2),
              layer3: pathologist.getDiagnosticators().filter(d => d.layer === 3)
            }
          }, null, 2)
        }]
      };
    }

    throw new Error(`Resource not found: ${uri}`);
  });

  // --- Call Tool ---
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Update stats
    stats.totalOperations++;
    stats.operationsByTool[name] = (stats.operationsByTool[name] || 0) + 1;

    logger.info(`Tool called: ${name}`, { data: args || {} });

    try {
      switch (name) {
        case 'gnosis':
          return razonServer.processThought(args || {});

        case 'gnosis_glosario':
          return consultarGlosario(args as any || {});

        case 'generate_symploke_graph':
          return procesarMermaidTool(args || {});

        case 'cultural_pathology_analysis':
          // Update layer stats
          const pathologyArgs = args as any;
          if (pathologyArgs?.mode === 'layer_diagnosis' && pathologyArgs?.layer) {
            stats.diagnosticsByLayer[`layer${pathologyArgs.layer}`] = (stats.diagnosticsByLayer[`layer${pathologyArgs.layer}`] || 0) + 1;
          }
          return processPathologyAnalysis(pathologyArgs || {});

        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    } catch (error: any) {
      logger.error('Tool execution error', { data: { tool: name, error: error.message } });
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ error: error.message }, null, 2)
        }],
        isError: true
      };
    }
  });

  await server.connect(transport);

  logger.info('MCP Server connected via SSE');

  // Handle cleanup
  req.on('close', () => {
    logger.info('SSE connection closed');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`GNOSIS MCP v4.0 HTTP Server listening on port ${PORT}`);
  logger.info(`SSE endpoint: http://localhost:${PORT}/mcp`);
  logger.info(`Health check: http://localhost:${PORT}/health`);
  logger.info(`Info: http://localhost:${PORT}/info`);
  logger.info(`Stats: http://localhost:${PORT}/stats`);
});
