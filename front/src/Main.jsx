import React from 'react';
import NavbarContainer from './containers/NavbarContainer'
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import {Route, Switch} from 'react-router-dom';



class Main extends React.Component {


      //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP
    render() {    

        return (
            <div id="Main" >
                <h1>MENSAJE DE BIENVENIDA</h1>
                <NavbarContainer/>
                
                <Switch>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                </Switch>
            </div>
        );
    }
}

    

export default Main