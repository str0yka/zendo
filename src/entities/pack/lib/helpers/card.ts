import { v4 } from 'uuid';

import type { Card, SerializedCard } from '../../model';

export const createCard = ({ front, back }: Pick<Card, 'front' | 'back'>): Card => ({
  id: v4(),
  front,
  back,
  availableIn: new Date(0)
});

export const serializeCard = ({ id, front, back, availableIn }: Card): SerializedCard => ({
  id,
  front,
  back,
  availableIn: availableIn.toString()
});

export const deserializeCard = ({ id, front, back, availableIn }: SerializedCard): Card => ({
  id,
  front,
  back,
  availableIn: new Date(availableIn)
});

export const isCardAvailable = (card: Card) => Date.now() > card.availableIn.getDate();
