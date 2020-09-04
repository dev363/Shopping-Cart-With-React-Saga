import {
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAILURE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAILURE,
} from "../constants";

const intialState = [];

export default function (state = intialState, { type, payload }) {
  switch (type) {
    case PRODUCT_ADD_SUCCESS:
      return { ...state, products: [...state.products, { ...payload }] };

    case PRODUCT_ADD_FAILURE:
      return { ...state };

    case PRODUCT_DELETE_SUCCESS: {
      const Products = state.products.filter((i) => i._id !== payload.id);
      return { ...state, products: Products };
    }

    case PRODUCT_DELETE_FAILURE:
      return { ...state };

    case PRODUCT_GET_SUCCESS:
      return { ...state, products: payload };

    case PRODUCT_GET_FAILURE:
      return { ...state };

    default:
      return state;
  }
}
