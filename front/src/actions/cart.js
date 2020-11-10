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

const addOrder = function (orders){
  return {
    type: "ADD_ORDERS",
    orders
  }
}

export const userCart = function (product, user) {
  console.log("en user cart");
  console.log("user", user);
  return function () {
    return axios.post(`/api/cart`, { product, user });
  };
};

export const allCart = (userId) => {
  console.log("allCart");
  return (dispatch) => {
    return axios.get(`/api/cart/${userId}`).then((res) => {
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
  if (!product) {
    product = {};
  }
  return (dispatch) => {
    return dispatch(allVirtualCart(product));
  };
};

export const clearCartInStore = () => (dispatch) => {
  return dispatch(addCart([]));
};

export const clearVirtualCartInStore = () => (dispatch) => {
  return dispatch(allVirtualCart([]));
};


export const allOrders = (userId) => {
  return (dispatch) => {
    return axios.get(`/api/orders/${userId}`).then((res) => {
      console.log('RES.DATA', res.data)
      dispatch(addOrder(res.data));
    });
  };
};