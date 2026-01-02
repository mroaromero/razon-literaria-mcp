import { Tool } from "@modelcontextprotocol/sdk/types.js";

// ============================================================================
// GNOSIS MCP - Servidor de Construcción Gnoseológica
// Basado en el Materialismo Filosófico de Gustavo Bueno y Jesús G. Maestro
// ============================================================================

// --- ESPACIO GNOSEOLÓGICO: 8 DOMINIOS × 24 TAGS ---
export const GNOSEOLOGIA_DOMAINS: Record<string, { tags: string[], icon: string, color: string }> = {
  
  // Fase 1: Apertura del campo categorial
  umbral: {
    tags: ['comenzar'],
    icon: '🚪',
    color: 'magenta'
  },

  // Fase 2: Eje Sintáctico (signos y articulación)
  sintactico: {
    tags: ['terminar', 'relacionar', 'operar'],
    icon: '📐',
    color: 'cyan'
  },

  // Fase 3: Eje Semántico (referentes materiales)
  semantico: {
    tags: ['fenomenizar', 'referenciar', 'esenciar'],
    icon: '💎',
    color: 'blue'
  },

  // Fase 4: Eje Pragmático (sujeto operatorio)
  pragmatico: {
    tags: ['autologizar', 'dialogizar', 'normar'],
    icon: '👥',
    color: 'green'
  },

  // Fase 5: Figuras Inmanentes de la Ciencia
  inmanente: {
    tags: ['definir', 'clasificar', 'demostrar', 'modelar'],
    icon: '🔷',
    color: 'blueBright'
  },

  // Fase 6: Impugnación Crítica y Análisis Dialéctico
  critico: {
    tags: ['impugnar', 'symploke', 'conjugar', 'dialectizar'],
    icon: '⚔️',
    color: 'red'
  },

  // Fase 7: Géneros de Materialidad (M1, M2, M3)
  ontologico: {
    tags: ['materializar', 'fenomenologizar', 'logificar'],
    icon: '🧬',
    color: 'yellow'
  },

  // Fase 8: Cierre Categorial y Transducción
  cierre: {
    tags: ['verificar', 'cerrar', 'transducir'],
    icon: '🔒',
    color: 'white'
  }
};

// Todos los tags disponibles
export const CORE_TAGS = Object.values(GNOSEOLOGIA_DOMAINS).flatMap(d => d.tags);

// --- SISTEMA DE FALACIAS GNOSEOLÓGICAS ---
export const FALACIAS = {
  descriptivismo: {
    nombre: 'DESCRIPTIVISMO',
    formula: 'α sin β',
    descripcion: 'Reducir la ciencia a descripción de hechos sin teoría',
    sintoma: 'Los datos hablan por sí solos',
    correccion: 'Conjugar con componente formal (β)'
  },
  teoreticismo: {
    nombre: 'TEORETICISMO', 
    formula: 'β sin α',
    descripcion: 'Reducir la ciencia a teorías formales sin hechos',
    sintoma: 'La teoría predice que... (sin verificar)',
    correccion: 'Conjugar con componente material (α)'
  },
  adecuacionismo: {
    nombre: 'ADECUACIONISMO',
    formula: 'α + β',
    descripcion: 'Yuxtaponer hechos y teorías sin conjugarlos',
    sintoma: 'Por un lado... por otro lado...',
    correccion: 'Aplicar CIRCULARISMO: conjugación dialéctica'
  }
};

// --- GÉNEROS DE MATERIALIDAD ---
export const MATERIALIDAD = {
  M1: { nombre: 'Físico-corpóreo', ejemplos: 'cuerpos, dispositivos, infraestructura' },
  M2: { nombre: 'Psicológico-subjetivo', ejemplos: 'procesos mentales, emociones, atención' },
  M3: { nombre: 'Lógico-abstracto', ejemplos: 'ideas, estructuras, instituciones, relaciones' }
};

