# 🔷 GNOSIS MCP

[![MCP](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-3.0.0-red.svg)]()
[![npm](https://img.shields.io/npm/v/gnosis-mcp.svg)](https://www.npmjs.com/package/gnosis-mcp)

**Motor de Diagnóstico Cultural Multi-Capa**

Sistema de análisis crítico que integra:
- **Materialismo Filosófico** (Gustavo Bueno / Jesús G. Maestro / Santiago Armesilla)
- **Diagnóstico Cultural** (Byung-Chul Han / Hartmut Rosa / Mark Fisher / Eric Sadin / Franco Berardi)
- **Economía Emocional** (Eva Illouz / François Dubet / Michael Sandel)

---

## 📖 ¿Qué es GNOSIS MCP?

GNOSIS MCP es un servidor [Model Context Protocol](https://modelcontextprotocol.io) que transforma un LLM en un **patólogo cultural**: un sistema de diagnóstico crítico que combina el rigor gnoseológico del Materialismo Filosófico con la fenomenología del presente y el análisis de las pasiones políticas.

A diferencia de frameworks contemplativos o autoayuda, GNOSIS **diagnostica patologías culturales** y **revela estructuras de poder**.

> *"El ser, o es material, o no es."*
> — Gustavo Bueno

> *"El sujeto neoliberal se explota a sí mismo creyéndose libre."*
> — Byung-Chul Han

> *"Es más fácil imaginar el fin del mundo que el fin del capitalismo."*
> — Mark Fisher

---

## 🚀 Instalación

### Opción 1: NPX (Recomendado)

Ejecutar directamente sin instalación:

```bash
npx gnosis-mcp
```

### Opción 2: Instalación Global

```bash
npm install -g gnosis-mcp

# Ejecutar
gnosis-mcp
```

### Opción 3: Desde el Código Fuente

```bash
# Clonar repositorio
git clone https://github.com/mroaromero/razon-literaria-mcp.git
cd razon-literaria-mcp

# Instalar dependencias y compilar
npm install
npm run build
```

---

## ⚙️ Configuración para Claude Desktop

### Usando NPX (Recomendado)

Añade a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gnosis": {
      "command": "npx",
      "args": ["gnosis-mcp"]
    }
  }
}
```

### Usando Instalación Global

```json
{
  "mcpServers": {
    "gnosis": {
      "command": "gnosis-mcp"
    }
  }
}
```

### Usando Código Fuente Local

```json
{
  "mcpServers": {
    "gnosis": {
      "command": "node",
      "args": ["/ruta/a/razon-literaria-mcp/dist/cli.js"]
    }
  }
}
```

### Servidor HTTP (para Smithery/Docker)

```bash
npm run start:http
```

Disponible en `http://localhost:3000/mcp`

---

## 🔧 Arquitectura

### 8 Dominios Gnoseológicos

| Dominio | Tags | Función |
|---------|------|---------|
| **Umbral** | `comenzar` | Apertura del campo categorial |
| **Sintáctico** | `terminar`, `relacionar`, `operar` | Operar sobre signos |
| **Semántico** | `fenomenizar`, `referenciar`, `esenciar` | Conectar con referentes |
| **Pragmático** | `autologizar`, `dialogizar`, `normar` | Dimensión del sujeto |
| **Inmanente** | `definir`, `clasificar`, `demostrar`, `modelar` | Figuras científicas |
| **Crítico** | `impugnar`, `symploke`, `conjugar`, `dialectizar` | Análisis dialéctico |
| **Ontológico** | `materializar`, `fenomenologizar`, `logificar` | Géneros de materialidad |
| **Cierre** | `verificar`, `cerrar`, `transducir` | Transducción final |

### 24 Tags Operatorios

```
comenzar → terminar → relacionar → fenomenizar → referenciar → esenciar
→ definir/clasificar/demostrar/modelar 
→ impugnar → symploke → conjugar → dialectizar
→ verificar → cerrar → transducir
```

### Sistema de Falacias

| Falacia | Fórmula | Descripción |
|---------|---------|-------------|
| **Descriptivismo** | α sin β | Solo hechos, sin teoría |
| **Teoreticismo** | β sin α | Solo teoría, sin hechos |
| **Adecuacionismo** | α + β | Yuxtaposición sin conjugar |

**Solución:** CIRCULARISMO (conjugación dialéctica α ↔ β)

### Géneros de Materialidad

