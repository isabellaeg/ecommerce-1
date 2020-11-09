import React, { Component, useEffect } from "react";
import AllProducts from "../components/AllProducts";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";
import { userCart, allCart, addVirtualCart } from "../actions/cart";

class AllProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
    this.sumarCantVirtualCart = this.sumarCantVirtualCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  sumarCantVirtualCart(product) {
    console.log("en la función sumarCantVirtualCart");
    let arrayVirtualCart = localStorage.getItem("cart");
    console.log("arrayVirtualCart", arrayVirtualCart);
    if (localStorage.length === 0) {
      console.log("en el if");
      let newArrayVirtualCart = [];
      let newProduct = product;
      newProduct.CartProductQuant = { quantity: 1 };
      newArrayVirtualCart.push(newProduct);
      console.log("newArrayVirtualCart", newArrayVirtualCart);
      return newArrayVirtualCart;
    } else {
      //console.log("entre al else");
      JSON.parse(arrayVirtualCart).map((elem) => {
        console.log("elem", elem.id);
        console.log("product", product.id);
        if (elem.id === product.id) {
          console.log("elem", elem.id);
          console.log(
            "elem.CartProductQuant.quantity",
            elem.CartProductQuant.quantity
          );
          elem.CartProductQuant.quantity = elem.CartProductQuant.quantity + 1;
        }
      });
    }
    /* arrayVirtualCart.map((elem) => {
      if (elem.id === product.id) {
        elem.CartProductQuant.quantity = elem.CartProductQuant.quantity + 1;
      } else {
        console.log("sumar el primer producto");
        let newProduct = product;
        newProduct.CartProductQuant = { quantity: 1 };
        arrayVirtualCart.push(newProduct);
      }
      console.log("arrayVirtualCart", arrayVirtualCart);
    }); */
  }

  handleCart(product) {
    if (!this.props.user.id) {
      let virtualCartVariable = [];
      if (localStorage.length === 0) {
        //crea un nuevo elemento en el localstorage
        let newArrayVirtualCart = [];
        let newProduct = product;
        newProduct.CartProductQuant = { quantity: 1 };
        newArrayVirtualCart.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(newArrayVirtualCart));
      } else {
        //Si hay productos crear uno nuevo, sino agregar
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
      virtualCartVariable = JSON.parse(localStorage.getItem("cart"));
      this.props.addVirtualCart(virtualCartVariable);

      //let recoveredData = localStorage.getItem("cart");
      //let addProduct = this.sumarCantVirtualCart(product);
      //localStorage.setItem("cart", JSON.stringify(addProduct));
      /* if (recoveredData == null) {
        let addProduct = this.sumarCantVirtualCart(product);
        localStorage.setItem("cart", JSON.stringify(addProduct));
        //console.log("if carroVacío");
      } else {
        let data = JSON.parse(recoveredData);
        let newProduct = product;
        data.push(newProduct);

        localStorage.setItem("cart", JSON.stringify(data));
        //console.log("if carroMasDeUno");
      } */
      //let virtualCartVariable = JSON.parse(localStorage.getItem("cart"));

      //console.log("if carrito final", virtualCartVariable);
    }

    /* if (!this.props.user.id) {
      //LA LOGICA DEL IF NO ESTA FUNCIONANDO COMO QUEREMOS!!!!
      let recoveredData = localStorage.getItem("cart");

      if (recoveredData == null) {
        localStorage.setItem("cart", JSON.stringify(product));
      } else {
        let data = JSON.parse(recoveredData);

        let newProduct = product;
        data.push(newProduct);

        localStorage.setItem("cart", JSON.stringify(data));
        this.props.addVirtualCart(JSON.parse(localStorage.getItem("cart")));
      }
    } else {
      this.props.userCart(product, this.props.user).then(() => {
        console.log("this props all cart");
        this.props.allCart(this.props.user.id);
      });
    } */
  }

  render() {
    return (
      <div>
        <AllProducts
          handleCart={this.handleCart}
          allProducts={this.props.allProducts}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allProducts: state.allProducts.allProducts,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, {
  fetchAllProducts,
  userCart,
  allCart,
  addVirtualCart,
})(AllProductsContainer);
