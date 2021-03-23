import {
    OBTENER_DATOS_CATEGORIAS_INICIO,
    OBTENER_DATOS_CATEGORIAS_EXITO,
    OBTENER_DATOS_CATEGORIAS_ERROR, 
    
    EDITAR_DATOS_CATEGORIAS_INICIO,
    EDITAR_DATOS_CATEGORIAS_EXITO,
    EDITAR_DATOS_CATEGORIAS_ERROR,

    EDITAR_DATOS_INSTRUCTOR_EXITO,
    //EDITAR_DATOS_INSTRUCTOR_ERROR,
    LIMPIAR_MENSAJE,
    
    ELIMINAR_DATOS_CATEGORIAS_INICIO ,
    ELIMINAR_DATOS_CATEGORIAS_EXITO ,
    ELIMINAR_DATOS_CATEGORIAS_ERROR ,

    AGREGAR_DATOS_CATEGORIAS_INICIO ,
    AGREGAR_DATOS_CATEGORIAS_EXITO ,
    AGREGAR_DATOS_CATEGORIAS_ERROR ,

    OBTENER_DATOS_USUARIOS_ROL_INICIO,
    OBTENER_DATOS_USUARIOS_ROL_EXITO,
    OBTENER_DATOS_USUARIOS_ROL_ERROR,

    ELIMINAR_DATOS_USUARIOS_ROL_INICIO,
    ELIMINAR_DATOS_USUARIOS_ROL_EXITO,
    ELIMINAR_DATOS_USUARIOS_ROL_ERROR,

    ACTIVAR_DATOS_USUARIOS_ROL_INICIO,
    ACTIVAR_DATOS_USUARIOS_ROL_EXITO,
    ACTIVAR_DATOS_USUARIOS_ROL_ERROR,

    OBTENER_DATOS_CURSOS_USUARIOS_INICIO,
    OBTENER_DATOS_CURSOS_USUARIOS_EXITO,
    OBTENER_DATOS_CURSOS_USUARIOS_ERROR,

    ACTIVAR_DATOS_USUARIOS_INSCRIPCION_INICIO,
    ACTIVAR_DATOS_USUARIOS_INSCRIPCION_EXITO,
    ACTIVAR_DATOS_USUARIOS_INSCRIPCION_ERROR,

    SUSPENDER_DATOS_USUARIOS_INSCRIPCION_EXITO,
    SUSPENDER_DATOS_USUARIOS_INSCRIPCION_ERROR,

    OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_INICIO,
    OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_EXITO,
    OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_ERROR,

    INSCRIBIR_USUARIO_CURSO_INICIO,
    INSCRIBIR_USUARIO_CURSO_EXITO,
    INSCRIBIR_USUARIO_CURSO_ERROR,

    DATOS_USUARIO_INICIO,
    DATOS_USUARIO_EXITO,
    DATOS_USUARIO_ERROR,
} from "../types";

const initialState  = {
    categorias: null,
    loading: false,
    mensaje: "",
    usuariosRol: null,
    cursosInscritos: null,
    cursosNoInscrito: null,
    datosUsuario: null
}

