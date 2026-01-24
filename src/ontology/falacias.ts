// ============================================================================
// SISTEMA DE FALACIAS GNOSEOLÓGICAS
// ============================================================================

/**
 * FALACIAS GNOSEOLÓGICAS según Gustavo Bueno
 *
 * En toda ciencia existe una componente material (α) y una componente formal (β).
 * Las tres falacias son desviaciones de la correcta conjugación dialéctica.
 */

export enum TipoFalacia {
  /** α sin β: Solo hechos, sin teoría */
  DESCRIPTIVISMO = 'descriptivismo',
  /** β sin α: Solo teoría, sin hechos */
  TEORETICISMO = 'teoreticismo',
  /** α + β: Yuxtaposición sin conjugar */
  ADECUACIONISMO = 'adecuacionismo'
}

export interface FalaciaInfo {
  nombre: string;
  formula: string;
  descripcion: string;
  sintomas: string[];
  ejemplos_literatura: string[];
  ejemplos_ciencias_sociales: string[];
  ejemplos_economia: string[];
  correccion: string;
}

export const FALACIAS: Record<TipoFalacia, FalaciaInfo> = {
  [TipoFalacia.DESCRIPTIVISMO]: {
    nombre: 'DESCRIPTIVISMO',
    formula: 'α sin β',
    descripcion: 'Reducir la ciencia a la mera acumulación de datos sin marco teórico',
    sintomas: [
      '"Los datos hablan por sí solos"',
      '"Solo presento los hechos"',
      '"La realidad es evidente"',
      'Empirismo ingenuo'
    ],
    ejemplos_literatura: [
      'Leer el Quijote como "crónica de un loco" sin teoría interpretativa',
      'Biografismo: reducir la obra a la vida del autor'
    ],
    ejemplos_ciencias_sociales: [
      'Presentar estadísticas sin interpretación teórica',
      'Etnografía sin marco conceptual',
      '"La encuesta muestra que..." (sin análisis)'
    ],
    ejemplos_economia: [
      'Mostrar gráficas de PIB sin modelo económico',
      'Historicismo económico sin teoría del valor',
      '"El mercado decidió..." (cosificación)'
    ],
    correccion: 'Conjugar los datos (α) con un marco teórico explícito (β)'
  },

  [TipoFalacia.TEORETICISMO]: {
    nombre: 'TEORETICISMO',
    formula: 'β sin α',
    descripcion: 'Reducir la ciencia a estructuras formales sin conexión con fenómenos materiales',
    sintomas: [
      '"La teoría predice que..."',
      '"Matemáticamente se demuestra..."',
      '"En el modelo ideal..."',
      'Formalismo vacío'
    ],
    ejemplos_literatura: [
      'Análisis estructuralista puro sin referencia a textos concretos',
      'Teoría literaria sin obras analizadas'
    ],
    ejemplos_ciencias_sociales: [
      'Sociología formal sin investigación empírica',
      'Teoría de la acción racional sin agentes reales',
      'Modelos abstractos sin validación'
    ],
    ejemplos_economia: [
      'Equilibrio general walrasiano sin economías reales',
      'Teoría del consumidor sin consumidores',
      'Modelos DSGE sin calibración empírica'
    ],
    correccion: 'Conectar las formalizaciones (β) con fenómenos observables (α)'
  },

  [TipoFalacia.ADECUACIONISMO]: {
    nombre: 'ADECUACIONISMO',
    formula: 'α + β',
    descripcion: 'Yuxtaponer hechos y teoría sin conjugarlos dialécticamente',
    sintomas: [
      '"Por un lado... por otro lado..."',
      '"Existe tensión entre teoría y práctica"',
      '"Tanto X como Y son válidos"',
      'Eclecticismo metodológico'
    ],
    ejemplos_literatura: [
      '"El Quijote es realista Y es idealista" (sin dialectizar)',
      'Sumar enfoques (marxista + psicoanalítico) sin integrar'
    ],
    ejemplos_ciencias_sociales: [
      '"Hay evidencia cualitativa y cuantitativa" (sin síntesis)',
      'Multimétodo sin justificación epistemológica',
      '"Perspectiva macro y micro" (yuxtapuestas)'
    ],
    ejemplos_economia: [
      '"Keynesianismo para el corto plazo, neoclasicismo para el largo" (sin conjugar)',
      '"Mercado Y Estado" (dualismo sin dialéctica)',
      'Mezclar modelos incompatibles sin crítica'
    ],
    correccion: 'Aplicar CIRCULARISMO: conjugación dialéctica donde α y β se constituyen mutuamente'
  }
};

