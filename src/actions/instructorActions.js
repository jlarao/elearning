import clienteAxios from "../config/axios";
import tokenAuth from "../config/token";
import {
    OBTENER_DATOS_INSTRUCTOR_INICIO,
    OBTENER_DATOS_INSTRUCTOR_EXITO,
    OBTENER_DATOS_INSTRUCTOR_ERROR,
    EDITAR_DATOS_INSTRUCTOR_INICIO,
    EDITAR_DATOS_INSTRUCTOR_EXITO,
    EDITAR_DATOS_INSTRUCTOR_ERROR,
    LIMPIAR_MENSAJE,
    ALTA_DATOS_INSTRUCTOR_PROFESION_INICIO,
    ALTA_DATOS_INSTRUCTOR_PROFESION_EXITO,
    ALTA_DATOS_INSTRUCTOR_PROFESION_ERROR
} from "../types/index";

export function obtenerDatosInstructor(id){
    return async (dispatch) => {
        dispatch(obtenerDatosInstructorInicioAction());    
    const token  = localStorage.getItem("token");
    if(token){
        tokenAuth(token) ;
    }
    
    try{
        const response = await clienteAxios.get("usuarios?instructor="+id);
        console.log(response);
        dispatch(obtenerDatosInstructorExitoAction(response.data));

    }
    catch(e){
        dispatch(obtenerDatosInstructorErrorAction(true));
    }
}
}

const obtenerDatosInstructorInicioAction=()=>({
    type: OBTENER_DATOS_INSTRUCTOR_INICIO,
    payload: true
})
const obtenerDatosInstructorExitoAction=(datos)=>({
    type: OBTENER_DATOS_INSTRUCTOR_EXITO,
    payload: datos
})
const obtenerDatosInstructorErrorAction=(estado)=>({
    type: OBTENER_DATOS_INSTRUCTOR_ERROR,
    payload: estado
})

export function editarDatosInstructor(instructor){
    return async (dispatch) =>{
        dispatch( editarDatosInstructorInicioAction() )
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }        
        try{            
            const response = await clienteAxios.put("usuarios",instructor);
            console.log(response.data); 
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
            dispatch(editarDatosInstructorExitoAction(alert));
    
        }
        catch(e){
            dispatch(editarDatosInstructorErrorAction(true));
        }
    }
}
const editarDatosInstructorInicioAction=()=>({
    type: EDITAR_DATOS_INSTRUCTOR_INICIO,
    payload: true 
})
const editarDatosInstructorExitoAction=(datos)=>({
    type: EDITAR_DATOS_INSTRUCTOR_EXITO,
    payload: datos 
})
const editarDatosInstructorErrorAction=(estado)=>({
    type: EDITAR_DATOS_INSTRUCTOR_ERROR,
    payload: estado 
})

export function altaDatosInstructorProfesion(expositor){
    return async (dispatch) =>{
        dispatch(altaDatosInstructorProfesionInicioAction());
        const token = localStorage.getItem('token');
        if(tokenAuth){
            tokenAuth(token);
        }
        
        try {
            const response = await clienteAxios.post('expositor',expositor);
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
            const exp ={
                idExpositor: response.data.data,
                idProfesion: expositor.profesion,
                descripcion: expositor.descripcion,
                idUsuarioExpositor: expositor.idUsuarioExpositor
            }
            dispatch( altaDatosInstructorProfesionExitoAction(Array(alert,exp)) );
        } catch (error) {
            console.log(error.response)
            const alert = {
                msg: error.response.data.message,
                categoria: "danger"
            }
            dispatch( altaDatosInstructorProfesionErrorAction(alert) );
        }
    }

}
const altaDatosInstructorProfesionInicioAction=()=>({
    type: ALTA_DATOS_INSTRUCTOR_PROFESION_INICIO,
    payload: true
})
const altaDatosInstructorProfesionExitoAction=(r)=>({
    type: ALTA_DATOS_INSTRUCTOR_PROFESION_EXITO,
    payload: r
})
const altaDatosInstructorProfesionErrorAction=(r)=>({
    type: ALTA_DATOS_INSTRUCTOR_PROFESION_ERROR,
    payload: r
})

export function limpiarMensaje(){
    return (dispatch) =>{
        dispatch( limpiarMensajeAction() );
    }
}

const limpiarMensajeAction = () =>    
    ({
        type: LIMPIAR_MENSAJE
    })
