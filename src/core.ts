import { Tool } from "@modelcontextprotocol/sdk/types.js";
import chalk from 'chalk';

// --- NUEVO MAPA COGNITIVO (ACTUALIZADO CON FUENTES 2024-2026) ---
export const GNOSEOLOGIA_DOMAINS = {
  // Fase 1: Ruptura con el mito posmoderno
  'entrada': ['desengaño', 'anti_autoayuda'],

  // Fase 2: Ontología Literaria (Definiciones de los textos subidos)
  'ontologia': ['ficcion_material', 'inexistencia_operatoria', 'espacio_gnoseologico'],

  // Fase 3: Los 4 Materiales de la Crítica (Teoría fundamental)
  'materiales': ['autor', 'obra', 'lector', 'transductor'],

  // Fase 4: El Enemigo Filosófico (Diagnóstico del fracaso actual)
  'polemica': ['contra_idealismo_aleman', 'contra_felicidad_mercado', 'fracaso_democratico'],

  // Fase 5: Metodología Científica
  'metodologia': ['cierre_categorial', 'symploke', 'comparatismo_racional'],

  // Fase 6: Construcción de la Verdad
  'conclusion': ['construccion_critica']
};

export const CORE_TAGS = Object.values(GNOSEOLOGIA_DOMAINS).flat();

export const RAZON_TOOL: Tool = {
  name: "razon_literaria",
  description: "Herramienta de Crítica de la Razón Literaria (Jesús G. Maestro). Úsala para destruir mitos posmodernos (felicidad, democracia de mercado, idealismo) y analizar la realidad desde el Materialismo Filosófico. Inicia siempre con 'desengaño'.",
  inputSchema: {
    type: "object",
    properties: {
      tag: {
        type: "string",
        enum: CORE_TAGS,
        description: "Categoría gnoseológica del análisis actual."
      },
      content: {
        type: "string",
        description: "Argumento racional, crítica al idealismo o análisis de materiales."
      },
      stepNumber: {
        type: "integer"
      },
      nextStepNeeded: {
        type: "boolean"
      }
    },
    required: ["tag", "content", "stepNumber", "nextStepNeeded"]
  }
};

interface RazonCriticaData {
  tag: string;
  content: string;
  stepNumber: number;
  nextStepNeeded: boolean;
}

export class RazonLiterariaServer {
  private thoughtProcess: RazonCriticaData[] = [];

  private getDomain(tag: string): string {
    for (const [domain, tags] of Object.entries(GNOSEOLOGIA_DOMAINS)) {
      if (tags.includes(tag)) return domain;
    }
    return 'indefinido';
  }

  private formatOutput(data: RazonCriticaData, domain: string): string {
    let color = chalk.white;
    let icon = '▪️';

    switch (domain) {
      case 'entrada': color = chalk.bgRed.bold.white; icon = '🦉'; break;
      case 'ontologia': color = chalk.cyan; icon = '🧬'; break; // ADN de la literatura
      case 'materiales': color = chalk.blueBright; icon = '📚'; break;
      case 'polemica': color = chalk.redBright.bold; icon = '⚔️'; break; // Combate
      case 'metodologia': color = chalk.yellow.bold; icon = '⚒️'; break;
      case 'conclusion': color = chalk.bgWhite.black.bold; icon = '🏛️'; break;
    }
    const header = `${icon} [${domain.toUpperCase()}: ${data.tag.toUpperCase()}] Paso ${data.stepNumber}`;
    return `\n${color(header)}\n${chalk.gray('─'.repeat(60))}\n${data.content}\n`;
  }

  public processThought(input: any): { content: any[], isError?: boolean } {
    try {
      if (!CORE_TAGS.includes(input.tag)) {
        throw new Error(`Tag inválido: '${input.tag}'. Consulta el Mapa Gnoseológico.`);
      }

      const data: RazonCriticaData = {
        tag: input.tag,
        content: input.content || 'Analizando...',
        stepNumber: input.stepNumber || 1,
        nextStepNeeded: input.nextStepNeeded ?? true
      };
      if (data.stepNumber === 1) this.thoughtProcess = [];

      const domain = this.getDomain(data.tag);
      this.thoughtProcess.push(data);
      console.error(this.formatOutput(data, domain));
      
      // --- INYECCIÓN DE LA DOCTRINA ACTUALIZADA (MAPA MENTAL) ---
      if (data.tag === 'desengaño') {
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: 'DOCTRINA_MAESTRO_ACTIVADA',
              advertencia: 'La literatura no engaña, la literatura desengaña. No busques felicidad, busca inteligibilidad.',

              axiomas_fundamentales: {
                ficcion: 'Materia sin existencia operatoria. Don Quijote no sale del libro.',
                felicidad: 'Un invento del mercado. Una promesa incumplida de la democracia.',
                libertad: 'Está en la alcoba de la literatura, no en la mazmorra de la filosofía.',
                democracia: 'No es el fin de la Historia, es el medio de destrucción del Estado moderno.'
              },
              enemigos_identificados: {
                idealismo_aleman: 'Responsable de la barbarie del s.XXI (Kant/Hegel). El Quijote es su antídoto.',
                posmodernidad: 'Disolución del racionalismo crítico en sentimentalismo.',
                anglosfera: 'Reconstrucción retrospectiva (Shakespeare) para competir con Cervantes.'
              },
              instruccion_operativa: {
                1: 'Si el usuario busca consuelo, usa "contra_felicidad_mercado".',
                2: 'Si el usuario habla de política, aplica "fracaso_democratico" y busca al "transductor" (quien manipula).',
                3: 'Si habla de arte, distingue entre "Obra" (M3) y "Lector" (M2, subjetivo).'
              }
            }, null, 2)
          }]
        };
      }
      if (data.tag === 'construccion_critica' && !data.nextStepNeeded) {
        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              status: 'CRITICA_CONSTRUIDA',
              mensaje: 'Interpretación cerrada científicamente.',
              conclusion: 'La realidad no tolera a los idealistas.',
              trayectoria: this.thoughtProcess.map(t => t.tag).join(' -> ')
            }, null, 2)
          }]
        };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: 'procesando_cientificamente',
            fase: domain,
            siguiente: 'Continúa hasta destruir el mito idealista.'
          }, null, 2)
        }]
      };
    } catch (error: any) {
      return { content: [{ type: "text", text: JSON.stringify({ error: error.message }) }], isError: true };
    }
  }
}
