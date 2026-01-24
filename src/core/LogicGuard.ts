// ============================================================================
// LOGIC GUARD - Gnoseological Validation System
// ============================================================================

import { MaterialityGenus, GnoseologicalState, FallacyType, ValidationResult } from '../diagnosticators/base/Diagnosis.js';

/**
 * LOGIC GUARD (Policía Lógico)
 *
 * Validation system that prevents invalid gnoseological operations.
 * Acts as firewall against idealism, theoreticism, and other fallacies.
 *
 * Based on Gustavo Bueno's Philosophical Materialism.
 */
export class LogicGuard {
  private state: GnoseologicalState;

  constructor() {
    this.state = this.initialState();
  }

  private initialState(): GnoseologicalState {
    return {
      m1Terms: [],
      m2Terms: [],
      m3Terms: [],
      relations: [],
      fieldOpened: false,
      termsIdentified: false,
      relationsEstablished: false,
      critiquePerformed: false,
      fallaciesDetected: []
    };
  }

  /**
   * RULE 1: BLOCK_CRITIQUE_WITHOUT_ONTOLOGY
   *
   * Do not allow critique without having identified M1 materiality.
   * Critical analysis without physical referents is idealism.
   */
  validateCritique(): ValidationResult {
    if (this.state.m1Terms.length === 0) {
      return {
        valid: false,
        error: 'GNOSEOLOGICAL ERROR: Critique without M1 materiality. Define physical body before criticizing.'
      };
    }
    return { valid: true };
  }

  /**
   * RULE 2: DETECT_IDEALISM
   *
   * Detect abstract concepts (M3) without M1 referent.
   * M3 without M1 is metaphysics.
   */
  validateIdealism(): ValidationResult {
    if (this.state.m3Terms.length > 0 && this.state.m1Terms.length === 0) {
      return {
        valid: false,
        error: `ERROR: Metaphysics detected. M3 terms "${this.state.m3Terms.join(', ')}" without M1 referent. Define physical body.`
      };
    }
    return { valid: true };
  }

  /**
   * RULE 3: REQUIRE_CIRCULARITY
   *
   * Validate that transduction connects result (M3) with origin (M1).
   * Gnoseological closure must be circular.
   */
  validateCircularity(): ValidationResult {
    if (this.state.m3Terms.length > 0 && this.state.m1Terms.length === 0) {
      return {
        valid: false,
        error: 'ERROR: Missing circularity. Transduction must connect M3 with M1.'
      };
    }

    if (this.state.relations.length === 0) {
      return {
        valid: false,
        error: 'ERROR: Missing circularity. No relations established between terms.'
      };
    }

    return { valid: true };
  }

  /**
   * RULE 4: VALIDATE_TERMS_BEFORE_RELATIONS
   *
   * Cannot establish relations without terms.
   */
  validateRelations(): ValidationResult {
    const totalTerms = this.state.m1Terms.length + this.state.m2Terms.length + this.state.m3Terms.length;

    if (this.state.relations.length > 0 && totalTerms < 2) {
      return {
        valid: false,
        error: 'ERROR: Relations without terms. Identify at least 2 terms before relating.'
      };
    }

    return { valid: true };
  }

  /**
   * RULE 5: DETECT_FALLACIES_IN_TEXT
   *
   * Analyze text to detect gnoseological fallacies.
   */
  analyzeText(text: string): { fallacies: FallacyType[]; warnings: string[] } {
    const detection = this.detectFallacy(text);
    const warnings: string[] = [];

    if (detection.fallacy && detection.confidence > 0.3) {
      this.state.fallaciesDetected.push(detection.fallacy);
      warnings.push(`⚠️ FALLACY DETECTED: ${detection.fallacy.toUpperCase()}`);
      warnings.push(`   Reason: ${detection.reason}`);
      warnings.push(`   Confidence: ${(detection.confidence * 100).toFixed(0)}%`);
    }

    return {
      fallacies: this.state.fallaciesDetected,
      warnings
    };
  }

  /**
   * Register term in corresponding materiality genus
   */
  registerTerm(term: string, genus: MaterialityGenus): void {
    switch (genus) {
      case MaterialityGenus.M1:
        if (!this.state.m1Terms.includes(term)) {
          this.state.m1Terms.push(term);
        }
        break;
      case MaterialityGenus.M2:
        if (!this.state.m2Terms.includes(term)) {
          this.state.m2Terms.push(term);
        }
        break;
      case MaterialityGenus.M3:
        if (!this.state.m3Terms.includes(term)) {
          this.state.m3Terms.push(term);
        }
        break;
    }
    this.state.termsIdentified = true;
  }

  /**
   * Register relation between terms
   */
  registerRelation(relation: string): void {
    if (!this.state.relations.includes(relation)) {
      this.state.relations.push(relation);
      this.state.relationsEstablished = true;
    }
  }

  /**
   * Open categorical field
   */
  openField(): void {
    this.state.fieldOpened = true;
  }

  /**
   * Mark that critique has been performed
   */
  markCritique(): void {
    this.state.critiquePerformed = true;
  }

  /**
   * Validate final transduction
   */
  validateTransduction(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.state.fieldOpened) {
      errors.push('Categorical field not opened (missing "begin" tag)');
    }

