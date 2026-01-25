# GNOSIS MCP v4.0 🧬

> **Multi-Layer Cultural Diagnostic Engine** - Object-Oriented Architecture  
> Based on Philosophical Materialism (Gustavo Bueno) + Critical Theory

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-green)](https://modelcontextprotocol.io/)
[![Architecture](https://img.shields.io/badge/Architecture-OOP-orange)](https://en.wikipedia.org/wiki/Object-oriented_programming)
[![Version](https://img.shields.io/badge/version-4.0.0-red)](https://github.com/mroaromero/razon-literaria-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 🎯 What is GNOSIS MCP?

**GNOSIS MCP** transforms an LLM into a **Cultural Pathologist** - a multi-layer diagnostic system that reveals power structures and cultural pathologies instead of offering psychological consolation.

### The Three Layers

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 1: Philosophical Materialism (Validation)        │
│  LogicGuard + M1/M2/M3 Ontology + Fallacy Detection   │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│  LAYER 2: Cultural Diagnosis (8 Diagnosticators - OOP)  │
│  Han • Rosa • Fisher • Sadin • Berardi                  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│  LAYER 3: Emotional Economy (3 Diagnosticators - OOP)   │
│  Illouz • Dubet • Sandel                                │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start (Claude Desktop)

### 1. Installation

```bash
# Clone repository
git clone https://github.com/mroaromero/razon-literaria-mcp.git
cd razon-literaria-mcp

# Install and build
npm install
npm run build
```

### 2. Configure Claude Desktop

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

### 3. Restart Claude Desktop

Look for the 🔌 icon - you should see **gnosis** with 4 tools available.

---

## 📚 Architecture (v4.0 - OOP)

### New in v4.0

✅ **Object-Oriented Architecture**  
✅ **English Codebase** (Spanish philosophy preserved)  
✅ **8 Diagnostic Classes** (polymorphic, extensible)  
✅ **CulturalPathologist Orchestrator**  
✅ **Type-Safe Interfaces** (`IDiagnosticator`)  

### File Structure

```
src/
├── diagnosticators/
│   ├── base/
│   │   ├── IDiagnosticator.ts       # Main interface
│   │   ├── BaseDiagnosticator.ts    # Abstract base
│   │   └── Diagnosis.ts              # Type definitions
│   ├── layer2/                       # Cultural Diagnosis
│   │   ├── HanDiagnosticator.ts
│   │   ├── RosaDiagnosticator.ts
│   │   ├── FisherDiagnosticator.ts
│   │   ├── SadinDiagnosticator.ts
│   │   └── BerardiDiagnosticator.ts
│   ├── layer3/                       # Emotional Economy
│   │   ├── IllouzDiagnosticator.ts
│   │   ├── DubetDiagnosticator.ts
│   │   └── SandelDiagnosticator.ts
│   └── CulturalPathologist.ts        # Orchestrator
├── core/
│   └── LogicGuard.ts                 # Layer 1 validation
├── tools/
│   └── PathologyTool.ts              # MCP tool (v4)
├── cli.ts                            # Claude Desktop entry
└── server.ts                         # HTTP server (SSE)
```

---

## 🔧 MCP Tools Available

### 1. `cultural_pathology_analysis` ⭐ **MAIN TOOL**

**Modes**:
- `full_diagnosis`: All 8 diagnosticators
- `layer_diagnosis`: Specific layer (2 or 3)
- `author_diagnosis`: Specific author (Han, Rosa, etc.)
- `analyze_temporality`: Rosa's temporal analysis
- `psychopolitical_scan`: Han's psychopolitical framework
- `detect_technofeudalism`: Sadin's technofeudalism
- `emotional_economy`: Illouz's emotional capitalism

**Example**:
```json
{
  "mode": "full_diagnosis",
  "description": "I'm burned out but feel guilty for not being productive."
}
```

### 2. `gnosis` - Gnoseological Operations
- 24 operational tags (Layer 1)
- M1/M2/M3 ontology

### 3. `gnosis_glosario` - Philosophical Glossary
- 20 philosophical terms

### 4. `generate_symploke_graph` - Mermaid Visualization
- Visualize relations and structures

---

## 💡 Example Usage

### Diagnosing Burnout

```typescript
// Input
{
  "mode": "full_diagnosis",
  "description": "I work 12h/day remotely. I never disconnect. I feel guilty if I'm not productive."
}

// Output (8 diagnosticators)
{
  "diagnoses": [
    {
      "diagnosticator": "Byung-Chul Han",
      "layer": 2,
      "diagnosis": {
        "pathology": "self_exploitation",
        "confidence": 0.95,
        "description": "Neoliberal self-exploitation. You exploit yourself believing you're free.",
        "recommendation": "Recognize burnout is systemic, not personal."
      }
    },
    {
      "diagnosticator": "Hartmut Rosa",
      "layer": 2,
      "diagnosis": {
        "pathology": "blind_acceleration",
        "confidence": 0.88,
        "description": "Acceleration without resonance. No time to pause.",
        "recommendation": "Create non-productive spaces of resonance."
      }
    },
    // ... 6 more diagnosticators
  ],
  "criticalPathologies": [...]  // Confidence > 70%
}
```

---

## 🧬 The 8 Diagnosticators (OOP Classes)

### Layer 2: Cultural Diagnosis

| Diagnosticator | Focus | Key Pathologies |
|---------------|-------|----------------|
| **HanDiagnosticator** | Psychopolitics | Self-exploitation, Performance society, Infocracy |
| **RosaDiagnosticator** | Temporality | Alienation, Blind acceleration, Resonance loss |
| **FisherDiagnosticator** | Capitalism | Capitalist realism, Hauntology, Hedonic depression |
| **SadinDiagnosticator** | Technology | Infocracy, Technofeudalism, AI as oracle |
| **BerardiDiagnosticator** | Labor | Semiocapitalism, Cognitive precarity, Panic/depression |

### Layer 3: Emotional Economy

| Diagnosticator | Focus | Key Pathologies |
|---------------|-------|----------------|
| **IllouzDiagnosticator** | Emotions | Emotional capitalism, Liquid love, Therapeutization |
| **DubetDiagnosticator** | Passions | Sad passions, Resentment, Humiliation |
| **SandelDiagnosticator** | Merit | Tyranny of merit, Credentialism, Meritocratic hubris |

---

## 🔬 Philosophical Foundation

### Layer 1: Gustavo Bueno's Philosophical Materialism

**Core Principles**:
1. **Radical Materialism**: "Being is either material, or it is not"
   - M1: Physical (bodies, devices)
   - M2: Psychological (emotions, attention)
   - M3: Logical (ideas, institutions)

2. **Symploké**: "Some terms relate to others, but NOT to all"
   - Rejects holism ("everything connected")
   - Rejects atomism ("nothing connected")

3. **Circularity**: Knowledge must connect M3 back to M1

**Fallacies Detected**:
- **Descriptivism**: Data without theory
- **Theoreticism**: Theory without facts
- **Adequationism**: Juxtaposition without synthesis

---

## 🛠️ Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Run HTTP Server

```bash
npm run start:http
# Available at http://localhost:3000/mcp
```

### Endpoints

- `/health` - Health check
- `/info` - Full diagnosticators info
- `/stats` - Usage statistics
- `/mcp` - SSE MCP endpoint

---

## 📖 Documentation

- **README_v4.md**: Complete v4.0 technical documentation
- **CLAUDE_DESKTOP.md**: Claude Desktop integration guide
- **package.json**: v4.0.0 with OOP keywords

---

## 🤝 Contributing

This is an academic/philosophical project. Contributions welcome for:
- New diagnosticators (Layer 4: Speculative Realism?)
- Performance optimizations
- Additional tests
- Documentation improvements

---

## 📜 License

MIT License - See LICENSE file

---

## 🎓 Authorities Referenced

**Layer 1**: Gustavo Bueno, Jesús G. Maestro, Santiago Armesilla  
**Layer 2**: Byung-Chul Han, Hartmut Rosa, Mark Fisher, Eric Sadin, Franco Berardi  
**Layer 3**: Eva Illouz, François Dubet, Michael Sandel  

---

## 🔗 Links

- **Repository**: https://github.com/mroaromero/razon-literaria-mcp
- **MCP Protocol**: https://modelcontextprotocol.io
- **Issues**: https://github.com/mroaromero/razon-literaria-mcp/issues

---

**Version**: 4.0.0  
**Architecture**: Object-Oriented Programming (OOP)  
**Language**: TypeScript (English codebase, Spanish philosophy preserved)  
**Compatibility**: Claude Desktop, MCP 1.0+
