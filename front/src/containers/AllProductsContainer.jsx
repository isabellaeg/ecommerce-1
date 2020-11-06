import React, { Component, useEffect } from "react";
import AllProducts from "../components/AllProducts";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/allProducts";
import { userCart, allCart, addVirtualCart } from "../actions/cart";


class AllProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state={
      virtualCart: []
    }


    this.handleCart = this.handleCart.bind(this);

  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  handleCart(product) {

    if(!this.props.user.id){
      //LA LOGICA DEL IF NO ESTA FUNCIONANDO COMO QUEREMOS!!!! 
      let recoveredData = localStorage.getItem('cart')

      if(recoveredData == null ){
        localStorage.setItem('cart', JSON.stringify(product))
      }else{
        
        let data = JSON.parse(recoveredData)
        
          let newProduct = product
          data.push(newProduct)
         
          localStorage.setItem('cart', JSON.stringify(data))
          this.props.addVirtualCart(JSON.parse(localStorage.getItem("cart")))
      }
     


    }else{

      this.props.userCart(product, this.props.user)
      .then(() => {
        console.log('this props all cart')
        this.props.allCart(this.props.user.id)
      }
    )
    }

    
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

export default connect(mapStateToProps, { fetchAllProducts, userCart, allCart, addVirtualCart })(
  AllProductsContainer
);
