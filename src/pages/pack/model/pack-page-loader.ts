import { type PackStore, packsStore } from '@entities/pack';

import { createLoader } from '@shared/lib';

export interface PackPageLoaderData {
  pack: PackStore;
}

export const packPageLoader = createLoader<PackPageLoaderData>(({ params }) => {
  const pack = packsStore.getPack({ id: params.id! });

  return { pack };
});
