import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux';
import {fetchProductsWithCategory} from '../actions/products'
import {fetchCategories} from '../actions/categories'


class SidebarContainer extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('SOY EL COMPONENT DID MOUNT')
     
            this.props.fetchCategories()
       
    }

    handleSubmit(category) {    
    
        let busq = new URLSearchParams(this.props.location.search).get('search')
    
        if (!busq) {
            this.props.history.push(`/products?category=${category}`)
            this.props.fetchProductsWithCategory(busq, category)
        } else {

            this.props.history.push(`/products?search=${busq}&category=${category}`)

            this.props.fetchProductsWithCategory(busq, category)
        }
      }

    render() {
        console.log('soy render this props', this.props.categories)
        return (
            <div>
                <Sidebar categories={this.props.categories}  handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        searchString: state.search.searchString,
        categories: state.categories.categories
    };
  };


export default connect(mapStateToProps, {fetchProductsWithCategory, fetchCategories})(SidebarContainer) 
