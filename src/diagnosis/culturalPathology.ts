// ============================================================================
// LAYER 2: DIAGNÓSTICO CULTURAL - Fenomenología del Presente
// ============================================================================

/**
 * PATOLOGÍAS DE LA MODERNIDAD TARDÍA
 *
 * Basado en:
 * - Byung-Chul Han: Psicopolítica, Sociedad del Cansancio, Agonía del Eros
 * - Hartmut Rosa: Alienación y Aceleración, Resonancia
 * - Mark Fisher: Realismo Capitalista, Hauntología
 * - Eric Sadin: Infocracia, Inteligencia Artificial o la enjeu du siècle
 * - Franco 'Bifo' Berardi: El alma en el trabajo, Héroes
 */

// ============================================================================
// BYUNG-CHUL HAN: Psicopolítica y Sociedad del Cansancio
// ============================================================================

export enum PatologiaHan {
  /** Auto-explotación disfrazada de libertad */
  AUTOEXPLOTACION = 'autoexplotacion',
  /** Imperativo de rendimiento ("Yes We Can") */
  SOCIEDAD_DEL_RENDIMIENTO = 'sociedad_del_rendimiento',
  /** Desaparición del otro como misterio */
  DESAPARICION_DEL_OTRO = 'desaparicion_del_otro',
  /** Positividad tóxica (eliminación de la negatividad) */
  POSITIVIDAD_TOXICA = 'positividad_toxica',
  /** Agonía del Eros (pornificación de la relación) */
  AGONIA_DEL_EROS = 'agonia_del_eros',
  /** Infocracia (dominio de la información sobre la verdad) */
  INFOCRACIA = 'infocracia'
}

export const PATOLOGIAS_HAN: Record<PatologiaHan, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaHan.AUTOEXPLOTACION]: {
    descripcion: 'El sujeto neoliberal se explota a sí mismo creyéndose libre. Es verdugo y víctima simultáneamente.',
    sintomas: [
      'Trabajar hasta el agotamiento sin coacción externa',
      'Culparse a sí mismo por no ser "suficientemente productivo"',
      'Identificar libertad con rendimiento',
      '"Soy mi propio jefe" (pero trabajo 14h/día)'
    ],
    ejemplo: 'El emprendedor que celebra la "hustle culture" mientras se quema psicológicamente.'
  },
  [PatologiaHan.SOCIEDAD_DEL_RENDIMIENTO]: {
    descripcion: 'Sustitución de la sociedad disciplinaria (Foucault) por la del rendimiento. El "Yes We Can" como imperativo psicopolítico.',
    sintomas: [
      'Optimización constante del yo',
      'Cuantificación de la vida (pasos, calorías, likes)',
      'Coaching y autoayuda como religión',
      'Depresión como fracaso personal (no sistémico)'
    ],
    ejemplo: 'Las apps de "self-improvement" que convierten el ocio en trabajo.'
  },
  [PatologiaHan.DESAPARICION_DEL_OTRO]: {
    descripcion: 'El otro como misterio desaparece. Solo queda el mismo (Narciso) reflejado infinitamente.',
    sintomas: [
      'Relaciones como "conexiones" (networking)',
      'Swipe left/right: el otro como mercancía',
      'Algoritmos que solo muestran lo que ya me gusta',
      'Echo chambers y burbujas de filtro'
    ],
    ejemplo: 'Redes sociales que eliminan el encuentro imprevisto y doloroso con la alteridad.'
  },
  [PatologiaHan.POSITIVIDAD_TOXICA]: {
    descripcion: 'Eliminación de la negatividad (dolor, pérdida, conflicto). Todo debe ser "positivo" y "constructivo".',
    sintomas: [
      '"Toxic positivity" en redes sociales',
      'Prohibición del duelo (must move on)',
      'Cancelación del conflicto (safe spaces extremos)',
      'Patologización de la tristeza'
    ],
    ejemplo: 'El "good vibes only" que impide procesar el trauma colectivo.'
  },
  [PatologiaHan.AGONIA_DEL_EROS]: {
    descripcion: 'La sexualidad pornificada elimina el Eros (tensión erótica). Desaparece el deseo como falta.',
    sintomas: [
      'Pornificación de las relaciones',
      'Deseo como consumo inmediato',
      'Swipe culture (Tinder como supermercado)',
      'Eliminación del cortejo (tiempo del deseo)'
    ],
    ejemplo: 'OnlyFans: monetización del Eros sin encuentro real.'
  },
  [PatologiaHan.INFOCRACIA]: {
    descripcion: 'Dominio de la información sobre la verdad. Los datos sustituyen al pensamiento.',
    sintomas: [
      'Big Data como nuevo Dios',
      'Decisiones basadas en algoritmos (no en razón)',
      'Psicopolítica: manipulación mediante información',
      'Desaparición del saber (Wikipedia vs. Biblioteca)'
    ],
    ejemplo: 'Cambridge Analytica: psicopolítica electoral mediante data mining.'
  }
};

