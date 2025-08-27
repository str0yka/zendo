import { PackStore, type SerializedPackStore } from '../../model';

import { deserializeCard, serializeCard } from './card';

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
  cards: cards.map(serializeCard),
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
    cards: cards.map(deserializeCard),
    tags
  });
