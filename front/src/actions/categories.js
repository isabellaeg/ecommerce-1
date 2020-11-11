import axios from "axios";
import { RECEIVE_CATEGORIES } from "../constant";

const receiveCategories = function (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
};

export const fetchCategories = () => (dispatch) => {
  axios
    .get("api/categories")
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      return dispatch(receiveCategories(res));
    });
};