/**
 * CIRCULARISMO: La solución correcta
 *
 * No es una falacia, sino la posición gnoseológicamente correcta.
 * La materia (α) y la forma (β) se determinan recíprocamente.
 */
export const CIRCULARISMO = {
  nombre: 'CIRCULARISMO',
  formula: 'α ↔ β',
  descripcion: 'Conjugación dialéctica de materia y forma',
  principio: 'Los hechos se interpretan desde la teoría, la teoría se construye desde los hechos',
  ejemplos: [
    'El experimento refina la teoría, la teoría guía nuevos experimentos',
    'Los datos se leen desde categorías, las categorías se ajustan a los datos',
    'La observación presupone conceptos, los conceptos se verifican en la observación'
  ]
};

/**
 * Detecta falacias en un texto/argumento
 */
export function detectarFalacia(texto: string): { falacia: TipoFalacia | null; confianza: number; razon: string } {
  const textoLower = texto.toLowerCase();

  // Detectar DESCRIPTIVISMO
  const sintomasDescriptivismo = [
    'los datos hablan',
    'solo hechos',
    'evidencia muestra',
    'la realidad es',
    'simplemente',
    'obvio que',
    'claramente'
  ];
  const matchDescriptivismo = sintomasDescriptivismo.filter(s => textoLower.includes(s)).length;

  // Detectar TEORETICISMO
  const sintomasTeoreticiamo = [
    'la teoría predice',
    'matemáticamente',
    'formalmente',
    'en el modelo',
    'teóricamente',
    'se demuestra que',
    'necesariamente'
  ];
  const matchTeoreticiamo = sintomasTeoreticiamo.filter(s => textoLower.includes(s)).length;

  // Detectar ADECUACIONISMO
  const sintomasAdecuacionismo = [
    'por un lado',
    'por otro lado',
    'tanto',
    'como',
    'ambos',
    'tensión entre',
    'complementar'
  ];
  const matchAdecuacionismo = sintomasAdecuacionismo.filter(s => textoLower.includes(s)).length;

  // Determinar falacia predominante
  const max = Math.max(matchDescriptivismo, matchTeoreticiamo, matchAdecuacionismo);

  if (max === 0) {
    return { falacia: null, confianza: 0, razon: 'No se detectaron síntomas claros de falacias' };
  }

  if (matchDescriptivismo === max) {
    return {
      falacia: TipoFalacia.DESCRIPTIVISMO,
      confianza: Math.min(matchDescriptivismo / sintomasDescriptivismo.length, 1),
      razon: `Síntomas de empirismo ingenuo: "${sintomasDescriptivismo.filter(s => textoLower.includes(s)).join('", "')}"`
    };
  }

  if (matchTeoreticiamo === max) {
    return {
      falacia: TipoFalacia.TEORETICISMO,
      confianza: Math.min(matchTeoreticiamo / sintomasTeoreticiamo.length, 1),
      razon: `Síntomas de formalismo vacío: "${sintomasTeoreticiamo.filter(s => textoLower.includes(s)).join('", "')}"`
    };
  }

  return {
    falacia: TipoFalacia.ADECUACIONISMO,
    confianza: Math.min(matchAdecuacionismo / sintomasAdecuacionismo.length, 1),
    razon: `Síntomas de yuxtaposición: "${sintomasAdecuacionismo.filter(s => textoLower.includes(s)).join('", "')}"`
  };
}
