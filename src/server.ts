import express from 'express';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { RazonLiterariaServer, RAZON_TOOL } from './core.js';

const app = express();

// Endpoint para SSE (Server-Sent Events)
app.get('/mcp', async (req, res) => {
  const transport = new SSEServerTransport('/mcp', res);
  
  const server = new Server(
    { name: "razon-literaria-http", version: "1.0.0" },
    { capabilities: { tools: {} } }
  );
  
  // Nueva instancia por cada conexión para mantener estado aislado
  const razonBackend = new RazonLiterariaServer();

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [RAZON_TOOL]
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "razon_literaria") {
      return razonBackend.processThought(request.params.arguments);
    }
    throw new Error("Herramienta desconocida");
  });

  await server.connect(transport);
});

// Endpoint para recibir mensajes POST del cliente
app.post('/mcp', async (req, res) => {
  // Nota: SSEServerTransport requiere 'res' en el constructor para SSE, 
  // pero para handlePostMessage en stateless mode, podemos instanciarlo temporalmente 
  // o manejarlo según la implementación del SDK. 
  // Sin embargo, la forma estándar en express es reutilizar la sesión o crear un transporte efímero.
  // Aquí asumimos que el SDK maneja el POST statelessly o via session ID.
  const transport = new SSEServerTransport('/mcp', res);
  await transport.handlePostMessage(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Razón Literaria HTTP escuchando en puerto ${PORT}`);
});
