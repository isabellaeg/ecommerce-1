import React, { Component } from 'react'
import Cart from '../components/Cart'
import {connect} from 'react-redux'

class CartContainer extends Component {
    render() {
        return (
            <div>
                <Cart user = {this.props.user}  cart={this.props.cart}/>
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

export default connect(mapStateToProps)(CartContainer)
