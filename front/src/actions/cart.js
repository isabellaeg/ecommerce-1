import axios from "axios";

const addCart = function (cart) {
  return {
    type: "ADD_CART",
    cart,
  };
};

const allVirtualCart = function (virtualCart) {
  return {
    type: "ADD_VIRTUAL_CART",
    virtualCart,
  };
};

export const userCart = function (product, user) {
  return function () {
    return axios.post(`/api/cart`, { product, user });
    /*       .then((res) => {
        dispatch(addCart(res.data))
      }) */
  };
};

export const allCart = (userId) => {
  return (dispatch) => {
    return axios.get(`/api/cart/${userId}`).then((res) => {
      console.log("RES DATA", res.data.Products);
      dispatch(addCart(res.data.Products));
    });
  };
};

export const deleteProduct = function (product, user) {
  return function () {
    return axios.put("/api/cart/destroy", { product, user });
  };
};

export const quantityProduct = function (product, user, cant) {
  return function () {
    return axios.put("/api/cart/cant", { product, user, cant });
  };
};

export const addVirtualCart = (product) => {
  return (dispatch) => {
    return dispatch(allVirtualCart(product));
  };
};
