# 🖥️ Guía de Inicio Rápido: GNOSIS MCP en Claude Desktop

## 📋 Instalación en 3 Pasos

### Paso 1: Instalar el paquete

**Opción A: NPX (Más fácil)**
```bash
# No requiere instalación previa
# Se descarga automáticamente al usarlo
```

**Opción B: Global (Más rápido)**
```bash
npm install -g gnosis-mcp
```

**Opción C: Desde código fuente (Desarrollo)**
```bash
git clone https://github.com/mroaromero/razon-literaria-mcp.git
cd razon-literaria-mcp
npm install
npm run build
```

### Paso 2: Configurar Claude Desktop

Abre el archivo de configuración:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

**Opción A: Con NPX (Recomendado)**
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

**Opción B: Con instalación global**
```json
{
  "mcpServers": {
    "gnosis": {
      "command": "gnosis-mcp"
    }
  }
}
```

**Opción C: Con código fuente local**
```json
{
  "mcpServers": {
    "gnosis": {
      "command": "node",
      "args": ["/ruta/absoluta/a/razon-literaria-mcp/dist/cli.js"]
    }
  }
}
```

### Paso 3: Reiniciar Claude Desktop

- Cierra completamente Claude Desktop
- Vuelve a abrirlo
- Busca el ícono 🔌 (MCP) en la parte inferior
- Deberías ver **gnosis** con 4 herramientas

---

## 🎯 Ejemplos de Uso

### Ejemplo 1: Diagnóstico Psicopolítico (v3.0)

**Prompt para Claude**:
```
Usa la herramienta cultural_pathology_analysis con estos parámetros:
{
  "analysis_type": "psychopolitical_scan",
  "description": "Burnout epidémico en trabajadores del conocimiento, cultura del hustle, productividad extrema, optimización constante del yo"
}
```

**Resultado esperado**:
- Diagnóstico de patologías de Byung-Chul Han (auto-explotación, sociedad del rendimiento)
- Análisis de Mark Fisher (realismo capitalista, depresión hedónica)
- Conceptos: psicopolítica, infocracia, positividad tóxica

---

### Ejemplo 2: Análisis de Tecnofeudalismo (v3.0)

**Prompt para Claude**:
```
Usa cultural_pathology_analysis para detectar tecnofeudalismo en Netflix:
{
  "analysis_type": "detect_technofeudalism",
  "description": "Netflix cobra suscripción mensual, tiene algoritmo de recomendaciones, extrae datos de visualización, modelo freemium con anuncios"
}
```

**Resultado esperado**:
- Detección de extracción de renta digital (tipo: suscripción)
- Nivel de servidumbre digital
- Análisis de Varoufakis/Sadin

---

### Ejemplo 3: Análisis de Pasiones Tristes (v3.0)

**Prompt para Claude**:
```
Analiza la economía emocional del discurso meritocrático:
{
  "analysis_type": "emotional_economy",
  "description": "Discurso de Silicon Valley sobre emprendedores exitosos, narrativa del self-made man, culpabilización del fracaso"
}
```

**Resultado esperado**:
- Pasiones tristes detectadas (resentimiento, humillación)
- Capitalismo emocional (Illouz)
- Tiranía del mérito (Sandel)

---

### Ejemplo 4: Diagnóstico Completo Multi-Capa

**Prompt para Claude**:
```
Realiza un diagnóstico completo de las apps de citas:
{
  "analysis_type": "full_diagnosis",
  "description": "Tinder, Bumble, apps de swipe, gamificación del amor, perfiles como productos, ghosting normalizado",
  "context": "Generación Z, post-pandemia, aislamiento social"
}
```

**Resultado esperado**:
- **Layer 1**: Análisis gnoseológico (M1: smartphones, M2: ansiedad afectiva, M3: ideología del mercado)
- **Layer 2**: Diagnóstico cultural (amor líquido, tiempo puntillista, agonía del Eros)
- **Layer 3**: Economía emocional (capitalismo afectivo, tiranía de la elección)
- **Síntesis**: Patología + Origen + Salida

---

### Ejemplo 5: Análisis Gnoseológico Clásico

**Prompt para Claude**:
```
Usa gnosis para analizar el concepto de "inteligencia artificial":
{
  "tag": "comenzar",
  "content": "Campo: Filosofía de la tecnología. Analizar el concepto de IA."
}
```

Luego continúa con:
```
{
  "tag": "terminar",
  "terminos": ["Algoritmo", "Datos", "Modelo estadístico", "Hardware"],
  "materialidad": "M1"
}
```

---

### Ejemplo 6: Consultar Glosario Filosófico

**Prompt para Claude**:
```
Usa gnosis_glosario para buscar el término "symploke"
```

---

### Ejemplo 7: Generar Visualización

