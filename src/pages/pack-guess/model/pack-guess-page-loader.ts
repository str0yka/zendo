import { type PackStore, packsStore } from '@entities/pack';

import { createLoader } from '@shared/lib';

export interface PackGuessPageLoaderData {
  pack: PackStore;
}

export const packGuessPageLoader = createLoader<PackGuessPageLoaderData>(({ params }) => {
  const pack = packsStore.getPack({ id: params.id! });

  return { pack };
});
