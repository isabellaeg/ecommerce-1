const axios = require("axios");
const RECEIVE_PRODUCTS = require('../constant')

const receiveProducts = function (products) {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};

export const fetchAllProducts = () => (dispatch) =>
  axios
    .get("/api/products")
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
