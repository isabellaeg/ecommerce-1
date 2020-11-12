import React from "react";
import { connect } from "react-redux";

import AdminNewCategory from "../components/AdminNewCategory";
import {addAdminCategory} from '../actions/admin'

class AdminNewCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log('PROPS SUBMIT', this.props)

    this.props.addAdminCategory(
      {name: this.state.name}

    ).then(()=> this.props.history.push("/admin/category"))

    this.setState({
        name: "",
    });

   
  }

  render() {
    return (
      <AdminNewCategory
        user={this.props.user}
        handleSubmit = {this.handleSubmit}
        handleName =  {this.handleName}
      />
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    
    }
};

export default connect(mapStateToProps, {addAdminCategory})(AdminNewCategoryContainer);
