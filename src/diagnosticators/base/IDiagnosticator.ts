// ============================================================================
// IDIAGNOSTICATOR - Interface for cultural pathology diagnosticators
// ============================================================================

import { Diagnosis } from './Diagnosis.js';

/**
 * Interface that all cultural diagnosticators must implement
 *
 * Each diagnosticator represents a specific critical theorist's framework:
 * - Layer 1: Philosophical Materialism (Bueno, Maestro, Armesilla)
 * - Layer 2: Cultural Diagnosis (Han, Rosa, Fisher, Sadin, Berardi)
 * - Layer 3: Emotional Economy (Illouz, Dubet, Sandel)
 * - Layer 4: Speculative Realism (Harman, Morton, Meillassoux) [future]
 */
export interface IDiagnosticator {
  /** Name of the diagnosticator (usually the theorist's name) */
  readonly name: string;

  /** Layer number (1-4) */
  readonly layer: 1 | 2 | 3 | 4;

  /** Short description of the diagnostic framework */
  readonly description: string;

  /**
   * Perform diagnosis on a given description
   * @param description The text to analyze
   * @returns Diagnosis result with pathology, confidence, symptoms, etc.
   */
  diagnose(description: string): Diagnosis;

  /**
   * Check if this diagnosticator can analyze the given description
   * Used for routing and optimization
   * @param description The text to check
   * @returns true if this diagnosticator is relevant for the description
   */
  canDiagnose(description: string): boolean;

  /**
   * Get all pathologies that this diagnosticator can detect
   * @returns Array of pathology names
   */
  getPathologies(): string[];
}

/**
 * Extended interface for diagnosticators that support multiple pathologies
 */
export interface IMultiPathologyDiagnosticator extends IDiagnosticator {
  /**
   * Diagnose all pathologies at once
   * @param description The text to analyze
   * @returns Array of diagnoses (one per pathology found)
   */
  diagnoseAll(description: string): Diagnosis[];
}
