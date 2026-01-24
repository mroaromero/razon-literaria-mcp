// ============================================================================
// DIAGNOSIS TYPES - Base types for cultural pathology diagnosis
// ============================================================================

/**
 * Diagnostic result from a cultural pathologist
 */
export interface Diagnosis {
  /** Name of the pathology detected */
  pathology: string;
  /** Confidence level (0-1) */
  confidence: number;
  /** Detailed description of the pathology */
  description: string;
  /** Observable symptoms */
  symptoms: string[];
  /** Recommended intervention or critique */
  recommendation: string;
  /** Examples of the pathology in practice */
  examples?: string[];
  /** Related concepts or cross-references */
  relatedConcepts?: string[];
}

/**
 * Complete diagnosis report from multiple diagnosticators
 */
export interface DiagnosisReport {
  /** Timestamp of diagnosis */
  timestamp: string;
  /** Total number of diagnosticators that analyzed */
  totalDiagnosticators: number;
  /** Individual diagnoses from each diagnosticator */
  diagnoses: DiagnosticatorResult[];
  /** Only critical pathologies (confidence > 0.7) */
  criticalPathologies: DiagnosticatorResult[];
  /** Aggregated summary */
  summary: string;
}

/**
 * Result from a single diagnosticator
 */
export interface DiagnosticatorResult {
  /** Name of the diagnosticator (author) */
  diagnosticator: string;
  /** Layer number (1-4) */
  layer: number;
  /** The diagnosis produced */
  diagnosis: Diagnosis;
}

/**
 * Validation result from Logic Guard
 */
export interface ValidationResult {
  /** Is the operation valid? */
  valid: boolean;
  /** Error message if invalid */
  error?: string;
  /** Warning message (non-blocking) */
  warning?: string;
}

/**
 * Gnoseological state for Logic Guard
 */
export interface GnoseologicalState {
  /** Terms identified in M1 (physical materiality) */
  m1Terms: string[];
  /** Terms identified in M2 (psychological materiality) */
  m2Terms: string[];
  /** Terms identified in M3 (logical materiality) */
  m3Terms: string[];
  /** Established relations */
  relations: string[];
  /** Has the categorical field been opened? */
  fieldOpened: boolean;
  /** Have terms been identified? */
  termsIdentified: boolean;
  /** Have relations been established? */
  relationsEstablished: boolean;
  /** Has critique been performed? */
  critiquePerformed: boolean;
  /** Fallacies detected */
  fallaciesDetected: FallacyType[];
}

/**
 * Types of gnoseological fallacies (Gustavo Bueno)
 */
export enum FallacyType {
  /** Descriptivism: α without β (facts without theory) */
  DESCRIPTIVISM = 'descriptivism',
  /** Theoreticism: β without α (theory without facts) */
  THEORETICISM = 'theoreticism',
  /** Adequationism: α + β (juxtaposition without conjugation) */
  ADEQUATIONISM = 'adequationism'
}

/**
 * Genera of materiality (Gustavo Bueno's ontology)
 */
export enum MaterialityGenus {
  /** M1: Physical-corporeal (bodies, devices, infrastructure) */
  M1 = 'M1',
  /** M2: Psychological-subjective (mental processes, emotions, attention) */
  M2 = 'M2',
  /** M3: Logical-abstract (ideas, structures, institutions, relations) */
  M3 = 'M3'
}
