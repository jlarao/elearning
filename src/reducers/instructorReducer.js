import { 
    OBTENER_DATOS_INSTRUCTOR_INICIO,
    OBTENER_DATOS_INSTRUCTOR_EXITO,
    OBTENER_DATOS_INSTRUCTOR_ERROR,
    EDITAR_DATOS_INSTRUCTOR_INICIO,
    EDITAR_DATOS_INSTRUCTOR_EXITO,
    EDITAR_DATOS_INSTRUCTOR_ERROR,
    LIMPIAR_MENSAJE
} from "../types";

const initialState  = {
    id:0,
    loading:false,
    instructor: null,
    mensaje: null
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
                instructor: action.payload,
                loading: false
            }    
        case EDITAR_DATOS_INSTRUCTOR_INICIO:
            return{
                ...state,
                loading: true
            }
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
        default: 
        return state;
    }
}