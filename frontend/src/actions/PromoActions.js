import { PROMO_GET, PROMO_ADD, PROMO_DELETE } from "../constants";

export const getPromos = () => {
  return {
    type: PROMO_GET,
  };
};

export const addPromo = (Promo) => {
  return {
    type: PROMO_ADD,
    Promo,
  };
};

export const deletePromo = (id) => {
  return {
    type: PROMO_DELETE,
    id,
  };
};
