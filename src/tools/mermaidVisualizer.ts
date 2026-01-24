// ============================================================================
// VISUALIZADOR DE SYMPLOKÉ: Generador de diagramas Mermaid
// ============================================================================

import { Tool } from "@modelcontextprotocol/sdk/types.js";

/**
 * GENERADOR DE DIAGRAMAS MERMAID
 *
 * Visualiza la red de relaciones gnoseológicas según el principio de Symploké:
 * "Unos términos se relacionan con otros, pero NO con todos"
 */

export interface NodoSymploke {
  id: string;
  label: string;
  tipo: 'termino' | 'relacion' | 'operacion';
  materialidad?: 'M1' | 'M2' | 'M3';
}

export interface AristaSymploke {
  desde: string;
  hacia: string;
  etiqueta?: string;
}

export class MermaidVisualizer {
  /**
   * Generar diagrama de flujo Mermaid mostrando la trayectoria gnoseológica
   */
  public generarFlujoGnoseologico(
    nodos: NodoSymploke[],
    aristas: AristaSymploke[]
  ): string {
    const lineas: string[] = [];
    lineas.push('```mermaid');
    lineas.push('graph TD');
    lineas.push('');

    // Definir nodos con estilos según tipo
    nodos.forEach(nodo => {
      const estilo = this.obtenerEstiloNodo(nodo);
      lineas.push(`    ${nodo.id}["${nodo.label}"]${estilo}`);
    });

    lineas.push('');

    // Definir aristas
    aristas.forEach(arista => {
      const etiqueta = arista.etiqueta ? `|${arista.etiqueta}|` : '';
      lineas.push(`    ${arista.desde} -->${etiqueta} ${arista.hacia}`);
    });

    lineas.push('');

    // Estilos
    lineas.push('    classDef terminoClass fill:#4A90E2,stroke:#2E5C8A,stroke-width:2px,color:#fff');
    lineas.push('    classDef relacionClass fill:#50C878,stroke:#2E7D4E,stroke-width:2px,color:#fff');
    lineas.push('    classDef operacionClass fill:#E24A4A,stroke:#8A2E2E,stroke-width:2px,color:#fff');
    lineas.push('    classDef m1Class fill:#FFD700,stroke:#B8860B,stroke-width:3px,color:#000');
    lineas.push('    classDef m2Class fill:#DDA0DD,stroke:#8B008B,stroke-width:3px,color:#000');
    lineas.push('    classDef m3Class fill:#87CEEB,stroke:#4682B4,stroke-width:3px,color:#000');

    lineas.push('```');

    return lineas.join('\n');
  }

  /**
   * Generar diagrama simple de Agente → Operación → Material → Resultado
   */
  public generarDiagramaOperatorio(
    agente: string,
    operacion: string,
    material: string,
    resultado: string,
    transduccion?: string
  ): string {
    const lineas: string[] = [];
    lineas.push('```mermaid');
    lineas.push('graph LR');
    lineas.push('');
    lineas.push(`    A["🧑 ${agente}"]`);
    lineas.push(`    O["⚙️ ${operacion}"]`);
    lineas.push(`    M["📦 ${material}"]`);
    lineas.push(`    R["✨ ${resultado}"]`);

    if (transduccion) {
      lineas.push(`    T["🔄 ${transduccion}"]`);
    }

    lineas.push('');
    lineas.push('    A --> O');
    lineas.push('    O --> M');
    lineas.push('    M --> R');

    if (transduccion) {
      lineas.push('    R --> T');
      lineas.push('    T -.->|circularidad| A');
    }

    lineas.push('```');

    return lineas.join('\n');
  }

  /**
   * Generar diagrama de materialidades (M1, M2, M3)
   */
  public generarDiagramaMaterialidades(
    terminosM1: string[],
    terminosM2: string[],
    terminosM3: string[],
    relaciones: { desde: string; hacia: string; tipo: string }[]
  ): string {
    const lineas: string[] = [];
    lineas.push('```mermaid');
    lineas.push('graph TD');
    lineas.push('');

    // Subgraph M1
    if (terminosM1.length > 0) {
      lineas.push('    subgraph M1["M1: Físico-corpóreo"]');
      terminosM1.forEach((t, i) => {
        lineas.push(`        M1_${i}["${t}"]:::m1Class`);
      });
      lineas.push('    end');
      lineas.push('');
    }

    // Subgraph M2
    if (terminosM2.length > 0) {
      lineas.push('    subgraph M2["M2: Psicológico"]');
      terminosM2.forEach((t, i) => {
        lineas.push(`        M2_${i}["${t}"]:::m2Class`);
      });
      lineas.push('    end');
      lineas.push('');
    }

    // Subgraph M3
    if (terminosM3.length > 0) {
      lineas.push('    subgraph M3["M3: Lógico-abstracto"]');
      terminosM3.forEach((t, i) => {
        lineas.push(`        M3_${i}["${t}"]:::m3Class`);
      });
      lineas.push('    end');
      lineas.push('');
    }

    // Relaciones entre géneros
    relaciones.forEach(rel => {
      lineas.push(`    ${rel.desde} -->|${rel.tipo}| ${rel.hacia}`);
    });

    lineas.push('');
    lineas.push('    classDef m1Class fill:#FFD700,stroke:#B8860B,stroke-width:3px,color:#000');
    lineas.push('    classDef m2Class fill:#DDA0DD,stroke:#8B008B,stroke-width:3px,color:#000');
    lineas.push('    classDef m3Class fill:#87CEEB,stroke:#4682B4,stroke-width:3px,color:#000');
    lineas.push('```');

    return lineas.join('\n');
  }

