#!/usr/bin/env node
// ============================================================================
// GNOSIS MCP v4.0 - CLI Entry Point (Stdio Transport)
// Multi-Layer Cultural Diagnostic Engine - OOP Architecture
// ============================================================================

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
import { PATHOLOGY_TOOL, processPathologyAnalysis } from './tools/PathologyTool.js';
import { GNOSIS_RESOURCES, GNOSIS_PROMPT } from './prompts.js';
import { logger } from './logger.js';

// ============================================================================
// MCP Server Configuration
// ============================================================================

const server = new Server(
  {
    name: "gnosis-mcp",
    version: "4.0.0"
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// Gnoseological backend instance (Layer 1 - Philosophical Materialism)
const gnosisBackend = new RazonLiterariaServer();

// ============================================================================
// Tool Handlers
// ============================================================================

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    GNOSIS_TOOL,              // Layer 1: Gnoseological construction (24 tags)
    GLOSARIO_TOOL,            // Philosophical glossary (20 terms)
    MERMAID_TOOL,             // Symploké visualization
    PATHOLOGY_TOOL            // Layers 2-3: Cultural pathology analysis (v4.0 OOP)
  ]
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "gnosis":
      case "razon_literaria":
        return gnosisBackend.processThought(args);

      case "gnosis_glosario":
        return consultarGlosario(args as any);

      case "generate_symploke_graph":
        return procesarMermaidTool(args as any);

      case "cultural_pathology_analysis":
        // v4.0 OOP Architecture: Uses CulturalPathologist orchestrator
        return processPathologyAnalysis(args as any);

      default:
        throw new Error(
          `Unknown tool: ${name}. Available: 'gnosis', 'gnosis_glosario', 'generate_symploke_graph', 'cultural_pathology_analysis'.`
        );
    }
  } catch (error: any) {
    logger.error('Tool execution error', { data: { tool: name, error: error.message } });
    throw error;
  }
});

// ============================================================================
// Resource Handlers (MCP Resources)
// ============================================================================

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: GNOSIS_RESOURCES
}));

// Read resource by URI
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

  throw new Error(`Resource not found: ${uri}`);
});

// ============================================================================
// Server Startup
// ============================================================================

// Connect via Stdio transport
const transport = new StdioServerTransport();

server.connect(transport).catch((error) => {
  logger.error("Fatal error in GNOSIS MCP", { data: { error: String(error) } });
  process.exit(1);
});

// Log startup banner
logger.banner('GNOSIS MCP', '4.0.0', 'cli');
