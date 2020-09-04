import {
  CART_ADD_SUCCESS,
  CART_ADD_FAILURE,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAILURE,
  CART_GET_SUCCESS,
  CART_GET_FAILURE,
  COUPON_APPLY_SUCCESS,
  COUPON_APPLY_FAILURE,
} from "../constants";

const intialState = {
  items: [],
  promo: null,
  discount: 0,
  minOrder: 0,
};

export default function (state = intialState, { type, payload }) {
  switch (type) {
    case CART_ADD_SUCCESS: {
      const AllItems = state.items;
      const index = AllItems.findIndex((i) => i._id === payload.item._id);
      if (index === -1) {
        AllItems.push({ ...payload.item, qty: 1 });
      } else {
        AllItems[index] = { ...AllItems[index], qty: ++AllItems[index].qty };
      }

      const Total = CartTotal(AllItems);
      return { ...state, items: AllItems, subtotal: Total };
    }

    case CART_ADD_FAILURE:
      return { ...state };

    case CART_DELETE_SUCCESS: {
      const { promo, discount, minOrder } = state;
      const AllItems = state.items.filter((i) => i._id !== payload.id);
      const Total = CartTotal(AllItems);
      if (promo && Total < minOrder) {
        return {
          ...state,
          items: AllItems,
          subtotal: Total,
          promo: null,
          discount: 0,
          minOrder: 0,
        };
      }
      return { ...state, items: AllItems, subtotal: Total };
    }

    case CART_DELETE_FAILURE:
      return { ...state };

    case CART_GET_SUCCESS:
      return state;

    case CART_GET_FAILURE:
      return state;

    case COUPON_APPLY_SUCCESS: {
      return { ...state, ...payload };
    }
    case COUPON_APPLY_FAILURE:
      return state;
    default:
      return state;
  }
}

const CartTotal = (items) => {
  const total = items.reduce((pre, cur) => {
    return pre + cur.price * cur.qty;
  }, 0);
  return total;
};
