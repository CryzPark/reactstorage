import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './index';
import Layout from '../../Modules/Layout_Autenticate/Layout'
import Mensage from '../../Modules/Layout_Autenticate/Mensajes/Mensajes'
import AreasComunes from '../../Modules/Layout_Autenticate/Areas_Comunes/AreasComunes'
const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
            <Layout> <Component {...props} /></Layout>
               
            : <Redirect to="/signin" />
        )} />
    );
};
export const PrivateRouteMensajes = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
            <Layout><Mensage><Component {...props} /></Mensage></Layout>
               
            : <Redirect to="/signin" />
        )} />
    );
};
export const PrivateRouteAreasComunes = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
            <Layout><AreasComunes><Component {...props} /></AreasComunes></Layout>
               
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;