// ============================================================================
// HARTMUT ROSA: Alienación y Resonancia
// ============================================================================

export enum EstadoRosa {
  /** Resonancia: relación responsiva con el mundo */
  RESONANCIA = 'resonancia',
  /** Alienación: relación muda, cosificada */
  ALIENACION = 'alienacion',
  /** Aceleración sin dirección */
  ACELERACION_CIEGA = 'aceleracion_ciega',
  /** Tiempo narrativo (scent of time) */
  TIEMPO_NARRATIVO = 'tiempo_narrativo',
  /** Tiempo puntillista (atomizado) */
  TIEMPO_PUNTILLISTA = 'tiempo_puntillista'
}

export interface AnalisisResonancia {
  estado: EstadoRosa;
  descripcion: string;
  ejes_resonantes: string[];
  ejes_mudos: string[];
  diagnostico: string;
}

export function analizarResonancia(
  descripcionSituacion: string,
  relacionConElMundo: 'responsiva' | 'muda' | 'indiferente'
): AnalisisResonancia {
  if (relacionConElMundo === 'responsiva') {
    return {
      estado: EstadoRosa.RESONANCIA,
      descripcion: 'El sujeto está en relación resonante con el mundo. Hay reciprocidad.',
      ejes_resonantes: ['Cuerpo', 'Cosas', 'Otros seres humanos'],
      ejes_mudos: [],
      diagnostico: 'Experiencia de vida plena. El mundo "responde".'
    };
  }

  if (relacionConElMundo === 'muda') {
    return {
      estado: EstadoRosa.ALIENACION,
      descripcion: 'El sujeto está alienado. El mundo no responde, es mudo e indiferente.',
      ejes_resonantes: [],
      ejes_mudos: ['Trabajo', 'Política', 'Naturaleza'],
      diagnostico: 'Depresión moderna: el mundo es sordo a mis llamadas.'
    };
  }

  return {
    estado: EstadoRosa.ACELERACION_CIEGA,
    descripcion: 'El sujeto acelera sin rumbo. Busca controlar el mundo pero no conectar con él.',
    ejes_resonantes: [],
    ejes_mudos: ['Tiempo', 'Historia'],
    diagnostico: 'Alienación por aceleración: nunca hay tiempo para resonar.'
  };
}

export function analizarTemporalidad(descripcion: string): { tipo: EstadoRosa; razon: string } {
  const textoLower = descripcion.toLowerCase();

  // Detectar tiempo narrativo
  const sintomasNarrativo = ['historia', 'memoria', 'tradición', 'raíces', 'continuidad', 'legado'];
  const matchNarrativo = sintomasNarrativo.filter(s => textoLower.includes(s)).length;

  // Detectar tiempo puntillista
  const sintomasPuntillista = ['ahora', 'inmediato', 'actualización', 'feed', 'trending', 'viral', 'real-time'];
  const matchPuntillista = sintomasPuntillista.filter(s => textoLower.includes(s)).length;

  if (matchNarrativo > matchPuntillista) {
    return {
      tipo: EstadoRosa.TIEMPO_NARRATIVO,
      razon: 'El tiempo tiene "aroma" (scent). Hay continuidad y narratividad.'
    };
  }

  if (matchPuntillista > 0) {
    return {
      tipo: EstadoRosa.TIEMPO_PUNTILLISTA,
      razon: 'Tiempo atomizado en "ahoras" sin conexión. Presente perpetuo sin pasado ni futuro.'
    };
  }

  return {
    tipo: EstadoRosa.ACELERACION_CIEGA,
    razon: 'Aceleración sin resonancia. No hay tiempo para detenerse.'
  };
}

// ============================================================================
// MARK FISHER: Realismo Capitalista y Hauntología
// ============================================================================

