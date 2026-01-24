// ============================================================================
// HERRAMIENTA MCP: Cultural Pathology Analysis
// ============================================================================

import { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  analizarTemporalidad,
  analizarResonancia,
  detectarTecnofeudalismo,
  PATOLOGIAS_HAN,
  PATOLOGIAS_FISHER,
  PATOLOGIAS_SADIN,
  PATOLOGIAS_BERARDI,
  PatologiaHan,
  PatologiaFisher,
  PatologiaSadin,
  PatologiaBerardi
} from '../diagnosis/culturalPathology.js';
import {
  analizarEconomiaEmocional,
  detectarPasionTriste,
  PASIONES_TRISTES,
  PATOLOGIAS_ILLOUZ,
  PATOLOGIAS_SANDEL
} from '../emotions/affectiveCapitalism.js';

/**
 * HERRAMIENTA MCP: cultural_pathology_analysis
 *
 * Analiza fenómenos culturales integrando 3 capas:
 * - Layer 1: Materialismo Filosófico (Bueno/Maestro/Armesilla)
 * - Layer 2: Diagnóstico cultural (Han/Rosa/Fisher/Sadin/Berardi)
 * - Layer 3: Economía emocional (Illouz/Dubet/Sandel)
 */

export const CULTURAL_PATHOLOGY_TOOL: Tool = {
  name: "cultural_pathology_analysis",
  description: `Analiza fenómenos culturales/sociales aplicando diagnóstico materialista multi-capa.

CAPAS DE ANÁLISIS:
1. Materialismo Filosófico (Bueno): M1/M2/M3, Falacias gnoseológicas
2. Diagnóstico Cultural (Han/Rosa/Fisher/Sadin/Berardi): Psicopolítica, Temporalidad, Hauntología
3. Economía Emocional (Illouz/Dubet/Sandel): Pasiones tristes, Meritocracia

ANÁLISIS DISPONIBLES:
- analyze_temporality: Analizar temporalidad (Rosa)
- detect_technofeudalism: Detectar tecnofeudalismo (Varoufakis/Sadin)
- psychopolitical_scan: Escaneo psicopolítico (Han/Fisher)
- emotional_economy: Economía emocional (Illouz/Dubet/Sandel)
- full_diagnosis: Diagnóstico completo (todas las capas)`,

  inputSchema: {
    type: "object",
    properties: {
      analysis_type: {
        type: "string",
        enum: [
          "analyze_temporality",
          "detect_technofeudalism",
          "psychopolitical_scan",
          "emotional_economy",
          "full_diagnosis"
        ],
        description: "Tipo de análisis a realizar"
      },
      description: {
        type: "string",
        description: "Descripción del fenómeno a analizar"
      },
      context: {
        type: "string",
        description: "Contexto adicional (opcional)"
      }
    },
    required: ["analysis_type", "description"]
  }
};

/**
 * Procesador de la herramienta cultural_pathology_analysis
 */
export function procesarCulturalPathology(input: any): { content: any[]; isError?: boolean } {
  const { analysis_type, description, context } = input;

  try {
    switch (analysis_type) {
      case 'analyze_temporality':
        return analizarTemporalidadTool(description);

      case 'detect_technofeudalism':
        return detectarTecnofeudalismoTool(description);

      case 'psychopolitical_scan':
        return escanearPsicopolitica(description);

      case 'emotional_economy':
        return analizarEconomiaEmocionalTool(description);

      case 'full_diagnosis':
        return diagnosticoCompleto(description, context);

      default:
        throw new Error(`Tipo de análisis no soportado: ${analysis_type}`);
    }
  } catch (error: any) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          error: error.message,
          analysis_types_disponibles: [
            'analyze_temporality',
            'detect_technofeudalism',
            'psychopolitical_scan',
            'emotional_economy',
            'full_diagnosis'
          ]
        }, null, 2)
      }],
      isError: true
    };
  }
}

// ============================================================================
// ANÁLISIS ESPECÍFICOS
// ============================================================================

function analizarTemporalidadTool(description: string) {
  const analisis = analizarTemporalidad(description);

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'TEMPORALIDAD_ANALIZADA',
        herramienta: 'analyze_temporality',
        autor_referencia: 'Hartmut Rosa',
        resultado: {
          tipo_temporal: analisis.tipo,
          diagnostico: analisis.razon,
          explicacion: analisis.tipo === 'tiempo_narrativo'
            ? 'El tiempo tiene "aroma" (scent of time). Hay continuidad histórica y memoria.'
            : analisis.tipo === 'tiempo_puntillista'
            ? 'Tiempo atomizado en "ahoras" sin conexión. Presente perpetuo sin pasado ni futuro (Han).'
            : 'Aceleración sin rumbo. El sujeto busca controlar el mundo pero no resonar con él.'
        },
        output_tag: '<cronosofia>',
        recomendacion: analisis.tipo === 'tiempo_puntillista'
          ? 'Salida: Reconectar con la narratividad. Recuperar el "aroma del tiempo" mediante rituales, tradiciones, memoria colectiva.'
          : 'Continuar analizando otros ejes (resonancia, alienación).'
      }, null, 2)
    }]
  };
}

