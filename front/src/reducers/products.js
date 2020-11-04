const { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } = require("../constant");

const initialState = {
  products: [],
  singleProduct: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      console.log("ACTION", action);
      return Object.assign({}, state, { products: action.products });
    case RECEIVE_SINGLE_PRODUCT:
      console.log("ACTION single product", action);
      return Object.assign({}, state, { singleProduct: action.singleProduct });
    default:
      return state;
  }
};
