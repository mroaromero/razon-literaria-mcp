// ============================================================================
// BASE DIAGNOSTICATOR - Abstract base class for all diagnosticators
// ============================================================================

import { IDiagnosticator } from './IDiagnosticator.js';
import { Diagnosis } from './Diagnosis.js';

/**
 * Abstract base class providing common functionality for diagnosticators
 */
export abstract class BaseDiagnosticator implements IDiagnosticator {
  abstract readonly name: string;
  abstract readonly layer: 1 | 2 | 3 | 4;
  abstract readonly description: string;

  /**
   * Must be implemented by subclasses
   */
  abstract diagnose(description: string): Diagnosis;

  /**
   * Default implementation: check for keywords
   * Can be overridden by subclasses for more sophisticated logic
   */
  canDiagnose(description: string): boolean {
    const keywords = this.getKeywords();
    return this.detectKeywords(description, keywords);
  }

  /**
   * Get pathologies - should be overridden by subclasses
   */
  abstract getPathologies(): string[];

  /**
   * Get keywords for detection - should be overridden by subclasses
   */
  protected abstract getKeywords(): string[];

  /**
   * Helper: Detect if text contains any of the keywords
   */
  protected detectKeywords(text: string, keywords: string[]): boolean {
    const textLower = text.toLowerCase();
    return keywords.some(keyword => textLower.includes(keyword.toLowerCase()));
  }

  /**
   * Helper: Count keyword matches
   */
  protected countKeywordMatches(text: string, keywords: string[]): number {
    const textLower = text.toLowerCase();
    return keywords.filter(keyword => textLower.includes(keyword.toLowerCase())).length;
  }

  /**
   * Helper: Calculate confidence based on keyword matches
   */
  protected calculateConfidence(matches: number, total: number): number {
    if (total === 0) return 0;
    const ratio = matches / total;
    // Convert to 0-1 scale with sigmoid-like curve
    return Math.min(0.95, ratio * 1.2);
  }

  /**
   * Helper: Create a diagnosis object
   */
  protected createDiagnosis(
    pathology: string,
    confidence: number,
    description: string,
    symptoms: string[],
    recommendation: string,
    examples?: string[],
    relatedConcepts?: string[]
  ): Diagnosis {
    return {
      pathology,
      confidence,
      description,
      symptoms,
      recommendation,
      examples,
      relatedConcepts
    };
  }
}