**Prompt para Claude**:
```
Genera un diagrama Mermaid de las falacias gnoseológicas:
{
  "tipo": "falacias"
}
```

---

## 🧪 Verificación de Funcionamiento

### Test 1: Listar Herramientas

**Prompt**:
```
¿Qué herramientas MCP de gnosis tienes disponibles?
```

**Esperado**:
```
1. gnosis - Construcción gnoseológica
2. gnosis_glosario - Diccionario filosófico
3. generate_symploke_graph - Visualización Mermaid
4. cultural_pathology_analysis - Diagnóstico cultural (v3.0)
```

### Test 2: Verificar Resources

**Prompt**:
```
Muéstrame los resources MCP disponibles de gnosis
```

**Esperado**:
```
1. gnosis://prompt/principal - System Prompt del Patólogo Cultural
2. gnosis://glosario/completo - Diccionario filosófico en JSON
```

### Test 3: Probar Análisis Temporal

**Prompt**:
```
Usa cultural_pathology_analysis para analizar la temporalidad de Instagram:
{
  "analysis_type": "analyze_temporality",
  "description": "Instagram Stories, feed en tiempo real, contenido efímero 24h, scroll infinito, actualización constante"
}
```

**Esperado**: Diagnóstico de tiempo puntillista vs. narrativo (Hartmut Rosa)

---

## 🔍 Troubleshooting

### Error: "Cannot find module 'gnosis-mcp'"

**Causa**: NPX no pudo descargar el paquete

**Solución**:
```bash
# Instalar globalmente
npm install -g gnosis-mcp

# Luego cambiar config a:
{
  "mcpServers": {
    "gnosis": {
      "command": "gnosis-mcp"
    }
  }
}
```

---

### Error: "Server gnosis failed to start"

**Causa**: Ruta incorrecta en configuración local

**Solución**:
```bash
# Verificar que el archivo existe
ls /ruta/a/razon-literaria-mcp/dist/cli.js

# Usar ruta ABSOLUTA (no relativa)
# ❌ MAL: "./dist/cli.js"
# ✅ BIEN: "/Users/tu-usuario/proyectos/razon-literaria-mcp/dist/cli.js"
```

---

### Las herramientas no aparecen

**Causa**: Configuración en ubicación incorrecta

**Solución**:
1. Verifica la ruta del archivo de configuración:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Verifica que el JSON sea válido (usa un validador JSON)

3. Reinicia Claude Desktop **completamente** (no solo cerrar ventana)

---

### System Prompt muy extenso

**Causa**: El prompt v3.0 tiene 161 líneas (es intencional)

**Nota**: Claude Desktop debería manejarlo sin problemas. Si hay issues:
1. Verificar logs: `~/Library/Logs/Claude/mcp*.log` (macOS)
2. Reportar en: https://github.com/mroaromero/razon-literaria-mcp/issues

---

## 📚 Recursos Adicionales

- **README completo**: [README.md](README.md)
- **Documentación técnica**: Ver sección "Arquitectura" en README
- **Issues**: https://github.com/mroaromero/razon-literaria-mcp/issues
- **MCP Protocol**: https://modelcontextprotocol.io

---

## 💡 Consejos de Uso

### Para Análisis Cultural (v3.0)

1. **Usa el modo `full_diagnosis`** cuando quieras un análisis completo de un fenómeno
2. **Especifica contexto** para diagnósticos más precisos
3. **Combina capas**: El poder está en cruzar M1 (economía) + M2 (afecto) + M3 (ideología)

### Para Análisis Gnoseológico

1. **Empieza con `comenzar`** para abrir el campo categorial
2. **Identifica términos con `terminar`** y especifica su materialidad (M1/M2/M3)
3. **Detecta falacias con `impugnar`** antes de cerrar

### Para Visualizaciones

1. **Usa `generate_symploke_graph`** para hacer visibles las relaciones
2. **Copia el código Mermaid** y renderízalo en GitHub, Notion o https://mermaid.live

---

## 🎓 Filosofía del Sistema

GNOSIS MCP v3.0 es un **Patólogo Cultural** que:
- ❌ NO busca consolar (Psicología)
- ✅ Revela estructuras de poder (Psicopolítica)
- ❌ NO patologiza individuos
- ✅ Diagnostica sistemas

**Vocabulario crítico**: Resonancia, Infocracia, Tecnofeudalismo, Hauntología, Psicopolítica, Pasiones Tristes, Capitalismo Emocional, Tiempo Puntillista

---

<p align="center">
  <em>"El ser, o es material, o no es." — Gustavo Bueno</em><br>
  <em>"El sujeto neoliberal se explota a sí mismo creyéndose libre." — Byung-Chul Han</em><br>
  <em>"Es más fácil imaginar el fin del mundo que el fin del capitalismo." — Mark Fisher</em>
</p>
