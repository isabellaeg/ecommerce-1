import React, { Component } from "react";
import AdminProduct from "../components/AdminProduct";
import { connect } from "react-redux";
import {fetchAdminProducts, deleteProduct} from "../actions/admin"


class AdminUserContainer extends Component {
  constructor(props) {
    super(props);


    this.handleDelete = this.handleDelete.bind(this);
    // this.handleRoles = this.handleRoles.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdminProducts()
  }

  handleDelete(product){
    this.props.deleteProduct(product).then(()=>{
        this.props.fetchAdminProducts()
    })
  }

//   handleRoles(user){
//     this.props.userRol(user).then(()=>{
//         this.props.fetchAllUsers()
//     })
//   }

  render() {
    return (
    <AdminProduct 
    user={this.props.user} 
    allProducts={this.props.allProducts}
    handleDelete ={this.handleDelete}
    // handleRoles ={this.handleRoles}
    />

    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        allProducts: state.admin.allproducts

    }
};

export default connect(mapStateToProps, {fetchAdminProducts, deleteProduct})(AdminUserContainer);
