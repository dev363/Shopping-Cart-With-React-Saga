import {
  PRODUCT_LOADING_START,
  PRODUCT_LOADING_STOP,
  PROMO_LOADING_START,
  PROMO_LOADING_STOP,
} from "../constants";

const intialState = {
  product: false,
  promocode: false,
};

export default function (state = intialState, { type, payload }) {
  switch (type) {
    case PRODUCT_LOADING_START:
      return { ...state, product: true };

    case PRODUCT_LOADING_STOP:
      return { ...state, product: false };

    case PROMO_LOADING_START:
      return { ...state, promocode: true };

    case PROMO_LOADING_STOP:
      return { ...state, promocode: false };

    default:
      return state;
  }
}
