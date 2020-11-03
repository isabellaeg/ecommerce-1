const RECEIVE_PRODUCTS = require("../constant");

const initialState = {
  allProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { allProducts: action.products });
    default:
      return state;
  }
};