export enum PatologiaFisher {
  /** Realismo Capitalista: "Es más fácil imaginar el fin del mundo que el fin del capitalismo" */
  REALISMO_CAPITALISTA = 'realismo_capitalista',
  /** Hauntología: Los futuros cancelados acechan el presente */
  HAUNTOLOGIA = 'hauntologia',
  /** Depresión hedónica: Placer sin satisfacción */
  DEPRESION_HEDONICA = 'depresion_hedonica',
  /** Reflexividad impotente: Saber sin poder */
  REFLEXIVIDAD_IMPOTENTE = 'reflexividad_impotente'
}

export const PATOLOGIAS_FISHER: Record<PatologiaFisher, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaFisher.REALISMO_CAPITALISTA]: {
    descripcion: 'La imposibilidad de imaginar alternativas al capitalismo. El horizonte de expectativas se cierra.',
    sintomas: [
      '"No hay alternativa" (TINA)',
      'Distopías sin utopías',
      'Política como gestión técnica',
      'Futuro como catástrofe (no como promesa)'
    ],
    ejemplo: 'Las películas post-apocalípticas: podemos imaginar zombies, no el socialismo.'
  },
  [PatologiaFisher.HAUNTOLOGIA]: {
    descripcion: 'Los futuros que nunca llegaron (prometidos en los 60-70) acechan el presente como fantasmas.',
    sintomas: [
      'Nostalgia de futuros perdidos',
      'Retrofuturismo (aesthetics de los 80)',
      'Música que mira al pasado (vaporwave)',
      'Sensación de "ya no hay novedad"'
    ],
    ejemplo: 'Stranger Things: nostalgia del futuro que los 80 prometieron y nunca llegó.'
  },
  [PatologiaFisher.DEPRESION_HEDONICA]: {
    descripcion: 'Placer sin satisfacción. El goce no produce felicidad.',
    sintomas: [
      'Binge-watching sin disfrute real',
      'Scrolling infinito (dopamina sin placer)',
      'Consumo compulsivo',
      'Anhedonia: incapacidad de sentir placer'
    ],
    ejemplo: 'Netflix: 3 horas de series y sensación de vacío.'
  },
  [PatologiaFisher.REFLEXIVIDAD_IMPOTENTE]: {
    descripcion: 'Sabemos que el sistema nos explota, pero seguimos participando. Cinismo como defensa.',
    sintomas: [
      '"Sé que es malo, pero..."',
      'Ironía como distancia (sin compromiso)',
      'Crítica sin praxis',
      'Consumo "consciente" que no cambia nada'
    ],
    ejemplo: 'Comprar en Amazon sabiendo las condiciones laborales. "No hay otra opción".'
  }
};

// ============================================================================
// ERIC SADIN: Infocracia y Silicolonización
// ============================================================================

export enum PatologiaSadin {
  /** Infocracia: poder de la información sobre la política */
  INFOCRACIA = 'infocracia',
  /** Silicolonización: colonización de la vida por Silicon Valley */
  SILICOLONIZACION = 'silicolonizacion',
  /** IA como autoridad epistémica */
  IA_COMO_ORACULO = 'ia_como_oraculo'
}

export const PATOLOGIAS_SADIN: Record<PatologiaSadin, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaSadin.INFOCRACIA]: {
    descripcion: 'El poder ya no reside en las instituciones políticas, sino en quien controla la información.',
    sintomas: [
      'Google/Meta/Amazon como nuevos Estados',
      'Algoritmos que deciden qué vemos',
      'Desinformación sistémica',
      'Verdad como trending topic'
    ],
    ejemplo: 'Twitter (X) como plaza pública privatizada donde Musk decide qué se amplifica.'
  },
  [PatologiaSadin.SILICOLONIZACION]: {
    descripcion: 'Silicon Valley coloniza todas las esferas de la vida: salud, educación, amor, política.',
    sintomas: [
      'Uberización del trabajo',
      'Dataficación de la salud (cuantified self)',
      'Educación como consumo de contenido',
      'Amor algorítmico (Tinder, Bumble)'
    ],
    ejemplo: 'Google Classroom: la educación como producto de Google.'
  },
  [PatologiaSadin.IA_COMO_ORACULO]: {
    descripcion: 'La IA se convierte en autoridad epistémica. "Lo dice la IA" sustituye al argumento racional.',
    sintomas: [
      'Delegación de decisiones en algoritmos',
      'ChatGPT como oráculo de Delfos',
      'Pérdida de autonomía intelectual',
      'Tecnosolucionismo (la IA resolverá todo)'
    ],
    ejemplo: 'Jueces que usan algoritmos de "predicción de reincidencia" sin entender el sesgo.'
  }
};

