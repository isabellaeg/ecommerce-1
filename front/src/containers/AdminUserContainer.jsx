import React, { Component } from "react";
import AdminUser from "../components/AdminUser";
import { connect } from "react-redux";
import {fetchAllUsers, userRol, deleteUser} from "../actions/admin"


class AdminUserContainer extends Component {
  constructor(props) {
    super(props);


    this.handleDelete = this.handleDelete.bind(this);
    this.handleRoles = this.handleRoles.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers()
  }

  handleDelete(user){
    this.props.deleteUser(user).then(()=>{
        this.props.fetchAllUsers()
    })
  }

  handleRoles(user){
    this.props.userRol(user).then(()=>{
        this.props.fetchAllUsers()
    })
  }

  render() {
    return (
    <AdminUser 
    user={this.props.user} 
    allUsers={this.props.allUsers}
    handleDelete ={this.handleDelete}
    handleRoles ={this.handleRoles}
    />

    );
  }
}

const mapStateToProps = (state) => {
    console.log("STATE ADMIN", state)
    return {
        user: state.user.user,
        allUsers: state.admin.allusers
    }
};

export default connect(mapStateToProps, {fetchAllUsers, userRol, deleteUser})(AdminUserContainer);
