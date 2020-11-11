import { combineReducers } from "redux";
import allProducts from "./allProducts";
import products from "./products";
import user from "./userReducer";
import cart from './cartReducer'
import search from './searchReducer'
import admin from './adminReducer'
import categories from './categoriesReducer'

export default combineReducers({
  allProducts,
  products,
  user,
  cart,
  search,
  admin,
  categories
});
