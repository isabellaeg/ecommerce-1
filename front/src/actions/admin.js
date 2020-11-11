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

  const receiveAdminCategory = function (allCategory) {
    return {
      type: "RECEIVE_ADMIN_CATEGORY",
      allCategory,
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

// BUSQUEDA DE CATEGORIAS

export const fetchAdminCategory = () => (dispatch) =>
axios
  .get("/api/admin/category")
  .then((res) => res.data)
  .then((allCategory) => dispatch(receiveAdminCategory(allCategory)));    


     //EDIT ROL USER 
export const userRol = function (user, rol) {
    return function () {
      return axios.put(`/api/admin/users/rol`, {user, rol});
    };
    };

//DELETE PRODUCT
    export const deleteProduct = function (product) {
        return function () {
          return axios.put("/api/admin/products/destroy", {product});
        };
        };

// EDIT PRODUCT
  export const editProduct = function (product) {
    console.log("PRODUCT", product)
      return function () {
        return axios.put(`/api/admin/products/${product.id}`, {product});
      }
  }
;
         
    //NEW PRODUCT TENER EN CUENTA LA cATEGORIA
    
    export const addAdminProduct = function (product, category) {

        return function () {
          return axios.post(`/api/admin/newproducts`, { product, category});
        };
      };
      

      
      // DELETE USER
export const deleteUser = function (user) {
    return function () {
      return axios.put("/api/admin/users/destroy", {user});
    };
    };


    //DELETE CATEGORY
    export const deleteCategory = function (category) {
      return function () {
        return axios.put("/api/admin/category/destroy", {category});
      };
      };
        
      export const addAdminCategory = function (category) {
        return function () {
          return axios.post(`/api/admin/newcategory`, { category});
        };
      };