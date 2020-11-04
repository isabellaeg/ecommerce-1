import { combineReducers } from "redux";
import allProducts from "./allProducts";
import products from "./products";
import user from "./userReducer";

export default combineReducers({
  allProducts,
  products,
  user,
});
