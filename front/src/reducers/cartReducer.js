import {ADD_CART} from '../constant'

const initialState = {
  cart: []
}


export default (state = initialState, action) => {
  console.log('REDUCER ADD CART', action)
    switch(action.type) {
      case "ADD_CART":
       
          return Object.assign({}, state, { cart: action.cart }); 
      default:
        return state;
    }
  } 