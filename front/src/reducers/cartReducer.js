import { ADD_CART } from "../constant";

const initialState = {
  cart: [],
  virtualCart: [],
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return Object.assign({}, state, { cart: action.cart });
    case "ADD_VIRTUAL_CART":
      return Object.assign({}, state, { virtualCart: action.virtualCart });
    case "ADD_ORDERS":
      return Object.assign({}, state, { orders: action.orders });
    default:
      return state;
  }
};
