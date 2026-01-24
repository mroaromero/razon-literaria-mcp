// ============================================================================
// CULTURAL PATHOLOGIST - Orchestrator for Multi-Layer Diagnosis
// ============================================================================

import { IDiagnosticator } from './base/IDiagnosticator.js';
import { Diagnosis, DiagnosisReport, DiagnosticatorResult } from './base/Diagnosis.js';

// Layer 2 diagnosticators
import { HanDiagnosticator } from './layer2/HanDiagnosticator.js';
import { RosaDiagnosticator } from './layer2/RosaDiagnosticator.js';
import { FisherDiagnosticator } from './layer2/FisherDiagnosticator.js';
import { SadinDiagnosticator } from './layer2/SadinDiagnosticator.js';
import { BerardiDiagnosticator } from './layer2/BerardiDiagnosticator.js';

// Layer 3 diagnosticators
import { IllouzDiagnosticator } from './layer3/IllouzDiagnosticator.js';
import { DubetDiagnosticator } from './layer3/DubetDiagnosticator.js';
import { SandelDiagnosticator } from './layer3/SandelDiagnosticator.js';

/**
 * Cultural Pathologist - Multi-layer diagnostic orchestrator
 *
 * Coordinates multiple diagnosticators across layers:
 * - Layer 2: Cultural Diagnosis (Han, Rosa, Fisher, Sadin, Berardi)
 * - Layer 3: Emotional Economy (Illouz, Dubet, Sandel)
 *
 * Layer 1 (Philosophical Materialism) is handled by LogicGuard separately.
 */
export class CulturalPathologist {
  private diagnosticators: IDiagnosticator[];

  constructor(customDiagnosticators?: IDiagnosticator[]) {
    if (customDiagnosticators) {
      this.diagnosticators = customDiagnosticators;
    } else {
      // Default configuration: all diagnosticators
      this.diagnosticators = [
        // Layer 2
        new HanDiagnosticator(),
        new RosaDiagnosticator(),
        new FisherDiagnosticator(),
        new SadinDiagnosticator(),
        new BerardiDiagnosticator(),
        // Layer 3
        new IllouzDiagnosticator(),
        new DubetDiagnosticator(),
        new SandelDiagnosticator()
      ];
    }
  }

  /**
   * Full diagnosis: run all diagnosticators
   */
  fullDiagnosis(description: string): DiagnosisReport {
    const results = this.diagnosticators
      .filter(d => d.canDiagnose(description))
      .map(d => this.createResult(d, description));

    const critical = results.filter(r => r.diagnosis.confidence > 0.7);

    return {
      timestamp: new Date().toISOString(),
      totalDiagnosticators: results.length,
      diagnoses: results,
      criticalPathologies: critical,
      summary: this.generateSummary(results, critical)
    };
  }

  /**
   * Diagnosis by specific layer
   */
  diagnoseByLayer(layer: number, description: string): DiagnosticatorResult[] {
    return this.diagnosticators
      .filter(d => d.layer === layer)
      .filter(d => d.canDiagnose(description))
      .map(d => this.createResult(d, description));
  }

  /**
   * Diagnosis by specific diagnosticator name
   */
  diagnoseByAuthor(authorName: string, description: string): Diagnosis | null {
    const diagnosticator = this.diagnosticators.find(
      d => d.name.toLowerCase().includes(authorName.toLowerCase())
    );

    if (!diagnosticator) {
      return null;
    }

    return diagnosticator.diagnose(description);
  }

  /**
   * Get all available diagnosticators
   */
  getDiagnosticators(): Array<{ name: string; layer: number; description: string }> {
    return this.diagnosticators.map(d => ({
      name: d.name,
      layer: d.layer,
      description: d.description
    }));
  }

  /**
   * Add a diagnosticator dynamically
   */
  addDiagnosticator(diagnosticator: IDiagnosticator): void {
    this.diagnosticators.push(diagnosticator);
  }

  /**
   * Remove a diagnosticator by name
   */
  removeDiagnosticator(name: string): boolean {
    const initialLength = this.diagnosticators.length;
    this.diagnosticators = this.diagnosticators.filter(d => d.name !== name);
    return this.diagnosticators.length < initialLength;
  }

  /**
   * Temporal analysis (Rosa specialization)
   */
  analyzeTemporality(description: string): Diagnosis {
    const rosa = this.diagnosticators.find(d => d.name === 'Hartmut Rosa') as RosaDiagnosticator;
    if (!rosa) {
      throw new Error('Rosa diagnosticator not found');
    }
    return rosa.diagnose(description);
  }

  /**
   * Psychopolitical scan (Han specialization)
   */
  psychopoliticalScan(description: string): Diagnosis {
    const han = this.diagnosticators.find(d => d.name === 'Byung-Chul Han') as HanDiagnosticator;
    if (!han) {
      throw new Error('Han diagnosticator not found');
    }
    return han.diagnose(description);
  }

  /**
   * Emotional economy analysis (Illouz specialization)
   */
  emotionalEconomyAnalysis(description: string): Diagnosis {
    const illouz = this.diagnosticators.find(d => d.name === 'Eva Illouz') as IllouzDiagnosticator;
    if (!illouz) {
      throw new Error('Illouz diagnosticator not found');
    }
    return illouz.diagnose(description);
  }

  /**
   * Technofeudalism detection (Sadin specialization)
   */
  detectTechnofeudalism(description: string): Diagnosis {
    const sadin = this.diagnosticators.find(d => d.name === 'Eric Sadin') as SadinDiagnosticator;
    if (!sadin) {
      throw new Error('Sadin diagnosticator not found');
    }
    return sadin.diagnose(description);
  }

  // ========================================================================
  // PRIVATE HELPERS
  // ========================================================================

  private createResult(diagnosticator: IDiagnosticator, description: string): DiagnosticatorResult {
    return {
      diagnosticator: diagnosticator.name,
      layer: diagnosticator.layer,
      diagnosis: diagnosticator.diagnose(description)
    };
  }

  private generateSummary(results: DiagnosticatorResult[], critical: DiagnosticatorResult[]): string {
    if (results.length === 0) {
      return 'No pathologies detected. Consider providing more context or using different diagnosticators.';
    }

    const layers = new Set(results.map(r => r.layer));
    const pathologies = results.map(r => r.diagnosis.pathology).filter(p => p !== 'no_pathology_detected');

    let summary = `Analyzed by ${results.length} diagnosticators across ${layers.size} layer(s).\n`;

    if (critical.length > 0) {
      summary += `\n⚠️ CRITICAL PATHOLOGIES (confidence > 70%):\n`;
      critical.forEach(c => {
        summary += `- ${c.diagnosis.pathology} (${c.diagnosticator}): ${(c.diagnosis.confidence * 100).toFixed(0)}%\n`;
      });
    }

    if (pathologies.length > 0) {
      summary += `\nDetected pathologies: ${pathologies.join(', ')}`;
    }

    return summary;
  }
}

/**
 * Factory function for easy instantiation
 */
export function createCulturalPathologist(): CulturalPathologist {
  return new CulturalPathologist();
}