| Género | Contenido | Ejemplos |
|--------|-----------|----------|
| **M1** | Físico-corpóreo | Cuerpos, dispositivos, infraestructura |
| **M2** | Psicológico | Procesos mentales, emociones, atención |
| **M3** | Lógico-abstracto | Ideas, estructuras, instituciones |

### Figuras Inmanentes

| Figura | Notación | Descripción |
|--------|----------|-------------|
| **Definir** | T < T | Término desde términos |
| **Clasificar** | T < R | Término desde relaciones |
| **Demostrar** | R < R | Relación desde relaciones |
| **Modelar** | R < T | Relación desde términos |

---

## 💡 Uso

### Ejemplo: Analizar el "doble discurso" tecnológico

```
Usuario: Usa gnosis para analizar por qué las escuelas prohíben móviles pero promueven IA.
```

El sistema ejecutará:

```xml
<gnosis_step domain="umbral" tag="comenzar" step="1">
  <content>Campo: Filosofía de la educación / Filosofía de la tecnología</content>
</gnosis_step>

<gnosis_step domain="sintactico" tag="terminar" step="2">
  <terminos>
    <T1>Tecnología móvil (M1 + M3)</T1>
    <T2>IA educativa (M3)</T2>
    <T3>Institución escolar (M1 + M3)</T3>
    <T4>Estudiante (M1 + M2)</T4>
  </terminos>
</gnosis_step>

<gnosis_step domain="critico" tag="impugnar" step="5">
  <falacia_detectada>
    <nombre>ADECUACIONISMO</nombre>
    <formula>α + β</formula>
    <correccion>Aplicar CIRCULARISMO</correccion>
  </falacia_detectada>
</gnosis_step>

<transduccion status="completada">
  <conocimiento_construido>
    El "doble discurso" tecnológico es un mecanismo de gobernanza 
    que yuxtapone posiciones sin conjugarlas. La diferencia no es 
    gnoseológica sino POLÍTICA: quién controla el acceso.
  </conocimiento_construido>
</transduccion>
```

---

## 📁 Estructura del Proyecto

```
gnosis-mcp/
├── src/
│   ├── engine/              # Motor lógico universal (Layer 1)
│   │   └── logicGuard.ts    # Policía Lógico (validador gnoseológico)
│   ├── ontology/            # Definiciones ontológicas (Layer 1)
│   │   ├── materialidad.ts  # M1, M2, M3 + Ejes + Categorías Operatorias
│   │   └── falacias.ts      # Descriptivismo, Teoreticismo, Adecuacionismo
│   ├── diagnosis/           # 🆕 Diagnóstico cultural (Layer 2)
│   │   └── culturalPathology.ts  # Han, Rosa, Fisher, Sadin, Berardi
│   ├── emotions/            # 🆕 Economía emocional (Layer 3)
│   │   └── affectiveCapitalism.ts  # Illouz, Dubet, Sandel
│   ├── rag/                 # Sistema RAG (opcional)
│   │   └── vectorStore.ts   # Ingesta de PDFs (Maestro, Armesilla)
│   ├── tools/               # Herramientas MCP expuestas
│   │   ├── mermaidVisualizer.ts      # Visualización Symploké
│   │   ├── culturalPathologyTool.ts  # 🆕 Análisis cultural multi-capa
│   │   └── index.ts                  # Exportaciones centralizadas
│   ├── cli.ts               # Servidor CLI (stdio)
│   ├── server.ts            # Servidor HTTP (SSE)
│   ├── core.ts              # Lógica gnoseológica central
│   ├── prompts.ts           # 🆕 System prompts v3.0 (Patólogo Cultural)
│   ├── glossary.ts          # Diccionario filosófico
│   ├── logger.ts            # Sistema de logging
│   └── core.test.ts         # Tests unitarios
├── dist/                    # Código compilado
├── Dockerfile               # Para despliegue
├── smithery.yaml            # Config Smithery
├── package.json             # v3.0.0
├── tsconfig.json
└── README.md
```

---

## 🆕 GNOSIS v3.0: Patólogo Cultural

### Arquitectura de 3 Capas

#### LAYER 1: Materialismo Filosófico (Estructura)
**Autoridades**: Gustavo Bueno, Jesús G. Maestro, Santiago Armesilla
- Validación lógica (Cierre Categorial)
- Ontología (M1/M2/M3)
- Detección de falacias (Descriptivismo, Teoreticismo, Adecuacionismo)
- Política del Estado

