import { PackStore, type SerializedPackStore } from '../../model';

import { deserializeCardStore, serializeCardStore } from './card-store';

export const serializePackStore = ({
  id,
  name,
  description,
  cards,
  tags
}: PackStore): SerializedPackStore => ({
  id,
  name,
  description,
  cards: cards.map(serializeCardStore),
  tags
});

export const deserializePackStore = ({
  id,
  name,
  description,
  cards,
  tags
}: SerializedPackStore): PackStore =>
  new PackStore({
    id,
    name,
    description,
    cards: cards.map(deserializeCardStore),
    tags
  });
