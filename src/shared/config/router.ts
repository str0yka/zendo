export const ROUTE = {
  PACKS: '/packs',
  PACK: (id: number | ':id') => `/packs/${id}`,
  PACK_EDIT: (id: number | ':id') => `/packs/${id}/edit`,
  PACK_CREATE: '/packs/create'
};