// --- FIGURAS INMANENTES ---
export const FIGURAS_INMANENTES = {
  definir: { notacion: 'T < T', descripcion: 'Término construido desde términos' },
  clasificar: { notacion: 'T < R', descripcion: 'Término construido desde relaciones' },
  demostrar: { notacion: 'R < R', descripcion: 'Relación construida desde relaciones' },
  modelar: { notacion: 'R < T', descripcion: 'Relación construida desde términos' }
};

// --- DEFINICIÓN DE LA HERRAMIENTA MCP ---
export const GNOSIS_TOOL: Tool = {
  name: "gnosis",
  description: `Herramienta de Construcción Gnoseológica basada en el Materialismo Filosófico.

DOMINIOS (8):
- umbral: Apertura del campo (comenzar)
- sintactico: Términos y relaciones (terminar, relacionar, operar)
- semantico: Fenómenos y esencias (fenomenizar, referenciar, esenciar)
- pragmatico: Sujeto operatorio (autologizar, dialogizar, normar)
- inmanente: Figuras científicas (definir, clasificar, demostrar, modelar)
- critico: Impugnación dialéctica (impugnar, symploke, conjugar, dialectizar)
- ontologico: Materialidad M1/M2/M3 (materializar, fenomenologizar, logificar)
- cierre: Transducción final (verificar, cerrar, transducir)

FALACIAS A IMPUGNAR:
- descriptivismo: Solo hechos sin teoría
- teoreticismo: Solo teoría sin hechos
- adecuacionismo: Yuxtaposición sin conjugar

Inicia con 'comenzar', termina con 'transducir'.`,
  
  inputSchema: {
    type: "object",
    properties: {
      tag: {
        type: "string",
        enum: CORE_TAGS,
        description: "Operación gnoseológica a ejecutar"
      },
      content: {
        type: "string",
        description: "Contenido del análisis operatorio"
      },
      stepNumber: {
        type: "integer",
        minimum: 1,
        description: "Número de paso en la secuencia"
      },
      totalSteps: {
        type: "integer",
        minimum: 1,
        description: "Total estimado de pasos"
      },
      nextStepNeeded: {
        type: "boolean",
        description: "Si se requiere continuar el análisis"
      },
      // Campos opcionales para operaciones específicas
      terminos: {
        type: "array",
        items: { type: "string" },
        description: "Lista de términos identificados (para 'terminar')"
      },
      relaciones: {
        type: "array",
        items: { type: "string" },
        description: "Lista de relaciones establecidas (para 'relacionar')"
      },
      falacia: {
        type: "string",
        enum: ['descriptivismo', 'teoreticismo', 'adecuacionismo'],
        description: "Falacia detectada (para 'impugnar')"
      },
      materialidad: {
        type: "string",
        enum: ['M1', 'M2', 'M3'],
        description: "Género de materialidad (para tags ontológicos)"
      }
    },
    required: ["tag", "content", "stepNumber", "nextStepNeeded"]
  }
};

// Alias para compatibilidad
export const RAZON_TOOL = GNOSIS_TOOL;

// --- INTERFAZ DE DATOS ---
interface GnosisData {
  tag: string;
  content: string;
  stepNumber: number;
  totalSteps?: number;
  nextStepNeeded: boolean;
  terminos?: string[];
  relaciones?: string[];
  falacia?: string;
  materialidad?: string;
}

// --- CLASE PRINCIPAL DEL SERVIDOR ---
export class RazonLiterariaServer {
  private journey: GnosisData[] = [];
  private campoCategorial: string = '';
  private terminosIdentificados: string[] = [];
  private relacionesEstablecidas: string[] = [];
  private falaciasDetectadas: string[] = [];

  private getDomainInfo(tag: string): { domain: string, icon: string, color: string } {
    for (const [domain, info] of Object.entries(GNOSEOLOGIA_DOMAINS)) {
      if (info.tags.includes(tag)) {
        return { domain, icon: info.icon, color: info.color };
      }
    }
    return { domain: 'indefinido', icon: '❓', color: 'gray' };
  }

