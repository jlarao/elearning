import React, {useState,  useEffect} from 'react';
import {  inscribirUsuarioCursoAction, limpiarMensajeAdicional } from "../../../../actions/adicionalActions";
import Modal from "../../../functions/function";
import { useDispatch, useSelector } from "react-redux";
const InscribirUsuario = ({btnFormInscribirCerrar, formInscribir, idUsuario, cursosNoInscrito}) => {
  const dispatch = useDispatch();
  const inscribirUsuarioCurso = e => dispatch( inscribirUsuarioCursoAction(e));
  const limpiarMensaje = e => dispatch(limpiarMensajeAdicional());
  const mensaje = useSelector( state => state.adicional.mensaje);

    const [datos, setDatos] = useState({      
      
      idCurso:"0",
      nombreCurso: "",
      idUsuario: idUsuario,
      nombre: "",
      apellidoPaterno:"",
      apellidoMaterno:"",
      estatus: "Activo",
      idInscrito:0,
      error: false,
      errorMsg: ""       
    });

   
 

    const   manejadorSubmit = e =>{    
        e.preventDefault();    
        if(datos.idCurso!=="0"){          
          console.log("guardando");
          setDatos({
            ...datos,
                error: false,
                errorMsg: ""
              })
              inscribirUsuarioCurso(datos);
        }else{
          setDatos({
            ...datos,
                error: true,
                errorMsg: " Favor de seleccionar un curso"
              })
              console.log("verda");
        }        
      }

      const  manejadorChange =  async e => { 
        console.log(e.target);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value                
              })
              console.log("verda");
        }        
    if(formInscribir===false)   return null;
    return ( 
        <div className="card2">
        <div className="card-body">
        <form className="form-horizontal" onSubmit={manejadorSubmit} >
                <div className="row">
                  <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Registrar usuario en curso</label>
                          <div className="col-md-9">
                                                       
                          </div>
                  </div>

                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Curso</label>
                          <div className="col-md-9 select mb-3">
                            <select name="idCurso" className="form-control" onChange={manejadorChange} >
                              <option value="0">Seleccione una opción</option>
                              {cursosNoInscrito.map(c=>(
                              <option key={c.idCurso} value={c.idCurso}>{c.nombreCurso}</option>))
                          }
                            </select>
                          </div>                      
                        </div>
                   
                  

                  <div className="form-group row">
                          <div className="col-md-9 ml-auto">
                            <input type="submit" value="inscribir Usuario" className="btn btn-primary" />
                            <button type="button" className="btn btn-danger ml-1" onClick={ ()=> {btnFormInscribirCerrar(false)} }>Cancelar</button>
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
 
export default InscribirUsuario;