export default function (state  = initialState, action){
    switch(action.type){
        case ELIMINAR_DATOS_USUARIOS_ROL_INICIO:
        case OBTENER_DATOS_USUARIOS_ROL_INICIO:
        case EDITAR_DATOS_CATEGORIAS_INICIO:
        case OBTENER_DATOS_CATEGORIAS_INICIO:
        case OBTENER_DATOS_CURSOS_USUARIOS_INICIO:
        case ACTIVAR_DATOS_USUARIOS_INSCRIPCION_INICIO:
        case OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_INICIO:
        case INSCRIBIR_USUARIO_CURSO_INICIO:
        case DATOS_USUARIO_INICIO:
            return {
                ...state,
                loading: action.payload
            }
        case OBTENER_DATOS_CATEGORIAS_EXITO:
            //console.log(action.payload);
            return{
                ...state,
                categorias: action.payload,                
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
       
       
        case EDITAR_DATOS_CATEGORIAS_EXITO:
            console.log(action.payload);                                                                     
            let cats = state.categorias;
            for(let j=0; j< cats.length; j++){
                //console.log(h[j])
                let item =  cats[j];
                if(item.idCategoria === action.payload[1].idCategoria)
                {
                    item  = action.payload[1];
                    cats[j] = item;
                }
                }
            return{
                ...state,
                categorias: cats,
                mensaje: action.payload[0],
                loading: false
            }

        case ELIMINAR_DATOS_CATEGORIAS_EXITO:        
        console.log(action.payload);
        return {                        
        ...state, 
        categorias: state.categorias.filter(cat => action.payload[1] != cat.idCategoria),
        mensaje: action.payload[0],
        loading: false
        }
        
            //tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload )
        case OBTENER_DATOS_USUARIOS_ROL_ERROR:
        case EDITAR_DATOS_CATEGORIAS_ERROR:
        case ELIMINAR_DATOS_CATEGORIAS_ERROR: 
        case AGREGAR_DATOS_CATEGORIAS_ERROR :   
        case ELIMINAR_DATOS_USUARIOS_ROL_ERROR:
        case ACTIVAR_DATOS_USUARIOS_ROL_INICIO:
        case ACTIVAR_DATOS_USUARIOS_ROL_ERROR:
        case OBTENER_DATOS_CURSOS_USUARIOS_ERROR:
        case ACTIVAR_DATOS_USUARIOS_INSCRIPCION_ERROR:
        case SUSPENDER_DATOS_USUARIOS_INSCRIPCION_ERROR:
        case OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_ERROR:
        case INSCRIBIR_USUARIO_CURSO_ERROR:
        case DATOS_USUARIO_ERROR:
            return{
                ...state,
                mensaje: action.payload,
                loading: false
            }
        case AGREGAR_DATOS_CATEGORIAS_INICIO:
            return{
                ...state,
                loading: true
            }
        case    AGREGAR_DATOS_CATEGORIAS_EXITO:
            console.log(action.payload);
            //[...state.subTemasCurso, action.payload]
            //categorias: state.categorias.push(action.payload[1]),
            return {
                ...state,
                categorias: [...state.categorias, action.payload[1]],
                mensaje: action.payload[0],
                loading: false
            }
        case OBTENER_DATOS_USUARIOS_ROL_EXITO:
            return {
                ...state,
                usuariosRol: action.payload,
                loading: false
            }
        case ELIMINAR_DATOS_USUARIOS_ROL_EXITO:        
            console.log(action.payload);                                                                     
            
            let usuariosR = state.usuariosRol;
            for(let j=0; j< usuariosR.length; j++){
                //console.log(h[j])
                let item =  usuariosR[j];
                if(item.idLogin === action.payload[1])
                {
                    item.estatusLogin  = "Suspendido";
                    usuariosR[j] = item;
                }
                }
        return{
            ...state,
            usuariosRol: usuariosR,
            mensaje: action.payload[0],
            loading: false
        }
    case ACTIVAR_DATOS_USUARIOS_ROL_EXITO:        
    console.log(action.payload);                                                                                 
    let usuariosRA = state.usuariosRol;
    for(let j=0; j< usuariosRA.length; j++){
        //console.log(h[j])
        let item =  usuariosRA[j];
        if(item.idLogin === action.payload[1])
        {
            item.estatusLogin  = "Activo";
            usuariosRA[j] = item;
        }
    }
    return{
        ...state,
        usuariosRol: usuariosRA,
        mensaje: action.payload[0],
        loading: false
    }
    case OBTENER_DATOS_CURSOS_USUARIOS_EXITO:
    return{
        ...state,
        cursosInscritos: action.payload,
        loading: false
    }

    case ACTIVAR_DATOS_USUARIOS_INSCRIPCION_EXITO:        
            console.log(action.payload);                                                                     
            
            let cursosInsc = state.cursosInscritos;
            for(let j=0; j< cursosInsc.length; j++){
                //console.log(h[j])
                let item =  cursosInsc[j];
                if(item.idInscrito === action.payload[1])
                {
                    item.estatus  = "Activo";
                    cursosInsc[j] = item;
                }
                }
        return{
            ...state,
            cursosInscritos: cursosInsc,
            mensaje: action.payload[0],
            loading: false
        }
    case SUSPENDER_DATOS_USUARIOS_INSCRIPCION_EXITO:
        console.log(action.payload);                                                                     
            
            let cursosInscS = state.cursosInscritos;
            for(let j=0; j< cursosInscS.length; j++){
                //console.log(h[j])
                let item =  cursosInscS[j];
                if(item.idInscrito === action.payload[1])
                {
                    item.estatus  = "Suspendido";
                    cursosInscS[j] = item;
                }
                }
        return{
            ...state,
            cursosInscritos: cursosInscS,
            mensaje: action.payload[0],
            loading: false
        }
    case OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_EXITO:
        return{
            ...state,
            cursosNoInscrito: action.payload,
            loading: false
        }
    case INSCRIBIR_USUARIO_CURSO_EXITO:
        //tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload )
        return{
            ...state,
            cursosInscritos: action.payload[1],
            mensaje: action.payload[0],
            loading: false,
            cursosNoInscrito: state.cursosNoInscrito.filter(curso => curso.idCurso !== action.payload[2] )
        }
    case DATOS_USUARIO_EXITO:
        return{
            ...state,
            datosUsuario: action.payload
        }
        default: 
        return state;
    }
}