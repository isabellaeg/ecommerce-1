const axios = require("axios");
const { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } = require("../constant");

const receiveProducts = function (products) {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};

const receiveSingleProduct = function (singleProduct) {
  return {
    type: RECEIVE_SINGLE_PRODUCT,
    singleProduct,
  };
};

export const fetchProducts = (stringBusqueda) => (dispatch) =>
  axios
    .get(`/api/products/${stringBusqueda}`)
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));

export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    .get(`/api/singleproduct/${id}`)
    .then((res) => {
      return res.data;
    })
    .then((singleProduct) => {
      dispatch(receiveSingleProduct(singleProduct));
    });
