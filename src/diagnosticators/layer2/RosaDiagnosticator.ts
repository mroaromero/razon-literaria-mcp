// ============================================================================
// ROSA DIAGNOSTICATOR - Hartmut Rosa's Resonance/Alienation Framework
// ============================================================================

import { BaseDiagnosticator } from '../base/BaseDiagnosticator.js';
import { Diagnosis } from '../base/Diagnosis.js';

/**
 * Hartmut Rosa: Resonance, Alienation, and Acceleration
 *
 * Key concepts:
 * - Resonance: responsive relationship with the world
 * - Alienation: mute, reified relationship
 * - Blind acceleration without direction
 * - Narrative time (scent of time)
 * - Pointillist time (atomized)
 */
export class RosaDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Hartmut Rosa';
  readonly layer = 2 as const;
  readonly description = 'Temporal and relational diagnosis: resonance vs alienation, acceleration, temporality';

  private readonly states = {
    RESONANCE: {
      name: 'resonance',
      description: 'The subject is in resonant relationship with the world. There is reciprocity.',
      symptoms: [
        'World "responds" to my calls',
        'Bidirectional relationship (I affect world, world affects me)',
        'Sense of meaning and connection',
        'Time experienced as rich and full'
      ],
      keywords: ['conexión', 'connection', 'sentido', 'meaning', 'respuesta', 'response', 'reciprocidad', 'reciprocity', 'resonancia', 'resonance'],
      diagnosis: 'Full life experience. The world is responsive.'
    },
    ALIENATION: {
      name: 'alienation',
      description: 'The subject is alienated. The world does not respond, it is mute and indifferent.',
      symptoms: [
        'World is deaf to my calls',
        'No reciprocity (one-way relationship)',
        'Reification of relationships',
        'Experience of meaninglessness'
      ],
      keywords: ['alienación', 'alienation', 'indiferencia', 'indifference', 'vacío', 'emptiness', 'reificación', 'reification', 'mudo', 'mute'],
      diagnosis: 'Modern depression: the world is deaf to my calls.'
    },
    BLIND_ACCELERATION: {
      name: 'blind_acceleration',
      description: 'The subject accelerates without direction. Seeks to control the world but not connect with it.',
      symptoms: [
        'Constant rush without clear purpose',
        'Trying to control rather than resonate',
        'No time to pause and listen',
        'Exhaustion without fulfillment'
      ],
      keywords: ['aceleración', 'acceleration', 'prisa', 'rush', 'control', 'velocidad', 'speed', 'estrés', 'stress'],
      diagnosis: 'Alienation through acceleration: never enough time to resonate.'
    },
    NARRATIVE_TIME: {
      name: 'narrative_time',
      description: 'Time has "scent" (Duft der Zeit). There is continuity and narrativity.',
      symptoms: [
        'Sense of historical continuity',
        'Past informs present',
        'Future as meaningful project',
        'Time as story, not points'
      ],
      keywords: ['historia', 'history', 'memoria', 'memory', 'tradición', 'tradition', 'raíces', 'roots', 'continuidad', 'continuity', 'legado', 'legacy', 'narrativa', 'narrative'],
      diagnosis: 'Time with aroma. There is continuity and narrativity.'
    },
    POINTILLIST_TIME: {
      name: 'pointillist_time',
      description: 'Time atomized into disconnected "nows". Perpetual present without past or future.',
      symptoms: [
        'Living in eternal "now"',
        'No connection between moments',
        'Amnesia of past, no future horizon',
        'Time as discrete points, not flow'
      ],
      keywords: ['ahora', 'now', 'inmediato', 'immediate', 'actualización', 'update', 'feed', 'trending', 'viral', 'real-time', 'presente', 'present'],
      diagnosis: 'Time atomized into "nows" without connection. Perpetual present without past or future.'
    }
  };

  diagnose(description: string): Diagnosis {
    const textLower = description.toLowerCase();
    let bestMatch: { state: any; confidence: number } | null = null;

    // Find best matching state
    for (const [key, state] of Object.entries(this.states)) {
      const matches = this.countKeywordMatches(textLower, state.keywords);
      const confidence = this.calculateConfidence(matches, state.keywords.length);

      if (!bestMatch || confidence > bestMatch.confidence) {
        bestMatch = { state, confidence };
      }
    }

    if (!bestMatch || bestMatch.confidence < 0.2) {
      return this.createDiagnosis(
        'no_diagnosis',
        0,
        'No clear Rosa state detected in description',
        [],
        'Consider analyzing temporal and relational dimensions more explicitly'
      );
    }

    const s = bestMatch.state;
    return this.createDiagnosis(
      s.name,
      bestMatch.confidence,
      s.description,
      s.symptoms,
      this.getRecommendation(s.name),
      [s.diagnosis],
      this.getRelatedConcepts(s.name)
    );
  }

  getPathologies(): string[] {
    return Object.values(this.states).map(s => s.name);
  }

  protected getKeywords(): string[] {
    return Object.values(this.states).flatMap(s => s.keywords);
  }

  private getRecommendation(state: string): string {
    const recommendations: Record<string, string> = {
      resonance: 'Cultivate and protect resonant relationships. Identify resonance axes (body, things, other humans, nature).',
      alienation: 'Identify mute axes. Seek spheres of resonance. Consider structural causes of alienation (not personal failure).',
      blind_acceleration: 'Decelerate. Create spaces for resonance. Resist control imperative. Practice listening to the world.',
      narrative_time: 'Preserve narrative continuity. Connect past, present, future. Resist pointillist fragmentation.',
      pointillist_time: 'Reconnect temporal moments. Cultivate historical memory. Build future horizons beyond immediate present.'
    };
    return recommendations[state] || 'Analyze resonance/alienation dynamics';
  }

  private getRelatedConcepts(state: string): string[] {
    const related: Record<string, string[]> = {
      resonance: ['World-relationship', 'Reciprocity', 'Responsive axes'],
      alienation: ['Reification', 'Marx - Entfremdung', 'Mute world'],
      blind_acceleration: ['Social acceleration', 'Control imperative', 'Exhaustion'],
      narrative_time: ['Scent of time', 'Historical consciousness', 'Continuity'],
      pointillist_time: ['Presentism', 'Temporal atomization', 'Feed culture']
    };
    return related[state] || [];
  }
}
