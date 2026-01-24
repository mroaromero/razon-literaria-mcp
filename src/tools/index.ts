// ============================================================================
// HERRAMIENTAS MCP: Exportaciones centralizadas
// ============================================================================

export { MERMAID_TOOL, procesarMermaidTool, MermaidVisualizer } from './mermaidVisualizer.js';

// Re-exportar herramientas del core (gnosis, glosario)
export { GNOSIS_TOOL, RAZON_TOOL, RazonLiterariaServer, GnosisServer } from '../core.js';
export { GLOSARIO_TOOL, consultarGlosario, GLOSARIO, TERMINOS_GLOSARIO } from '../glossary.js';
