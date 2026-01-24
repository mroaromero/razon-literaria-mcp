// ============================================================================
// SADIN DIAGNOSTICATOR - Eric Sadin's Infocracy/Siliconization Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Eric Sadin: Infocracy, Siliconization of the World, AI as Oracle
 *
 * Key concepts:
 * - Infocracy: power of information over politics
 * - Siliconization: colonization of life by Silicon Valley
 * - AI as epistemic authority
 * - Technofeudalism: digital rent extraction
 */
export class SadinDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Eric Sadin';
  readonly layer = 2 as const;
  readonly description = 'Digital diagnosis: infocracy, siliconization, AI as oracle, technofeudalism';

  private readonly pathologies = {
    INFOCRACY: {
      name: 'infocracy',
      description: 'Power no longer resides in political institutions, but in who controls information.',
      symptoms: [
        'Google/Meta/Amazon as new States',
        'Algorithms deciding what we see',
        'Systemic disinformation',
        'Truth as trending topic'
      ],
      keywords: ['google', 'meta', 'facebook', 'amazon', 'algoritmo', 'algorithm', 'información', 'information', 'datos', 'data', 'twitter', 'x'],
      example: 'Twitter (X) as privatized public square where Musk decides what gets amplified.'
    },
    SILICONIZATION: {
      name: 'siliconization',
      description: 'Silicon Valley colonizes all spheres of life: health, education, love, politics.',
      symptoms: [
        'Uberization of work',
        'Datafication of health (quantified self)',
        'Education as content consumption',
        'Algorithmic love (Tinder, Bumble)'
      ],
      keywords: ['uber', 'silicon valley', 'app', 'plataforma', 'platform', 'dataficación', 'datafication', 'cuantificación', 'quantification'],
      example: 'Google Classroom: education as a Google product.'
    },
    AI_AS_ORACLE: {
      name: 'ai_as_oracle',
      description: 'AI becomes epistemic authority. "The AI says so" replaces rational argument.',
      symptoms: [
        'Delegating decisions to algorithms',
        'ChatGPT as Delphic oracle',
        'Loss of intellectual autonomy',
        'Technosolutionism (AI will solve everything)'
      ],
      keywords: ['ia', 'ai', 'chatgpt', 'inteligencia artificial', 'artificial intelligence', 'algoritmo', 'algorithm', 'oráculo', 'oracle', 'automatización'],
      example: 'Judges using "recidivism prediction" algorithms without understanding bias.'
    },
    TECHNOFEUDALISM: {
      name: 'technofeudalism',
      description: 'Digital platforms extract rent from users who become "digital serfs". Capitalism mutates into feudalism.',
      symptoms: [
        'Subscription economy (perpetual rent)',
        'Platform monopolies',
        'Data as new labor (unpaid)',
        'Users as serfs, not workers'
      ],
      keywords: ['suscripción', 'subscription', 'premium', 'freemium', 'renta', 'rent', 'plataforma', 'platform', 'monopolio', 'monopoly', 'feudalismo'],
      example: 'Netflix/Spotify: perpetual rent extraction. You never own, always pay.'
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
        'No Sadin pathology detected in description',
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
      infocracy: 'Critique information monopolies. Support decentralized alternatives. Demand algorithmic transparency and regulation.',
      siliconization: 'Resist platformization of life. Build non-commodified spaces. Support public alternatives to Silicon Valley services.',
      ai_as_oracle: 'Critique AI as epistemic authority. Demand explainability. Maintain human deliberation for critical decisions.',
      technofeudalism: 'Exit subscription trap where possible. Support ownership over renting. Build commons-based alternatives.'
    };
    return recommendations[pathology] || 'Apply critique of digital capitalism';
  }

  private getRelatedConcepts(pathology: string): string[] {
    const related: Record<string, string[]> = {
      infocracy: ['Surveillance Capitalism', 'Algorithmic Governance', 'Platform Power'],
      siliconization: ['Platformization', 'Uberization', 'Datafication', 'Quantified Self'],
      ai_as_oracle: ['Algorithmic Authority', 'Black Box', 'Technosolutionism', 'Automation Bias'],
      technofeudalism: ['Varoufakis', 'Digital Rent', 'Platform Monopolies', 'Subscription Economy']
    };
    return related[pathology] || [];
  }
}
