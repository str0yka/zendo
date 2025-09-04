import type { Card } from './card';

export interface Pack {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  cards: Card[];
}
