import React from 'react';
import NavbarContainer from './containers/NavbarContainer'



class Main extends React.Component {


      //ACA RENDERIZAREMOS LAS RUTAS DE NUESTRA APP
    render() {    

        return (
            <div id="Main" >
                <h1>MENSAJE DE BIENVENIDA</h1>               
                <NavbarContainer/>
            </div>
        );
    }
}

    

export default Main