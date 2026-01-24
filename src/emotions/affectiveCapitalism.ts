// ============================================================================
// LAYER 3: ANÁLISIS EMOCIONAL - Pasiones Tristes y Capitalismo Afectivo
// ============================================================================

/**
 * ECONOMÍA POLÍTICA DE LAS EMOCIONES
 *
 * Basado en:
 * - Eva Illouz: Capitalismo emocional, El consumo de la utopía romántica
 * - François Dubet: La época de las pasiones tristes
 * - Michael Sandel: La tiranía del mérito
 */

// ============================================================================
// EVA ILLOUZ: Capitalismo Emocional
// ============================================================================

export enum PatologiaIllouz {
  /** Mercantilización de las emociones */
  CAPITALISMO_EMOCIONAL = 'capitalismo_emocional',
  /** Amor como transacción económica */
  AMOR_LIQUIDO = 'amor_liquido',
  /** Terapeutización de la vida */
  TERAPEUTIZACION = 'terapeutizacion',
  /** Elección como carga (paradoja de la abundancia) */
  TIRANIA_DE_LA_ELECCION = 'tirania_de_la_eleccion'
}

export const PATOLOGIAS_ILLOUZ: Record<PatologiaIllouz, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaIllouz.CAPITALISMO_EMOCIONAL]: {
    descripcion: 'Las emociones se convierten en mercancía. El afecto es trabajo (emotional labor).',
    sintomas: [
      'Inteligencia emocional como skill laboral',
      'Coaching emocional como industria',
      'Gestión de emociones en el trabajo',
      'Burnout emocional'
    ],
    ejemplo: 'Azafatas que deben "sonreír siempre": el afecto como parte del contrato laboral.'
  },
  [PatologiaIllouz.AMOR_LIQUIDO]: {
    descripcion: 'El amor romántico se organiza como mercado. Hay "value" y "precio" de cada persona.',
    sintomas: [
      'Apps de citas como marketplace',
      'Ghosting como norma',
      'FOMO afectivo (fear of missing out)',
      'Relaciones como portfolio de inversión'
    ],
    ejemplo: 'Tinder: swipe left/right como metáfora del consumo afectivo.'
  },
  [PatologiaIllouz.TERAPEUTIZACION]: {
    descripcion: 'La vida se interpreta mediante el lenguaje terapéutico. Todo es "trauma" y "sanación".',
    sintomas: [
      'Psicologización del conflicto político',
      '"Red flags" y "toxic" como categorías universales',
      'Terapia como religión secular',
      'Intimidad como performance pública (redes sociales)'
    ],
    ejemplo: 'TikTok therapy: diagnósticos psicológicos virales sin profesionales.'
  },
  [PatologiaIllouz.TIRANIA_DE_LA_ELECCION]: {
    descripcion: 'La abundancia de opciones genera parálisis y ansiedad. "Podría haber elegido mejor".',
    sintomas: [
      'Paradoja de la elección (Barry Schwartz)',
      'Análisis-parálisis',
      'FOMO constante',
      'Insatisfacción permanente'
    ],
    ejemplo: 'Netflix: 10.000 opciones y 30 minutos eligiendo sin ver nada.'
  }
};

// ============================================================================
// FRANÇOIS DUBET: Pasiones Tristes
// ============================================================================

export enum PasionTriste {
  /** Resentimiento: "Otros tienen lo que yo merezco" */
  RESENTIMIENTO = 'resentimiento',
  /** Humillación: Percepción de injusticia personal */
  HUMILLACION = 'humillacion',
  /** Desprecio: "Los de abajo no merecen nada" */
  DESPRECIO = 'desprecio',
  /** Envidia: Comparación constante */
  ENVIDIA = 'envidia'
}

