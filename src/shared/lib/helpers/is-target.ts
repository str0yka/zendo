import type { HookTarget } from './get-element';
import { targetSymbol } from './get-element';

export const isTarget = (target: HookTarget) =>
  typeof target === 'object' && ('current' in target || target.type === targetSymbol);
