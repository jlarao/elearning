import React, { useReducer } from 'react';
import CursosContext from "./cursosContext";
import CursosReducer from "./cursosReducer"
import clienteAxios from "../../config/axios"
import tokenAuth from "../../config/token";

import {
    OBTENER_CUSOS_INSTRUCTOR,
    CURSOS_ERROR,
    CURSOS_AGREGAR,
    CURSOS_POR_ID,
    CURSOS_FORM_TEMACURSO,
    CURSOS_GUARDAR_TEMA_CURSO,
    CURSOS_FORM_SUBTEMA,
    CURSOS_SET_IDTEMA,
    CURSOS_GUARDAR_SUBTEMA_CURSO,
    CURSOS_OBTENER_SUBTEMAS_CURSO,
    CURSOS_VACIAR_SUBTEMAS_CURSO,
    CURSOS_EDICION_HERRAMIENTA,
    CURSOS_ELIMINAR_HERRAMIENTA
} from "../../types";


const CursosState = props => {
    const initialState = {
        id: null,
        nombreCurso:"",
        categoria:"",
        duracion:"",        
        poster:"",
        mensaje:"",
        fechaRegistro:"",
        mensaje:"",
        redirect:null,
        temasCurso:[],
        cursos:[],
        formTemaCurso: false,
        formSubTema: false,
        idTema:null,
        subTemasCurso: []
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

        const mostrarFormTemaCurso = async(valor) => { 
            console.log(valor);             
                dispatch({
                type: CURSOS_FORM_TEMACURSO,
                payload: valor                
            })                                        
        }

        const mostrarFormSubTema  = async(valor) => { 
            console.log(valor);             
                dispatch({
                type: CURSOS_FORM_SUBTEMA,
                payload: valor                
            })                                        
        }
        
        const guardarTemaCurso = async(curso) => { 
            console.log(curso);
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            }              
            try {
                const response = await clienteAxios.post("temaCurso ", curso);
                console.log(response.data);               
                //props.history.push("/curso-detalles/"+response.data.idCurso)
                dispatch({
                    type: CURSOS_GUARDAR_TEMA_CURSO,
                    payload: response.data.data
                })                                                          
            } catch (error) {                             
                console.log(error.response.data);
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

        const setIdTema  = async(valor) => {             
                dispatch({
                type: CURSOS_SET_IDTEMA,
                payload: valor                
            })                                        
        }

        const obtenerTemaCursoPorIdCurso = async(id) => {            
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            } 
            try {
                const response = await clienteAxios.get("temaCurso?byCourse="+id);
                console.log(response.data.data);                
                //console.log(cursos); 
                dispatch({
                type: CURSOS_GUARDAR_TEMA_CURSO,
                payload: response.data.data
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

        const guardarSubTemaCurso = async(curso) => { 
            console.log(curso);
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            }              
            try {
                const response = await clienteAxios.post("subTemaCurso ", curso);
                console.log(response.data);               
                //props.history.push("/curso-detalles/"+response.data.idCurso)
                dispatch({
                    type: CURSOS_GUARDAR_SUBTEMA_CURSO,
                    payload: response.data.data
                })                                                          
            } catch (error) {                             
                console.log(error.response.data);
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

        const obtenerSubTemasByTemaCursoId = async(id) => {            
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            } 
            try {
                
                dispatch({
                    type: CURSOS_VACIAR_SUBTEMAS_CURSO
                })

                const response = await clienteAxios.get("subTemaCurso?idTemaCurso="+id);
                console.log(response.data);                
                //console.log(cursos); 
                dispatch({
                type: CURSOS_OBTENER_SUBTEMAS_CURSO,
                payload: response.data.data
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

        
        const edicionHerramientaCurso = async(herramienta) => {            
            const token = localStorage.getItem('token');           
            if(token){
                //enviar token por header
                tokenAuth(token);
            } 
            try {
                const response = await clienteAxios.put("herramientasCurso", herramienta);
                console.log(response.data);                
                //console.log(cursos); 
                dispatch({
                type: CURSOS_EDICION_HERRAMIENTA,
                payload: herramienta
            })       
              console.log(state.subTemasCurso);         
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

        const eliminarHerramientaCurso = async(idHerramientaCurso) => {            
            const token = localStorage.getItem('token');        
            console.log("eliminar herramienta"); 
            console.log(idHerramientaCurso  ); 
            
            if(token){
                //enviar token por header
                tokenAuth(token);
            } 
            try {
                const response = await clienteAxios.delete("herramientasCurso", { params: { idHerramientaCurso }});
                console.log(response.data);                
                //console.log(cursos); 
                dispatch({
                type: CURSOS_ELIMINAR_HERRAMIENTA,
                payload: idHerramientaCurso
            })       
              console.log(state.subTemasCurso);         
            } catch (error) {
                console.log(error);   
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
                id: state.id,
                cursos:state.cursos,
                mensaje: state.mensaje,
                redirect: state.redirect,
                nombreCurso: state.nombreCurso,
                formTemaCurso: state.formTemaCurso,
                temasCurso: state.temasCurso,
                formSubTema: state.formSubTema,                
                idTema: state.idTema,
                subTemasCurso: state.subTemasCurso,
                obtenerCursosUsuario,
                agregarCurso,
                obtenerCursosPorId,
                mostrarFormTemaCurso,
                guardarTemaCurso,
                obtenerTemaCursoPorIdCurso,
                mostrarFormSubTema,
                setIdTema,
                guardarSubTemaCurso,
                obtenerSubTemasByTemaCursoId,
                edicionHerramientaCurso,
                eliminarHerramientaCurso
                }}
        >
            {props.children}
            </CursosContext.Provider>
     );
}
 
export default CursosState;