// ============================================================================
// DUBET DIAGNOSTICATOR - François Dubet's Sad Passions Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * François Dubet: Sad Passions - Political Emotions in Neoliberalism
 *
 * Key concepts:
 * - Sad passions (Spinoza): resentment, humiliation, hatred
 * - Decline of institutions and rise of affective politics
 * - Resentment as political force
 * - Humiliation and dignity struggles
 */
export class DubetDiagnosticator extends BaseDiagnosticator {
  readonly name = 'François Dubet';
  readonly layer = 3 as const;
  readonly description = 'Sad passions diagnosis: resentment, humiliation, hatred as political forces';

  private readonly passions = {
    RESENTMENT: {
      name: 'resentment',
      description: 'Resentment (ressentiment) as dominant political affect. Feeling of systematic injustice without clear target.',
      symptoms: [
        'Diffuse anger against "the system"',
        'Feeling of being left behind',
        'Blame directed at scapegoats',
        'Nostalgia for lost status'
      ],
      keywords: ['resentimiento', 'resentment', 'ressentiment', 'ira', 'anger', 'injusticia', 'injustice', 'rabia', 'rage', 'populismo', 'populism'],
      example: 'Working-class voters supporting far-right parties: resentment against elites channeled toward immigrants.'
    },
    HUMILIATION: {
      name: 'humiliation',
      description: 'Systemic humiliation as political emotion. Dignity struggles in neoliberal society.',
      symptoms: [
        'Experience of social invisibility',
        'Feeling of being treated as disposable',
        'Degradation of work conditions',
        'Loss of social recognition'
      ],
      keywords: ['humillación', 'humiliation', 'dignidad', 'dignity', 'invisibilidad', 'invisibility', 'desprecio', 'contempt', 'reconocimiento', 'recognition'],
      example: 'Essential workers during pandemic: called "heroes" but treated as disposable, underpaid, unprotected.'
    },
    HATRED: {
      name: 'hatred',
      description: 'Hatred as political mobilization. Not anger (which seeks change) but hatred (which seeks destruction).',
      symptoms: [
        'Dehumanization of political opponents',
        'Desire for punishment over solutions',
        'Politics of grievance',
        'Schadenfreude at others\' suffering'
      ],
      keywords: ['odio', 'hatred', 'hate', 'polarización', 'polarization', 'enemigo', 'enemy', 'venganza', 'revenge', 'resentimiento', 'resentment'],
      example: 'Online hate mobs: political disagreement becomes desire to destroy the other.'
    },
    CONTEMPT: {
      name: 'contempt',
      description: 'Mutual contempt between social classes. Moral disgust replacing political disagreement.',
      symptoms: [
        'Elites viewing working class as deplorable',
        'Working class viewing elites as parasites',
        'Moral superiority instead of argument',
        'Breakdown of common political language'
      ],
      keywords: ['desprecio', 'contempt', 'asco', 'disgust', 'élite', 'elite', 'clase', 'class', 'superior', 'inferior'],
      example: 'Brexit/Trump: mutual contempt between "cosmopolitan elites" and "deplorables" prevents political dialogue.'
    }
  };

  diagnose(description: string): Diagnosis {
    const textLower = description.toLowerCase();
    let bestMatch: { passion: any; confidence: number } | null = null;

    // Find best matching passion
    for (const [key, passion] of Object.entries(this.passions)) {
      const matches = this.countKeywordMatches(textLower, passion.keywords);
      const confidence = this.calculateConfidence(matches, passion.keywords.length);

      if (!bestMatch || confidence > bestMatch.confidence) {
        bestMatch = { passion, confidence };
      }
    }

    if (!bestMatch || bestMatch.confidence < 0.2) {
      return this.createDiagnosis(
        'no_passion_detected',
        0,
        'No Dubet sad passion detected in description',
        [],
        'Consider analyzing with other diagnosticators'
      );
    }

    const p = bestMatch.passion;
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
    return Object.values(this.passions).map(p => p.name);
  }

  protected getKeywords(): string[] {
    return Object.values(this.passions).flatMap(p => p.keywords);
  }

  private getRecommendation(pathology: string): string {
    const recommendations: Record<string, string> = {
      resentment: 'Transform resentment into organized political action. Identify real sources of injustice (not scapegoats). Build solidarity, not grievance.',
      humiliation: 'Recognize systemic humiliation. Demand dignity (not just compensation). Build collective struggles for recognition.',
      hatred: 'Convert hatred back into anger. Anger seeks change; hatred seeks destruction. Re-politicize affect.',
      contempt: 'Exit moral superiority spiral. Rebuild common political language. Recognize class contempt as barrier to solidarity.'
    };
    return recommendations[pathology] || 'Transform sad passions into political action';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      resentment: ['Nietzsche - Ressentiment', 'Populism', 'Scapegoating', 'Status anxiety'],
      humiliation: ['Honneth - Struggle for Recognition', 'Dignity', 'Invisibility', 'Sennett - Respect'],
      hatred: ['Political polarization', 'Dehumanization', 'Grievance politics'],
      contempt: ['Class contempt', 'Moral disgust', 'Political tribalism', 'Common world loss']
    };
    return related[pathology] || [];
  }
}