function detectarTecnofeudalismoTool(description: string) {
  const analisis = detectarTecnofeudalismo(description);

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'TECNOFEUDALISMO_DETECTADO',
        herramienta: 'detect_technofeudalism',
        autores_referencia: ['Yanis Varoufakis', 'Eric Sadin'],
        resultado: {
          es_tecnofeudalista: analisis.es_tecnofeudalista,
          tipo_renta: analisis.tipo_renta,
          nivel_servidumbre_digital: analisis.nivel_servidumbre,
          diagnostico: analisis.diagnostico,
          explicacion: analisis.es_tecnofeudalista
            ? 'El capitalismo industrial ha mutado en TECNOFEUDALISMO. Los usuarios son "siervos digitales" que pagan renta (no salarios) a los señores feudales de Silicon Valley.'
            : 'No se detecta extracción de renta digital. Posiblemente economía industrial clásica.'
        },
        output_tag: '<tecnofeudalismo>',
        conceptos_clave: {
          tecnofeudalismo: 'Sistema donde las plataformas digitales extraen renta (no ganancias) mediante el control de infraestructura y datos.',
          servidumbre_digital: 'Los usuarios no son "clientes" ni "trabajadores", sino siervos que ceden datos/atención a cambio de acceso.',
          spectralidad: 'Pérdida de la realidad "de carne y hueso" (Sadin). Todo se vuelve virtualizado, dataficado.'
        }
      }, null, 2)
    }]
  };
}

function escanearPsicopolitica(description: string) {
  const textoLower = description.toLowerCase();

  // Detectar patologías de Han
  const patologiasHan: PatologiaHan[] = [];
  if (textoLower.includes('rendimiento') || textoLower.includes('productividad') || textoLower.includes('optimizar')) {
    patologiasHan.push(PatologiaHan.SOCIEDAD_DEL_RENDIMIENTO);
  }
  if (textoLower.includes('agotamiento') || textoLower.includes('burnout') || textoLower.includes('cansancio')) {
    patologiasHan.push(PatologiaHan.AUTOEXPLOTACION);
  }
  if (textoLower.includes('datos') || textoLower.includes('informacion') || textoLower.includes('algoritmo')) {
    patologiasHan.push(PatologiaHan.INFOCRACIA);
  }
  if (textoLower.includes('positivo') || textoLower.includes('optimismo') || textoLower.includes('good vibes')) {
    patologiasHan.push(PatologiaHan.POSITIVIDAD_TOXICA);
  }

  // Detectar patologías de Fisher
  const patologiasFisher: PatologiaFisher[] = [];
  if (textoLower.includes('alternativa') || textoLower.includes('futuro') || textoLower.includes('distopia')) {
    patologiasFisher.push(PatologiaFisher.REALISMO_CAPITALISTA);
  }
  if (textoLower.includes('nostalgia') || textoLower.includes('pasado') || textoLower.includes('retro')) {
    patologiasFisher.push(PatologiaFisher.HAUNTOLOGIA);
  }
  if (textoLower.includes('netflix') || textoLower.includes('scrolling') || textoLower.includes('binge')) {
    patologiasFisher.push(PatologiaFisher.DEPRESION_HEDONICA);
  }

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'PSICOPOLITICA_ESCANEADA',
        herramienta: 'psychopolitical_scan',
        autores_referencia: ['Byung-Chul Han', 'Mark Fisher'],
        resultado: {
          patologias_han: patologiasHan.map(p => ({
            patologia: p,
            descripcion: PATOLOGIAS_HAN[p].descripcion,
            sintomas: PATOLOGIAS_HAN[p].sintomas
          })),
          patologias_fisher: patologiasFisher.map(p => ({
            patologia: p,
            descripcion: PATOLOGIAS_FISHER[p].descripcion,
            sintomas: PATOLOGIAS_FISHER[p].sintomas
          })),
          diagnostico_principal: patologiasHan.length > 0
            ? `Psicopolítica (Han): ${patologiasHan[0]}`
            : patologiasFisher.length > 0
            ? `Realismo Capitalista (Fisher): ${patologiasFisher[0]}`
            : 'No se detectaron patologías psicopolíticas dominantes'
        },
        output_tag: '<psicopolitica>',
        conceptos_clave: {
          psicopolitica: 'Forma de poder que no reprime (como la biopolítica), sino que seduce. Explota la libertad, no la coacciona.',
          autoexplotacion: 'El sujeto se explota a sí mismo creyéndose libre. Es verdugo y víctima.',
          realismo_capitalista: 'Imposibilidad de imaginar alternativas al capitalismo. "Es más fácil imaginar el fin del mundo que el fin del capitalismo".'
        }
      }, null, 2)
    }]
  };
}

