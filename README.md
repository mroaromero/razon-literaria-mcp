# 🔷 GNOSIS MCP

[![MCP](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-brightgreen.svg)]()

**Servidor MCP de Construcción Gnoseológica**

Basado en el Materialismo Filosófico de Gustavo Bueno y la Crítica de la Razón Literaria de Jesús G. Maestro.

---

## 📖 ¿Qué es GNOSIS MCP?

GNOSIS MCP es un servidor [Model Context Protocol](https://modelcontextprotocol.io) que transforma un LLM en un agente de construcción gnoseológica. A diferencia de frameworks contemplativos, GNOSIS **construye** conocimiento mediante operaciones rigurosas sobre materiales dados.

> *"El ser, o es material, o no es."*  
> — Gustavo Bueno

---

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/gnosis-mcp.git
cd gnosis-mcp

# Instalar dependencias
npm install

# Compilar TypeScript
npm run build
```

---

## ⚙️ Configuración

### Claude Desktop

Añade a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gnosis": {
      "command": "node",
      "args": ["C:/ruta/a/gnosis-mcp/dist/cli.js"]
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
│   ├── cli.ts          # Servidor CLI (stdio)
│   ├── server.ts       # Servidor HTTP (SSE)
│   └── core.ts         # Lógica gnoseológica
├── dist/               # Código compilado
├── Dockerfile          # Para despliegue
├── smithery.yaml       # Config Smithery
├── package.json
├── tsconfig.json
└── README.md
```

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

### Recursos
- [Fundación Gustavo Bueno](https://fgbueno.es)
- [Filosofía en español](https://filosofia.org)

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
