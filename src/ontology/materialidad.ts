// ============================================================================
// ONTOLOGÍA: Géneros de Materialidad (M1, M2, M3)
// ============================================================================

/**
 * MATERIALISMO ONTOLÓGICO
 * "El ser, o es material, o no es." — Gustavo Bueno
 *
 * La materialidad se divide en tres géneros irreductibles:
 */

export enum GeneroMaterialidad {
  /** M1: Físico-corpóreo (cuerpos, dispositivos, infraestructura) */
  M1 = 'M1',
  /** M2: Psicológico-subjetivo (procesos mentales, emociones, atención) */
  M2 = 'M2',
  /** M3: Lógico-abstracto (ideas, estructuras, instituciones, relaciones) */
  M3 = 'M3'
}

export interface MaterialidadInfo {
  nombre: string;
  descripcion: string;
  ejemplos: string[];
}

export const MATERIALIDADES: Record<GeneroMaterialidad, MaterialidadInfo> = {
  [GeneroMaterialidad.M1]: {
    nombre: 'Físico-corpóreo',
    descripcion: 'Entidades con extensión espacial, masa, energía. El primer estrato ontológico.',
    ejemplos: [
      'Cuerpos humanos',
      'Libros físicos',
      'Dispositivos electrónicos',
      'Infraestructura urbana',
      'Moléculas y átomos',
      'Ondas electromagnéticas'
    ]
  },
  [GeneroMaterialidad.M2]: {
    nombre: 'Psicológico-subjetivo',
    descripcion: 'Fenómenos mentales, procesos cognitivos, experiencias subjetivas.',
    ejemplos: [
      'Atención y concentración',
      'Emociones (miedo, alegría)',
      'Memorias y recuerdos',
      'Intenciones y voliciones',
      'Percepciones sensoriales',
      'Estados de conciencia'
    ]
  },
  [GeneroMaterialidad.M3]: {
    nombre: 'Lógico-abstracto',
    descripcion: 'Estructuras lógicas, ideas objetivadas, instituciones, relaciones formales.',
    ejemplos: [
      'Teorema de Pitágoras',
      'La institución del Estado',
      'Reglas gramaticales',
      'Sistemas de numeración',
      'Leyes científicas',
      'Categorías conceptuales'
    ]
  }
};

/**
 * EJES GNOSEOLÓGICOS
 * Dimensiones del espacio gnoseológico según Gustavo Bueno
 */
export enum EjeGnoseologico {
  /** Eje Sintáctico: Operaciones sobre signos y articulaciones formales */
  SINTACTICO = 'sintactico',
  /** Eje Semántico: Referencia a fenómenos y esencias materiales */
  SEMANTICO = 'semantico',
  /** Eje Pragmático: Dimensión del sujeto operatorio */
  PRAGMATICO = 'pragmatico'
}

export interface EjeInfo {
  nombre: string;
  descripcion: string;
  enfoque: string;
}

export const EJES: Record<EjeGnoseologico, EjeInfo> = {
  [EjeGnoseologico.SINTACTICO]: {
    nombre: 'Eje Sintáctico',
    descripcion: 'Operaciones formales sobre términos y relaciones',
    enfoque: 'La articulación interna del discurso científico'
  },
  [EjeGnoseologico.SEMANTICO]: {
    nombre: 'Eje Semántico',
    descripcion: 'Referencia a fenómenos y esencias materiales',
    enfoque: 'La conexión entre signos y referentes'
  },
  [EjeGnoseologico.PRAGMATICO]: {
    nombre: 'Eje Pragmático',
    descripcion: 'El sujeto operatorio que construye conocimiento',
    enfoque: 'Las operaciones del científico/filósofo'
  }
};

/**
 * CATEGORÍAS OPERATORIAS UNIVERSALES
 * Generalización de los roles literarios a roles gnoseológicos
 */
export enum CategoriaOperatoria {
  /** Agente que ejecuta operaciones (antes: Autor) */
  AGENTE_OPERATORIO = 'Agente_Operatorio',
  /** Material sobre el que se opera (antes: Obra) */
  MATERIAL_FORMADO = 'Material_Formado',
  /** Sujeto que recibe/reconstruye conocimiento (antes: Lector) */
  SUJETO_RECEPTOR = 'Sujeto_Receptor',
  /** Operador crítico que analiza (antes: Transductor) */
  OPERADOR_CRITICO = 'Operador_Critico'
}

export interface CategoriaInfo {
  nombre: string;
  descripcion: string;
  ejemplos_literarios: string[];
  ejemplos_ciencias_sociales: string[];
  ejemplos_economia: string[];
}

export const CATEGORIAS: Record<CategoriaOperatoria, CategoriaInfo> = {
  [CategoriaOperatoria.AGENTE_OPERATORIO]: {
    nombre: 'Agente Operatorio',
    descripcion: 'El sujeto que fabrica conocimiento mediante operaciones',
    ejemplos_literarios: ['Cervantes como autor del Quijote'],
    ejemplos_ciencias_sociales: ['Investigador que diseña encuestas', 'Etnógrafo en trabajo de campo'],
    ejemplos_economia: ['Banco Central que fija tipos de interés', 'Empresa que establece precios']
  },
  [CategoriaOperatoria.MATERIAL_FORMADO]: {
    nombre: 'Material Formado',
    descripcion: 'El objeto constituido por las operaciones gnoseológicas',
    ejemplos_literarios: ['El Quijote como texto'],
    ejemplos_ciencias_sociales: ['Datos estadísticos procesados', 'Corpus de entrevistas'],
    ejemplos_economia: ['Índice de precios al consumo', 'Tabla input-output']
  },
  [CategoriaOperatoria.SUJETO_RECEPTOR]: {
    nombre: 'Sujeto Receptor',
    descripcion: 'Quien reconstruye operatoriamente el conocimiento transmitido (transducción)',
    ejemplos_literarios: ['Lector del Quijote'],
    ejemplos_ciencias_sociales: ['Estudiante que aprende sociología', 'Público de un documental'],
    ejemplos_economia: ['Inversor que lee informes', 'Consumidor que interpreta señales de precio']
  },
  [CategoriaOperatoria.OPERADOR_CRITICO]: {
    nombre: 'Operador Crítico',
    descripcion: 'Instancia que analiza, impugna, dialectiza el conocimiento construido',
    ejemplos_literarios: ['Crítico literario que analiza el Quijote'],
    ejemplos_ciencias_sociales: ['Metodólogo que evalúa diseños de investigación', 'Epistemólogo de las ciencias sociales'],
    ejemplos_economia: ['Auditor que revisa modelos económicos', 'Historiador del pensamiento económico']
  }
};
