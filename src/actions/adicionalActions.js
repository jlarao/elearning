import clienteAxios from "../config/axios";
import tokenAuth from "../config/token";
import {
    OBTENER_DATOS_CATEGORIAS_INICIO,
    OBTENER_DATOS_CATEGORIAS_EXITO,
    OBTENER_DATOS_CATEGORIAS_ERROR,

    EDITAR_DATOS_CATEGORIAS_INICIO,
    EDITAR_DATOS_CATEGORIAS_EXITO,
    EDITAR_DATOS_CATEGORIAS_ERROR,
    LIMPIAR_MENSAJE,
    
    ELIMINAR_DATOS_CATEGORIAS_INICIO ,
    ELIMINAR_DATOS_CATEGORIAS_EXITO ,
    ELIMINAR_DATOS_CATEGORIAS_ERROR,

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

} from "../types/index";

export function obtenerCategorias(){
    return async (dispatch) => {
        dispatch(obtenerCategoriasInicioAction());    
    const token  = localStorage.getItem("token");
    if(token){
        tokenAuth(token) ;
    }
    
    try{
        const response = await clienteAxios.get("categorias?page=0");
        console.log(response);
        dispatch(obtenerCategoriasExitoAction(response.data));

    }
    catch(e){
        console.log(e.response);
            const alert = {
                msg: e.response.data.message,
                categoria: "danger"
            }
        dispatch(obtenerCategoriasErrorAction(true));
    }
}
}

const obtenerCategoriasInicioAction=()=>({
    type: OBTENER_DATOS_CATEGORIAS_INICIO,
    payload: true
})
const obtenerCategoriasExitoAction=(datos)=>({
    type: OBTENER_DATOS_CATEGORIAS_EXITO,
    payload: datos
})
const obtenerCategoriasErrorAction=(estado)=>({
    type: OBTENER_DATOS_CATEGORIAS_ERROR,
    payload: estado
})

export function editarDatosCategoria(data){
    return async (dispatch) =>{
        dispatch( editarDatosCategoriaInicioAction() )
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }        
        try{            
            const response = await clienteAxios.put("categorias",data);
            console.log(response.data); 
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
            const exp ={
                idCategoria: data.idCategoria,
                nombreCategoria: data.nombreCategoria
                
            }
            dispatch(editarDatosCategoriaExitoAction(Array(alert,exp)));
    
        }
        catch(e){
            console.log(e.response);
            const alert = {
                msg: e.response.data.message,
                categoria: "danger"
            }
            dispatch(editarDatosCategoriaErrorAction(alert));
        }
    }
}
const editarDatosCategoriaInicioAction=()=>({
    type: EDITAR_DATOS_CATEGORIAS_INICIO,
    payload: true 
})
const editarDatosCategoriaExitoAction=(datos)=>({
    type: EDITAR_DATOS_CATEGORIAS_EXITO,
    payload: datos 
})
const editarDatosCategoriaErrorAction=(estado)=>({
    type: EDITAR_DATOS_CATEGORIAS_ERROR,
    payload: estado 
})

export function eliminarDatosCategoria(idCategoria){
    return async (dispatch) =>{
        dispatch(eliminarDatosCategoriaInicioAction());
        const token = localStorage.getItem('token');
        if(tokenAuth){
            tokenAuth(token);
        }
        
        try {
            const response = await clienteAxios.delete('categorias', { params: { idCategoria }});
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
           
            dispatch( eliminarDatosCategoriaExitoAction(Array(alert, idCategoria)));
        } catch (error) {
            console.log(error.response)
            const alert = {
                msg: error.response.data.message,
                categoria: "danger"
            }
            dispatch( eliminarDatosCategoriaErrorAction(alert) );
        }
    }

}
const eliminarDatosCategoriaInicioAction=()=>({
    type: ELIMINAR_DATOS_CATEGORIAS_INICIO,
    payload: true
})
const eliminarDatosCategoriaExitoAction=(r)=>({
    type: ELIMINAR_DATOS_CATEGORIAS_EXITO,
    payload: r
})
const eliminarDatosCategoriaErrorAction=(r)=>({
    type: ELIMINAR_DATOS_CATEGORIAS_ERROR,
    payload: r
})

