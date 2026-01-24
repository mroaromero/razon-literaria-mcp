// ============================================================================
// POLICÍA LÓGICO: Validador de Estados Gnoseológicos
// ============================================================================

import { GeneroMaterialidad } from '../ontology/materialidad.js';
import { TipoFalacia, detectarFalacia } from '../ontology/falacias.js';

/**
 * POLICÍA LÓGICO
 *
 * Sistema de validación que impide operaciones gnoseológicas inválidas.
 * Actúa como firewall contra el idealismo, teoreticismo y otras falacias.
 */

export interface EstadoGnoseologico {
  /** Términos identificados en M1 (materialidad física) */
  terminosM1: string[];
  /** Términos identificados en M2 (materialidad psicológica) */
  terminosM2: string[];
  /** Términos identificados en M3 (materialidad lógica) */
  terminosM3: string[];
  /** Relaciones establecidas */
  relaciones: string[];
  /** ¿Se ha abierto el campo categorial? */
  campoAbierto: boolean;
  /** ¿Se han identificado términos? */
  terminosIdentificados: boolean;
  /** ¿Se han establecido relaciones? */
  relacionesEstablecidas: boolean;
  /** ¿Se ha realizado análisis crítico? */
  criticaRealizada: boolean;
  /** Falacias detectadas */
  falaciasDetectadas: TipoFalacia[];
}

export class LogicGuard {
  private estado: EstadoGnoseologico;

  constructor() {
    this.estado = this.estadoInicial();
  }

  private estadoInicial(): EstadoGnoseologico {
    return {
      terminosM1: [],
      terminosM2: [],
      terminosM3: [],
      relaciones: [],
      campoAbierto: false,
      terminosIdentificados: false,
      relacionesEstablecidas: false,
      criticaRealizada: false,
      falaciasDetectadas: []
    };
  }

  /**
   * REGLA 1: BLOCK_CRITIQUE_WITHOUT_ONTOLOGY
   *
   * No permitir crítica sin haber identificado materialidad M1.
   * El análisis crítico sin referentes físicos es idealismo.
   */
  public validarCritica(): { valido: boolean; error?: string } {
    if (this.estado.terminosM1.length === 0) {
      return {
        valido: false,
        error: 'ERROR GNOSEOLÓGICO: Crítica sin materialidad M1. Defina el cuerpo físico antes de criticar.'
      };
    }
    return { valido: true };
  }

  /**
   * REGLA 2: DETECT_IDEALISM
   *
   * Detectar conceptos abstractos (M3) sin referente M1.
   * El M3 sin M1 es metafísica.
   */
  public validarIdealismo(): { valido: boolean; error?: string } {
    if (this.estado.terminosM3.length > 0 && this.estado.terminosM1.length === 0) {
      return {
        valido: false,
        error: `ERROR: Metafísica detectada. Términos M3 "${this.estado.terminosM3.join(', ')}" sin referente M1. Defina el cuerpo físico.`
      };
    }
    return { valido: true };
  }

  /**
   * REGLA 3: REQUIRE_CIRCULARITY
   *
   * Validar que la transducción conecte el resultado (M3) con el origen (M1).
   * El cierre gnoseológico debe ser circular.
   */
  public validarCircularidad(): { valido: boolean; error?: string } {
    if (this.estado.terminosM3.length > 0 && this.estado.terminosM1.length === 0) {
      return {
        valido: false,
        error: 'ERROR: Falta circularidad. La transducción debe conectar M3 con M1.'
      };
    }

    if (this.estado.relaciones.length === 0) {
      return {
        valido: false,
        error: 'ERROR: Falta circularidad. No se han establecido relaciones entre términos.'
      };
    }

    return { valido: true };
  }

  /**
   * REGLA 4: VALIDATE_TERMS_BEFORE_RELATIONS
   *
   * No se pueden establecer relaciones sin términos.
   */
  public validarRelaciones(): { valido: boolean; error?: string } {
    const totalTerminos = this.estado.terminosM1.length + this.estado.terminosM2.length + this.estado.terminosM3.length;

    if (this.estado.relaciones.length > 0 && totalTerminos < 2) {
      return {
        valido: false,
        error: 'ERROR: Relaciones sin términos. Identifique al menos 2 términos antes de relacionar.'
      };
    }

    return { valido: true };
  }

  /**
   * REGLA 5: DETECT_FALLACIES_IN_TEXT
   *
   * Analizar texto para detectar falacias gnoseológicas.
   */
  public analizarTexto(texto: string): { falacias: TipoFalacia[]; advertencias: string[] } {
    const deteccion = detectarFalacia(texto);
    const advertencias: string[] = [];

    if (deteccion.falacia && deteccion.confianza > 0.3) {
      this.estado.falaciasDetectadas.push(deteccion.falacia);
      advertencias.push(`⚠️ FALACIA DETECTADA: ${deteccion.falacia.toUpperCase()}`);
      advertencias.push(`   Razón: ${deteccion.razon}`);
      advertencias.push(`   Confianza: ${(deteccion.confianza * 100).toFixed(0)}%`);
    }

    return {
      falacias: this.estado.falaciasDetectadas,
      advertencias
    };
  }