#### LAYER 2: Diagnóstico Cultural (Fenomenología del Presente)
**Autoridades**: Byung-Chul Han, Hartmut Rosa, Mark Fisher, Eric Sadin, Franco Berardi
- **Psicopolítica** (Han): Auto-explotación, Sociedad del Rendimiento, Infocracia
- **Temporalidad** (Rosa): Resonancia vs. Alienación, Tiempo Narrativo vs. Puntillista
- **Realismo Capitalista** (Fisher): Hauntología, Depresión Hedónica
- **Infocracia** (Sadin): Silicolonización, IA como Oráculo
- **Semiocapitalismo** (Berardi): Pánico-Depresión, Precarización Cognitiva

#### LAYER 3: Economía Emocional (Pasiones Políticas)
**Autoridades**: Eva Illouz, François Dubet, Michael Sandel
- **Capitalismo Emocional** (Illouz): Mercantilización del afecto, Amor Líquido
- **Pasiones Tristes** (Dubet): Resentimiento, Humillación, Desprecio, Envidia
- **Tiranía del Mérito** (Sandel): Meritocracia como teología, Hubris y auto-desprecio

---

## 🧰 Herramientas de Diagnóstico

### `cultural_pathology_analysis`
Herramienta MCP que integra las 3 capas de análisis.

**Modos de análisis**:
1. **`analyze_temporality`** (Hartmut Rosa)
   - Detecta si el tiempo es "narrativo" (con aroma) o "puntillista" (atomizado)
   - Identifica alienación por aceleración

2. **`detect_technofeudalism`** (Yanis Varoufakis / Eric Sadin)
   - Detecta extracción de renta digital
   - Identifica servidumbre digital (usuarios como siervos)

3. **`psychopolitical_scan`** (Byung-Chul Han / Mark Fisher)
   - Escanea patologías psicopolíticas (auto-explotación, positividad tóxica)
   - Detecta realismo capitalista y hauntología

4. **`emotional_economy`** (Eva Illouz / François Dubet / Michael Sandel)
   - Analiza pasiones tristes (resentimiento, humillación)
   - Detecta capitalismo emocional y tiranía del mérito

5. **`full_diagnosis`** (Todas las capas)
   - Diagnóstico completo: M1 (economía) + M2 (afecto) + M3 (ideología)
   - Propone salidas basadas en resonancia y solidaridad (no autoayuda)

---

## 🔬 Workflow de Análisis (5 Pasos)

```
1. MATERIALIZAR (M1): ¿Industria o Nube/Renta? ¿Tecnofeudalismo?
2. FENOMENIZAR (M2): ¿Cansancio? ¿Resentimiento? ¿Depresión hedónica?
3. ESENCIAR (M3): ¿Realismo Capitalista? ¿Ideología meritocrática?
4. DIAGNOSTICAR: Cruzar M1+M2+M3 → Patología (ej. "Alienación por Aceleración")
5. CRITICAR: Salida → Resonancia (Rosa) / Pensamiento Diferente (Sadin) / Solidaridad (Armesilla)
```

---

## 📚 Vocabulario Crítico

- **Resonancia** / **Indisponible** (Rosa)
- **Infocracia** / **Silicolonización** (Sadin)
- **Tecnofeudalismo** / **Servidumbre Digital** (Varoufakis/Sadin)
- **Hauntología** / **Realismo Capitalista** (Fisher)
- **Psicopolítica** / **Auto-explotación** (Han)
- **Pasiones Tristes** / **Tiranía del Mérito** (Dubet/Sandel)
- **Capitalismo Emocional** / **Amor Líquido** (Illouz)
- **Tiempo Puntillista** / **Aceleración Ciega** (Rosa/Han)

---

## 🆕 Capacidades v2.1.0 (Base Gnoseológica)

### 1. Policía Lógico (Logic Guard)
Sistema de validación gnoseológica que impide operaciones inválidas:
- ✅ **BLOCK_CRITIQUE_WITHOUT_ONTOLOGY**: No permite crítica sin materialidad M1
- ✅ **DETECT_IDEALISM**: Detecta M3 sin referente M1 (metafísica)
- ✅ **REQUIRE_CIRCULARITY**: Valida que la transducción sea circular (M3 → M1)
- ✅ **VALIDATE_TERMS_BEFORE_RELATIONS**: Exige términos antes de relaciones

### 2. Categorías Operatorias Universales
Abstracción de los roles literarios a roles gnoseológicos universales:
- **Agente_Operatorio** (antes: Autor) - Quien fabrica conocimiento
- **Material_Formado** (antes: Obra) - El objeto constituido
- **Sujeto_Receptor** (antes: Lector) - Quien reconstruye operatoriamente
- **Operador_Critico** (antes: Transductor) - Quien analiza e impugna

