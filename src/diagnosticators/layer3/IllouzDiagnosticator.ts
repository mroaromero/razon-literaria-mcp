// ============================================================================
// ILLOUZ DIAGNOSTICATOR - Eva Illouz's Emotional Capitalism Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Eva Illouz: Emotional Capitalism, Cold Intimacies, Liquid Love
 *
 * Key concepts:
 * - Emotional capitalism: commodification of emotions
 * - Therapeutization of life
 * - Tyranny of choice in romantic markets
 * - Liquid love (Bauman influence)
 */
export class IllouzDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Eva Illouz';
  readonly layer = 3 as const;
  readonly description = 'Emotional economy diagnosis: commodification of emotions, therapeutization, romantic markets';

  private readonly pathologies = {
    EMOTIONAL_CAPITALISM: {
      name: 'emotional_capitalism',
      description: 'Emotions become commodities. Emotional intelligence as human capital. Affect as economic resource.',
      symptoms: [
        'Emotional labor as job requirement',
        'Emotional intelligence training',
        'Monetization of intimacy',
        'Emotions as skills to be optimized'
      ],
      keywords: ['inteligencia emocional', 'emotional intelligence', 'trabajo emocional', 'emotional labor', 'capitalismo emocional', 'terapia', 'therapy'],
      example: 'Corporate "emotional intelligence" workshops that extract more labor through affect management.'
    },
    LIQUID_LOVE: {
      name: 'liquid_love',
      description: 'Relationships become fluid, disposable, market-like. Love as consumption.',
      symptoms: [
        'Dating apps as romantic supermarkets',
        'Relationships as temporary projects',
        'Fear of commitment',
        'Love as consumer choice'
      ],
      keywords: ['tinder', 'dating app', 'amor líquido', 'liquid love', 'relaciones', 'relationships', 'compromiso', 'commitment', 'bauman'],
      example: 'Tinder: swipe culture turns potential partners into commodities to be browsed and discarded.'
    },
    THERAPEUTIZATION: {
      name: 'therapeutization',
      description: 'All problems are reduced to psychological issues requiring therapy. Politics becomes therapy.',
      symptoms: [
        'Every conflict is "trauma"',
        'Self-help culture as substitute for politics',
        'Therapeutic language colonizes public discourse',
        'Problems individualized as mental health issues'
      ],
      keywords: ['terapia', 'therapy', 'trauma', 'autoayuda', 'self-help', 'psicológico', 'psychological', 'mental health', 'salud mental'],
      example: 'Systemic inequality reframed as individual "mental health crisis" requiring therapy, not structural change.'
    },
    TYRANNY_OF_CHOICE: {
      name: 'tyranny_of_choice',
      description: 'Abundance of choice in romantic/sexual markets creates paralysis and dissatisfaction.',
      symptoms: [
        'Paradox of choice in dating',
        'FOMO (fear of missing better option)',
        'Analysis paralysis in relationships',
        'Perpetual dissatisfaction'
      ],
      keywords: ['elección', 'choice', 'opciones', 'options', 'fomo', 'paradoja', 'paradox', 'insatisfacción', 'dissatisfaction'],
      example: 'Dating app users perpetually searching for "better option", never satisfied with current partner.'
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
        'No Illouz pathology detected in description',
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
      emotional_capitalism: 'Critique commodification of emotions. Refuse emotional labor demands beyond reasonable scope. Build non-commodified intimacy.',
      liquid_love: 'Exit swipe culture. Build committed relationships. Resist treating partners as consumable products.',
      therapeutization: 'Politicize problems that are structural, not psychological. Critique individualization of systemic issues. Therapy + politics, not therapy instead of politics.',
      tyranny_of_choice: 'Accept constraints. Build commitment despite FOMO. Recognize that "perfect choice" is illusion of market logic.'
    };
    return recommendations[pathology] || 'Apply critique of emotional capitalism';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      emotional_capitalism: ['Affective labor', 'Hochschild - Managed Heart', 'Emotional intelligence'],
      liquid_love: ['Bauman - Liquid Modernity', 'Romantic markets', 'Swipe culture'],
      therapeutization: ['Therapeutic culture', 'Furedi', 'Individualization of suffering'],
      tyranny_of_choice: ['Paradox of choice', 'Barry Schwartz', 'FOMO', 'Analysis paralysis']
    };
    return related[pathology] || [];
  }
}
