// ============================================================================
// HAN DIAGNOSTICATOR - Byung-Chul Han's Psychopolitics Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Byung-Chul Han: Psychopolitics, Burnout Society, Agony of Eros
 *
 * Key concepts:
 * - Self-exploitation disguised as freedom
 * - Performance society ("Yes We Can" imperative)
 * - Disappearance of the Other
 * - Toxic positivity
 * - Agony of Eros (pornification)
 * - Infocracy (information dominates truth)
 */
export class HanDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Byung-Chul Han';
  readonly layer = 2 as const;
  readonly description = 'Psychopolitical diagnosis: self-exploitation, performance society, disappearance of alterity';

  private readonly pathologies = {
    SELF_EXPLOITATION: {
      name: 'self_exploitation',
      description: 'The neoliberal subject exploits themselves while believing they are free. They are simultaneously executioner and victim.',
      symptoms: [
        'Working to exhaustion without external coercion',
        'Blaming oneself for not being "productive enough"',
        'Identifying freedom with performance',
        '"I am my own boss" (but working 14h/day)'
      ],
      keywords: ['emprendedor', 'entrepreneur', 'hustle', 'grind', 'productividad', 'productivity', 'autoexplotación', 'burnout'],
      example: 'The entrepreneur celebrating "hustle culture" while burning out psychologically.'
    },
    PERFORMANCE_SOCIETY: {
      name: 'performance_society',
      description: 'Replacement of disciplinary society (Foucault) with performance society. "Yes We Can" as psychopolitical imperative.',
      symptoms: [
        'Constant optimization of the self',
        'Quantification of life (steps, calories, likes)',
        'Coaching and self-help as religion',
        'Depression as personal failure (not systemic)'
      ],
      keywords: ['optimización', 'optimization', 'self-improvement', 'cuantificación', 'quantified self', 'rendimiento', 'performance'],
      example: 'Self-improvement apps that convert leisure into work.'
    },
    DISAPPEARANCE_OF_OTHER: {
      name: 'disappearance_of_other',
      description: 'The Other as mystery disappears. Only the Same (Narcissus) reflected infinitely remains.',
      symptoms: [
        'Relationships as "connections" (networking)',
        'Swipe left/right: the other as commodity',
        'Algorithms showing only what I already like',
        'Echo chambers and filter bubbles'
      ],
      keywords: ['narcisismo', 'narcissism', 'redes sociales', 'social media', 'algoritmo', 'algorithm', 'echo chamber', 'burbuja'],
      example: 'Social media eliminating unexpected and painful encounters with alterity.'
    },
    TOXIC_POSITIVITY: {
      name: 'toxic_positivity',
      description: 'Elimination of negativity (pain, loss, conflict). Everything must be "positive" and "constructive".',
      symptoms: [
        'Toxic positivity on social media',
        'Prohibition of mourning (must move on)',
        'Cancellation of conflict (extreme safe spaces)',
        'Pathologization of sadness'
      ],
      keywords: ['positividad', 'positivity', 'good vibes', 'negatividad', 'negativity', 'tristeza', 'sadness'],
      example: 'The "good vibes only" that prevents processing collective trauma.'
    },
    AGONY_OF_EROS: {
      name: 'agony_of_eros',
      description: 'Pornified sexuality eliminates Eros (erotic tension). Desire as lack disappears.',
      symptoms: [
        'Pornification of relationships',
        'Desire as immediate consumption',
        'Swipe culture (Tinder as supermarket)',
        'Elimination of courtship (time of desire)'
      ],
      keywords: ['pornificación', 'pornification', 'tinder', 'dating app', 'sexualidad', 'sexuality', 'eros', 'deseo', 'desire'],
      example: 'OnlyFans: monetization of Eros without real encounter.'
    },
    INFOCRACY: {
      name: 'infocracy',
      description: 'Information dominates truth. Data replaces thought.',
      symptoms: [
        'Big Data as new God',
        'Algorithm-based decisions (not reason)',
        'Psychopolitics: manipulation through information',
        'Disappearance of knowledge (Wikipedia vs. Library)'
      ],
      keywords: ['big data', 'información', 'information', 'algoritmo', 'algorithm', 'datos', 'data', 'psicopolítica', 'psychopolitics'],
      example: 'Cambridge Analytica: electoral psychopolitics through data mining.'
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
        'No Han pathology detected in description',
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
      self_exploitation: 'Critical awareness of self-exploitation mechanisms. Reject "hustle culture" ideology. Recognize systemic (not personal) nature of burnout.',
      performance_society: 'Resist quantification imperative. Reclaim non-productive time. Critique coaching culture as neoliberal religion.',
      disappearance_of_other: 'Seek encounters with genuine alterity. Exit filter bubbles. Practice contemplation of the Other as mystery.',
      toxic_positivity: 'Allow space for negativity, pain, and conflict. Reject "good vibes only" imperative. Practice genuine mourning.',
      agony_of_eros: 'Resist pornification. Reclaim erotic tension and slowness. Exit swipe culture.',
      infocracy: 'Critique data-driven decisions. Reclaim rational deliberation. Resist algorithmic governance.'
    };
    return recommendations[pathology] || 'Apply critical psychopolitical analysis';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      self_exploitation: ['Neoliberalism', 'Foucault - Technologies of the Self', 'Burnout Society'],
      performance_society: ['Disciplinary Society', 'Optimized Self', 'Meritocracy'],
      disappearance_of_other: ['Narcissism', 'Echo Chambers', 'Levinas - Ethics of Alterity'],
      toxic_positivity: ['Negativity', 'Mourning', 'Safe Spaces'],
      agony_of_eros: ['Pornification', 'Desire', 'Courtship'],
      infocracy: ['Big Data', 'Surveillance Capitalism', 'Algorithmic Governance']
    };
    return related[pathology] || [];
  }
}
