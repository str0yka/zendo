import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';

import { sample } from '@shared/lib';

import type { CardStore, SerializedCardStore } from './card-store';
import type { Pack } from './pack';

export interface SerializedPackStore {
  id: string;
  name: string;
  description?: string;
  cards: SerializedCardStore[];
  tags?: string[];
}

export class PackStore implements Pack {
  id: string;
  name: string;
  description?: string;
  cards: CardStore[];
  tags?: string[];

  constructor({
    id,
    name,
    description,
    cards,
    tags
  }: Pick<PackStore, 'name'> & Partial<Omit<PackStore, 'name'>>) {
    makeAutoObservable(this);

    this.id = id ?? v4();
    this.name = name;
    this.description = description;
    this.cards = cards ?? [];
    this.tags = tags ?? [];
  }

  addCards({ cards }: Pick<PackStore, 'cards'>) {
    this.cards.push(...cards);
  }

  getAvailableCards() {
    return this.cards.filter((card) => card.isAvailable);
  }

  getRandomAvailableCard(): CardStore | undefined {
    console.log(this.getAvailableCards());
    return sample(this.getAvailableCards());
  }
}
