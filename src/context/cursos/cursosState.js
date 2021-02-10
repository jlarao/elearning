import React, { useReducer } from 'react';
import CursosContext from "./cursosContext";
import CursosReducer from "./cursosReducer"
import clienteAxios from "../../config/axios"
import tokenAuth from "../../config/token";

import {
    OBTENER_CUSOS_INSTRUCTOR,
    CURSOS_ERROR,
    CURSOS_AGREGAR,
    CURSOS_POR_ID
} from "../../types";


const CursosState = props => {
    const initialState = {
        nombreCurso:"",
        categoria:"",
        duracion:"",        
        poster:"",
        mensaje:"",
        fechaRegistro:"",
        mensaje:"",
        redirect:null,
        secciones:[],
        cursos:[]
    }
    const [state, dispatch] = useReducer(CursosReducer, initialState);

        const obtenerCursosUsuario = async() => { 
            //console.log("obtener cursos"); 
            try {
                const api = await fetch('http://localhost:81/rest/api/cursos?page=0');
                const cursos = await api.json();
                //console.log(cursos); 
                dispatch({
                type: OBTENER_CUSOS_INSTRUCTOR,
                payload: cursos
            })                  
            } catch (error) {
                const alert = {
                    msg: "Hubo un error",
                    categoria: "alert"
                }
                dispatch({
                    type: CURSOS_ERROR,
                    payload: alert
                })
            }          
        }

        const agregarCurso = async(curso) => { 
            console.log(curso);
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            }              
            try {
                const response = await clienteAxios.post("cursos", curso);
                console.log(response.data); 
                const c = {
                    "id": response.data.idCurso,
                    "nombreCurso": curso.nombre,
                    "categoria": curso.categoria,                    
                    "poster": curso.poster,
                    "duracion": ""
                }
               
                //props.history.push("/curso-detalles/"+response.data.idCurso)
                dispatch({
                    type: CURSOS_AGREGAR,
                    payload: c
                })
                              
                            
            } catch (error) {                             
                console.log(error);
                    // client received an error response (5xx, 4xx)
                    const alerta =  {
                        msg: `error al conectar al api ${error.response.data.message}`,
                        categoria :'danger'
                    }
                    dispatch({
                        type: CURSOS_ERROR,
                        payload: alerta
                    })                                        
                  
            }

            
        }

        const obtenerCursosPorId = async(id) => { 
            
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            } 
            try {
                const response = await clienteAxios.get("cursos?id="+id);
                console.log(response.data);                
                //console.log(cursos); 
                dispatch({
                type: CURSOS_POR_ID,
                payload: response.data[0]
            })                  
            } catch (error) {
                const alert = {
                    msg: "Hubo un error",
                    categoria: "alert"
                }
                dispatch({
                    type: CURSOS_ERROR,
                    payload: alert
                })
            }          
        }
    return ( 
        <CursosContext.Provider
            value={{
                cursos:state.cursos,
                mensaje: state.mensaje,
                redirect: state.redirect,
                nombreCurso: state.nombreCurso,
                obtenerCursosUsuario,
                agregarCurso,
                obtenerCursosPorId
                }}
        >
            {props.children}
            </CursosContext.Provider>
     );
}
 
export default CursosState;