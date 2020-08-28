import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute,{PrivateRouteMensajes,PrivateRouteAreasComunes} from './Services/Routes/PrivateRoute'
import PublicRoute from './Services/Routes/PublicRoute'
import Login from './Modules/Layout_No_Autenticate/SignIn/SignIn';
import ForgetMyPassword from './Modules/Layout_No_Autenticate/ForgetMyPassword/ForgetMyPassword';
import theme from './Themes/Themes'
import { ThemeProvider } from '@material-ui/core';
import store from './Data/store'
import { Provider } from 'react-redux';
import Dashboard from './Modules/Layout_Autenticate/Dashboard/Dashboard';
import Recibos from './Modules/Layout_Autenticate/Recibos/Recibos'
import Anuncios from './Modules/Layout_Autenticate/Mensajes/Anuncios/Anuncios'
import QoS from './Modules/Layout_Autenticate/Mensajes/Quejas_Sugerencias/QoS'
import Areas from './Modules/Layout_Autenticate/Areas_Comunes/Areas/Areas';
import Reservas from './Modules/Layout_Autenticate/Areas_Comunes/Reservas/Reservas';
import './Fonts/fontello/css/community.css'
import Testp from './Modules/Layout_No_Autenticate/test/test';
function App() {
  return (
    <div className="App">
    
       <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div style={theme.palette.background}>
            <BrowserRouter>
              <Switch>
                <PrivateRoute component={Dashboard} path="/" exact />
                <PublicRoute restricted={true}  component={Login} path="/signin" exact />
                <PublicRoute restricted={true}  component={Testp} path="/sum" exact />
                <PrivateRoute component={Dashboard} path="/Inicio"  exact />
                <PrivateRoute component={Recibos} path="/Recibos"  exact />
                <PrivateRouteMensajes component={Anuncios} path="/Mensajes/Anuncios"  exact />
                <PrivateRouteMensajes component={QoS} path="/Mensajes/Quejas_O_Sugerencias"  exact />
                <PrivateRouteMensajes component={QoS} path="/Mensajes/Quejas_O_Sugerencias/:id"  exact />
                <PublicRoute restricted={true} component={ForgetMyPassword} path='/forgetmypassword'/>
                <PrivateRouteMensajes component={Anuncios} path='/Mensajes/Anuncios/:id' exact/>
                <PrivateRouteAreasComunes component={Areas} path='/AreasComunes/Areas' exact/>
                <PrivateRouteAreasComunes component={Reservas} path='/AreasComunes/Reservas' exact/>
              </Switch>
            </BrowserRouter>
            </div>
          </ThemeProvider>
        </Provider>
        
       
        
    </div>
  );
}

export default App;
