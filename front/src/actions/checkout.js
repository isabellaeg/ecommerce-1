import axios from "axios";
// const {CHECKOUT_CART} = require('../constant')

const receiveCardInfo = function (allProducts) {
  return {
    type: CHECKOUT_CART,
    CardInfo,
  };
};

/* export const checkoutInfo = (address, card, cvv, cartId) => (dispatch) => {
  console.log("ACTION CHECKOUT", address, card, cvv, cartId)
  return function() {
    return axios.put("/api/checkout", {address, card, cvv, cartId})
  }}
 */
export const checkoutInfo = function (address, card, cvv, user) {
  return function () {
    return axios.put("/api/checkout", { address, card, cvv, user });
  };
};
