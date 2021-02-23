import {
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO,
    CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR
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