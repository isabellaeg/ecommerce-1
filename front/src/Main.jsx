import React from 'react';
import NavbarContainer from './containers/NavbarContainer'
import {Route, Switch} from 'react-router-dom'
import AllProductsContainer from './containers/AllProductsContainer'


class Main extends React.Component {


      //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP
    render() {    

        return (
            <div id="Main" >
                <h1>MENSAJE DE BIENVENIDA</h1>               
                <NavbarContainer />
                <Switch>
                    <Route exact path='/products' component={AllProductsContainer}/>
                </Switch>
            </div>
        );
    }
}

    

export default Main