  /**
   * Generar diagrama de falacias
   */
  public generarDiagramaFalacias(): string {
    return `\`\`\`mermaid
graph TD
    A["Componente Material α<br/>(Hechos, datos)"]
    B["Componente Formal β<br/>(Teoría, estructura)"]
    C["CIRCULARISMO<br/>α ↔ β"]

    D["❌ DESCRIPTIVISMO<br/>α sin β"]
    E["❌ TEORETICISMO<br/>β sin α"]
    F["❌ ADECUACIONISMO<br/>α + β"]

    A -.->|sin teoría| D
    B -.->|sin hechos| E
    A -.->|yuxtaposición| F
    B -.->|sin conjugar| F

    A -->|conjugación| C
    B -->|dialéctica| C

    style C fill:#50C878,stroke:#2E7D4E,stroke-width:3px,color:#fff
    style D fill:#E24A4A,stroke:#8A2E2E,stroke-width:2px,color:#fff
    style E fill:#E24A4A,stroke:#8A2E2E,stroke-width:2px,color:#fff
    style F fill:#E24A4A,stroke:#8A2E2E,stroke-width:2px,color:#fff
\`\`\``;
  }

  /**
   * Obtener estilo CSS para tipo de nodo
   */
  private obtenerEstiloNodo(nodo: NodoSymploke): string {
    if (nodo.materialidad) {
      switch (nodo.materialidad) {
        case 'M1': return ':::m1Class';
        case 'M2': return ':::m2Class';
        case 'M3': return ':::m3Class';
      }
    }

    switch (nodo.tipo) {
      case 'termino': return ':::terminoClass';
      case 'relacion': return ':::relacionClass';
      case 'operacion': return ':::operacionClass';
      default: return '';
    }
  }
}

/**
 * HERRAMIENTA MCP: generate_symploke_graph
 */
export const MERMAID_TOOL: Tool = {
  name: "generate_symploke_graph",
  description: `Genera un diagrama Mermaid.js que visualiza la red de relaciones gnoseológicas (Symploké).

TIPOS DE DIAGRAMAS:
- operatorio: Agente → Operación → Material → Resultado → Transducción
- materialidades: Visualiza términos en M1, M2, M3 y sus relaciones
- falacias: Diagrama del circularismo vs. las tres falacias
- flujo: Diagrama personalizado de nodos y aristas

El diagrama se puede copiar y renderizar en:
- GitHub (nativo)
- Notion
- Mermaid Live Editor (https://mermaid.live)`,

  inputSchema: {
    type: "object",
    properties: {
      tipo: {
        type: "string",
        enum: ["operatorio", "materialidades", "falacias", "flujo"],
        description: "Tipo de diagrama a generar"
      },
      // Para tipo 'operatorio'
      agente: {
        type: "string",
        description: "Agente operatorio (para tipo 'operatorio')"
      },
      operacion: {
        type: "string",
        description: "Operación realizada (para tipo 'operatorio')"
      },
      material: {
        type: "string",
        description: "Material sobre el que se opera (para tipo 'operatorio')"
      },
      resultado: {
        type: "string",
        description: "Resultado de la operación (para tipo 'operatorio')"
      },
      transduccion: {
        type: "string",
        description: "Transducción final (opcional, para tipo 'operatorio')"
      },
      // Para tipo 'materialidades'
      terminosM1: {
        type: "array",
        items: { type: "string" },
        description: "Términos M1 (para tipo 'materialidades')"
      },
      terminosM2: {
        type: "array",
        items: { type: "string" },
        description: "Términos M2 (para tipo 'materialidades')"
      },
      terminosM3: {
        type: "array",
        items: { type: "string" },
        description: "Términos M3 (para tipo 'materialidades')"
      },
      relaciones: {
        type: "array",
        items: {
          type: "object",
          properties: {
            desde: { type: "string" },
            hacia: { type: "string" },
            tipo: { type: "string" }
          }
        },
        description: "Relaciones entre términos (para tipo 'materialidades')"
      }
    },
    required: ["tipo"]
  }
};

/**
 * Procesador de la herramienta Mermaid
 */
export function procesarMermaidTool(input: any): { content: any[]; isError?: boolean } {
  const visualizer = new MermaidVisualizer();
  let diagram: string;

  try {
    switch (input.tipo) {
      case 'operatorio':
        if (!input.agente || !input.operacion || !input.material || !input.resultado) {
          throw new Error('Faltan parámetros obligatorios para diagrama operatorio');
        }
        diagram = visualizer.generarDiagramaOperatorio(
          input.agente,
          input.operacion,
          input.material,
          input.resultado,
          input.transduccion
        );
        break;

      case 'materialidades':
        diagram = visualizer.generarDiagramaMaterialidades(
          input.terminosM1 || [],
          input.terminosM2 || [],
          input.terminosM3 || [],
          input.relaciones || []
        );
        break;

      case 'falacias':
        diagram = visualizer.generarDiagramaFalacias();
        break;

      default:
        throw new Error(`Tipo de diagrama no soportado: ${input.tipo}`);
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          status: 'DIAGRAMA_GENERADO',
          tipo: input.tipo,
          mermaid: diagram,
          instruccion: 'Copia el código Mermaid y renderízalo en GitHub, Notion o https://mermaid.live'
        }, null, 2)
      }]
    };

  } catch (error: any) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          error: error.message,
          tipos_disponibles: ['operatorio', 'materialidades', 'falacias', 'flujo']
        }, null, 2)
      }],
      isError: true
    };
  }
}
