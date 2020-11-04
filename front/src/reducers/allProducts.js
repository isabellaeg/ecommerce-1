const RECEIVE_ALLPRODUCTS = require("../constant");
const RECEIVE_PRODUCTS = require("../constant")

const initialState = {
  allProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALLPRODUCTS:
      return Object.assign({}, state, { allProducts: action.allProducts });   
    default:
      return state;
  }
};
