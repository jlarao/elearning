
import {REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    LOGIN_ERROR,
    OBTENER_CUSOS_INSTRUCTOR,
    CURSOS_ERROR,
    CURSOS_AGREGAR,
    CURSOS_EDITAR,
    CURSOS_POR_ID,
    CURSOS_FORM_TEMACURSO,
    CURSOS_GUARDAR_TEMA_CURSO,
    CURSOS_FORM_SUBTEMA,
    CURSOS_SET_IDTEMA,
    CURSOS_GUARDAR_SUBTEMA_CURSO,
    CURSOS_OBTENER_SUBTEMAS_CURSO,
    CURSOS_VACIAR_SUBTEMAS_CURSO,
    CURSOS_EDICION_HERRAMIENTA,
    CURSOS_ELIMINAR_HERRAMIENTA,
    CURSOS_EDICION_HERRAMIENTA_DOC,
    CURSOS_ELIMINAR_HERRAMIENTA_DOC,
    CURSOS_AGREGAR_HERRAMIENTA_DOC,
    CURSOS_AGREGAR_SUBTEMA_CURSO,
    CURSOS_EDITAR_SUBTEMA_CURSO,
    CURSOS_ELIMINAR_SUBTEMA_CURSO,
    CURSOS_EDITAR_TEMA_CURSO,
    CURSOS_ELIMINAR_TEMA_CURSO,
    LIMPIAR_STATE,
    LIMPIAR_MENSAJE,
    LOADING_CURSO,
    OBTENER_CURSOS_ALUMNO
    
} from "../../types";

