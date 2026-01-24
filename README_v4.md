# GNOSIS MCP v4.0.0 🧬

> **Multi-Layer Cultural Diagnostic Engine** - Object-Oriented Architecture
> Based on Philosophical Materialism (Gustavo Bueno) + Critical Theory

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-green)](https://modelcontextprotocol.io/)
[![Architecture](https://img.shields.io/badge/Architecture-OOP-orange)](https://en.wikipedia.org/wiki/Object-oriented_programming)
[![Version](https://img.shields.io/badge/version-4.0.0-red)](https://github.com/mroaromero/razon-literaria-mcp)

---

## 🎯 What's New in v4.0.0

### **BREAKING CHANGES - Complete Refactoring**

**✅ Object-Oriented Architecture**
- All diagnosticators refactored as OOP classes
- Interface-based design (`IDiagnosticator`)
- Polymorphic behavior for extensibility
- Dependency injection support

**✅ English Codebase (Preserving Spanish Philosophy)**
- All code, variables, and functions in English
- Philosophical concepts preserved as proper nouns
- Bilingual documentation
- Better LLM comprehension and performance

**✅ 8 Diagnostic Classes**
- Layer 2: `HanDiagnosticator`, `RosaDiagnosticator`, `FisherDiagnosticator`, `SadinDiagnosticator`, `BerardiDiagnosticator`
- Layer 3: `IllouzDiagnosticator`, `DubetDiagnosticator`, `SandelDiagnosticator`

**✅ Orchestrator Pattern**
- `CulturalPathologist` class coordinates all diagnosticators
- Unified API for multi-layer diagnosis
- Dynamic diagnosticator management

---

## 📚 Architecture

### **3-Layer System**

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: Philosophical Materialism (Validation)            │
│  ────────────────────────────────────────────────────────  │
│  LogicGuard: Prevents idealism, validates circularity      │
│  Ontology: M1 (Physical), M2 (Psychological), M3 (Logical) │
│  Fallacies: Descriptivism, Theoreticism, Adequationism     │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  LAYER 2: Cultural Diagnosis (Phenomenology of Present)     │
│  ────────────────────────────────────────────────────────  │
│  • HanDiagnosticator: Psychopolitics, self-exploitation    │
│  • RosaDiagnosticator: Resonance/alienation, temporality   │
│  • FisherDiagnosticator: Capitalist realism, hauntology    │
│  • SadinDiagnosticator: Infocracy, technofeudalism         │
│  • BerardiDiagnosticator: Semiocapitalism, precarity       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  LAYER 3: Emotional Economy (Political Passions)            │
│  ────────────────────────────────────────────────────────  │
│  • IllouzDiagnosticator: Emotional capitalism, liquid love │
│  • DubetDiagnosticator: Sad passions, resentment           │
│  • SandelDiagnosticator: Tyranny of merit, credentialism   │
└─────────────────────────────────────────────────────────────┘
```

### **OOP Class Structure**

```typescript
// Base Interface
interface IDiagnosticator {
  name: string;
  layer: 1 | 2 | 3 | 4;
  description: string;
  diagnose(description: string): Diagnosis;
  canDiagnose(description: string): boolean;
  getPathologies(): string[];
}

// Abstract Base Class
abstract class BaseDiagnosticator implements IDiagnosticator {
  // Common functionality
  protected detectKeywords(text: string, keywords: string[]): boolean;
  protected calculateConfidence(matches: number, total: number): number;
  protected createDiagnosis(...): Diagnosis;
}

// Concrete Implementation
class HanDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Byung-Chul Han';
  readonly layer = 2;

  diagnose(description: string): Diagnosis {
    // Specific Han logic
  }
}

// Orchestrator
class CulturalPathologist {
  private diagnosticators: IDiagnosticator[];

  fullDiagnosis(description: string): DiagnosisReport;
  diagnoseByLayer(layer: number, description: string): DiagnosticatorResult[];
  diagnoseByAuthor(authorName: string, description: string): Diagnosis | null;
}
```

---

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/mroaromero/razon-literaria-mcp.git
cd razon-literaria-mcp

# Install dependencies
npm install

# Build
npm run build

# Run (CLI mode)
npm start

# Run (HTTP server)
npm run start:http
```

---

## 🔧 Usage

### **Claude Desktop Integration**

Edit your Claude Desktop config:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "gnosis": {
      "command": "node",
      "args": ["/absolute/path/to/razon-literaria-mcp/dist/cli.js"]
    }
  }
}
```

### **Example 1: Full Diagnosis**

```typescript
// Use cultural_pathology_analysis tool
{
  "mode": "full_diagnosis",
  "description": "I'm burned out from work but feel guilty for not being productive enough."
}

// Returns: Diagnoses from all 8 diagnosticators
// - Han: Self-exploitation, psychopolitics
// - Rosa: Alienation, blind acceleration
// - Berardi: Semiocapitalist exhaustion
// - Illouz: Emotional capitalism
// - Sandel: Meritocratic guilt
```

### **Example 2: Layer-Specific Diagnosis**

```typescript
{
  "mode": "layer_diagnosis",
  "layer": 2,
  "description": "Dating apps make me feel like I'm shopping for humans."
}

// Returns: Only Layer 2 diagnosticators
// - Han: Disappearance of the Other
// - Rosa: Alienation (world doesn't respond)
// - Fisher: Commodification of relationships
```

### **Example 3: Author-Specific Analysis**

```typescript
{
  "mode": "author_diagnosis",
  "author": "Rosa",
  "description": "Everything feels rushed. No time to think."
}

// Returns: Rosa's temporal diagnosis
// - Pathology: Blind acceleration
// - State: Alienation (no resonance)
// - Recommendation: Decelerate, create spaces for resonance
```

### **Example 4: Specialized Scans**

```typescript
// Psychopolitical scan (Han)
{
  "mode": "psychopolitical_scan",
  "description": "I track my steps, calories, productivity every day."
}

// Temporal analysis (Rosa)
{
  "mode": "analyze_temporality",
  "description": "I can't remember what happened last week. It's all a blur."
}

// Technofeudalism detection (Sadin)
{
  "mode": "detect_technofeudalism",
  "description": "I pay $50/month in subscriptions: Netflix, Spotify, Adobe, etc."
}

// Emotional economy (Illouz)
{
  "mode": "emotional_economy",
  "description": "My therapist says I have attachment issues."
}
```

---

## 🧪 Programmatic Usage

```typescript
import { createCulturalPathologist } from 'gnosis-mcp';

// Create pathologist
const pathologist = createCulturalPathologist();

// Full diagnosis
const report = pathologist.fullDiagnosis(
  "I'm overwhelmed by choices. Can't decide anything."
);

console.log(report.summary);
console.log(report.criticalPathologies); // Confidence > 70%

// Layer-specific
const layer3Results = pathologist.diagnoseByLayer(3,
  "People who fail deserve it."
);

// Author-specific
const sandelDiagnosis = pathologist.diagnoseByAuthor('Sandel',
  "Success is about merit, not luck."
);

// Specialized methods
pathologist.psychopoliticalScan("Productivity apps control my life");
pathologist.analyzeTemporality("Everything is trending, viral, now");
pathologist.detectTechnofeudalism("Platform takes 30% commission");
pathologist.emotionalEconomyAnalysis("Love is like a market");
```

---

## 📖 Diagnosticators Reference

### **Layer 2: Cultural Diagnosis**

#### **Byung-Chul Han** - Psychopolitics
- **Pathologies**: Self-exploitation, performance society, disappearance of Other, toxic positivity, agony of Eros, infocracy
- **Keywords**: productivity, optimization, narcissism, algorithm, big data
- **Example**: "Hustle culture" as self-exploitation

#### **Hartmut Rosa** - Resonance/Alienation
- **States**: Resonance, alienation, blind acceleration, narrative time, pointillist time
- **Keywords**: connection, meaning, rush, history, feed, viral
- **Example**: Social media as pointillist time (atomized "nows")

#### **Mark Fisher** - Capitalist Realism
- **Pathologies**: Capitalist realism, hauntology, hedonic depression, reflexive impotence
- **Keywords**: no alternative, nostalgia, binge-watching, cynicism
- **Example**: "I know Amazon is bad, but..." (reflexive impotence)

#### **Eric Sadin** - Infocracy/Technofeudalism
- **Pathologies**: Infocracy, siliconization, AI as oracle, technofeudalism
- **Keywords**: Google, Meta, platform, subscription, AI, algorithm
- **Example**: Subscription economy as digital serfdom

#### **Franco Berardi (Bifo)** - Semiocapitalism
- **Pathologies**: Semiocapitalism, panic/depression, cognitive precarity
- **Keywords**: immaterial labor, attention, anxiety, freelance, gig economy
- **Example**: Influencers selling their life as content

### **Layer 3: Emotional Economy**

#### **Eva Illouz** - Emotional Capitalism
- **Pathologies**: Emotional capitalism, liquid love, therapeutization, tyranny of choice
- **Keywords**: emotional intelligence, Tinder, therapy, FOMO
- **Example**: Tinder as romantic supermarket

#### **François Dubet** - Sad Passions
- **Passions**: Resentment, humiliation, hatred, contempt
- **Keywords**: injustice, dignity, polarization, elite, class
- **Example**: Working-class resentment against "cosmopolitan elites"

#### **Michael Sandel** - Tyranny of Merit
- **Pathologies**: Meritocratic hubris, credentialism, tyranny of merit, dignity of work crisis
- **Keywords**: meritocracy, university, success, failure, essential workers
- **Example**: "If you fail, it's your fault" (meritocratic ideology)

---

## 🏗️ Project Structure

```
src/
├── diagnosticators/           # OOP diagnosticators (v4.0)
│   ├── base/
│   │   ├── Diagnosis.ts       # Types and interfaces
│   │   ├── IDiagnosticator.ts # Main interface
│   │   └── BaseDiagnosticator.ts # Abstract base class
│   ├── layer2/
│   │   ├── HanDiagnosticator.ts
│   │   ├── RosaDiagnosticator.ts
│   │   ├── FisherDiagnosticator.ts
│   │   ├── SadinDiagnosticator.ts
│   │   └── BerardiDiagnosticator.ts
│   ├── layer3/
│   │   ├── IllouzDiagnosticator.ts
│   │   ├── DubetDiagnosticator.ts
│   │   └── SandelDiagnosticator.ts
│   ├── CulturalPathologist.ts # Orchestrator
│   └── index.ts               # Exports
├── core/
│   └── LogicGuard.ts          # Layer 1 validation
├── tools/
│   ├── PathologyTool.ts       # MCP tool (v4.0)
│   └── mermaidVisualizer.ts   # Symploké graphs
├── prompts_v4.ts              # System prompts (English)
├── server_v4.ts               # HTTP server (v4.0)
├── cli.ts                     # CLI entry point
└── logger.ts                  # Structured logging
```

---

## 🔬 Philosophical Foundations

### **Materialismo Filosófico (Gustavo Bueno)**

**Core Principle**: "Being is either material, or it is not."

**Three Genera of Materiality**:
- **M1 (Physical)**: Bodies, devices, infrastructure
- **M2 (Psychological)**: Mental processes, emotions, attention
- **M3 (Logical)**: Ideas, structures, institutions, relations

**Symploké**: "Some terms relate to others, but NOT to all"
(Rejects holism and atomism)

**Categorical Closure (Cierre Categorial)**:
Scientific knowledge requires circular connection between M3 (theory) and M1 (material phenomena).

**Gnoseological Fallacies**:
1. **Descriptivism** (α without β): Data without theory
2. **Theoreticism** (β without α): Theory without facts
3. **Adequationism** (α + β): Juxtaposition without conjugation

**Solution**: **Circularity (Circularismo)** - Dialectical conjugation

---

## 🔄 Migration Guide (v3.0 → v4.0)

### **Breaking Changes**

**1. Diagnostic Functions → Classes**

v3.0 (Functional):
```typescript
import { analizarTemporalidad } from './diagnosis/culturalPathology';
const result = analizarTemporalidad(description);
```

v4.0 (OOP):
```typescript
import { RosaDiagnosticator } from 'gnosis-mcp';
const rosa = new RosaDiagnosticator();
const diagnosis = rosa.diagnose(description);
```

**2. Orchestrator Pattern**

v3.0:
```typescript
// Call each diagnosticator manually
import { procesarCulturalPathology } from './tools/culturalPathologyTool';
```

v4.0:
```typescript
import { createCulturalPathologist } from 'gnosis-mcp';
const pathologist = createCulturalPathologist();
const report = pathologist.fullDiagnosis(description);
```

**3. English API**

v3.0:
```typescript
validarCritica();
registrarTermino(term, genero);
analizarTemporalidad(descripcion);
```

v4.0:
```typescript
validateCritique();
registerTerm(term, genus);
analyzeTemporality(description);
```

### **What Stays the Same**

- ✅ MCP tools interface (same tool names)
- ✅ Philosophical concepts (Symploké, Cierre Categorial, etc.)
- ✅ Diagnostic logic (same pathology detection)
- ✅ Claude Desktop integration (no config changes needed)

---

## 🤝 Contributing

We welcome contributions! Please:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-diagnosticator`)
3. **Commit** your changes (`git commit -m 'Add Žižek diagnosticator'`)
4. **Push** to the branch (`git push origin feature/new-diagnosticator`)
5. **Open** a Pull Request

### **Adding a New Diagnosticator**

```typescript
// 1. Create new class in src/diagnosticators/layer2/
export class ZizekDiagnosticator extends BaseDiagnosticator {
  readonly name = 'Slavoj Žižek';
  readonly layer = 2 as const;
  readonly description = 'Ideology critique: perverse core of capitalism';

  diagnose(description: string): Diagnosis {
    // Detection logic
  }

  getPathologies(): string[] {
    return ['ideology', 'sublime_object', 'traversing_fantasy'];
  }

  protected getKeywords(): string[] {
    return ['ideology', 'unconscious', 'fantasy', 'capitalism'];
  }
}

// 2. Register in CulturalPathologist constructor
new ZizekDiagnosticator(),
```

---

## 📄 License

MIT © Philosophical Materialism Contributors

---

## 🙏 Acknowledgments

**Philosophical Foundations**:
- Gustavo Bueno - *Teoría del Cierre Categorial* (1992)
- Jesús G. Maestro - *Crítica de la Razón Literaria* (2017)
- Santiago Armesilla - *Economía Política* (2022)

**Cultural Diagnosis (Layer 2)**:
- Byung-Chul Han - *Psychopolitics* (2014)
- Hartmut Rosa - *Resonance* (2016)
- Mark Fisher - *Capitalist Realism* (2009)
- Eric Sadin - *L'Intelligence artificielle ou l'enjeu du siècle* (2018)
- Franco Berardi - *The Soul at Work* (2009)

**Emotional Economy (Layer 3)**:
- Eva Illouz - *Cold Intimacies* (2007)
- François Dubet - *La Préférence pour l'inégalité* (2014)
- Michael Sandel - *The Tyranny of Merit* (2020)

---

## 📞 Support

- **Issues**: https://github.com/mroaromero/razon-literaria-mcp/issues
- **Discussions**: https://github.com/mroaromero/razon-literaria-mcp/discussions
- **Email**: contact@filosoft.org

---

**GNOSIS MCP v4.0** - Where Philosophy Meets Code 🧬
