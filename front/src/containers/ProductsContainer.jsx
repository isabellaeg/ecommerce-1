import React, { Component, useEffect } from "react";
import Products from '../components/Products'
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";
import { userCart, allCart, addVirtualCart } from "../actions/cart";
import {fetchProducts} from '../actions/products'

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCart = this.handleCart.bind(this);
  }

  componentDidMount() {
    let busq = new URLSearchParams(this.props.location.search).get('search')
    
    if (!busq) {
      return this.props.fetchAllProducts();
    } else {
      return this.props.fetchProducts(busq)
    }

  }

  handleCart(product) {
    if (!this.props.user.id) {
      //Si no estoy logueado
      if (localStorage.length === 0) {
        //Si no hay producto crea un nuevo elemento en el localstorage
        let newArrayVirtualCart = [];
        let newProduct = product;
        newProduct.CartProductQuant = { quantity: 1 };
        newArrayVirtualCart.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(newArrayVirtualCart));
      } else {
        //Si hay productos buscar y sumar, sino agregar uno nuevo
        let arrayVirtualCart = JSON.parse(localStorage.getItem("cart"));
        let flag = false;
        let indice = "";
        arrayVirtualCart.map((elem, index) => {
          if (elem.id === product.id) {
            flag = true;
            indice = index;
          }
        });
        if (flag === true) {
          arrayVirtualCart[indice].CartProductQuant.quantity =
            arrayVirtualCart[indice].CartProductQuant.quantity + 1;
          localStorage.setItem("cart", JSON.stringify(arrayVirtualCart));
        } else {
          let newProduct = product;
          newProduct.CartProductQuant = { quantity: 1 };
          let addArrayVirtualCart = JSON.parse(localStorage.getItem("cart"));
          addArrayVirtualCart.push(newProduct);
          localStorage.setItem("cart", JSON.stringify(addArrayVirtualCart));
        }
      }
    } else {
      //Si estoy logueado
      console.log("else", product);
      this.props.userCart(product, this.props.user).then(() => {
        console.log("this props all cart");
        this.props.allCart(this.props.user.id);
      });
    }
  }

  render() {
    return (
      <div>
        <Products
          handleCart={this.handleCart}
          productsArray={
            this.props.products.length > 0 && this.props.products
              ? this.props.products
              : this.props.allProducts
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allProducts: state.allProducts.allProducts,
    products: state.products.products,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  fetchAllProducts,
  userCart,
  allCart,
  addVirtualCart,
  fetchProducts
})(ProductsContainer);
