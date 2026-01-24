// ============================================================================
// DIAGNOSTICATORS - Central export file
// ============================================================================

// Base types and interfaces
export * from './base/Diagnosis.js';
export * from './base/IDiagnosticator.js';
export * from './base/BaseDiagnosticator.js';

// Layer 2 - Cultural Diagnosis
export { HanDiagnosticator } from './layer2/HanDiagnosticator.js';
export { RosaDiagnosticator } from './layer2/RosaDiagnosticator.js';
export { FisherDiagnosticator } from './layer2/FisherDiagnosticator.js';
export { SadinDiagnosticator } from './layer2/SadinDiagnosticator.js';
export { BerardiDiagnosticator } from './layer2/BerardiDiagnosticator.js';

// Layer 3 - Emotional Economy
export { IllouzDiagnosticator } from './layer3/IllouzDiagnosticator.js';
export { DubetDiagnosticator } from './layer3/DubetDiagnosticator.js';
export { SandelDiagnosticator } from './layer3/SandelDiagnosticator.js';

// Orchestrator
export { CulturalPathologist, createCulturalPathologist } from './CulturalPathologist.js';
