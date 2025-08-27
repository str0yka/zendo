export interface Card {
  id: string;
  front: string;
  back: string;
  availableIn: Date;
}

export interface SerializedCard {
  id: string;
  front: string;
  back: string;
  availableIn: string;
}
