import React, { Component } from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import {deleteProduct, allCart, quantityProduct} from '../actions/cart'

class CartContainer extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleQuantityProduct = this.handleQuantityProduct.bind(this)
    }

    handleDelete(product) {
        this.props.deleteProduct(product, this.props.user)
        .then(() => {
            this.props.allCart(this.props.user.id)
          }
        )
    }

    handleQuantityProduct(product, cant) {
        this.props.quantityProduct(product, this.props.user, cant)
        .then(() => {
            this.props.allCart(this.props.user.id)
          }
        )
    }

    render() {
        return (
            <div>
                <Cart handleQuantityProduct ={this.handleQuantityProduct} handleDelete = {this.handleDelete} user = {this.props.user}  cart={this.props.cart}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        user: state.user.user
    };
  };

export default connect(mapStateToProps, {deleteProduct, allCart, quantityProduct})(CartContainer)