export function limpiarMensajeAdicional(){
    return (dispatch) =>{
        dispatch( limpiarMensajeAction() );
    }
}

const limpiarMensajeAction = () =>    
    ({
        type: LIMPIAR_MENSAJE
    })

    export function agregarDatosCategoriaAction(categoria){
        return async (dispatch) =>{
            dispatch(agregarDatosCategoriaInicioAction());
            const token = localStorage.getItem('token');
            if(tokenAuth){
                tokenAuth(token);
            }
            
            try {
                const response = await clienteAxios.post('categorias', categoria);
                const alert = {
                    msg: response.data.message,
                    categoria: "success"
                }
                const alta ={
                    nombreCategoria: categoria.nombreCategoria,
                    idCategoria: response.data.idCategoria
                }
               
                dispatch( agregarDatosCategoriaExitoAction(Array(alert, alta)));
            } catch (error) {
                console.log(error.response)
                const alert = {
                    msg: error.response.data.message,
                    categoria: "danger"
                }
                dispatch( agregarDatosCategoriaErrorAction(alert) );
            }
        }
    
    }
    const agregarDatosCategoriaInicioAction=()=>({
        type: AGREGAR_DATOS_CATEGORIAS_INICIO,
        payload: true
    })
    const agregarDatosCategoriaExitoAction=(r)=>({
        type: AGREGAR_DATOS_CATEGORIAS_EXITO,
        payload: r
    })
    const agregarDatosCategoriaErrorAction=(r)=>({
        type: AGREGAR_DATOS_CATEGORIAS_ERROR,
        payload: r
    })

    export function obtenerUsuariosRol(){
        return async (dispatch) => {
            dispatch(obtenerUsuariosRolInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const response = await clienteAxios.get("usuarios?usuarios_rol=0");
            console.log(response);
            dispatch(obtenerUsuariosRolExitoAction(response.data.data));
    
        }
        catch(e){
            console.log(e.response);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(obtenerUsuariosRolErrorAction(alert));
        }
    }
    }
    
    const obtenerUsuariosRolInicioAction=()=>({
        type: OBTENER_DATOS_USUARIOS_ROL_INICIO,
        payload: true
    })
    const obtenerUsuariosRolExitoAction=(datos)=>({
        type: OBTENER_DATOS_USUARIOS_ROL_EXITO,
        payload: datos
    })
    const obtenerUsuariosRolErrorAction=(estado)=>({
        type: OBTENER_DATOS_USUARIOS_ROL_ERROR,
        payload: estado
    })

    export function eliminarUsuariosRol(idLogin){
        return async (dispatch) => {
            dispatch(eliminarUsuariosRolInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const response = await clienteAxios.delete("loginjwt", { params: { idLogin }});
            console.log(response);
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
           
            //dispatch( eliminarDatosCategoriaExitoAction(Array(alert, idCategoria)));
            dispatch(eliminarUsuariosRolExitoAction(Array(alert, idLogin)));
    
        }
        catch(e){
            console.log(e.response);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(eliminarUsuariosRolErrorAction(alert));
        }
    }
    }
    
    const eliminarUsuariosRolInicioAction=()=>({
        type:   ELIMINAR_DATOS_USUARIOS_ROL_INICIO,
        payload: true
    })
    const eliminarUsuariosRolExitoAction=(datos)=>({
        type:   ELIMINAR_DATOS_USUARIOS_ROL_EXITO,
        payload: datos
    })
    const eliminarUsuariosRolErrorAction=(estado)=>({
        type:   ELIMINAR_DATOS_USUARIOS_ROL_ERROR,
        payload: estado
    })

    export function activarUsuariosRol(idLogin){
        return async (dispatch) => {
            dispatch(activarUsuariosRolInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const login = { 'idLogin': idLogin} ;
            const response = await clienteAxios.put("loginjwt",  login );
            console.log(response);
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
           
            //dispatch( eliminarDatosCategoriaExitoAction(Array(alert, idCategoria)));
            dispatch(activarUsuariosRolExitoAction(Array(alert, idLogin)));
    
        }
        catch(e){
            console.log(e);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(activarUsuariosRolErrorAction(alert));
        }
    }
    }
    
    const activarUsuariosRolInicioAction=()=>({
        type:   ACTIVAR_DATOS_USUARIOS_ROL_INICIO,
        payload: true
    })
    const activarUsuariosRolExitoAction=(datos)=>({
        type:   ACTIVAR_DATOS_USUARIOS_ROL_EXITO,
        payload: datos
    })
    const activarUsuariosRolErrorAction=(estado)=>({
        type:   ACTIVAR_DATOS_USUARIOS_ROL_ERROR,
        payload: estado
    })

    export function obtenerUsuariosCursos(idUsuario){
        return async (dispatch) => {
            dispatch(obtenerUsuariosCursosInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const response = await clienteAxios.get("cursos?idUsuario="+idUsuario);
            console.log(response);            
            dispatch(obtenerUsuariosCursosExitoAction(response.data.data));
    
        }
        catch(e){
            console.log(e.response);
             /*   const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }*/
            dispatch(obtenerUsuariosCursosErrorAction(e));
        }
    }
    }
    
    const obtenerUsuariosCursosInicioAction=()=>({
        type: OBTENER_DATOS_CURSOS_USUARIOS_INICIO,
        payload: true
    })
    const obtenerUsuariosCursosExitoAction=(datos)=>({
        type: OBTENER_DATOS_CURSOS_USUARIOS_EXITO,
        payload: datos
    })
    const obtenerUsuariosCursosErrorAction=(estado)=>({
        type: OBTENER_DATOS_CURSOS_USUARIOS_ERROR,
        payload: estado
    })


    export function activarUsuarioInscripcion(idInscripcion){
        return async (dispatch) => {
            dispatch(activarUsuarioInscripcionInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const inscripcion = { 'idInscripcion': idInscripcion, 'estatus': 'Activo'} ;
            const response = await clienteAxios.put("inscripcion",  inscripcion );
            console.log(response);
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
           
            //dispatch( eliminarDatosCategoriaExitoAction(Array(alert, idCategoria)));
            dispatch(activarUsuarioInscripcionExitoAction(Array(alert, idInscripcion)));
    
        }
        catch(e){
            console.log(e);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(activarUsuarioInscripcionErrorAction(alert));
        }
    }
    }
    
    const activarUsuarioInscripcionInicioAction=()=>({
        type:   ACTIVAR_DATOS_USUARIOS_INSCRIPCION_INICIO,
        payload: true
    })
    const activarUsuarioInscripcionExitoAction=(datos)=>({
        type:   ACTIVAR_DATOS_USUARIOS_INSCRIPCION_EXITO,
        payload: datos
    })
    const activarUsuarioInscripcionErrorAction=(estado)=>({
        type:   ACTIVAR_DATOS_USUARIOS_INSCRIPCION_ERROR,
        payload: estado
    })

    export function suspenderUsuarioInscripcion(idInscripcion){
        return async (dispatch) => {
            
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const inscripcion = { 'idInscripcion': idInscripcion, 'estatus': 'Suspendido'} ;
            const response = await clienteAxios.put("inscripcion",  inscripcion );
            console.log(response);
            const alert = {
                msg: response.data.message,
                categoria: "success"
            }
           
            //dispatch( eliminarDatosCategoriaExitoAction(Array(alert, idCategoria)));
            dispatch(suspenderUsuarioInscripcionExitoAction(Array(alert, idInscripcion)));
    
        }
        catch(e){
            console.log(e);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(suspenderUsuarioInscripcionErrorAction(alert));
        }
    }
    }
    
    
    const suspenderUsuarioInscripcionExitoAction=(datos)=>({
        type:   SUSPENDER_DATOS_USUARIOS_INSCRIPCION_EXITO,
        payload: datos
    })
    const suspenderUsuarioInscripcionErrorAction=(estado)=>({
        type:   SUSPENDER_DATOS_USUARIOS_INSCRIPCION_ERROR,
        payload: estado
    })

    export function obtenerCursosUsuarioNoInscrito(idUsuario){
        return async (dispatch) => {
            dispatch(obtenerCursosUsuarioNoInscritoInicioAction());    
        const token  = localStorage.getItem("token");
        if(token){
            tokenAuth(token) ;
        }
        
        try{
            const response = await clienteAxios.get("cursos?NoInscrito="+idUsuario);
            console.log(response);            
            dispatch(obtenerCursosUsuarioNoInscritoExitoAction(response.data.data));
    
        }
        catch(e){
            console.log(e.response);
                const alert = {
                    msg: e.response.data.message,
                    categoria: "danger"
                }
            dispatch(obtenerCursosUsuarioNoInscritoErrorAction(alert));
        }
    }
    }
    
    const obtenerCursosUsuarioNoInscritoInicioAction=()=>({
        type: OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_INICIO,
        payload: true
    })
    const obtenerCursosUsuarioNoInscritoExitoAction=(datos)=>({
        type: OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_EXITO,
        payload: datos
    })
    const obtenerCursosUsuarioNoInscritoErrorAction=(estado)=>({
        type: OBTENER_DATOS_CURSOS_USUARIO_NO_INSCRITO_ERROR,
        payload: estado
    })

    export function inscribirUsuarioCursoAction(datos){
        return async (dispatch) =>{
            dispatch(inscribirUsuarioCursoInicioAction());
            const token = localStorage.getItem('token');
            if(tokenAuth){
                tokenAuth(token);
            }
            
            try {
                const response = await clienteAxios.post('inscripcion', datos);
                const alert = {
                    msg: response.data.message,
                    categoria: "success"
                }
                const alta ={
                    nombreCategoria: datos.nombreCurso,
                    idInscrito: response.data.idInscrito
                }
               
                dispatch( inscribirUsuarioCursoExitoAction(Array(alert, response.data.cursos, datos.idCurso)));
            } catch (error) {
                console.log(error.response)
                const alert = {
                    msg: error.response.data.message,
                    categoria: "danger"
                }
                dispatch( inscribirUsuarioCursoErrorAction(alert) );
            }
        }
    
    }
    const inscribirUsuarioCursoInicioAction=()=>({
        type: INSCRIBIR_USUARIO_CURSO_INICIO,
        payload: true
    })
    const inscribirUsuarioCursoExitoAction=(r)=>({
        type: INSCRIBIR_USUARIO_CURSO_EXITO,
        payload: r
    })
    const inscribirUsuarioCursoErrorAction=(r)=>({
        type: INSCRIBIR_USUARIO_CURSO_ERROR,
        payload: r
    })

    export function datosUsuarioAction(datos){
        return async (dispatch) =>{
            dispatch(datosUsuarioInicioAction());
            const token = localStorage.getItem('token');
            if(tokenAuth){
                tokenAuth(token);
            }
            
            try {
                const response = await clienteAxios.get('usuarios?id='+ datos);
                /*const alert = {
                    msg: response.data.message,
                    categoria: "success"
                }
                const alta ={
                    nombreCategoria: datos.nombreCurso,
                    idInscrito: response.data.idInscrito
                }*/
               
                dispatch( datosUsuarioExitoAction( response.data[0] ));
            } catch (error) {
                console.log(error)
                const alert = {
                    msg: error.response.data.message,
                    categoria: "danger"
                }
                dispatch( datosUsuarioErrorAction(alert) );
            }
        }
    
    }
    const datosUsuarioInicioAction=()=>({
        type: DATOS_USUARIO_INICIO,
        payload: true
    })
    const datosUsuarioExitoAction=(r)=>({
        type: DATOS_USUARIO_EXITO,
        payload: r
    })
    const datosUsuarioErrorAction=(r)=>({
        type: DATOS_USUARIO_ERROR,
        payload: r
    })