function analizarEconomiaEmocionalTool(description: string) {
  const analisis = analizarEconomiaEmocional(description);
  const pasionDetectada = detectarPasionTriste(description);

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'ECONOMIA_EMOCIONAL_ANALIZADA',
        herramienta: 'emotional_economy',
        autores_referencia: ['Eva Illouz', 'François Dubet', 'Michael Sandel'],
        resultado: {
          pasiones_tristes: analisis.pasiones_tristes.map(p => ({
            pasion: p,
            descripcion: PASIONES_TRISTES[p].descripcion,
            origen: PASIONES_TRISTES[p].origen,
            consecuencia: PASIONES_TRISTES[p].consecuencia
          })),
          patologias_illouz: analisis.patologias_illouz.map(p => ({
            patologia: p,
            descripcion: PATOLOGIAS_ILLOUZ[p].descripcion,
            ejemplo: PATOLOGIAS_ILLOUZ[p].ejemplo
          })),
          patologias_sandel: analisis.patologias_sandel.map(p => ({
            patologia: p,
            descripcion: PATOLOGIAS_SANDEL[p].descripcion,
            sintomas: PATOLOGIAS_SANDEL[p].sintomas
          })),
          diagnostico_emocional: analisis.diagnostico_emocional,
          origen_estructural: analisis.origen_estructural,
          salida_posible: analisis.salida_posible
        },
        conceptos_clave: {
          capitalismo_emocional: 'Sistema donde las emociones se convierten en mercancía y trabajo (emotional labor).',
          pasiones_tristes: 'Resentimiento, humillación, desprecio, envidia. Emociones generadas por la desigualdad y la meritocracia.',
          tirania_del_merito: 'Ideología que culpabiliza el fracaso y glorifica el éxito individual, ignorando suerte y estructuras.'
        }
      }, null, 2)
    }]
  };
}

function diagnosticoCompleto(description: string, context?: string) {
  // Ejecutar todos los análisis
  const temporalidad = analizarTemporalidad(description);
  const tecnofeudalismo = detectarTecnofeudalismo(description);
  const economiaEmocional = analizarEconomiaEmocional(description);
  const pasionTriste = detectarPasionTriste(description);

  // Escaneo psicopolítico
  const textoLower = description.toLowerCase();
  const patologiasHan: PatologiaHan[] = [];
  if (textoLower.includes('rendimiento')) patologiasHan.push(PatologiaHan.SOCIEDAD_DEL_RENDIMIENTO);
  if (textoLower.includes('agotamiento')) patologiasHan.push(PatologiaHan.AUTOEXPLOTACION);

  const patologiasFisher: PatologiaFisher[] = [];
  if (textoLower.includes('futuro')) patologiasFisher.push(PatologiaFisher.REALISMO_CAPITALISTA);
  if (textoLower.includes('nostalgia')) patologiasFisher.push(PatologiaFisher.HAUNTOLOGIA);

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: 'DIAGNOSTICO_COMPLETO',
        herramienta: 'full_diagnosis',
        fenomeno_analizado: description,
        contexto: context || 'No especificado',

        // LAYER 1: Materialismo Filosófico (se integraría con el análisis gnoseológico existente)
        layer_1_gnoseologia: {
          nota: 'Usar herramienta "gnosis" para análisis gnoseológico completo (M1/M2/M3, falacias, cierre categorial)'
        },

        // LAYER 2: Diagnóstico Cultural
        layer_2_diagnostico_cultural: {
          temporalidad: {
            tipo: temporalidad.tipo,
            diagnostico: temporalidad.razon
          },
          tecnofeudalismo: {
            detectado: tecnofeudalismo.es_tecnofeudalista,
            tipo_renta: tecnofeudalismo.tipo_renta,
            diagnostico: tecnofeudalismo.diagnostico
          },
          psicopolitica: {
            patologias_han: patologiasHan,
            patologias_fisher: patologiasFisher
          }
        },

        // LAYER 3: Economía Emocional
        layer_3_economia_emocional: {
          pasiones_tristes: economiaEmocional.pasiones_tristes,
          patologias_illouz: economiaEmocional.patologias_illouz,
          patologias_sandel: economiaEmocional.patologias_sandel,
          diagnostico: economiaEmocional.diagnostico_emocional,
          origen_estructural: economiaEmocional.origen_estructural,
          salida: economiaEmocional.salida_posible
        },

        // SÍNTESIS FINAL
        sintesis: {
          patologia_principal: pasionTriste.pasion || patologiasHan[0] || 'Análisis pendiente',
          origen_material: tecnofeudalismo.es_tecnofeudalista
            ? 'Tecnofeudalismo (extracción de renta digital)'
            : 'Capitalismo industrial',
          estado_afectivo: pasionTriste.pasion
            ? PASIONES_TRISTES[pasionTriste.pasion].descripcion
            : 'No detectado',
          salida_propuesta: economiaEmocional.salida_posible ||
            'Reconstruir vínculos resonantes (Rosa), cuestionar la meritocracia (Sandel), pensar diferente (Sadin)'
        },

        vocabulario_critico: [
          'Resonancia',
          'Indisponible',
          'Infocracia',
          'Tecnofeudalismo',
          'Hauntología',
          'Psicopolítica',
          'Pasiones Tristes',
          'Auto-explotación',
          'Realismo Capitalista',
          'Tiempo Puntillista'
        ]
      }, null, 2)
    }]
  };
}
