// ============================================================================
// PATHOLOGY TOOL - MCP Tool for Cultural Pathology Analysis (v4.0 OOP)
// ============================================================================

import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { CulturalPathologist } from '../diagnosticators/CulturalPathologist.js';
import { logger } from '../logger.js';

/**
 * Cultural Pathology Analysis Tool (OOP Architecture)
 *
 * Modes:
 * - full_diagnosis: Run all diagnosticators
 * - layer_diagnosis: Diagnose by specific layer
 * - author_diagnosis: Diagnose by specific author
 * - analyze_temporality: Rosa's temporal analysis
 * - psychopolitical_scan: Han's psychopolitical analysis
 * - detect_technofeudalism: Sadin's technofeudalism detection
 * - emotional_economy: Illouz's emotional capitalism analysis
 */
export const PATHOLOGY_TOOL: Tool = {
  name: "cultural_pathology_analysis",
  description: `Analyze cultural pathologies using multi-layer diagnostic framework.

DIAGNOSTICATORS (8 total):

LAYER 2 - CULTURAL DIAGNOSIS:
- Byung-Chul Han: Psychopolitics, self-exploitation, performance society, infocracy
- Hartmut Rosa: Resonance vs alienation, temporal analysis, acceleration
- Mark Fisher: Capitalist realism, hauntology, hedonic depression
- Eric Sadin: Infocracy, siliconization, AI as oracle, technofeudalism
- Franco Berardi: Semiocapitalism, cognitive precarity, panic/depression

LAYER 3 - EMOTIONAL ECONOMY:
- Eva Illouz: Emotional capitalism, liquid love, therapeutization
- François Dubet: Sad passions (resentment, humiliation, hatred)
- Michael Sandel: Tyranny of merit, credentialism, dignity of work

MODES:
- full_diagnosis: All diagnosticators
- layer_diagnosis: Specific layer (2 or 3)
- author_diagnosis: Specific author (e.g., "Han", "Rosa")
- analyze_temporality: Rosa's temporal framework
- psychopolitical_scan: Han's psychopolitical framework
- detect_technofeudalism: Sadin's technofeudalism framework
- emotional_economy: Illouz's emotional capitalism framework`,

  inputSchema: {
    type: "object",
    properties: {
      mode: {
        type: "string",
        enum: [
          "full_diagnosis",
          "layer_diagnosis",
          "author_diagnosis",
          "analyze_temporality",
          "psychopolitical_scan",
          "detect_technofeudalism",
          "emotional_economy"
        ],
        description: "Analysis mode"
      },
      description: {
        type: "string",
        description: "Text or situation to analyze"
      },
      layer: {
        type: "integer",
        enum: [2, 3],
        description: "Layer number (only for layer_diagnosis mode)"
      },
      author: {
        type: "string",
        description: "Author name (only for author_diagnosis mode). Examples: 'Han', 'Rosa', 'Fisher', 'Illouz'"
      }
    },
    required: ["mode", "description"]
  }
};

/**
 * Process pathology analysis request
 */
export function processPathologyAnalysis(input: any): { content: any[]; isError?: boolean } {
  try {
    const pathologist = new CulturalPathologist();
    const mode = input.mode as string;
    const description = input.description as string;

    logger.info('Pathology analysis', { data: { mode, descriptionLength: description.length } });

    let result: any;

    switch (mode) {
      case 'full_diagnosis':
        result = pathologist.fullDiagnosis(description);
        break;

      case 'layer_diagnosis':
        if (!input.layer) {
          throw new Error('Layer number required for layer_diagnosis mode');
        }
        const layerResults = pathologist.diagnoseByLayer(input.layer, description);
        result = {
          layer: input.layer,
          totalDiagnosticators: layerResults.length,
          diagnoses: layerResults
        };
        break;

      case 'author_diagnosis':
        if (!input.author) {
          throw new Error('Author name required for author_diagnosis mode');
        }
        const authorResult = pathologist.diagnoseByAuthor(input.author, description);
        if (!authorResult) {
          throw new Error(`Author "${input.author}" not found. Available: Han, Rosa, Fisher, Sadin, Berardi, Illouz, Dubet, Sandel`);
        }
        result = {
          author: input.author,
          diagnosis: authorResult
        };
        break;

      case 'analyze_temporality':
        result = {
          diagnosticator: 'Hartmut Rosa',
          specialization: 'Temporal Analysis',
          diagnosis: pathologist.analyzeTemporality(description)
        };
        break;

      case 'psychopolitical_scan':
        result = {
          diagnosticator: 'Byung-Chul Han',
          specialization: 'Psychopolitical Scan',
          diagnosis: pathologist.psychopoliticalScan(description)
        };
        break;

      case 'detect_technofeudalism':
        result = {
          diagnosticator: 'Eric Sadin',
          specialization: 'Technofeudalism Detection',
          diagnosis: pathologist.detectTechnofeudalism(description)
        };
        break;

      case 'emotional_economy':
        result = {
          diagnosticator: 'Eva Illouz',
          specialization: 'Emotional Economy Analysis',
          diagnosis: pathologist.emotionalEconomyAnalysis(description)
        };
        break;

      default:
        throw new Error(`Unknown mode: ${mode}`);
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          status: 'PATHOLOGY_ANALYSIS_COMPLETE',
          mode,
          ...result
        }, null, 2)
      }]
    };

  } catch (error: any) {
    logger.error('Pathology analysis error', { data: { error: error.message } });
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          error: error.message,
          availableModes: [
            'full_diagnosis',
            'layer_diagnosis',
            'author_diagnosis',
            'analyze_temporality',
            'psychopolitical_scan',
            'detect_technofeudalism',
            'emotional_economy'
          ]
        }, null, 2)
      }],
      isError: true
    };
  }
}
