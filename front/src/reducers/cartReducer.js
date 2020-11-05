const initialState = {
  cart: []
}


  export default (state = initialState, action) => {
    switch(action.type) {
  
        case "ADD_CART":
          return Object.assign({}, state, { cart: action.cart }); 
      default:
        return state;
    }
  } 