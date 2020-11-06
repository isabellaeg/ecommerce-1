import {ADD_CART} from '../constant'

const initialState = {
  cart: [],
  virtualCart: []
}


export default (state = initialState, action) => {
  console.log('REDUCER ADD CART', action)
    switch(action.type) {
      case "ADD_CART":
       
          return Object.assign({}, state, { cart: action.cart }); 
      case "ADD_VIRTUAL_CART":
       console.log('ACTION REDUCER',action)
          return Object.assign({}, state, { virtualCart: action.virtualCart });    
      default:
        return state;
    }
  } 