### 3. Visualización de Symploké (Mermaid)
Herramienta `generate_symploke_graph` que genera diagramas:
- **operatorio**: Agente → Operación → Material → Resultado
- **materialidades**: Visualiza términos en M1, M2, M3
- **falacias**: Diagrama del circularismo vs. falacias

### 4. Sistema RAG (Vector Store)
Infraestructura para ingestar PDFs locales:
- Categorización por dominio (Literatura, Ciencias Sociales, Economía, Filosofía)
- Evita "alucinaciones idealistas" mediante anclaje en textos reales
- Definiciones estrictas desde Maestro, Armesilla, Bueno

### 5. Detección Automática de Falacias
Análisis heurístico de texto para detectar:
- **Descriptivismo**: "Los datos hablan por sí solos"
- **Teoreticismo**: "La teoría predice que..."
- **Adecuacionismo**: "Por un lado... por otro lado..."

---

## 🔬 Fundamentos Teóricos

### Teoría del Cierre Categorial
- Un **campo categorial** es un conjunto de términos relacionados
- El **cierre** ocurre cuando las operaciones generan términos del mismo campo
- Las ciencias "cierran" cuando operan inmanentemente

### Principio de Symploké
- ❌ Holismo: "Todo conectado con todo"
- ❌ Atomismo: "Nada conectado"
- ✅ Symploké: "Algunos términos se conectan con algunos, pero no con todos"

### Conjugación (no síntesis hegeliana)
- La materia (α) y la forma (β) se constituyen mutuamente
- Las contradicciones reales no se "superan": se ANALIZAN
- El conocimiento se CONSTRUYE, no "emerge"

---

## 📚 Referencias

### Gustavo Bueno
- *Teoría del Cierre Categorial* (1992-1993)
- *¿Qué es la ciencia?* (1995)
- *El mito de la cultura* (1996)

### Jesús G. Maestro
- *Crítica de la razón literaria* (2017-2022)
- *Contra las musas de la ira* (2014)

### Santiago Armesilla
- *Economía Política* (materialismo económico)
- *El marxismo y la cuestión nacional española*

### Recursos
- [Fundación Gustavo Bueno](https://fgbueno.es)
- [Filosofía en español](https://filosofia.org)

---

## 🌍 Dominios de Conocimiento

GNOSIS MCP opera sobre 4 dominios según el Materialismo Filosófico:

### 1. LITERATURA (Jesús G. Maestro)
- **Cuándo**: Solo cuando el usuario pregunta EXPLÍCITAMENTE por literatura
- **Referencia**: *Crítica de la Razón Literaria* (2017-2022)
- **Enfoque**: Análisis literario como construcción gnoseológica

### 2. CIENCIAS SOCIALES (Santiago Armesilla)
- **Cuándo**: Análisis de sociedad, instituciones, relaciones sociales
- **Referencia**: Materialismo sociológico
- **Enfoque**: Desmitificación de categorías sociológicas

### 3. ECONOMÍA (Santiago Armesilla)
- **Cuándo**: Democracia, mercado, Estado, valor, capital
- **Referencia**: *Economía Política* (materialismo económico)
- **Enfoque**: Crítica de la economía política neoclásica

### 4. FILOSOFÍA (Gustavo Bueno)
- **Cuándo**: Base gnoseológica transversal a todos los dominios
- **Referencia**: *Teoría del Cierre Categorial* (1992-1993)
- **Enfoque**: Fundamentos del Materialismo Filosófico

---

## 🧪 Prueba de Fuego

Para verificar que el sistema opera correctamente:

```
Usa la herramienta gnosis con el tag 'comenzar' para analizar:
"La democracia es el sistema donde el pueblo es libre y feliz"
```

El sistema debe:
1. Abrir campo categorial (filosofía política)
2. Identificar términos: democracia, pueblo, libertad, felicidad
3. Detectar falacia: **adecuacionismo** (yuxtaponer conceptos sin conjugar)
4. Impugnar el mito de la felicidad política
5. Transducir: conocimiento construido críticamente

---

## 📄 Licencia

MIT License

---

## ✨ Créditos

- **Filosofía:** Materialismo Filosófico de Gustavo Bueno
- **Crítica Literaria:** Jesús G. Maestro
- **Arquitectura MCP:** Model Context Protocol

---

<p align="center">
  <em>El conocimiento no está "ahí" esperando ser descubierto. Se FABRICA.</em>
</p>
