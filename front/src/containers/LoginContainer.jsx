import React from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../actions/users';
import Login from '../components/Login';


class LoginContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleEmail(e){
        this.setState({email:e.target.value})
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.userLogin(
            this.state.email,
            this.state.password
        )

    }

    render(){

        return(

            <Login
            handleEmail = {this.handleEmail}
            handlePassword = {this.handlePassword}
            handleSubmit = {this.handleSubmit}
            />

        )

    }

}


const mapDispatchToProps = dispatch =>{
    return {
        userLogin:(email, password) => dispatch(userLogin(email, password))
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);