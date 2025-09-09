import { type Card, CardStore, type SerializedCardStore } from '../../model';

export const serializeCardStore = ({
  id,
  front,
  back,
  availableIn
}: CardStore): SerializedCardStore => ({
  id,
  front,
  back,
  availableIn: availableIn.toString()
});

export const deserializeCardStore = ({
  id,
  front,
  back,
  availableIn
}: SerializedCardStore): CardStore =>
  new CardStore({
    id,
    front,
    back,
    availableIn: new Date(availableIn)
  });
