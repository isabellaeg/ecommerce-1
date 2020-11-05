const axios = require("axios");
const ADD_CART = require('../constant')

const addCart = function (cart) {
  return {
    type: ADD_CART,
    cart,
  };
};

export const userCart = function (product, user) {
  return function () {
    return axios.post(`/api/cart`, { product, user })
/*       .then((res) => {
        dispatch(addCart(res.data))
      }) */
  };
};

export const allCart = (userId) => {
  return (dispatch) =>{
      return axios.get(`/api/cart/${userId}`)
      .then((res) => {
        dispatch(addCart(res.data))})
}
}

/* export const deleteCart = (userId) => {
  return () =>{
      return axios.delete(`/api/delete/${userId}`) 
      }
}  */