const RECEIVE_PRODUCTS = require("../constant");

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
        console.log('ACTION',action)
      return Object.assign({}, state, { products: action.products });  
    default:
      return state;
  }
};

