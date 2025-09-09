import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';

import type { Card } from './card';

export interface SerializedCardStore {
  id: string;
  front: string;
  back: string;
  availableIn: string;
}

export class CardStore implements Card {
  id: string;
  front: string;
  back: string;
  availableIn: Date;

  constructor({
    id,
    front,
    back,
    availableIn
  }: Pick<CardStore, 'front' | 'back'> & Partial<Omit<CardStore, 'front' | 'back'>>) {
    makeAutoObservable(this);

    this.id = id ?? v4();
    this.front = front;
    this.back = back;
    this.availableIn = availableIn ?? new Date(0);
  }

  get isAvailable() {
    return Date.now() > this.availableIn.getTime();
  }

  changeAvailableIn(availableIn: Date) {
    this.availableIn = availableIn;
  }
}