// ============================================================================
// FRANCO BERARDI (BIFO): Semio-capitalismo
// ============================================================================

export enum PatologiaBerardi {
  /** Semiocapitalismo: explotación del signo y la comunicación */
  SEMIOCAPITALISMO = 'semiocapitalismo',
  /** Pánico y depresión colectiva */
  PANICO_DEPRESION = 'panico_depresion',
  /** Precarización cognitiva */
  PRECARIZACION_COGNITIVA = 'precarizacion_cognitiva'
}

export const PATOLOGIAS_BERARDI: Record<PatologiaBerardi, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaBerardi.SEMIOCAPITALISMO]: {
    descripcion: 'El capitalismo ya no explota solo el cuerpo (fordismo), sino la mente y la comunicación.',
    sintomas: [
      'Trabajo inmaterial (programadores, creativos)',
      'Explotación de la atención',
      'Comunicación como mercancía',
      'Burnout como epidemia'
    ],
    ejemplo: 'Influencers: vender la propia vida como contenido.'
  },
  [PatologiaBerardi.PANICO_DEPRESION]: {
    descripcion: 'Pánico (aceleración) y depresión (desaceleración) como dos caras de la misma moneda capitalista.',
    sintomas: [
      'Ansiedad generalizada',
      'Ataques de pánico sin causa aparente',
      'Depresión post-productividad',
      'Colapso del sistema nervioso'
    ],
    ejemplo: 'Generación Z: la más ansiosa y deprimida de la historia.'
  },
  [PatologiaBerardi.PRECARIZACION_COGNITIVA]: {
    descripcion: 'El trabajo cognitivo está precarizado. Los "knowledge workers" son el nuevo proletariado.',
    sintomas: [
      'Freelancing obligatorio',
      'Contratos temporales',
      'Fragmentación laboral',
      'Inseguridad existencial'
    ],
    ejemplo: 'Riders de apps: cognitariado sin derechos laborales.'
  }
};

// ============================================================================
// TECNOFEUDALISMO: Varoufakis + Sadin
// ============================================================================

export interface AnalisisTecnofeudalismo {
  es_tecnofeudalista: boolean;
  tipo_renta: 'extraccion_atencion' | 'suscripcion' | 'datos' | 'plataforma' | null;
  nivel_servidumbre: 'bajo' | 'medio' | 'alto';
  diagnostico: string;
}

export function detectarTecnofeudalismo(descripcion: string): AnalisisTecnofeudalismo {
  const textoLower = descripcion.toLowerCase();

  // Detectar extracción de renta
  const sintomasRenta = [
    'suscripción',
    'premium',
    'freemium',
    'anuncios',
    'ads',
    'datos',
    'plataforma',
    'comisión',
    'intermediario'
  ];

  const matchRenta = sintomasRenta.filter(s => textoLower.includes(s));

  if (matchRenta.length === 0) {
    return {
      es_tecnofeudalista: false,
      tipo_renta: null,
      nivel_servidumbre: 'bajo',
      diagnostico: 'No se detecta extracción de renta digital. Posible economía industrial clásica.'
    };
  }

  // Determinar tipo de renta
  let tipo_renta: AnalisisTecnofeudalismo['tipo_renta'] = 'plataforma';
  if (textoLower.includes('atencion') || textoLower.includes('ads')) {
    tipo_renta = 'extraccion_atencion';
  } else if (textoLower.includes('suscripcion') || textoLower.includes('premium')) {
    tipo_renta = 'suscripcion';
  } else if (textoLower.includes('datos')) {
    tipo_renta = 'datos';
  }

  return {
    es_tecnofeudalista: true,
    tipo_renta,
    nivel_servidumbre: matchRenta.length > 3 ? 'alto' : matchRenta.length > 1 ? 'medio' : 'bajo',
    diagnostico: `TECNOFEUDALISMO detectado. Tipo: ${tipo_renta}. Los usuarios son "siervos digitales" que pagan renta mediante ${tipo_renta === 'extraccion_atencion' ? 'su atención' : tipo_renta === 'datos' ? 'sus datos personales' : 'subscripciones'}.`
  };
}