export const PASIONES_TRISTES: Record<PasionTriste, { descripcion: string; origen: string; consecuencia: string }> = {
  [PasionTriste.RESENTIMIENTO]: {
    descripcion: 'Sentimiento de que otros tienen privilegios injustos. La meritocracia genera resentimiento contra "los que no se lo merecen".',
    origen: 'Promesa meritocrática incumplida + desigualdad creciente',
    consecuencia: 'Populismo de derecha, xenofobia, clasismo'
  },
  [PasionTriste.HUMILLACION]: {
    descripcion: 'Experiencia de ser tratado como inferior. Pérdida de dignidad.',
    origen: 'Desempleo, precarización, descenso de clase',
    consecuencia: 'Rabia política, búsqueda de chivos expiatorios'
  },
  [PasionTriste.DESPRECIO]: {
    descripcion: 'Mirada desde arriba. "Los pobres son pobres porque quieren".',
    origen: 'Ideología meritocrática + elitismo',
    consecuencia: 'Destrucción de solidaridad, darwinismo social'
  },
  [PasionTriste.ENVIDIA]: {
    descripcion: 'Comparación constante con otros. Instagram como máquina de envidia.',
    origen: 'Redes sociales + cultura del éxito',
    consecuencia: 'Depresión, ansiedad, consumo compensatorio'
  }
};

export function detectarPasionTriste(descripcion: string): { pasion: PasionTriste | null; confianza: number; razon: string } {
  const textoLower = descripcion.toLowerCase();

  // Detectar resentimiento
  const sintomasResentimiento = [
    'no es justo',
    'ellos tienen',
    'privilegio',
    'no se lo merecen',
    'injusto',
    'cuota',
    'ventaja'
  ];
  const matchResentimiento = sintomasResentimiento.filter(s => textoLower.includes(s)).length;

  // Detectar humillación
  const sintomasHumillacion = [
    'me tratan como',
    'inferior',
    'dignidad',
    'respeto',
    'desprecian',
    'menosprecio'
  ];
  const matchHumillacion = sintomasHumillacion.filter(s => textoLower.includes(s)).length;

  // Detectar desprecio
  const sintomasDesprecio = [
    'son vagos',
    'no quieren trabajar',
    'pobres porque quieren',
    'meritocracia',
    'esfuerzo'
  ];
  const matchDesprecio = sintomasDesprecio.filter(s => textoLower.includes(s)).length;

  // Detectar envidia
  const sintomasEnvidia = [
    'tiene más que yo',
    'comparar',
    'instagram',
    'otros viajan',
    'éxito ajeno'
  ];
  const matchEnvidia = sintomasEnvidia.filter(s => textoLower.includes(s)).length;

  const max = Math.max(matchResentimiento, matchHumillacion, matchDesprecio, matchEnvidia);

  if (max === 0) {
    return { pasion: null, confianza: 0, razon: 'No se detectaron pasiones tristes' };
  }

  if (matchResentimiento === max) {
    return {
      pasion: PasionTriste.RESENTIMIENTO,
      confianza: Math.min(matchResentimiento / sintomasResentimiento.length, 1),
      razon: 'Resentimiento detectado: percepción de injusticia meritocrática'
    };
  }

  if (matchHumillacion === max) {
    return {
      pasion: PasionTriste.HUMILLACION,
      confianza: Math.min(matchHumillacion / sintomasHumillacion.length, 1),
      razon: 'Humillación detectada: pérdida de dignidad y respeto'
    };
  }

  if (matchDesprecio === max) {
    return {
      pasion: PasionTriste.DESPRECIO,
      confianza: Math.min(matchDesprecio / sintomasDesprecio.length, 1),
      razon: 'Desprecio detectado: ideología meritocrática elitista'
    };
  }

  return {
    pasion: PasionTriste.ENVIDIA,
    confianza: Math.min(matchEnvidia / sintomasEnvidia.length, 1),
    razon: 'Envidia detectada: comparación social constante'
  };
}

// ============================================================================
// MICHAEL SANDEL: La Tiranía del Mérito
// ============================================================================

export enum PatologiaSandel {
  /** Meritocracia como teología del éxito */
  TIRANIA_DEL_MERITO = 'tirania_del_merito',
  /** Hubris de los "ganadores" */
  HUBRIS_MERITOCRATICO = 'hubris_meritocratico',
  /** Humillación de los "perdedores" */
  HUMILLACION_MERITOCRATICA = 'humillacion_meritocratica'
}

