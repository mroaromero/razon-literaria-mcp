// ============================================================================
// GNOSIS MCP - Sistema de Logging Estructurado
// ============================================================================

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  domain?: string;
  tag?: string;
  step?: number;
  message: string;
  data?: Record<string, unknown>;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  silent: 4
};

class Logger {
  private level: LogLevel;
  private useJson: boolean;

  constructor() {
    const envLevel = process.env.GNOSIS_LOG_LEVEL?.toLowerCase() as LogLevel;
    this.level = LOG_LEVELS[envLevel] !== undefined ? envLevel : 'info';
    this.useJson = process.env.GNOSIS_LOG_FORMAT === 'json';
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= LOG_LEVELS[this.level];
  }

  private formatEntry(entry: LogEntry): string {
    if (this.useJson) {
      return JSON.stringify(entry);
    }

    const { timestamp, level, domain, tag, step, message } = entry;
    const prefix = domain && tag
      ? `[${domain.toUpperCase()}:${tag}]`
      : domain
        ? `[${domain.toUpperCase()}]`
        : '';
    const stepInfo = step !== undefined ? ` Paso ${step}` : '';

    return `${timestamp} [${level.toUpperCase()}] ${prefix}${stepInfo} ${message}`;
  }

  private log(level: LogLevel, message: string, meta?: { domain?: string; tag?: string; step?: number; data?: Record<string, unknown> }): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...meta
    };

    // MCP usa stdio, por lo que los logs van a stderr
    console.error(this.formatEntry(entry));
  }

  debug(message: string, meta?: { domain?: string; tag?: string; step?: number; data?: Record<string, unknown> }): void {
    this.log('debug', message, meta);
  }

  info(message: string, meta?: { domain?: string; tag?: string; step?: number; data?: Record<string, unknown> }): void {
    this.log('info', message, meta);
  }

  warn(message: string, meta?: { domain?: string; tag?: string; step?: number; data?: Record<string, unknown> }): void {
    this.log('warn', message, meta);
  }

  error(message: string, meta?: { domain?: string; tag?: string; step?: number; data?: Record<string, unknown> }): void {
    this.log('error', message, meta);
  }

  // Log específico para operaciones gnoseológicas
  operation(domain: string, tag: string, step: number, content: string): void {
    this.info(content, { domain, tag, step });
  }

  // Banner de inicio
  banner(name: string, version: string, mode: 'cli' | 'http', port?: number): void {
    if (!this.shouldLog('info')) return;

    const portLine = port ? `Puerto: ${port}` : '';
    console.error(`
╔══════════════════════════════════════════════════════════════╗
║  ${name} v${version} - ${mode === 'cli' ? 'CLI Mode' : 'HTTP Server'}
║  Materialismo Filosófico de Gustavo Bueno
╠══════════════════════════════════════════════════════════════╣
║  24 tags operatorios | 8 dominios | 3 falacias
║  Inicia con 'comenzar', termina con 'transducir'
${port ? `║  ${portLine}                                                 \n` : ''}╚══════════════════════════════════════════════════════════════╝
`);
  }
}

// Singleton exportado
export const logger = new Logger();
