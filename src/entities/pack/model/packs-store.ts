import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { deserializePackStore, serializePackStore } from '../lib';

import type { Pack } from './pack';
import { PackStore, type SerializedPackStore } from './pack-store';

export class PacksStore {
  packs: PackStore[];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'packs-store',
      properties: [
        {
          key: 'packs',
          serialize: (packs) => packs.map(serializePackStore),
          deserialize: (packs: SerializedPackStore[]) => packs.map(deserializePackStore)
        }
      ],
      storage: window.localStorage
    });

    this.packs = [];
  }

  addPack({ name }: Pick<Pack, 'name'>) {
    const packStore = new PackStore({ name });

    this.packs.push(packStore);
  }

  getPack({ id }: Pick<Pack, 'id'>) {
    return packsStore.packs.find((pack) => pack.id === id)!;
  }
}

export const packsStore = new PacksStore();
