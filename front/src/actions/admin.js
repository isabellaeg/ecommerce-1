const axios = require("axios");


const receiveAllUsers = function (allusers) {
  return {
    type: "RECEIVE_ALL_USERS",
    allusers,
  };
};

const receiveAdminProducts = function (allproducts) {
    return {
      type: "RECEIVE_ADMIN_PRODUCTS",
      allproducts,
    };
  };

//BUSQUEDA DE TODOS LOS USERS

export const fetchAllUsers = () => (dispatch) =>
  axios
    .get("/api/admin/users")
    .then((res) => res.data)
    .then((allusers) => dispatch(receiveAllUsers(allusers)));

    //BUSQUEDA DE TODOS LOS PRODUCTOS

    export const fetchAdminProducts = () => (dispatch) =>
    axios
      .get("/api/admin/products")
      .then((res) => res.data)
      .then((allproducts) => dispatch(receiveAdminProducts(allproducts)));    


     //EDIT ROL USER 
export const userRol = function (user) {
    return function () {
      return axios.put(`/api/admin/users/rol`, {user});
    };
    };

    //DELETE PRODUCT
    export const deleteProduct = function (product) {
        return function () {
          return axios.put("/api/admin/products/destroy", {product});
        };
        };
         
    //NEW PRODUCT TENER EN CUENTA LA cATEGORIA
    
    export const addAdminProduct = function (product) {

        return function () {
          return axios.post(`/api/admin/newproducts`, { product});
        };
      };
      

      
      // DELETE USER
export const deleteUser = function (user) {
    return function () {
      return axios.put("/api/admin/users/destroy", {user});
    };
    };
        
