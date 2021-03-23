import React, {useState,  useEffect} from 'react';
import {  agregarDatosCategoriaAction, limpiarMensajeAdicional } from "../../../actions/adicionalActions";
import Modal from "../../functions/function";
import { useDispatch, useSelector } from "react-redux";
const CategoriaAgregar = ({btnCategoriaForm}) => {
  const dispatch = useDispatch();
  const agregarDatosCategoria = e => dispatch( agregarDatosCategoriaAction(e));
  const limpiarMensaje = e => dispatch(limpiarMensajeAdicional());
  const mensaje = useSelector( state => state.adicional.mensaje);

    const [datos, setDatos] = useState({        
      nombreCategoria:"",
        idCategoria:0,        
        error: false,
        errorMsg: ""       
    });

   
    

    const   manejadorSubmit = e =>{    
        e.preventDefault();    
        if(datos.nombreCategoria.trim()!==""){          
          console.log("guardando");
          //guardarTemaCurso(datos);
          agregarDatosCategoria(datos);
        }else{
          setDatos({
            ...datos,
                error: true,
                errorMsg: " Favor de llenar el campo nombre"
              })
              console.log("verda");
        }        
      }

      const  manejadorChange =  async e => { 
        setDatos({
            ...datos,
            [e.target.name]: e.target.value                
              })
              console.log("verda");
        }        
       
    return ( 
        <div className="card2">
        <div className="card-body">
        <form className="form-horizontal" onSubmit={manejadorSubmit} >
                <div className="row">
                  <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Agregar Categoria</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="nombreCategoria" onChange={ manejadorChange} />                            
                          </div>
                  </div> 
                  <div className="form-group row">
                          <div className="col-md-9 ml-auto">
                            <input type="submit" value="Guardar Categoria" className="btn btn-primary" />
                            <button type="button" className="btn btn-danger ml-1" onClick={ ()=> {btnCategoriaForm(false)} }>Cancelar</button>
                          </div>
                        </div>  
                  </div>
                  </div>
                  {datos.error === true &&
             <div className="alert alert-danger" role="alert">
               {datos.errorMsg}
             </div>
           }
                  </form>
                  
             </div></div>  
     );
}
 
export default CategoriaAgregar;