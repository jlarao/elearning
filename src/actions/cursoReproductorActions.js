import {
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR,
    CURSO_REPRODUCTOR_SET__PRIMER_VIDEO,
    OBTENER_CURSOS_ALUMNO
} from "../types/index";
import clienteAxios from "../config/axios"
import tokenAuth from "../config/token";
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
            dispatch(obtenerCursoContenidoReproductorActionExito(response.data.data));

        } catch (error) {
            obtenerCursoContenidoReproductorActionError(true);
        }
    }
}

const obtenerCursoContenidoReproductorAction=()=>({
    type: CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
    payload: true
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
         /*   dispatch({
                type: CURSOS_ERROR,
                payload: alert
            })*/
        }          


        
    }
}
const obtenerCursosUsuarioAlumnoAction =(api)=>({    
        type: OBTENER_CURSOS_ALUMNO,
        payload: api.data.data      
        //console.log("obtener cursos");            
})