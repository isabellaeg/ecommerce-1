import React, { Component } from "react";
import AdminCategory from "../components/AdminCategory";
import { connect } from "react-redux";
import { fetchAdminCategory, deleteCategory } from "../actions/admin";
import { fetchCategories } from "../actions/categories";

class AdminCategoryContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    // this.handleRoles = this.handleRoles.bind(this);
  }

  componentDidMount() {
    return this.props.fetchAdminCategory();

    /* .then(() => {
      this.props.fetchCategories();
    }); */
  }

  handleDelete(category) {
    this.props.deleteCategory(category).then(() => {
      this.props.fetchAdminCategory();
    });
  }

  //   handleRoles(user){
  //     this.props.userRol(user).then(()=>{
  //         this.props.fetchAllUsers()
  //     })
  //   }

  render() {
    return (
      <AdminCategory
        user={this.props.user}
        allCategory={this.props.allCategory}
        handleDelete={this.handleDelete}
        // handleRoles ={this.handleRoles}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    allCategory: state.admin.allCategory,
  };
};

export default connect(mapStateToProps, {
  fetchAdminCategory,
  deleteCategory,
  fetchCategories,
})(AdminCategoryContainer);
