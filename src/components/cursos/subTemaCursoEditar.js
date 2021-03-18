import React, {useState,  useContext} from 'react';
import CursosContext from "../../context/cursos/cursosContext";


const SubTemaCursoEditar = ({idSubTema, nombreSubT, idTema , ocultarFormSubTemaEdita }) => {
    const cursosContext =  useContext(CursosContext);
    const { editarSubTemaCurso } = cursosContext;
   

    const [datos, setDatos] = useState({                     
        error: false,
        errorMsg: "",
        tema: {
          nombreSubTema: nombreSubT,
          idTema: idTema,
          idSubTema: idSubTema
        }       
    });

   const { tema }  = datos;
   const { nombreSubTema }  = tema;

    const   manejadorSubmit = e =>{
      e.preventDefault();   
    }

    

     

      const botonGuardar =  e =>{
        console.log("guardar");
        console.log(datos);
        
        e.preventDefault();
        if(datos.tema.nombreSubTema.trim()!==""){                            
                    setDatos({
                      ...datos, 
                      error: false,
                      errorMsg: ""})
                    
                            console.log(datos);
                            console.log("informacion agregada correctamente");
                            ocultarFormSubTemaEdita();
                            editarSubTemaCurso(datos.tema);
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
            <div className="col-lg-12 mb-5"><h5>Editar tema</h5></div>
                <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Nombre del Tema</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="nombreSubTema" onChange={ manejadorChange} value={ nombreSubTema }/>                            
                    </div>
                   </div> 
      
                  
                 
                  </div>
                  </div>
                  <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary mr-1" onClick={botonGuardar}>Guardar</button>  
                            <button type="button" className="btn btn-danger" onClick={ocultarFormSubTemaEdita}>Cancelar</button>                            
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
 
export default SubTemaCursoEditar;