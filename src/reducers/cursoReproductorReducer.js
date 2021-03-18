//cada reducer tiene su propio state
import {
      CURSO_REPRODUCTOR_OBTENER_CONTENIDO,
      CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO,
      CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR,
      CURSO_REPRODUCTOR_SET__PRIMER_VIDEO,
      OBTENER_CURSOS_ALUMNO,
      //OBTENER_CURSOS_ALUMNO_ERROR,
      CURSO_VENTA_OBTENER_CONTENIDO,
      CURSO_VENTA_OBTENER_CONTENIDO_EXITO,
      CURSO_VENTA_OBTENER_CONTENIDO_ERROR
    
} from "../types";
const initialState= {
    idCurso:0,
    curso:null,
    temas:[],
    subTemas:[],
    error: null,
    loading: "inicio",
    primerVideo: null,
    cursosAlumno: []
}
export default function(state = initialState, action ){
    switch(action.type){
        case CURSO_VENTA_OBTENER_CONTENIDO:
        case CURSO_REPRODUCTOR_OBTENER_CONTENIDO:
            return{
                ...state,
                loading: action.payload,
                curso: null
            }
        case CURSO_VENTA_OBTENER_CONTENIDO_EXITO:
        case CURSO_REPRODUCTOR_OBTENER_CONTENIDO_EXITO:
        return{
            ...state,
            loading: "finalizado",
            curso: action.payload.curso,
            temas: action.payload.Temas,
            subTemas: action.payload.subTemas

        }
        case CURSO_VENTA_OBTENER_CONTENIDO_ERROR:
        case CURSO_REPRODUCTOR_OBTENER_CONTENIDO_ERROR:
            return{
                ...state,
                loading: "finalizado",
                error: action.payload
            }
        case CURSO_REPRODUCTOR_SET__PRIMER_VIDEO:
            return {
                ...state,
                primerVideo: action.payload
            }
        case OBTENER_CURSOS_ALUMNO:
            return{
                ...state,
                cursosAlumno: action.payload
            }
        default:
            return state;
    }
}