export const PATOLOGIAS_SANDEL: Record<PatologiaSandel, { descripcion: string; sintomas: string[]; ejemplo: string }> = {
  [PatologiaSandel.TIRANIA_DEL_MERITO]: {
    descripcion: 'La meritocracia se convierte en religión. "Si tienes éxito, te lo mereces. Si fracasas, es tu culpa".',
    sintomas: [
      'Culpabilización del fracaso',
      'Glorificación del éxito individual',
      '"Pull yourself up by your bootstraps"',
      'Negación de la suerte y las estructuras'
    ],
    ejemplo: 'Silicon Valley: los billonarios como "héroes meritocráticos" ignorando herencia, contactos, azar.'
  },
  [PatologiaSandel.HUBRIS_MERITOCRATICO]: {
    descripcion: 'Los "ganadores" creen que su éxito es puramente mérito propio. Soberbia.',
    sintomas: [
      '"Lo logré solo"',
      'Desprecio a los "fracasados"',
      'Tecnocracia: gobierno de los "mejores"',
      'Elitismo credencialista'
    ],
    ejemplo: 'Consultores de McKinsey: la élite que se cree moralmente superior.'
  },
  [PatologiaSandel.HUMILLACION_MERITOCRATICA]: {
    descripcion: 'Los "perdedores" internalizan el fracaso como defecto personal. Auto-desprecio.',
    sintomas: [
      '"No fui lo suficientemente inteligente"',
      'Depresión post-fracaso',
      'Vergüenza de clase',
      'Ocultar orígenes humildes'
    ],
    ejemplo: 'Trabajadores "low-skill" que sienten que "no valieron la pena" tras la automatización.'
  }
};

// ============================================================================
// HERRAMIENTAS DE ANÁLISIS EMOCIONAL
// ============================================================================

export interface AnalisisEmocional {
  pasiones_tristes: PasionTriste[];
  patologias_illouz: PatologiaIllouz[];
  patologias_sandel: PatologiaSandel[];
  diagnostico_emocional: string;
  origen_estructural: string;
  salida_posible: string;
}

export function analizarEconomiaEmocional(descripcion: string): AnalisisEmocional {
  const pasionDetectada = detectarPasionTriste(descripcion);
  const textoLower = descripcion.toLowerCase();

  // Detectar patologías de Illouz
  const patologiasIllouz: PatologiaIllouz[] = [];
  if (textoLower.includes('amor') || textoLower.includes('pareja') || textoLower.includes('citas')) {
    patologiasIllouz.push(PatologiaIllouz.AMOR_LIQUIDO);
  }
  if (textoLower.includes('terapia') || textoLower.includes('trauma') || textoLower.includes('sanar')) {
    patologiasIllouz.push(PatologiaIllouz.TERAPEUTIZACION);
  }
  if (textoLower.includes('elegir') || textoLower.includes('opciones') || textoLower.includes('decidir')) {
    patologiasIllouz.push(PatologiaIllouz.TIRANIA_DE_LA_ELECCION);
  }

  // Detectar patologías de Sandel
  const patologiasSandel: PatologiaSandel[] = [];
  if (textoLower.includes('merito') || textoLower.includes('esfuerzo') || textoLower.includes('talento')) {
    patologiasSandel.push(PatologiaSandel.TIRANIA_DEL_MERITO);
  }
  if (textoLower.includes('ganador') || textoLower.includes('elite') || textoLower.includes('exito')) {
    patologiasSandel.push(PatologiaSandel.HUBRIS_MERITOCRATICO);
  }
  if (textoLower.includes('fracaso') || textoLower.includes('culpa') || textoLower.includes('verguenza')) {
    patologiasSandel.push(PatologiaSandel.HUMILLACION_MERITOCRATICA);
  }

  const pasionesTristesList = pasionDetectada.pasion ? [pasionDetectada.pasion] : [];

  return {
    pasiones_tristes: pasionesTristesList,
    patologias_illouz: patologiasIllouz,
    patologias_sandel: patologiasSandel,
    diagnostico_emocional: pasionDetectada.pasion
      ? `Pasión triste dominante: ${pasionDetectada.pasion}. ${pasionDetectada.razon}`
      : 'No se detectan pasiones tristes dominantes.',
    origen_estructural: pasionDetectada.pasion
      ? PASIONES_TRISTES[pasionDetectada.pasion].origen
      : 'Análisis pendiente',
    salida_posible: pasionDetectada.pasion === PasionTriste.RESENTIMIENTO
      ? 'Reconstruir solidaridad de clase. Cuestionar la meritocracia como mito.'
      : pasionDetectada.pasion === PasionTriste.HUMILLACION
      ? 'Restaurar dignidad mediante reconocimiento mutuo y derechos universales.'
      : 'Análisis pendiente'
  };
}
