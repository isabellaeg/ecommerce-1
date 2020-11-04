const axios = require("axios");
const RECEIVE_ALLPRODUCTS = require('../constant')

const receiveAllProducts = function (allProducts) {
  return {
    type: RECEIVE_ALLPRODUCTS,
    allProducts,
  };
};

export const fetchAllProducts = () => (dispatch) =>
  axios
    .get("/api/allproducts")
    .then((res) => res.data)
    .then((products) => dispatch(receiveAllProducts(products)));
