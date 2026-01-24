// ============================================================================
// BERARDI DIAGNOSTICATOR - Franco "Bifo" Berardi's Semiocapitalism Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Franco "Bifo" Berardi: Semiocapitalism, Precarity, Collective Depression
 *
 * Key concepts:
 * - Semiocapitalism: exploitation of signs and communication
 * - Panic and collective depression
 * - Cognitive precarity
 * - Exhaustion of nervous system
 */
export class BerardiDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Franco Berardi (Bifo)';
  readonly layer = 2 as const;
  readonly description = 'Semiocapitalist diagnosis: cognitive precarity, collective depression, nervous exhaustion';

  private readonly pathologies = {
    SEMIOCAPITALISM: {
      name: 'semiocapitalism',
      description: 'Capitalism no longer exploits only the body (Fordism), but the mind and communication.',
      symptoms: [
        'Immaterial labor (programmers, creatives)',
        'Exploitation of attention',
        'Communication as commodity',
        'Burnout as epidemic'
      ],
      keywords: ['trabajo inmaterial', 'immaterial labor', 'cognitivo', 'cognitive', 'atención', 'attention', 'comunicación', 'communication', 'burnout', 'creativos', 'creatives'],
      example: 'Influencers: selling one\'s own life as content.'
    },
    PANIC_DEPRESSION: {
      name: 'panic_depression',
      description: 'Panic (acceleration) and depression (deceleration) as two faces of the same capitalist coin.',
      symptoms: [
        'Generalized anxiety',
        'Panic attacks without apparent cause',
        'Post-productivity depression',
        'Nervous system collapse'
      ],
      keywords: ['ansiedad', 'anxiety', 'pánico', 'panic', 'depresión', 'depression', 'colapso', 'collapse', 'nervioso', 'nervous', 'ataque de pánico'],
      example: 'Gen Z: the most anxious and depressed generation in history.'
    },
    COGNITIVE_PRECARITY: {
      name: 'cognitive_precarity',
      description: 'Cognitive work is precarized. "Knowledge workers" are the new proletariat.',
      symptoms: [
        'Forced freelancing',
        'Temporary contracts',
        'Labor fragmentation',
        'Existential insecurity'
      ],
      keywords: ['precariedad', 'precarity', 'freelance', 'temporal', 'temporary', 'inseguridad', 'insecurity', 'fragmentación', 'fragmentation', 'gig economy'],
      example: 'App delivery riders: cognitariat without labor rights.'
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
        'No Berardi pathology detected in description',
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
      semiocapitalism: 'Recognize semiocapitalist exploitation. Refuse commodification of communication. Build non-commodified spaces of expression.',
      panic_depression: 'Address panic/depression as systemic (not personal). Seek collective care. Resist pharmaceutical individualization of structural problems.',
      cognitive_precarity: 'Organize cognitive workers. Demand labor rights for platform workers. Build collective security against precarity.'
    };
    return recommendations[pathology] || 'Apply critique of semiocapitalism';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      semiocapitalism: ['Immaterial labor', 'Lazzarato', 'Cognitive capitalism', 'Communication as commodity'],
      panic_depression: ['Nervous exhaustion', 'Psychopathology of capitalism', 'Collective mental health'],
      cognitive_precarity: ['Cognitariat', 'Gig economy', 'Platform labor', 'Existential insecurity']
    };
    return related[pathology] || [];
  }
}
