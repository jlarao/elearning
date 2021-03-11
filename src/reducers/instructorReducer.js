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
} from "../types";

const initialState  = {
    id:0,
    loading:false,
    instructor: null,
    mensaje: null,
    etapa: null,
    expositor: {
        idExpositor: 0,
        idProfesion: 0,
        descripcion: "",
        idUsuarioExpositor:0
    }
}

export default function (state  = initialState, action){
    switch(action.type){
        case OBTENER_DATOS_INSTRUCTOR_INICIO:
            return {
                ...state,
                loading: action.payload
            }
        case OBTENER_DATOS_INSTRUCTOR_EXITO:
            return{
                ...state,
                instructor: action.payload.data,
                expositor: action.payload.expositor,
                loading: false
            }    
        //case EDITAR_DATOS_INSTRUCTOR_INICIO:
           /* return{
                ...state,
                loading: true
            }*/
        case EDITAR_DATOS_INSTRUCTOR_EXITO:
            console.log(action.payload);
            return{
                ...state,
                loading: false,
                mensaje: action.payload
            }
        case LIMPIAR_MENSAJE:
            return{
                    ...state,
                    mensaje: ""
                }
        case ALTA_DATOS_INSTRUCTOR_PROFESION_EXITO:
            return{
                ...state,
                mensaje: action.payload[0],
                expositor: {
                    ...state.expositor,
                    idExpositor: action.payload[1]
                }
            }
        case ALTA_DATOS_INSTRUCTOR_PROFESION_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }
        default: 
        return state;
    }
}