    if (!this.state.termsIdentified) {
      errors.push('No terms identified (missing "terminate" tag)');
    }

    if (this.state.m1Terms.length === 0) {
      errors.push('No M1 materiality identified (physical bodies)');
    }

    const circularityValidation = this.validateCircularity();
    if (!circularityValidation.valid) {
      errors.push(circularityValidation.error!);
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get current state
   */
  getState(): GnoseologicalState {
    return { ...this.state };
  }

  /**
   * Reset state
   */
  reset(): void {
    this.state = this.initialState();
  }

  /**
   * Generate validation report
   */
  generateReport(): string {
    const lines: string[] = [];
    lines.push('═══════════════════════════════════════════════');
    lines.push('           LOGIC GUARD REPORT                  ');
    lines.push('═══════════════════════════════════════════════');
    lines.push('');

    // Field state
    lines.push('📊 GNOSEOLOGICAL FIELD STATE:');
    lines.push(`   Field opened: ${this.state.fieldOpened ? '✓' : '✗'}`);
    lines.push(`   Terms identified: ${this.state.termsIdentified ? '✓' : '✗'}`);
    lines.push(`   Relations established: ${this.state.relationsEstablished ? '✓' : '✗'}`);
    lines.push(`   Critique performed: ${this.state.critiquePerformed ? '✓' : '✗'}`);
    lines.push('');

    // Materialities
    lines.push('🧬 IDENTIFIED MATERIALITIES:');
    lines.push(`   M1 (Physical): ${this.state.m1Terms.length} terms`);
    if (this.state.m1Terms.length > 0) {
      lines.push(`      → ${this.state.m1Terms.join(', ')}`);
    }
    lines.push(`   M2 (Psychological): ${this.state.m2Terms.length} terms`);
    if (this.state.m2Terms.length > 0) {
      lines.push(`      → ${this.state.m2Terms.join(', ')}`);
    }
    lines.push(`   M3 (Logical): ${this.state.m3Terms.length} terms`);
    if (this.state.m3Terms.length > 0) {
      lines.push(`      → ${this.state.m3Terms.join(', ')}`);
    }
    lines.push('');

    // Relations
    lines.push(`📐 RELATIONS: ${this.state.relations.length}`);
    if (this.state.relations.length > 0) {
      this.state.relations.forEach(r => lines.push(`   → ${r}`));
    }
    lines.push('');

    // Fallacies
    if (this.state.fallaciesDetected.length > 0) {
      lines.push('⚠️  FALLACIES DETECTED:');
      this.state.fallaciesDetected.forEach(f => lines.push(`   → ${f.toUpperCase()}`));
      lines.push('');
    }

    // Validations
    lines.push('🔒 VALIDATIONS:');
    const critiqueValidation = this.validateCritique();
    lines.push(`   Valid critique: ${critiqueValidation.valid ? '✓' : '✗ ' + critiqueValidation.error}`);

    const idealismValidation = this.validateIdealism();
    lines.push(`   No idealism: ${idealismValidation.valid ? '✓' : '✗ ' + idealismValidation.error}`);

    const circularityValidation = this.validateCircularity();
    lines.push(`   Circularity: ${circularityValidation.valid ? '✓' : '✗ ' + circularityValidation.error}`);

    lines.push('═══════════════════════════════════════════════');

    return lines.join('\n');
  }

  // ========================================================================
  // PRIVATE HELPERS
  // ========================================================================

  private detectFallacy(text: string): { fallacy: FallacyType | null; confidence: number; reason: string } {
    const textLower = text.toLowerCase();

    // Descriptivism detection (α without β)
    const descriptivismKeywords = ['datos', 'data', 'hechos', 'facts', 'evidencia', 'evidence', 'empírico', 'empirical'];
    const theoryKeywords = ['teoría', 'theory', 'modelo', 'model', 'hipótesis', 'hypothesis'];

    const descriptivismMatches = descriptivismKeywords.filter(k => textLower.includes(k)).length;
    const theoryMatches = theoryKeywords.filter(k => textLower.includes(k)).length;

    if (descriptivismMatches > 2 && theoryMatches === 0) {
      return {
        fallacy: FallacyType.DESCRIPTIVISM,
        confidence: 0.7,
        reason: 'Facts without theory (α without β). Data does not speak for itself.'
      };
    }

    // Theoreticism detection (β without α)
    if (theoryMatches > 2 && descriptivismMatches === 0) {
      return {
        fallacy: FallacyType.THEORETICISM,
        confidence: 0.7,
        reason: 'Theory without facts (β without α). Theory must be grounded in material phenomena.'
      };
    }

    // Adequationism detection (juxtaposition)
    const adequationismPhrases = ['por un lado', 'por otro lado', 'on one hand', 'on the other hand', 'both', 'ambos'];
    const adequationismMatches = adequationismPhrases.filter(p => textLower.includes(p)).length;

    if (adequationismMatches > 0 && descriptivismMatches > 0 && theoryMatches > 0) {
      return {
        fallacy: FallacyType.ADEQUATIONISM,
        confidence: 0.6,
        reason: 'Juxtaposition without conjugation (α + β). Apply CIRCULARITY: dialectical conjugation.'
      };
    }

    return { fallacy: null, confidence: 0, reason: 'No fallacy detected' };
  }
}
