import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { v4 } from 'uuid';

interface Card {
  id: string;
  front: string;
  back: string;
  availableIn: Date;
}

interface Pack {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  cards: Card[];
}

export class PacksStore {
  packs: Pack[];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'packs-store',
      properties: ['packs'],
      storage: window.localStorage
    });

    this.packs = [];
  }

  addPack({ name }: Pick<Pack, 'name'>) {
    const pack: Pack = {
      id: v4(),
      name,
      cards: []
    };

    this.packs.push(pack);
  }
}

export const packsStore = new PacksStore();
