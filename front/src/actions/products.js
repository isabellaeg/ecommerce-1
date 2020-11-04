const axios = require("axios");
const RECEIVE_PRODUCTS = require("../constant");

const receiveProducts = function (products) {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};

export const fetchProducts = (stringBusqueda) => (dispatch) =>
  axios
    .get(`/api/products/${stringBusqueda}`)
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
