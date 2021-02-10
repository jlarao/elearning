import React , { useReducer } from 'react';
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";


import {
    REGISTRO_EXITOSO,    
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSOS,
    LOGIN_ERROR,
    CERRAR_SESION} from '../../types/index';


    const AuthState = props => {
          
        const initialState = {
            token : localStorage.getItem('token'),
            autenticado: null,
            usuario:null,
            mensaje: null,
            cargando: true,
            registroexitoso: false
        }

        const [state, dispatch] = useReducer(AuthReducer, initialState);
        //funciones
        const registrarUsuario = async datos =>{            
            try {
                const response = await clienteAxios.post("registrarUsuario", datos);
                console.log(response.data);
            if(response.data.status==="ok"){                             
               dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: response.data
                })
                //usuarioAutenticado();
                console.log("usuario authenticado");
            
        }
            else{
                const alerta =  {
                    msg:response.data.message ,
                    categoria :'alerta-error'
                }
                dispatch({type: REGISTRO_ERROR, payload: alerta})                                         
            }                
            } catch (error) {
                console.log(error);                
                if (error.response) {
                    // client received an error response (5xx, 4xx)
                    const alerta =  {
                        msg: `error al conectar al api ${error.response.data.message}`,
                        categoria :'alerta-error'
                    }
                    dispatch({
                        type: REGISTRO_ERROR,
                        payload: alerta
                    })                                        
                  } else if (error.request) {
                    // client never received a response, or request never left
                    const alerta =  {
                        msg: `error al conectar al api `,
                        categoria :'alerta-error'
                    }
                    dispatch({
                        type: REGISTRO_ERROR,
                        payload: alerta
                    })                                        
                  } else {
                    // anything else
                    const alerta =  {
                        msg: `error al conectar al api `,
                        categoria :'alerta-error'
                    }
                    dispatch({
                        type: REGISTRO_ERROR,
                        payload: alerta
                    })                                
                  }
            }
        }
//usuario authenticado
    const usuarioAutenticado = async() =>{
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            //enviar token por header
            tokenAuth(token);
        }
            try {
                const respuesta = await clienteAxios.get("loginjwt")
                console.log(respuesta.data);//respuesta.data.data
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data.usuario
                })
            } catch (error) {
                console.log(error.response);
                dispatch({
                    type: LOGIN_ERROR
                })
            }
        
        }
// login 
        const iniciarSesion = async (datos) =>{
            try {
                const respuesta = await clienteAxios.post("loginjwt",datos);
                console.log(respuesta.data);
                if(respuesta.data.status==="ok"){
                dispatch({
                    type:LOGIN_EXITOSOS,
                    payload:respuesta.data
                })
                usuarioAutenticado();
                }else{
                    const alerta =({
                        msg: `error: ${respuesta.response.data.message}`,
                        categoria: "danger"
                    })
                    dispatch({
                        type: LOGIN_ERROR,
                        payload:alerta
                    })
                }
            } catch (error) {                           
            if (error.response) {
              // client received an error response (5xx, 4xx)
              console.log("response" + error.response);
              const alerta =({
                  msg: `error: ${error.response.data.message}`,
                  categoria: "danger"
              })
              dispatch({
                  type: LOGIN_ERROR,
                  payload:alerta
              })
            } else if (error.request) {
              // client never received a response, or request never left
              console.log("request"+error.request);
              const alerta =({
                msg: `error al conectar al api `,
                categoria: "warning"
            })
            dispatch({
                type: LOGIN_ERROR,
                payload:alerta
            })
            } else {         // anything else              
              console.log("request"+error.request);
              const alerta =({
                msg: `error al conectar al api `,
                categoria: "warning"
            })
            dispatch({
                type: LOGIN_ERROR,
                payload:alerta
            })
            }
            }
        }
        // cerrar sesion
        const cerrarSesion =()=>{
                console.log("cerrar sesion");
                dispatch({
                    type: CERRAR_SESION
                })
        }
        return(
            <AuthContext.Provider
            value={{token : state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registroexitoso: state.registroexitoso,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
             }}
                >{props.children}</AuthContext.Provider>
        )
    }

    export default AuthState