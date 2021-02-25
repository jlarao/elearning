import React, {useState, useContext} from 'react';
import CursosContext from "../../context/cursos/cursosContext";


const TemaCursoEditar = ({idTema , nombreTem, btnTemaOcultarForm}) => {
    const cursosContext =  useContext(CursosContext);
    const { editarTemaCurso } = cursosContext;
   

    const [datos, setDatos] = useState({                     
        error: false,
        errorMsg: "",
        tema: {
          nombreTema: nombreTem,
          idTema: idTema
          
        }       
    });

   const { tema }  = datos;
   const { nombreTema }  = tema;

    const   manejadorSubmit = e =>{
      e.preventDefault();   
    }

    

     

      const botonGuardar =  e =>{
        console.log("guardar");
        console.log(datos);
        
        e.preventDefault();
        if(datos.tema.nombreTema.trim()!==""){                            
                    setDatos({
                      ...datos, 
                      error: false,
                      errorMsg: ""})
                    
                            console.log(datos);
                            console.log("informacion agregada correctamente");
                            btnTemaOcultarForm();
                            editarTemaCurso(datos.tema);
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
            <div className="col-lg-12 mb-5"><h5>Editar Seccion</h5></div>
                <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Nombre de Seccion</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="nombreTema" onChange={ manejadorChange} value={ nombreTema }/>                            
                    </div>
                   </div> 
      
                  
                 
                  </div>
                  </div>
                  <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary mr-1" onClick={botonGuardar}>Guardar</button>  
                            <button type="button" className="btn btn-danger" onClick={btnTemaOcultarForm}>Cancelar</button>                            
                          </div>
                </div>
                </div>
                {datos.error === true &&
             <div className="alert alert-danger" role="alert">
               {datos.errorMsg}
             </div>
           }
                  </form>
                  
                  
            </React.Fragment> );
}
 
export default TemaCursoEditar;