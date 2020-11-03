import React, { Component, useEffect } from 'react'
import AllProducts from '../components/AllProducts'
import { connect } from 'react-redux'
import {fetchAllProducts} from '../actions/products'

/* export class AllProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllProducts()
    }


    render() {
        console.log('props', this.props)
        return (
            <div>
                <AllProducts allProducts={this.props.allProducts}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        allProducts: state.allProducts.allProducts
    }
} */


function AllProductsContainer({allProducts}) {
    useEffect(() => {
        fetchAllProducts();
      }, []);
    return (
        <div>
        <h1>Users:</h1>
        <ul>
          {allProducts.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
  
      </div>
    )
}

const mapStateToProps = (state) => ({
    allProducts: state.allProducts.allProducts
  });

export default connect(mapStateToProps, {fetchAllProducts})(AllProductsContainer)
