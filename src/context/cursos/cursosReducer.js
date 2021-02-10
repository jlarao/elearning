
import {REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    LOGIN_ERROR,
    OBTENER_CUSOS_INSTRUCTOR,
    CURSOS_ERROR,
    CURSOS_AGREGAR,
    CURSOS_POR_ID
} from "../../types";

export default (state, action) =>{
    switch(action.type){       
        case OBTENER_CUSOS_INSTRUCTOR:             
            return{
                ...state,
                cursos: action.payload
            }
        case CURSOS_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case CURSOS_AGREGAR:
            return{
                ...state,
                cursos: [...state.cursos, action.payload],
                redirect: `/curso-detalles/${action.payload.id}`
            }
        case CURSOS_POR_ID:
            console.log(action.payload.nombreCurso);
            return{
                ...state,
                id: action.payload.idCurso, 
                nombreCurso: action.payload.nombreCurso,                
                duracion: action.payload.duracion,        
                poster: action.payload.poster,                
                fechaRegistro: action.payload.fechaRegistro

            }

        default: return state;
    }




}