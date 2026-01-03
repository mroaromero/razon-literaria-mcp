// ============================================================================
// GNOSIS MCP - Diccionario Filosófico
// ============================================================================

import { Tool } from "@modelcontextprotocol/sdk/types.js";

// Glosario de términos del Materialismo Filosófico
export const GLOSARIO: Record<string, { definicion: string; ejemplo?: string; ver_tambien?: string[] }> = {
  
  // --- Conceptos Fundamentales ---
  
  symploke: {
    definicion: 'Principio que establece que unos términos se relacionan con otros, pero NO con todos. Rechaza tanto el holismo ("todo está conectado con todo") como el atomismo ("nada está conectado").',
    ejemplo: 'La filosofía se relaciona con la ciencia, pero no con la cocina de la misma manera.',
    ver_tambien: ['holismo', 'atomismo']
  },
  
  cierre_categorial: {
    definicion: 'Proceso por el cual un campo científico alcanza autonomía gnoseológica cuando sus operaciones producen términos del mismo campo. El campo "cierra" sobre sí mismo.',
    ejemplo: 'La geometría cierra cuando la demostración de un teorema produce otro objeto geométrico.',
    ver_tambien: ['campo_categorial', 'termino']
  },
  
  campo_categorial: {
    definicion: 'Conjunto de términos, relaciones y operaciones que constituyen el dominio de una ciencia o disciplina.',
    ejemplo: 'El campo categorial de la física incluye masa, energía, fuerza, y sus relaciones.',
    ver_tambien: ['cierre_categorial']
  },
  
  transduccion: {
    definicion: 'Proceso de transformación por el cual el conocimiento transmitido se modifica al pasar por el sujeto operatorio. No es mera transmisión pasiva.',
    ejemplo: 'El alumno no "recibe" el teorema de Pitágoras, lo reconstruye operatoriamente.',
    ver_tambien: ['sujeto_operatorio']
  },
  
  // --- Géneros de Materialidad ---
  
  M1: {
    definicion: 'Primer género de materialidad: lo físico-corpóreo. Entidades con extensión, masa, energía.',
    ejemplo: 'Cuerpos humanos, dispositivos electrónicos, infraestructura física.',
    ver_tambien: ['M2', 'M3', 'materialidad']
  },
  
  M2: {
    definicion: 'Segundo género de materialidad: lo psicológico-subjetivo. Procesos mentales, emociones, vivencias.',
    ejemplo: 'La atención, el dolor, los recuerdos, las intenciones.',
    ver_tambien: ['M1', 'M3', 'materialidad']
  },
  
  M3: {
    definicion: 'Tercer género de materialidad: lo lógico-abstracto. Ideas, estructuras, instituciones, relaciones objetivas.',
    ejemplo: 'El teorema de Pitágoras, la institución del matrimonio, las leyes físicas.',
    ver_tambien: ['M1', 'M2', 'materialidad']
  },
  
  materialidad: {
    definicion: 'Condición ontológica de todo lo que existe. El ser, o es material, o no es. No hay "espíritu" inmaterial.',
    ejemplo: 'Las ideas (M3) son materiales aunque no sean corpóreas (M1).',
    ver_tambien: ['M1', 'M2', 'M3']
  },
  
  // --- Falacias Gnoseológicas ---
  
  descriptivismo: {
    definicion: 'Falacia que reduce la ciencia a la mera descripción de hechos (α) sin componente teórico (β). Fórmula: α sin β.',
    ejemplo: '"Los datos hablan por sí solos", "Solo presento los hechos".',
    ver_tambien: ['teoreticismo', 'adecuacionismo', 'circularismo']
  },
  
  teoreticismo: {
    definicion: 'Falacia que reduce la ciencia a teorías formales (β) sin conexión con hechos materiales (α). Fórmula: β sin α.',
    ejemplo: '"La teoría predice que...", "Matemáticamente se demuestra...".',
    ver_tambien: ['descriptivismo', 'adecuacionismo', 'circularismo']
  },
  
  adecuacionismo: {
    definicion: 'Falacia que yuxtapone hechos (α) y teoría (β) sin conjugarlos dialécticamente. Fórmula: α + β.',
    ejemplo: '"Por un lado... por otro lado...", "Existe tensión entre teoría y práctica".',
    ver_tambien: ['descriptivismo', 'teoreticismo', 'circularismo']
  },
  
  circularismo: {
    definicion: 'Posición correcta: conjugación dialéctica de materia (α) y forma (β). La teoría se construye desde los hechos y los hechos se interpretan desde la teoría.',
    ejemplo: 'El experimento refina la teoría, la teoría guía nuevos experimentos.',
    ver_tambien: ['descriptivismo', 'teoreticismo', 'adecuacionismo']
  },
  
  // --- Figuras Inmanentes ---
  
  definir: {
    definicion: 'Figura inmanente que construye un término desde otros términos. Notación: T < T.',
    ejemplo: 'Definir "cuadrado" como "rectángulo con lados iguales".',
    ver_tambien: ['clasificar', 'demostrar', 'modelar']
  },
  
  clasificar: {
    definicion: 'Figura inmanente que construye un término desde relaciones. Notación: T < R.',
    ejemplo: 'Clasificar ballenas como mamíferos por su relación con la lactancia.',
    ver_tambien: ['definir', 'demostrar', 'modelar']
  },
  
  demostrar: {
    definicion: 'Figura inmanente que construye una relación desde otras relaciones. Notación: R < R.',
    ejemplo: 'Demostrar un teorema a partir de axiomas y teoremas previos.',
    ver_tambien: ['definir', 'clasificar', 'modelar']
  },
  
  modelar: {
    definicion: 'Figura inmanente que construye una relación desde términos. Notación: R < T.',
    ejemplo: 'Modelar la relación F=ma a partir de mediciones de fuerza, masa y aceleración.',
    ver_tambien: ['definir', 'clasificar', 'demostrar']
  },
  
  // --- Otros Conceptos ---
  
  sujeto_operatorio: {
    definicion: 'El agente que ejecuta operaciones gnoseológicas. No es un sujeto pasivo que "recibe" conocimiento, sino activo que lo construye.',
    ejemplo: 'El científico que diseña experimentos, el filósofo que analiza categorías.',
    ver_tambien: ['transduccion']
  },
  
  termino: {
    definicion: 'Elemento básico del campo categorial. Unidad identificable que entra en relaciones con otros términos.',
    ejemplo: 'En geometría: punto, recta, plano. En física: masa, energía.',
    ver_tambien: ['relacion', 'campo_categorial']
  },
  
  relacion: {
    definicion: 'Conexión establecida entre términos del campo categorial. Las relaciones son selectivas (symploké).',
    ejemplo: 'La relación "perpendicular a" entre rectas. La relación "causa-efecto" en física.',
    ver_tambien: ['termino', 'symploke']
  },
  
  holismo: {
    definicion: 'Posición rechazada que afirma que "todo está conectado con todo". Eliminado por el principio de symploké.',
    ejemplo: '"Todo es uno", "Cada parte refleja el todo".',
    ver_tambien: ['symploke', 'atomismo']
  },
  
  atomismo: {
    definicion: 'Posición rechazada que afirma que nada está esencialmente conectado. Eliminado por el principio de symploké.',
    ejemplo: '"Cada disciplina es completamente autónoma", "No hay relaciones necesarias".',
    ver_tambien: ['symploke', 'holismo']
  }
};

