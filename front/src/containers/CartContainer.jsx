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

    componentDidMount(){
        this.props.allCart(this.props.user.id)
      
        //LOCAL STORAGE OSCAR
        //localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        //watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : []

        //COMO FUNCIONARIA 
        // localStorage.setItem('cart', JSON.stringify({cart: 1}))
        // let consulta = JSON.parse(localStorage.getItem('cart'))

        // console.log(localStorage)
        // console.log('GEET', consulta)
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
                <Cart virtualCart = {this.props.virtualCart} handleQuantityProduct ={this.handleQuantityProduct} handleDelete = {this.handleDelete} user = {this.props.user}  cart={this.props.cart}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart.sort((a, b) => (a.id > b.id) ? 1 : -1),
        user: state.user.user,
        virtualCart: state.cart.virtualCart,
    };
  };

export default connect(mapStateToProps, {deleteProduct, allCart, quantityProduct})(CartContainer)


