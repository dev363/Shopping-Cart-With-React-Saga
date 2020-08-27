import {
  PROMO_ADD_SUCCESS,
  PROMO_ADD_FAILURE,
  PROMO_DELETE_SUCCESS,
  PROMO_DELETE_FAILURE,
  PROMO_GET_SUCCESS,
  PROMO_GET_FAILURE,
} from "../constants";

const intialState = [];

export default function (state = intialState, { type, payload }) {
  switch (type) {
    case PROMO_ADD_SUCCESS:
      return { ...state, promos: [...state.promos, { ...payload }] };

    case PROMO_ADD_FAILURE:
      return { ...state };

    case PROMO_DELETE_SUCCESS: {
      const promos = state.promos.filter((i) => i._id !== payload.id);
      return { ...state, promos: promos };
    }

    case PROMO_DELETE_FAILURE:
      return { ...state };

    case PROMO_GET_SUCCESS:
      return { ...state, promos: payload };

    case PROMO_GET_FAILURE:
      return { ...state };

    default:
      return state;
  }
}
