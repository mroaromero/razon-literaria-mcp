# Razón Literaria MCP

Servidor MCP basado en el Materialismo Filosófico de la Escuela de Oviedo.

## Instalación y Compilación

```bash
npm install && npm run build
```

## Configuración Local (Claude Desktop)

Agrega esto a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "razon-literaria": {
      "command": "node",
      "args": [
        "c:/Users/Admin/Desktop/razon-literaria-mcp/dist/cli.js"
      ]
    }
  }
}
```

## Prueba de Fuego (Prompt)

Para verificar que el sistema opera bajo las coordenadas del Materialismo Filosófico, intenta este prompt:

> "Usa la herramienta razon_literaria con el tag 'desengaño' para analizar la siguiente afirmación: 'La democracia es el sistema político donde el pueblo es libre y feliz'."

El sistema debería responder demoliendo el mito de la felicidad política y la libertad idealista.
