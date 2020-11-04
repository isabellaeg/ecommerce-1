import { combineReducers } from 'redux';
import allProducts from './allProducts'
import products from './products'


export default combineReducers ({
    allProducts,
    products,
})