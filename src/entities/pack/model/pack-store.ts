import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';

import type { Card, SerializedCard } from './card';
import type { Pack } from './pack';

export interface SerializedPackStore {
  id: string;
  name: string;
  description?: string;
  cards: SerializedCard[];
  tags?: string[];
}

export class PackStore implements Pack {
  id: string;
  name: string;
  description?: string;
  cards: Card[];
  tags?: string[];

  constructor({
    id,
    name,
    description,
    cards,
    tags
  }: Pick<Pack, 'name'> & Partial<Omit<Pack, 'name'>>) {
    makeAutoObservable(this);

    this.id = id ?? v4();
    this.name = name;
    this.description = description;
    this.cards = cards ?? [];
    this.tags = tags ?? [];
  }

  addCards({ cards }: Pick<Pack, 'cards'>) {
    this.cards.push(...cards);
  }
}
