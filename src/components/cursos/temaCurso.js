import React, {useState, useContext, useEffect} from 'react';
import CursosContext from "../../context/cursos/cursosContext";


const TemaCurso = () => {
    const cursosContext =  useContext(CursosContext);
    const { id, formTemaCurso, guardarTemaCurso} = cursosContext;
    const [datos, setDatos] = useState({        
        seccion:"",
        id:0,        
        error: false,
        errorMsg: ""       
    });

    useEffect(() => {
      setDatos({
        ...datos,
        id:id
      })  
    }, [id,formTemaCurso])
    

    const   manejadorSubmit = e =>{    
        e.preventDefault();    
        if(datos.seccion.trim()!==""){          
          console.log("guardando");
          guardarTemaCurso(datos);
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
        <React.Fragment>
        {formTemaCurso === true &&
        <form className="form-horizontal" onSubmit={manejadorSubmit} >
                <div className="row">
                  <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Seccion</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="seccion" onChange={ manejadorChange} />                            
                          </div>
                  </div> 
                  <div className="form-group row">
                          <div className="col-md-9 ml-auto">
                            <input type="submit" value="Guardar Sección" className="btn btn-primary" />                          
                          </div>
                        </div>  
                  </div>
                  </div>
                  </form>}
                  {datos.error === true &&
             <div className="alert alert-danger" role="alert">
               {datos.errorMsg}
             </div>
           }
            </React.Fragment>    
     );
}
 
export default TemaCurso;