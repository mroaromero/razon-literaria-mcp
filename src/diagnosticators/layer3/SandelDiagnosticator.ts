// ============================================================================
// SANDEL DIAGNOSTICATOR - Michael Sandel's Tyranny of Merit Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Michael Sandel: The Tyranny of Merit, Meritocratic Hubris
 *
 * Key concepts:
 * - Meritocracy as moral aristocracy
 * - Hubris of winners
 * - Humiliation of losers
 * - Credentialism and diploma divide
 */
export class SandelDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Michael Sandel';
  readonly layer = 3 as const;
  readonly description = 'Meritocratic diagnosis: tyranny of merit, credentialism, moral hubris';

  private readonly pathologies = {
    MERITOCRATIC_HUBRIS: {
      name: 'meritocratic_hubris',
      description: 'Winners believe they deserve their success. Moral superiority of "the talented".',
      symptoms: [
        '"I earned everything I have"',
        'Success as moral validation',
        'Contempt for "losers"',
        'Tech elite claiming to be self-made'
      ],
      keywords: ['meritocracia', 'meritocracy', 'talento', 'talent', 'éxito', 'success', 'ganadores', 'winners', 'merecido', 'deserve', 'elite'],
      example: 'Tech billionaires claiming their wealth is purely result of merit, ignoring structural advantages.'
    },
    CREDENTIALISM: {
      name: 'credentialism',
      description: 'Diploma divide. University degree as moral and economic passport. Non-credentialed as second-class citizens.',
      symptoms: [
        'University degree as requirement for dignity',
        'Contempt for "non-college" workers',
        'Politics divided by education level',
        'Manual labor stigmatized'
      ],
      keywords: ['universidad', 'university', 'college', 'título', 'degree', 'diploma', 'credencial', 'credential', 'educación', 'education'],
      example: 'Democratic Party losing working class: "party of college graduates" vs "deplorables without degrees".'
    },
    TYRANNY_OF_MERIT: {
      name: 'tyranny_of_merit',
      description: 'Meritocracy becomes tyranny. Success/failure internalized as moral worth.',
      symptoms: [
        'Failure seen as personal moral failing',
        'Success as proof of virtue',
        'Shame of "not making it"',
        'Suicide and "deaths of despair" among "losers"'
      ],
      keywords: ['tiranía', 'tyranny', 'fracaso', 'failure', 'vergüenza', 'shame', 'mérito', 'merit', 'moral', 'desesperación', 'despair'],
      example: 'Deaths of despair (suicide, drugs, alcohol) concentrated among working class: meritocracy says they failed morally.'
    },
    DIGNITY_OF_WORK: {
      name: 'dignity_of_work_crisis',
      description: 'Work loses dignity. Only credentialed labor is respected. Manual/service work is degraded.',
      symptoms: [
        'Essential workers treated as disposable',
        'Wage stagnation for non-credentialed',
        'Social recognition tied to credentials',
        'Contempt for "low-skill" labor'
      ],
      keywords: ['dignidad', 'dignity', 'trabajo', 'work', 'esencial', 'essential', 'salario', 'wage', 'manual', 'servicio', 'service'],
      example: 'Pandemic: essential workers (delivery, cleaning, care) applauded but not paid, protected, or respected.'
    }
  };

  diagnose(description: string): Diagnosis {
    const textLower = description.toLowerCase();
    let bestMatch: { pathology: any; confidence: number } | null = null;

    // Find best matching pathology
    for (const [key, pathology] of Object.entries(this.pathologies)) {
      const matches = this.countKeywordMatches(textLower, pathology.keywords);
      const confidence = this.calculateConfidence(matches, pathology.keywords.length);

      if (!bestMatch || confidence > bestMatch.confidence) {
        bestMatch = { pathology, confidence };
      }
    }

    if (!bestMatch || bestMatch.confidence < 0.2) {
      return this.createDiagnosis(
        'no_pathology_detected',
        0,
        'No Sandel pathology detected in description',
        [],
        'Consider analyzing with other diagnosticators'
      );
    }

    const p = bestMatch.pathology;
    return this.createDiagnosis(
      p.name,
      bestMatch.confidence,
      p.description,
      p.symptoms,
      this.getRecommendation(p.name),
      [p.example],
      this.getRelatedConcepts(p.name)
    );
  }

  getPathologies(): string[] {
    return Object.values(this.pathologies).map(p => p.name);
  }

  protected getKeywords(): string[] {
    return Object.values(this.pathologies).flatMap(p => p.keywords);
  }

  private getRecommendation(pathology: string): string {
    const recommendations: Record<string, string> = {
      meritocratic_hubris: 'Recognize role of luck and structural advantage in success. Practice humility. Critique "self-made" myth.',
      credentialism: 'Challenge diploma divide. Affirm dignity of work independent of credentials. Support alternative paths to contribution.',
      tyranny_of_merit: 'Externalize failure: systemic, not personal. Reject moral interpretation of market outcomes. Build solidarity across "winners" and "losers".',
      dignity_of_work_crisis: 'Demand living wages for all work. Recognize contribution of essential labor. Exit credential hierarchy.'
    };
    return recommendations[pathology] || 'Critique meritocratic ideology';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      meritocratic_hubris: ['Moral aristocracy', 'Luck egalitarianism', 'Rawls - Veil of ignorance'],
      credentialism: ['Diploma divide', 'Educational sorting', 'Polarization by education'],
      tyranny_of_merit: ['Deaths of despair', 'Shame', 'Young - Meritocracy critique'],
      dignity_of_work_crisis: ['Essential workers', 'Living wage', 'Contributive justice']
    };
    return related[pathology] || [];
  }
}