  /**
   * Registrar término en el género de materialidad correspondiente
   */
  public registrarTermino(termino: string, genero: GeneroMaterialidad): void {
    switch (genero) {
      case GeneroMaterialidad.M1:
        if (!this.estado.terminosM1.includes(termino)) {
          this.estado.terminosM1.push(termino);
        }
        break;
      case GeneroMaterialidad.M2:
        if (!this.estado.terminosM2.includes(termino)) {
          this.estado.terminosM2.push(termino);
        }
        break;
      case GeneroMaterialidad.M3:
        if (!this.estado.terminosM3.includes(termino)) {
          this.estado.terminosM3.push(termino);
        }
        break;
    }
    this.estado.terminosIdentificados = true;
  }

  /**
   * Registrar relación entre términos
   */
  public registrarRelacion(relacion: string): void {
    if (!this.estado.relaciones.includes(relacion)) {
      this.estado.relaciones.push(relacion);
      this.estado.relacionesEstablecidas = true;
    }
  }

  /**
   * Abrir campo categorial
   */
  public abrirCampo(): void {
    this.estado.campoAbierto = true;
  }

  /**
   * Marcar que se ha realizado crítica
   */
  public marcarCritica(): void {
    this.estado.criticaRealizada = true;
  }

  /**
   * Validar transducción final
   */
  public validarTransduccion(): { valido: boolean; errores: string[] } {
    const errores: string[] = [];

    if (!this.estado.campoAbierto) {
      errores.push('Campo categorial no abierto (falta tag "comenzar")');
    }

    if (!this.estado.terminosIdentificados) {
      errores.push('No se identificaron términos (falta tag "terminar")');
    }

    if (this.estado.terminosM1.length === 0) {
      errores.push('No se identificó materialidad M1 (cuerpos físicos)');
    }

    const validacionCircularidad = this.validarCircularidad();
    if (!validacionCircularidad.valido) {
      errores.push(validacionCircularidad.error!);
    }

    return {
      valido: errores.length === 0,
      errores
    };
  }

  /**
   * Obtener estado actual
   */
  public getEstado(): EstadoGnoseologico {
    return { ...this.estado };
  }

  /**
   * Reiniciar estado
   */
  public reset(): void {
    this.estado = this.estadoInicial();
  }

  /**
   * Generar reporte de validación
   */
  public generarReporte(): string {
    const lineas: string[] = [];
    lineas.push('═══════════════════════════════════════════════');
    lineas.push('         REPORTE DEL POLICÍA LÓGICO            ');
    lineas.push('═══════════════════════════════════════════════');
    lineas.push('');

    // Estado del campo
    lineas.push('📊 ESTADO DEL CAMPO GNOSEOLÓGICO:');
    lineas.push(`   Campo abierto: ${this.estado.campoAbierto ? '✓' : '✗'}`);
    lineas.push(`   Términos identificados: ${this.estado.terminosIdentificados ? '✓' : '✗'}`);
    lineas.push(`   Relaciones establecidas: ${this.estado.relacionesEstablecidas ? '✓' : '✗'}`);
    lineas.push(`   Crítica realizada: ${this.estado.criticaRealizada ? '✓' : '✗'}`);
    lineas.push('');

    // Materialidades
    lineas.push('🧬 MATERIALIDADES IDENTIFICADAS:');
    lineas.push(`   M1 (Físico): ${this.estado.terminosM1.length} términos`);
    if (this.estado.terminosM1.length > 0) {
      lineas.push(`      → ${this.estado.terminosM1.join(', ')}`);
    }
    lineas.push(`   M2 (Psicológico): ${this.estado.terminosM2.length} términos`);
    if (this.estado.terminosM2.length > 0) {
      lineas.push(`      → ${this.estado.terminosM2.join(', ')}`);
    }
    lineas.push(`   M3 (Lógico): ${this.estado.terminosM3.length} términos`);
    if (this.estado.terminosM3.length > 0) {
      lineas.push(`      → ${this.estado.terminosM3.join(', ')}`);
    }
    lineas.push('');

    // Relaciones
    lineas.push(`📐 RELACIONES: ${this.estado.relaciones.length}`);
    if (this.estado.relaciones.length > 0) {
      this.estado.relaciones.forEach(r => lineas.push(`   → ${r}`));
    }
    lineas.push('');

    // Falacias
    if (this.estado.falaciasDetectadas.length > 0) {
      lineas.push('⚠️  FALACIAS DETECTADAS:');
      this.estado.falaciasDetectadas.forEach(f => lineas.push(`   → ${f.toUpperCase()}`));
      lineas.push('');
    }

    // Validaciones
    lineas.push('🔒 VALIDACIONES:');
    const validacionCritica = this.validarCritica();
    lineas.push(`   Crítica válida: ${validacionCritica.valido ? '✓' : '✗ ' + validacionCritica.error}`);

    const validacionIdealismo = this.validarIdealismo();
    lineas.push(`   Sin idealismo: ${validacionIdealismo.valido ? '✓' : '✗ ' + validacionIdealismo.error}`);

    const validacionCircularidad = this.validarCircularidad();
    lineas.push(`   Circularidad: ${validacionCircularidad.valido ? '✓' : '✗ ' + validacionCircularidad.error}`);

    lineas.push('═══════════════════════════════════════════════');

    return lineas.join('\n');
  }
}
