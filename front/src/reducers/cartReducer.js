import { ADD_CART } from "../constant";

const initialState = {
  cart: [],
  virtualCart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return Object.assign({}, state, { cart: action.cart });
    case "ADD_VIRTUAL_CART":
      return Object.assign({}, state, { virtualCart: action.virtualCart });
    default:
      return state;
  }
};
