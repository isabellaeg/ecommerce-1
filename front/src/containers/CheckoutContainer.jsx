import React, { Component } from 'react'
import Checkout from '../components/Checkout'
import { connect } from 'react-redux'
import {checkoutInfo} from '../actions/checkout' 

class CheckoutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            card: "",
            cvv: "",

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCard = this.handleCard.bind(this)
        this.handleCvv = this.handleCvv.bind(this)
       
    }

    handleSubmit(e) {
        console.log('state', this.state)
        console.log('HOLA', this.props)
        e.preventDefault();
        this.props.checkoutInfo(this.state.address, this.state.card, this.state.cvv, this.props.user)
        //this.props.history.push('/') EN LA SIDEBAR METER LINK A TODAS LAS ORDERS
      }

    handleAddress(e) {
        this.setState({address: e.target.value})

    }

    handleCard(e) {
        this.setState({card: e.target.value})
    }

    handleCvv(e) {
        this.setState({cvv: e.target.value})
    }

    render() {
        return (
            <div>
                <Checkout 
                handleSubmit = {this.handleSubmit} 
                handleAddress = {this.handleAddress} 
                handleCard = {this.handleCard} 
                handleCvv = {this.handleCvv}
                user={this.props.user}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
      user: state.user.user
    };
  };

export default connect(mapStateToProps, {checkoutInfo})(CheckoutContainer)


