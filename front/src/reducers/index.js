import { combineReducers } from "redux";
import allProducts from "./allProducts";
import products from "./products";
import user from "./userReducer";
import cart from './cartReducer'
import search from './searchReducer'

export default combineReducers({
  allProducts,
  products,
  user,
  cart,
  search
});