export default (state, action) =>{
    switch(action.type){       
        case OBTENER_CUSOS_INSTRUCTOR:             
            return{
                ...state,
                cursos: action.payload
            }
        case OBTENER_CURSOS_ALUMNO:
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
            case CURSOS_EDITAR:
                //mensaje: action.payload.mensaje
            return{
                ...state,
                cursos: [...state.cursos, action.payload],
                mensaje: action.payload.mensaje
            }
        case CURSOS_POR_ID:
            console.log(action.payload.nombreCurso);
            return{
                ...state,
                id: action.payload.idCurso, 
                nombreCurso: action.payload.nombreCurso,                
                duracion: action.payload.duracion,        
                poster: action.payload.poster,                
                fechaRegistro: action.payload.fechaRegistro,
                descripcion:action.payload.descripcion,
                requisitos:action.payload.requisitos,
                que_aprenderas:action.payload.que_aprenderas,
                idCategoria: action.payload.idCategoria,
                precio: action.payload.precio,
                cargando: false
            }
        case CURSOS_FORM_TEMACURSO:
            return{
                ...state,
                formTemaCurso: action.payload
            }
        case CURSOS_GUARDAR_TEMA_CURSO:
            //console.log(action.payload);
            return{
                ...state,
                temasCurso: action.payload,
                formTemaCurso: false
            }

            case CURSOS_FORM_SUBTEMA:
                console.log(action.payload);
                return{
                    ...state,
                    formSubTema: action.payload
                }
            case CURSOS_SET_IDTEMA:
                    return({
                        ...state,
                        idTema: action.payload
                    })
            case CURSOS_OBTENER_SUBTEMAS_CURSO:
                return({
                    ...state, subTemasCurso: action.payload
                })
            case CURSOS_VACIAR_SUBTEMAS_CURSO:
                return({
                        ...state, subTemasCurso: []
                })
            case CURSOS_EDICION_HERRAMIENTA: 
                console.log(action.payload);                                                   
                    let data = state.subTemasCurso;
                    for(let i=0; i< data.length; i++){
                        //console.log(data[i].herramientasubTema) ;
                        let h  = data[i].herramientasubTema ;
                        for(let j=0; j< h.length; j++){
                        //console.log(h[j])
                        let item =  h[j];
                        if(item.idHerramientaCurso === action.payload.idHerramientaCurso)
                        {
                            item  = action.payload;
                            h[j] = item;
                        }
                        }
                    }
                    console.log(data);
                    return {                        
                    ...state, subTemasCurso: data
                    }
            case CURSOS_ELIMINAR_HERRAMIENTA:
                let d = state.subTemasCurso;
                    for(let i=0; i< d.length; i++){                        
                        let h  = d[i].herramientasubTema ;
                        for(let j=0; j< h.length; j++){                        
                        let item =  h[j];
                        console.log(item.idHerramientaCurso);
                        console.log(action.payload);
                        if(item.idHerramientaCurso === action.payload)
                        {
                            //item  = action.payload;
                            item.urlHerramienta ="";
                            h[j] = item;
                            console.log("urlherramienta vacia");
                        }
                        }
                    }
                    console.log(d);
                    return {                        
                    ...state, subTemasCurso: d
                    }
        case CURSOS_EDICION_HERRAMIENTA_DOC:
            console.log(action.payload);                                                   
                    let dataDoc = state.subTemasCurso;
                    for(let i=0; i< dataDoc.length; i++){
                        //console.log(dataDoc[i].herramientasubTema) ;
                        let h  = dataDoc[i].herramientasubTema ;
                        for(let j=0; j< h.length; j++){
                        //console.log(h[j])
                        let item =  h[j];
                        if(item.idHerramientaCurso === action.payload.idHerramientaCurso)
                        {
                            item  = action.payload;
                            h[j] = item;
                        }
                        }
                    }
                    console.log(dataDoc);
                    return {                        
                    ...state, subTemasCurso: dataDoc
                    }
        case CURSOS_ELIMINAR_HERRAMIENTA_DOC:
            let dDoc = state.subTemasCurso;
                    for(let i=0; i< dDoc.length; i++){                        
                        let h  = dDoc[i].herramientasubTema ;
                        for(let j=0; j< h.length; j++){                        
                        let item =  h[j];
                        console.log(item.idHerramientaCurso);
                        console.log(action.payload);
                        if(item.idHerramientaCurso === action.payload)
                        {
                            //item  = action.payload;
                            item.estatus ="Suspendido";
                            h[j] = item;
                            console.log("urlherramienta vacia");
                        }
                        }
                    }
                    console.log(dDoc);
                    return {                        
                    ...state, subTemasCurso: dDoc
                    }
        case CURSOS_AGREGAR_HERRAMIENTA_DOC:
            let dDocA = state.subTemasCurso;
            for(let i=0; i< dDocA.length; i++){                        
                let s  = dDocA[i].subTemaCurso ;
                let h  = dDocA[i].herramientasubTema ;                                               
                if(s.idSubTema === action.payload.idTema)
                {                                                      
                    h.push(action.payload);
                    
                }
                }
                return {                        
                    ...state, subTemasCurso: dDocA
                    }
    
        case CURSOS_AGREGAR_SUBTEMA_CURSO:
            return {
                ...state,
                subTemasCurso: [...state.subTemasCurso, action.payload]
            }
        case CURSOS_EDITAR_SUBTEMA_CURSO:
            console.log(action.payload);                                                   
            let subTemasCeEd = state.subTemasCurso;
            for(let i=0; i< subTemasCeEd.length; i++){
                //console.log(dataDoc[i].herramientasubTema) ;
                let stc  = subTemasCeEd[i].subTemaCurso ;
                //for(let j=0; j< stc.length; j++){
                console.log(stc)
                //let item =  stc[j];
                if(stc.idSubTema === action.payload.idSubTema)
                {
                    stc.nombreSubTema  = action.payload.nombreSubTema;
                    //stc[j]  = item;
                    console.log("actualizando");                    
                }
                //}
            }
            console.log(subTemasCeEd);
                    return {                        
                    ...state, subTemasCurso: subTemasCeEd
                    }
        case CURSOS_ELIMINAR_SUBTEMA_CURSO:            
                    return {                        
                    ...state, subTemasCurso: state.subTemasCurso.filter(function(s){return s.subTemaCurso.idSubTema !== action.payload })
                    }
        case CURSOS_EDITAR_TEMA_CURSO:
            console.log(action.payload);                                                   
            let TemasCUEd = state.temasCurso;
            for(let i=0; i< TemasCUEd.length; i++){
                let tce = TemasCUEd[i]; 
                if(tce.idTema === action.payload.idTema)
                {
                    tce.nombreTema  = action.payload.nombreTema;                    
                    console.log("actualizando");                    
                }                
            }
            console.log(TemasCUEd);
                    return {                        
                    ...state, temasCurso: TemasCUEd
                    }
        case CURSOS_ELIMINAR_TEMA_CURSO:            
                    return {                        
                    ...state, temasCurso: state.temasCurso.filter(function(s){return s.idTema !== action.payload })
                    }
        case LIMPIAR_STATE:
            return{
                id: null,
                nombreCurso:"",
                idCategoria:0,
                categoria:"",
                duracion:"",        
                poster:"",
                descripcion:"",
                requisitos:"",
                que_aprenderas:"",
                idCategoria: 0,
                precio: 0,
                mensaje:"",
                fechaRegistro:"",        
                redirect:null,
                temasCurso:[],
                cursos:[],
                formTemaCurso: false,
                formSubTema: false,
                idTema:null,
                subTemasCurso: []
            }
            case LIMPIAR_MENSAJE:
                return{
                    ...state,
                    mensaje: ""
                }
        case LOADING_CURSO:
            return {
            ...state,
            cargando: true
        }
        default: return state;                
                
    }




}