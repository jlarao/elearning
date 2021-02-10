import React,{useEffect, useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../../context/authentication/authContext";

const  RutaPrivada = ({component : Component,  ...props}) => {
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        
        usuarioAutenticado();  
        console.log("ruta privada" + autenticado);      
    }, [])
        console.log(props);
        console.log("ruta privada" + autenticado);      
    return ( 
        <Route {...props} render = { props => !autenticado && !cargando ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} />

        
     );
}
 
export default RutaPrivada ;