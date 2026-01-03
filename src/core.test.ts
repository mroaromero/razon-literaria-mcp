import { describe, it, expect, beforeEach } from 'vitest';
import {
  RazonLiterariaServer,
  GNOSEOLOGIA_DOMAINS,
  CORE_TAGS,
  FALACIAS,
  MATERIALIDAD,
  FIGURAS_INMANENTES,
  GNOSIS_TOOL
} from './core.js';

describe('GNOSIS MCP - Core', () => {
  let server: RazonLiterariaServer;

  beforeEach(() => {
    server = new RazonLiterariaServer();
  });

  describe('Constantes gnoseológicas', () => {
    it('debe tener 8 dominios definidos', () => {
      const dominios = Object.keys(GNOSEOLOGIA_DOMAINS);
      expect(dominios).toHaveLength(8);
      expect(dominios).toContain('umbral');
      expect(dominios).toContain('sintactico');
      expect(dominios).toContain('semantico');
      expect(dominios).toContain('pragmatico');
      expect(dominios).toContain('inmanente');
      expect(dominios).toContain('critico');
      expect(dominios).toContain('ontologico');
      expect(dominios).toContain('cierre');
    });

    it('debe tener 26 tags operatorios', () => {
      expect(CORE_TAGS).toHaveLength(26);
    });

    it('debe incluir los tags esenciales', () => {
      expect(CORE_TAGS).toContain('comenzar');
      expect(CORE_TAGS).toContain('terminar');
      expect(CORE_TAGS).toContain('relacionar');
      expect(CORE_TAGS).toContain('impugnar');
      expect(CORE_TAGS).toContain('transducir');
      // Nuevos tags v2.0.0
      expect(CORE_TAGS).toContain('criticar');
      expect(CORE_TAGS).toContain('ejemplificar');
    });

    it('debe tener 3 falacias definidas', () => {
      expect(Object.keys(FALACIAS)).toHaveLength(3);
      expect(FALACIAS.descriptivismo).toBeDefined();
      expect(FALACIAS.teoreticismo).toBeDefined();
      expect(FALACIAS.adecuacionismo).toBeDefined();
    });

    it('debe tener 3 géneros de materialidad', () => {
      expect(Object.keys(MATERIALIDAD)).toHaveLength(3);
      expect(MATERIALIDAD.M1).toBeDefined();
      expect(MATERIALIDAD.M2).toBeDefined();
      expect(MATERIALIDAD.M3).toBeDefined();
    });

    it('debe tener 4 figuras inmanentes', () => {
      expect(Object.keys(FIGURAS_INMANENTES)).toHaveLength(4);
      expect(FIGURAS_INMANENTES.definir).toBeDefined();
      expect(FIGURAS_INMANENTES.clasificar).toBeDefined();
      expect(FIGURAS_INMANENTES.demostrar).toBeDefined();
      expect(FIGURAS_INMANENTES.modelar).toBeDefined();
    });
  });

  describe('GNOSIS_TOOL', () => {
    it('debe tener el nombre correcto', () => {
      expect(GNOSIS_TOOL.name).toBe('gnosis');
    });

    it('debe tener descripción', () => {
      expect(GNOSIS_TOOL.description).toBeDefined();
      expect(GNOSIS_TOOL.description!.length).toBeGreaterThan(100);
    });

    it('debe tener schema de entrada válido', () => {
      const schema = GNOSIS_TOOL.inputSchema;
      expect(schema.type).toBe('object');
      expect(schema.required).toContain('tag');
      expect(schema.required).toContain('content');
      expect(schema.required).toContain('stepNumber');
      expect(schema.required).toContain('nextStepNeeded');
    });
  });

  describe('RazonLiterariaServer.processThought()', () => {
    describe('Validación de entrada', () => {
      it('debe rechazar tags inválidos', () => {
        const result = server.processThought({
          tag: 'tag_invalido',
          content: 'Contenido',
          stepNumber: 1,
          nextStepNeeded: true
        });

        expect(result.isError).toBe(true);
        const response = JSON.parse(result.content[0].text);
        expect(response.error).toContain('Tag inválido');
      });

      it('debe aceptar todos los tags válidos', () => {
        for (const tag of CORE_TAGS) {
          const result = server.processThought({
            tag,
            content: `Test para ${tag}`,
            stepNumber: 1,
            nextStepNeeded: true
          });

          expect(result.isError).toBeUndefined();
        }
      });
    });

    describe('Operación: comenzar', () => {
      it('debe retornar el framework completo', () => {
        const result = server.processThought({
          tag: 'comenzar',
          content: 'Campo: Filosofía de la tecnología',
          stepNumber: 1,
          nextStepNeeded: true
        });

        expect(result.isError).toBeUndefined();
        const response = JSON.parse(result.content[0].text);

        expect(response.status).toBe('GNOSIS_FRAMEWORK_ACTIVADO');
        expect(response.version).toBe('2.0.0');
        expect(response.ontologia).toBeDefined();
        expect(response.falacias_a_impugnar).toBeDefined();
        expect(response.figuras_inmanentes).toBeDefined();
        expect(response.flujo_operatorio).toBeDefined();
      });
    });

    describe('Operación: impugnar', () => {
      it('debe analizar falacia descriptivismo', () => {
        const result = server.processThought({
          tag: 'impugnar',
          content: 'Los datos hablan por sí solos',
          stepNumber: 5,
          nextStepNeeded: true,
          falacia: 'descriptivismo'
        });

        expect(result.isError).toBeUndefined();
        const response = JSON.parse(result.content[0].text);

        expect(response.status).toBe('FALACIA_IMPUGNADA');
        expect(response.falacia.tipo).toBe('DESCRIPTIVISMO');
        expect(response.falacia.formula).toBe('α sin β');
      });

      it('debe analizar falacia teoreticismo', () => {
        const result = server.processThought({
          tag: 'impugnar',
          content: 'La teoría predice...',
          stepNumber: 5,
          nextStepNeeded: true,
          falacia: 'teoreticismo'
        });

        const response = JSON.parse(result.content[0].text);
        expect(response.falacia.tipo).toBe('TEORETICISMO');
        expect(response.falacia.formula).toBe('β sin α');
      });

      it('debe analizar falacia adecuacionismo', () => {
        const result = server.processThought({
          tag: 'impugnar',
          content: 'Por un lado... por otro lado...',
          stepNumber: 5,
          nextStepNeeded: true,
          falacia: 'adecuacionismo'
        });

        const response = JSON.parse(result.content[0].text);
        expect(response.falacia.tipo).toBe('ADECUACIONISMO');
        expect(response.falacia.formula).toBe('α + β');
      });
    });

    describe('Operación: transducir', () => {
      it('debe generar resumen de cierre cuando nextStepNeeded es false', () => {
        // Primero ejecutamos algunos pasos
        server.processThought({
          tag: 'comenzar',
          content: 'Campo: Test',
          stepNumber: 1,
          nextStepNeeded: true
        });

        server.processThought({
          tag: 'terminar',
          content: 'Identificando términos',
          stepNumber: 2,
          nextStepNeeded: true,
          terminos: ['T1', 'T2', 'T3']
        });

        // Cierre final
        const result = server.processThought({
          tag: 'transducir',
          content: 'Conocimiento construido',
          stepNumber: 3,
          nextStepNeeded: false
        });

        const response = JSON.parse(result.content[0].text);
        expect(response.status).toBe('TRANSDUCCION_COMPLETADA');
        expect(response.resumen).toBeDefined();
        expect(response.resumen.terminos_identificados).toContain('T1');
        expect(response.resumen.pasos_totales).toBe(3);
      });
    });

    describe('Acumulación de estado', () => {
      it('debe acumular términos a lo largo del journey', () => {
        server.processThought({
          tag: 'terminar',
          content: 'Paso 1',
          stepNumber: 1,
          nextStepNeeded: true,
          terminos: ['A', 'B']
        });

        server.processThought({
          tag: 'terminar',
          content: 'Paso 2',
          stepNumber: 2,
          nextStepNeeded: true,
          terminos: ['C', 'D']
        });

        const summary = server.getSummary();
        expect(summary.terminos).toEqual(['A', 'B', 'C', 'D']);
      });

      it('debe acumular relaciones', () => {
        server.processThought({
          tag: 'relacionar',
          content: 'Estableciendo relaciones',
          stepNumber: 1,
          nextStepNeeded: true,
          relaciones: ['R1: A → B', 'R2: B → C']
        });

        const summary = server.getSummary();
        expect(summary.relaciones).toHaveLength(2);
      });

      it('debe resetear estado en paso 1', () => {
        // Primer journey
        server.processThought({
          tag: 'terminar',
          content: 'Paso 1',
          stepNumber: 1,
          nextStepNeeded: true,
          terminos: ['X', 'Y']
        });

        // Nuevo journey (stepNumber = 1 resetea)
        server.processThought({
          tag: 'terminar',
          content: 'Nuevo journey',
          stepNumber: 1,
          nextStepNeeded: true,
          terminos: ['A']
        });

        const summary = server.getSummary();
        expect(summary.terminos).toEqual(['A']);
      });
    });

    describe('Output XML', () => {
      it('debe incluir xml_output en la respuesta', () => {
        const result = server.processThought({
          tag: 'fenomenizar',
          content: 'Captando fenómenos',
          stepNumber: 1,
          nextStepNeeded: true
        });

        const response = JSON.parse(result.content[0].text);
        expect(response.xml_output).toBeDefined();
        expect(response.xml_output).toContain('<gnosis_step');
        expect(response.xml_output).toContain('domain="semantico"');
        expect(response.xml_output).toContain('tag="fenomenizar"');
      });

      it('debe incluir materialidad en el XML cuando se especifica', () => {
        const result = server.processThought({
          tag: 'materializar',
          content: 'Clasificando materialidad',
          stepNumber: 1,
          nextStepNeeded: true,
          materialidad: 'M1'
        });

        const response = JSON.parse(result.content[0].text);
        expect(response.xml_output).toContain('<materialidad genero="M1">');
        expect(response.xml_output).toContain('Físico-corpóreo');
      });
    });
  });

  describe('getSummary()', () => {
    it('debe retornar resumen vacío inicialmente', () => {
      const summary = server.getSummary();
      expect(summary.pasos).toBe(0);
      expect(summary.trayectoria).toEqual([]);
      expect(summary.terminos).toEqual([]);
      expect(summary.relaciones).toEqual([]);
      expect(summary.falacias).toEqual([]);
    });

    it('debe retornar trayectoria de tags', () => {
      server.processThought({ tag: 'comenzar', content: 'A', stepNumber: 1, nextStepNeeded: true });
      server.processThought({ tag: 'terminar', content: 'B', stepNumber: 2, nextStepNeeded: true });
      server.processThought({ tag: 'relacionar', content: 'C', stepNumber: 3, nextStepNeeded: false });

      const summary = server.getSummary();
      expect(summary.trayectoria).toEqual(['comenzar', 'terminar', 'relacionar']);
      expect(summary.pasos).toBe(3);
    });
  });

  describe('Persistencia del Journey', () => {
    it('exportJourney() debe serializar estado a JSON', () => {
      server.processThought({
        tag: 'comenzar',
        content: 'Campo de prueba',
        stepNumber: 1,
        nextStepNeeded: true
      });

      server.processThought({
        tag: 'terminar',
        content: 'Identificando términos',
        stepNumber: 2,
        nextStepNeeded: true,
        terminos: ['A', 'B']
      });

      const json = server.exportJourney();
      const data = JSON.parse(json);

      expect(data.version).toBe('2.0.0');
      expect(data.journey).toHaveLength(2);
      expect(data.terminos).toEqual(['A', 'B']);
    });

    it('importJourney() debe restaurar estado desde JSON', () => {
      const json = JSON.stringify({
        journey: [{ tag: 'comenzar', content: 'Test', stepNumber: 1, nextStepNeeded: true }],
        terminos: ['X', 'Y'],
        relaciones: ['R1'],
        falacias: ['adecuacionismo']
      });

      const result = server.importJourney(json);
      expect(result.success).toBe(true);

      const summary = server.getSummary();
      expect(summary.pasos).toBe(1);
      expect(summary.terminos).toEqual(['X', 'Y']);
      expect(summary.falacias).toEqual(['adecuacionismo']);
    });

    it('importJourney() debe fallar con JSON inválido', () => {
      const result = server.importJourney('not valid json');
      expect(result.success).toBe(false);
      expect(result.error).toContain('Error al parsear');
    });

    it('importJourney() debe fallar sin array journey', () => {
      const result = server.importJourney(JSON.stringify({ foo: 'bar' }));
      expect(result.success).toBe(false);
      expect(result.error).toContain('Formato inválido');
    });

    it('clearJourney() debe limpiar estado', () => {
      server.processThought({
        tag: 'terminar',
        content: 'Test',
        stepNumber: 1,
        nextStepNeeded: true,
        terminos: ['A', 'B']
      });

      server.clearJourney();

      const summary = server.getSummary();
      expect(summary.pasos).toBe(0);
      expect(summary.terminos).toEqual([]);
    });
  });

  describe('Nuevos tags: criticar y ejemplificar', () => {
    it('debe aceptar tag criticar', () => {
      const result = server.processThought({
        tag: 'criticar',
        content: 'Crítica externa al campo',
        stepNumber: 1,
        nextStepNeeded: true
      });

      expect(result.isError).toBeUndefined();
      const response = JSON.parse(result.content[0].text);
      expect(response.domain).toBe('critico');
      expect(response.tag).toBe('criticar');
    });

    it('debe aceptar tag ejemplificar', () => {
      const result = server.processThought({
        tag: 'ejemplificar',
        content: 'Ejemplo concreto en M1',
        stepNumber: 1,
        nextStepNeeded: true,
        materialidad: 'M1'
      });

      expect(result.isError).toBeUndefined();
      const response = JSON.parse(result.content[0].text);
      expect(response.domain).toBe('critico');
      expect(response.tag).toBe('ejemplificar');
    });
  });
});