  private formatXMLOutput(data: GnosisData, domainInfo: { domain: string, icon: string }): string {
    const { domain, icon } = domainInfo;
    
    let xml = `<gnosis_step domain="${domain}" tag="${data.tag}" step="${data.stepNumber}">\n`;
    xml += `  <icon>${icon}</icon>\n`;
    xml += `  <content>${data.content}</content>\n`;
    
    if (data.terminos && data.terminos.length > 0) {
      xml += `  <terminos>\n`;
      data.terminos.forEach((t, i) => {
        xml += `    <T${i + 1}>${t}</T${i + 1}>\n`;
      });
      xml += `  </terminos>\n`;
    }
    
    if (data.relaciones && data.relaciones.length > 0) {
      xml += `  <relaciones>\n`;
      data.relaciones.forEach((r, i) => {
        xml += `    <R${i + 1}>${r}</R${i + 1}>\n`;
      });
      xml += `  </relaciones>\n`;
    }
    
    if (data.falacia) {
      const f = FALACIAS[data.falacia as keyof typeof FALACIAS];
      xml += `  <falacia_detectada>\n`;
      xml += `    <nombre>${f.nombre}</nombre>\n`;
      xml += `    <formula>${f.formula}</formula>\n`;
      xml += `    <correccion>${f.correccion}</correccion>\n`;
      xml += `  </falacia_detectada>\n`;
    }
    
    if (data.materialidad) {
      const m = MATERIALIDAD[data.materialidad as keyof typeof MATERIALIDAD];
      xml += `  <materialidad genero="${data.materialidad}">\n`;
      xml += `    <nombre>${m.nombre}</nombre>\n`;
      xml += `    <ejemplos>${m.ejemplos}</ejemplos>\n`;
      xml += `  </materialidad>\n`;
    }
    
    xml += `  <next_step_needed>${data.nextStepNeeded}</next_step_needed>\n`;
    xml += `</gnosis_step>`;
    
    return xml;
  }