// Lista de todos los términos del glosario
export const TERMINOS_GLOSARIO = Object.keys(GLOSARIO);

// Herramienta MCP para consultar el glosario
export const GLOSARIO_TOOL: Tool = {
  name: "gnosis_glosario",
  description: `Consulta el diccionario filosófico del Materialismo Filosófico.
  
Términos disponibles: ${TERMINOS_GLOSARIO.join(', ')}

Retorna definición, ejemplo y términos relacionados.`,
  
  inputSchema: {
    type: "object",
    properties: {
      termino: {
        type: "string",
        enum: TERMINOS_GLOSARIO,
        description: "Término filosófico a consultar"
      },
      listar_todos: {
        type: "boolean",
        description: "Si es true, retorna lista de todos los términos disponibles"
      }
    }
  }
};

// Función para procesar consultas al glosario
export function consultarGlosario(input: { termino?: string; listar_todos?: boolean }): { content: any[]; isError?: boolean } {
  // Listar todos los términos
  if (input.listar_todos) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          status: 'GLOSARIO_LISTADO',
          total_terminos: TERMINOS_GLOSARIO.length,
          terminos: TERMINOS_GLOSARIO,
          categorias: {
            fundamentales: ['symploke', 'cierre_categorial', 'campo_categorial', 'transduccion'],
            materialidad: ['M1', 'M2', 'M3', 'materialidad'],
            falacias: ['descriptivismo', 'teoreticismo', 'adecuacionismo', 'circularismo'],
            figuras: ['definir', 'clasificar', 'demostrar', 'modelar'],
            otros: ['sujeto_operatorio', 'termino', 'relacion', 'holismo', 'atomismo']
          }
        }, null, 2)
      }]
    };
  }

  // Consultar término específico
  if (!input.termino) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          error: 'Debes especificar un término o usar listar_todos: true',
          terminos_disponibles: TERMINOS_GLOSARIO
        }, null, 2)
      }],
      isError: true
    };
  }

  const entrada = GLOSARIO[input.termino];
  if (!entrada) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          error: `Término no encontrado: ${input.termino}`,
          sugerencia: 'Usa listar_todos: true para ver términos disponibles',
          terminos_disponibles: TERMINOS_GLOSARIO
        }, null, 2)
      }],
      isError: true
    };
  }

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'TERMINO_ENCONTRADO',
        termino: input.termino,
        ...entrada
      }, null, 2)
    }]
  };
}
