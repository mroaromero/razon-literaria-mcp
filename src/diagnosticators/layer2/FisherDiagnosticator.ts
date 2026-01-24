// ============================================================================
// FISHER DIAGNOSTICATOR - Mark Fisher's Capitalist Realism Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Mark Fisher: Capitalist Realism, Hauntology, Acid Communism
 *
 * Key concepts:
 * - Capitalist Realism: "It's easier to imagine the end of the world than the end of capitalism"
 * - Hauntology: Cancelled futures haunt the present
 * - Hedonic depression: Pleasure without satisfaction
 * - Reflexive impotence: Knowing without power
 */
export class FisherDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Mark Fisher';
  readonly layer = 2 as const;
  readonly description = 'Capitalist realism diagnosis: foreclosure of futures, hauntology, hedonic depression';

  private readonly pathologies = {
    CAPITALIST_REALISM: {
      name: 'capitalist_realism',
      description: 'The impossibility of imagining alternatives to capitalism. The horizon of expectations closes.',
      symptoms: [
        '"There is no alternative" (TINA)',
        'Dystopias without utopias',
        'Politics as technical management',
        'Future as catastrophe (not as promise)'
      ],
      keywords: ['no hay alternativa', 'no alternative', 'tina', 'capitalismo', 'capitalism', 'distopía', 'dystopia', 'apocalipsis', 'apocalypse'],
      example: 'Post-apocalyptic films: we can imagine zombies, not socialism.'
    },
    HAUNTOLOGY: {
      name: 'hauntology',
      description: 'Futures that never arrived (promised in the 60s-70s) haunt the present as ghosts.',
      symptoms: [
        'Nostalgia for lost futures',
        'Retrofuturism (80s aesthetics)',
        'Music looking to the past (vaporwave)',
        'Feeling that "there is no more novelty"'
      ],
      keywords: ['nostalgia', 'retrofuturismo', 'retrofuturism', 'vaporwave', 'pasado', 'past', '80s', 'futuro perdido', 'lost future'],
      example: 'Stranger Things: nostalgia for the future that the 80s promised and never came.'
    },
    HEDONIC_DEPRESSION: {
      name: 'hedonic_depression',
      description: 'Pleasure without satisfaction. Enjoyment does not produce happiness.',
      symptoms: [
        'Binge-watching without real enjoyment',
        'Infinite scrolling (dopamine without pleasure)',
        'Compulsive consumption',
        'Anhedonia: inability to feel pleasure'
      ],
      keywords: ['binge', 'scrolling', 'netflix', 'streaming', 'consumo', 'consumption', 'anhedonia', 'vacío', 'emptiness', 'depresión'],
      example: 'Netflix: 3 hours of series and feeling of emptiness.'
    },
    REFLEXIVE_IMPOTENCE: {
      name: 'reflexive_impotence',
      description: 'We know the system exploits us, but we keep participating. Cynicism as defense.',
      symptoms: [
        '"I know it\'s bad, but..."',
        'Irony as distance (without commitment)',
        'Critique without praxis',
        '"Conscious" consumption that changes nothing'
      ],
      keywords: ['cinismo', 'cynicism', 'ironía', 'irony', 'impotencia', 'impotence', 'crítica', 'critique', 'sé que', 'i know'],
      example: 'Shopping on Amazon knowing the labor conditions. "There is no other option".'
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
        'No Fisher pathology detected in description',
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
      capitalist_realism: 'Reopen horizon of possibilities. Imagine post-capitalist futures. Exit TINA ideology. Practice prefigurative politics.',
      hauntology: 'Mourn lost futures authentically. Exit nostalgic loop. Build new futures (not recycle old ones).',
      hedonic_depression: 'Exit dopamine treadmill. Seek genuine satisfaction beyond consumption. Resist platform capture of attention.',
      reflexive_impotence: 'Transform cynical knowledge into organized praxis. Exit "I know but..." loop. Build collective power.'
    };
    return recommendations[pathology] || 'Apply critique of capitalist realism';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      capitalist_realism: ['TINA', 'Fukuyama - End of History', 'Neoliberalism', 'Jameson - Postmodernism'],
      hauntology: ['Derrida - Spectres of Marx', 'Lost futures', 'Retrofuturism', 'Vaporwave aesthetics'],
      hedonic_depression: ['Anhedonia', 'Platform capitalism', 'Attention economy', 'Dopamine manipulation'],
      reflexive_impotence: ['Sloterdijk - Cynical reason', 'False consciousness', 'Žižek - They know but they do it']
    };
    return related[pathology] || [];
  }
}
