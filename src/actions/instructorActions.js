import clienteAxios from "../config/axios";
import tokenAuth from "../config/token";
import {
    OBTENER_DATOS_INSTRUCTOR_INICIO,
    OBTENER_DATOS_INSTRUCTOR_EXITO,
    OBTENER_DATOS_INSTRUCTOR_ERROR,
    EDITAR_DATOS_INSTRUCTOR_INICIO,
    EDITAR_DATOS_INSTRUCTOR_EXITO,
    EDITAR_DATOS_INSTRUCTOR_ERROR,
    LIMPIAR_MENSAJE
} from "../types/index";

export function obtenerDatosInstructor(id){
    return async (dispatch) => {
        dispatch(obtenerDatosInstructorInicioAction());    
    const token  = localStorage.getItem("token");
    if(token){
        tokenAuth(token) ;
    }
    const response = await clienteAxios.get("usuarios?instructor="+id);
    try{
        console.log(response);
        dispatch(obtenerDatosInstructorExitoAction(response.data.data));

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
        const response = await clienteAxios.put("usuarios",instructor);
        try{
            console.log(response);
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
export function limpiarMensaje(){
    return (dispatch) =>{
        dispatch( limpiarMensajeAction() );
    }
}

const limpiarMensajeAction = () =>    
    ({
        type: LIMPIAR_MENSAJE
    })
