import {
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR,
    CURSO_REPRODUCTOR_SET__PRIMER_VIDEO,
    OBTENER_CURSOS_ALUMNO,
    OBTENER_CURSOS_ALUMNO_ERROR,
    CURSO_VENTA_OBTENER_CONTENIDO,
    CURSO_VENTA_OBTENER_CONTENIDO_EXITO,
    CURSO_VENTA_OBTENER_CONTENIDO_ERROR
} from "../types/index";
import clienteAxios from "../config/axios"
import tokenAuth from "../config/token";
import axios from "axios";
//obtener curso contenido para el reproductor
export function obtenerCursoContenidoReproductor(id){
    return async (dispatch) =>{
        console.log("desde action");
        dispatch(obtenerCursoContenidoReproductorAction());
        const token = localStorage.getItem('token');           
        if(token){
            //enviar token por header
            tokenAuth(token);
        } 
        const response = await clienteAxios.get("cursos?idRep="+id);
        try {
            console.log(response.data.data);
            dispatch( obtenerCursoContenidoReproductorActionExito(response.data.data));

        } catch (error) {
            dispatch( obtenerCursoContenidoReproductorActionError(true) );
        }
    }
}

const obtenerCursoContenidoReproductorAction=()=>({
    type: CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
    payload: "cargando"
})
const obtenerCursoContenidoReproductorActionExito=(curso)=>({
    type: CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO,
    payload: curso
})
const obtenerCursoContenidoReproductorActionError=(estado)=>({
    type: CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR,
    payload: estado
})

export function setPrimerVideo(video){
    return (dispatch) =>{
        dispatch(setPrimerVideoAction(video))
    }
}

const setPrimerVideoAction = (video) => ({
    type: CURSO_REPRODUCTOR_SET__PRIMER_VIDEO,
    payload: video
})

export function obtenerCursosUsuarioAlumno(id){
    return async (dispatch) =>{
        const token = localStorage.getItem('token');           
        if(token){
            //enviar token por header
            tokenAuth(token);
        }   
        try {           
            const api = await clienteAxios.get("cursos?alumno=0");
            console.log(api);             
        dispatch(obtenerCursosUsuarioAlumnoAction(api.data.data))
        } catch (error) {
            const alert = {
                msg: "Hubo un error",
                categoria: "alert"
            }
         dispatch(obtenerCursosUsuarioAlumnoActionError(alert))
        }                  
    }
}
const obtenerCursosUsuarioAlumnoAction =(api)=>({    
        type: OBTENER_CURSOS_ALUMNO,
        payload: api.data.data      
        //console.log("obtener cursos");            
})
const obtenerCursosUsuarioAlumnoActionError=(alert)=>({
    type: OBTENER_CURSOS_ALUMNO_ERROR,
    payload: alert
})

//curso para clientes no logeados
export function obtenerCursoContenidoParaVenta(id){
    return async (dispatch) => {
        dispatch(obtenerCursoContenidoParaVentaAction);

        const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"cursos?idVen="+id);
        try {
            console.log(response.data.data);
            dispatch(obtenerCursoContenidoParaVentaActionExito(response.data.data));

        } catch (error) {
            dispatch( obtenerCursoContenidoParaVentaActionError() );
        }
    }
}
const obtenerCursoContenidoParaVentaAction=()=>({
    type:CURSO_VENTA_OBTENER_CONTENIDO
    
})
const obtenerCursoContenidoParaVentaActionExito=(datos)=>({
    type:CURSO_VENTA_OBTENER_CONTENIDO_EXITO,
    payload: datos
})
const obtenerCursoContenidoParaVentaActionError=()=>({
    type:CURSO_VENTA_OBTENER_CONTENIDO_ERROR
})

