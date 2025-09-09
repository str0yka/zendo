export const ROUTE = {
  PACKS: '/packs',
  PACK: (id: string) => `/packs/${id}`,
  PACK_GUESS: (id: string) => `/packs/${id}/guess`,
  PACK_EDIT: (id: string) => `/packs/${id}/edit`,
  PACK_CREATE: '/packs/create'
};
