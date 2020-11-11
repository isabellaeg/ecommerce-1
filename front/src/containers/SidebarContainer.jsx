import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux';
import {fetchProductsWithCategory} from '../actions/products'


class SidebarContainer extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(category) {        
        let busq = new URLSearchParams(this.props.location.search).get('search')
    
        if (!busq) {
          this.props.history.push(`/products?category=${category}`);
        } else {

            this.props.history.push(`/products?search=${busq}&category=${category}`)

            this.props.fetchProductsWithCategory(busq, category)
        }
      }

    render() {
        return (
            <div>
                <Sidebar handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        searchString: state.search.searchString
    };
  };


export default connect(mapStateToProps, {fetchProductsWithCategory})(SidebarContainer) 
