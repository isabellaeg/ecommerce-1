import axios from 'axios';

const userRegister = (nickname, email, password) =>{
    return () => {
        axios.post("/api/register",{
            nickname,
            email,
            password
        })
    }
}


const userLogger = (user) =>{
    return{
        type:"USER_LOGIN", 
        user
    }
}


const userLogin = (email, password) => dispatch =>{
    return (
        axios.post("/api/login", {
            email,
            password
        })
    ).then(res => dispatch(userLogger(res.data)))
}


const userLogout = () => dispatch =>{
    return(
        axios.post("/api/logout") 
    ).then(res =>dispatch(userLogger(res.data)))

}    

export {userRegister, userLogin, userLogout};