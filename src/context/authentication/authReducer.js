import {
    REGISTRO_EXITOSO,    
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSOS,
    LOGIN_ERROR,
    CERRAR_SESION} from '../../types/index';

export default (state, action) =>{
    switch(action.type)   {
        case LOGIN_EXITOSOS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case REGISTRO_EXITOSO:            
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                registroexitoso: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            console.log("borra token");
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: false,
                mensaje: action.payload,
                cargando: false
            }
        default:
            return state;
    }
}