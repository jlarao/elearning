import React, { useState, useEffect} from 'react';

import { useDispatch } from "react-redux";
import { altaDatosInstructorProfesion } from "../../actions/instructorActions";
const FormDatosInstructor = ({ expositor , idUsuario }) => {
    const dispatch = useDispatch();
    const altaDatosInstructorProfesionForm = e => dispatch(  altaDatosInstructorProfesion(e) );
    const [usuario, guardarUsuario]  = useState({        
        idExpositor: expositor.idExpositor ,
        idProfesion: expositor.idProfesion,
        descripcion: expositor.descripcion,
        idUsuarioExpositor: idUsuario
  })
  
  const { idProfesion, descripcion } = usuario;
  console.log(expositor);  
  
  const [error, guardarError]  = useState({        
    errorb:false,
    errorMsg:""            
    })

const {errorb, errorMsg} = error;

const [categorias, setCategorias] = useState([]);
useEffect( () => {    
    consultarAPI();
       
  }, []); 
  
  
  const consultarAPI =async  () => {    
    const api = await fetch(process.env.REACT_APP_BACKEND_URL+'profesion?page=0');
    const frase = await api.json()
    setCategorias(frase);            
  } 

  const manejadorSubmit = e =>{
      e.preventDefault();
  }

  const manejadorChange =  e => {
       guardarUsuario({           
              ...usuario,
              [e.target.name]: e.target.value
          
      })
      // console.log(this.state.form)
  }



  const manejadorBoton =  (e)=>{
    e.preventDefault();
    if(usuario.descripcion.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo descripcion"
          })
          return;
    }
    if(usuario.idProfesion===0){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de seleccionar profesion"
          })
          return;
    }  
    
      guardarError({
        ...error,
        "errorb": false,
        "errorMsg": ""
      })

      //editarDatosInstructorForm(usuario);         
      altaDatosInstructorProfesionForm(usuario);
  

  }


    return ( 
      <section className="pt-2">                       
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="card">
              <div className="card-header">
                <h3 className="h6 text-uppercase mb-0">Datos como instructor </h3>
              </div>
              <div className="card-body">
                <p>Favor de capturar la inforación solicitada</p>
              <div className="card2">
              <div className="card-body">
                <form className="form-horizontal" onSubmit={manejadorSubmit}>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label">Descripción de habilidades como instructor</label>
                    <div className="col-md-9">                      
                      <textarea className="form-control" name="descripcion" onChange={manejadorChange} value= {descripcion} rows="3" ></textarea>
                    </div>
                  </div>
                 
                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Grado</label>
                          <div className="col-md-9 select mb-3">
                            <select name="idProfesion" className="form-control" onChange={manejadorChange} value={idProfesion} >
                              <option value="" > Seleccione una opción</option>
                              {categorias.map(c=>(
                              <option key={c.idProfesion} value={c.idProfesion}>{c.nombreProfesion}</option>))
                          }
                            </select>
                          </div>                      
                        </div>

                  <div className="form-group row">
                    <div className="col-md-9 ml-auto">
                      <input type="submit" value="Guardar" className="btn btn-primary" onClick={manejadorBoton}/>                          
                    </div>
                  </div>
                </form>
                {errorb === true &&
             <div className="alert alert-danger" role="alert">
               {errorMsg}
             </div>
           }
           
              </div>
            </div>

            </div>
            </div>
          </div> 
          </div>
        
      </section>
       );
}
 
export default FormDatosInstructor;