import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";
import {  editarDatosCategoria, limpiarMensajeAdicional } from "../../../actions/adicionalActions";
import Modal from "../../functions/function";
const CategoriaEditarForm = ({ocultarFormEdicCategoria, categoria}) => {
  const dispatch = useDispatch();
  const editarDatosCategoriaGuardar = e => dispatch( editarDatosCategoria(e));
  const limpiarMensaje = e => dispatch(limpiarMensajeAdicional());
  const mensaje = useSelector( state => state.adicional.mensaje);

  const [datos, setDatos] = useState({                
        error: false,
        errorMsg: "",
        msg: false,
        mensaje: "",
        tema: {                      
          idCategoria: categoria.idCategoria,
          nombreCategoria: categoria.nombreCategoria            
        }       
    });
   
    const { tema} = datos;
    const {nombreCategoria } = tema;   
    const   manejadorSubmit = e =>{
        e.preventDefault();   
      }     
    
   
    /*  const limpiarMensaje=()=>{
        setDatos({
          ...datos, 
          msg: false,
          mensaje: ""})
      }*/
      const botonGuardar =  e =>{
        console.log("guardar");
        console.log(datos);
        
        e.preventDefault();
        
          if(datos.tema.nombreCategoria.trim()!== ""){
            if(datos.tema.idCategoria!== ""){
              //if(datos.tema.agregarVideo!== ""){
                setDatos({
                  ...datos, 
                  error: false,
                  errorMsg: ""})
                  //edicionHerramientaDocCurso(datos.tema);
                  editarDatosCategoriaGuardar(datos.tema);
                  //ocultarFormEdicCategoria(); 
               console.log(datos.tema)
                       
            }else{
              setDatos({
                ...datos, 
                error: true,
                errorMsg: "Error in categoria"})    
            }  
    
          }else{
            setDatos({
              ...datos, 
              error: true,
              errorMsg: "No se ha agregado la categoria"})
      
          }       
           
        
    }
    const  manejadorChange =   e => {      
      setDatos({
        ...datos, 
            tema: {
              ...datos.tema,
              [e.target.name]: e.target.value
            }    })      
    
  }

  
    return ( <React.Fragment>
        
        <form className="form-horizontal card2" onSubmit={manejadorSubmit}>
            <div className="row card-body">
                <hr/>
            <div className="col-lg-12 mb-5"></div>
                <div className="col-lg-12 mb-5">
                   
                   <div className="form-group row">
                    <label className="col-md-3 form-control-label">Editar Categoria</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="nombreCategoria" onChange={ manejadorChange} value={nombreCategoria}/>                            
                    </div>
                   </div>
                                                                 
                  </div>
                  </div>
                  <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary mr-1" onClick={botonGuardar}>Guardar</button>
                            <button type="button" className="btn btn-danger" onClick={ocultarFormEdicCategoria}>Cancelar</button>
                                                     
                          </div>
                          {datos.error === true &&
             <div className="alert alert-danger" role="alert">
               {datos.errorMsg}
               </div>
                          }
               {datos.msg === true &&
             <div className="alert alert-success" role="alert">
               {datos.mensaje}
             </div>
           }
                </div>
                </div>
                  </form>
                
                  
            </React.Fragment>  );
}
 
export default CategoriaEditarForm;