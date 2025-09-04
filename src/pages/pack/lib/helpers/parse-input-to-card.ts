import { CARD_SEPARATOR, FRONT_BACK_SEPARATOR } from '@pages/pack';

import { createCard } from '@entities/pack';

export const parseInputToCards = (input: string) => {
  const unparsedCards = input.split(CARD_SEPARATOR);

  const cards = unparsedCards.map((unparsedCard) => {
    const [front, back] = unparsedCard.split(FRONT_BACK_SEPARATOR);

    return createCard({ front, back });
  });

  return cards;
};