  public processThought(input: any): { content: any[], isError?: boolean } {
    try {
      // Validar tag
      if (!CORE_TAGS.includes(input.tag)) {
        const availableTags = CORE_TAGS.join(', ');
        throw new Error(`Tag inválido: '${input.tag}'. Tags disponibles: ${availableTags}`);
      }

      const data: GnosisData = {
        tag: input.tag,
        content: input.content || '',
        stepNumber: input.stepNumber || 1,
        totalSteps: input.totalSteps,
        nextStepNeeded: input.nextStepNeeded ?? true,
        terminos: input.terminos,
        relaciones: input.relaciones,
        falacia: input.falacia,
        materialidad: input.materialidad
      };

      // Reset en paso 1
      if (data.stepNumber === 1) {
        this.journey = [];
        this.terminosIdentificados = [];
        this.relacionesEstablecidas = [];
        this.falaciasDetectadas = [];
      }

      // Acumular términos y relaciones
      if (data.terminos) {
        this.terminosIdentificados.push(...data.terminos);
      }
      if (data.relaciones) {
        this.relacionesEstablecidas.push(...data.relaciones);
      }
      if (data.falacia) {
        this.falaciasDetectadas.push(data.falacia);
      }

      const domainInfo = this.getDomainInfo(data.tag);
      this.journey.push(data);

      // Log para debugging
      console.error(`\n${domainInfo.icon} [${domainInfo.domain.toUpperCase()}:${data.tag}] Paso ${data.stepNumber}`);
      console.error(`${'─'.repeat(60)}`);
      console.error(data.content);

      // --- RESPUESTAS ESPECIALES POR TAG ---

      // COMENZAR: Retorna el framework completo
      if (data.tag === 'comenzar') {
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: 'GNOSIS_FRAMEWORK_ACTIVADO',
              version: '2.0.0',
              
              principio_rector: {
                symploke: 'Unos términos se relacionan con otros, pero NO con todos. Rechaza holismo y atomismo.'
              },
              
              ontologia: {
                axioma: 'El ser, o es material, o no es.',
                generos: MATERIALIDAD
              },
              
              falacias_a_impugnar: FALACIAS,
              
              figuras_inmanentes: FIGURAS_INMANENTES,
              
              flujo_operatorio: [
                'comenzar → terminar → relacionar',
                '→ fenomenizar → referenciar → esenciar',
                '→ definir/clasificar/demostrar/modelar',
                '→ impugnar → conjugar → dialectizar',
                '→ verificar → cerrar → transducir'
              ],
              
              instrucciones: {
                1: 'Identifica términos con "terminar" (T1, T2, T3...)',
                2: 'Establece relaciones con "relacionar" (R1, R2...)',
                3: 'Capta fenómenos con "fenomenizar"',
                4: 'Detecta falacias con "impugnar"',
                5: 'Conjuga materia↔forma con "conjugar"',
                6: 'Cierra con "transducir"'
              },
              
              xml_output: this.formatXMLOutput(data, domainInfo)
            }, null, 2)
          }]
        };
      }

      // IMPUGNAR: Retorna análisis de falacia
      if (data.tag === 'impugnar' && data.falacia) {
        const falacia = FALACIAS[data.falacia as keyof typeof FALACIAS];
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: 'FALACIA_IMPUGNADA',
              falacia: {
                tipo: falacia.nombre,
                formula: falacia.formula,
                descripcion: falacia.descripcion,
                sintoma_detectado: falacia.sintoma,
                correccion: falacia.correccion
              },
              instruccion: 'Aplica CIRCULARISMO: conjugación dialéctica de materia (α) y forma (β)',
              xml_output: this.formatXMLOutput(data, domainInfo)
            }, null, 2)
          }]
        };
      }

      // TRANSDUCIR: Cierre final
      if (data.tag === 'transducir' && !data.nextStepNeeded) {
        const trayectoria = this.journey.map(j => j.tag).join(' → ');
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: 'TRANSDUCCION_COMPLETADA',
              mensaje: 'Conocimiento construido mediante operaciones gnoseológicas.',
              
              resumen: {
                terminos_identificados: this.terminosIdentificados,
                relaciones_establecidas: this.relacionesEstablecidas,
                falacias_impugnadas: this.falaciasDetectadas,
                pasos_totales: this.journey.length,
                trayectoria: trayectoria
              },
              
              principios_aplicados: [
                'El conocimiento se CONSTRUYE, no emerge',
                'Las relaciones son SELECTIVAS (symploké)',
                'Las falacias se IMPUGNAN, no se integran',
                'La transducción TRANSFORMA lo transmitido'
              ],
              
              xml_output: `<transduccion status="completada">
  <conocimiento_construido>${data.content}</conocimiento_construido>
  <trayectoria>${trayectoria}</trayectoria>
  <terminos count="${this.terminosIdentificados.length}">${this.terminosIdentificados.join(', ')}</terminos>
  <falacias_impugnadas>${this.falaciasDetectadas.join(', ') || 'ninguna'}</falacias_impugnadas>
</transduccion>`
            }, null, 2)
          }]
        };
      }

      // RESPUESTA ESTÁNDAR
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: 'OPERACION_EJECUTADA',
            domain: domainInfo.domain,
            tag: data.tag,
            step: data.stepNumber,
            next_step_needed: data.nextStepNeeded,
            
            estado_actual: {
              terminos: this.terminosIdentificados.length,
              relaciones: this.relacionesEstablecidas.length,
              falacias: this.falaciasDetectadas.length,
              pasos: this.journey.length
            },
            
            xml_output: this.formatXMLOutput(data, domainInfo)
          }, null, 2)
        }]
      };

    } catch (error: any) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            error: error.message,
            tags_disponibles: CORE_TAGS,
            dominios: Object.keys(GNOSEOLOGIA_DOMAINS)
          }, null, 2)
        }],
        isError: true
      };
    }
  }

  // Método para obtener resumen del journey
  public getSummary(): object {
    return {
      pasos: this.journey.length,
      trayectoria: this.journey.map(j => j.tag),
      terminos: this.terminosIdentificados,
      relaciones: this.relacionesEstablecidas,
      falacias: this.falaciasDetectadas
    };
  }
}

// Alias para compatibilidad con imports existentes
export { RazonLiterariaServer as GnosisServer };
