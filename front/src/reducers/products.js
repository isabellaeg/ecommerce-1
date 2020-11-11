const { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } = require("../constant");

const initialState = {
  products: [],
  singleProduct: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
    case RECEIVE_SINGLE_PRODUCT:
      return Object.assign({}, state, { singleProduct: action.singleProduct });
    default:
      return state;
  }
};
