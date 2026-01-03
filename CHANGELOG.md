# Changelog

Todos los cambios notables de este proyecto serán documentados aquí.

## [2.1.0] - 2026-01-02

### 🚀 Nuevas Funcionalidades

- **Persistencia del Journey**: Métodos `exportJourney()`, `importJourney()`, `clearJourney()` para guardar/restaurar estado
- **Nuevos Tags**: `criticar` y `ejemplificar` añadidos al dominio crítico (ahora 26 tags)
- **Validación de Flujo**: Advertencias si el orden de operaciones es subóptimo
- **Prompt Resource MCP**: Recurso `gnosis://prompt/principal` expone el system prompt filosófico
- **Diccionario Filosófico**: Nueva herramienta `gnosis_glosario` con 20+ términos del Materialismo Filosófico
- **Estadísticas HTTP**: Nuevo endpoint `/stats` con métricas de uso del servidor

### Añadido

- `src/prompts.ts`: Prompt gnoseológico completo y recursos MCP
- `src/glossary.ts`: Diccionario filosófico con definiciones, ejemplos y referencias cruzadas
- Recurso MCP `gnosis://glosario/completo` para acceder al diccionario completo
- Tests para persistencia, nuevos tags y glosario

### Mejorado

- CLI ahora registra recursos MCP y la herramienta `gnosis_glosario`
- Servidor HTTP trackea sesiones, operaciones y falacias impugnadas
- Tests actualizados para 26 tags

---

## [2.0.0] - 2025-01-02

### 🚀 Refactorización Mayor

**Arquitectura GNOSIS OS implementada:**

- **24 tags operatorios** (antes 14) organizados en 8 dominios
- **Sistema de falacias** gnoseológicas (descriptivismo, teoreticismo, adecuacionismo)
- **Espacio gnoseológico tripartito** (sintáctico, semántico, pragmático)
- **Figuras inmanentes** de la ciencia (definir, clasificar, demostrar, modelar)
- **Géneros de materialidad** (M1, M2, M3)
- **Output XML estructurado** para cada operación

### Añadido

- Nuevos tags: `esenciar`, `autologizar`, `dialogizar`, `normar`, `clasificar`, `demostrar`, `modelar`, `symploke`, `dialectizar`, `materializar`, `fenomenologizar`, `logificar`, `cerrar`
- Campo `falacia` para detectar errores gnoseológicos
- Campo `materialidad` para ubicar en M1/M2/M3
- Campo `terminos` y `relaciones` para acumular análisis
- Endpoints `/health` y `/info` en servidor HTTP
- Health check en Dockerfile
- Documentación completa en README

### Cambiado

- Renombrado proyecto a `gnosis-mcp`
- Herramienta principal renombrada a `gnosis` (alias `razon_literaria` mantenido)
- Versión actualizada a 2.0.0
- Flujo operatorio expandido y formalizado

### Mejorado

- Output estructurado en XML con metadatos
- Logging mejorado en consola
- Manejo de errores con sugerencias
- Documentación con ejemplos prácticos

---

## [1.0.0] - 2024-XX-XX

### Inicial

- Servidor MCP básico con 14 tags
- Transporte stdio y HTTP/SSE
- Dominios: entrada, ontología, materiales, polémica, metodología, conclusión
