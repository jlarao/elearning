import React,{useState, useEffect} from 'react';

const  CursoPasoDos = ({setDatosCurso, datosCurso, cambiarPaso, agregarSeccion}) =>{ 
    //const [numChildren,setNumChildren] = useState(0);
    const [numAcordeon,setNumAcordeon] = useState(0);
    const [seccion, setSeccion] = useState({    
    error: false,
    errorMsg: "",
    seccion: ""   
});

  const  manejadorChange =  async e => {      
      setSeccion({            
                ...seccion,
                [e.target.name]: e.target.value                    
        })
        const obj = {'nombre':e.target.value, 'video':''};
        //const obj = {e.target.name: e.target.value};

        setDatosCurso({
            ...datosCurso, 
            curso: {
                  ...datosCurso.curso,
                  secciones: [
                    ...datosCurso.curso.secciones,                    
                      obj
            ]
                  
                }    })
        
    }

  const   manejadorSubmit = e =>{    
    e.preventDefault();
    console.log(seccion);
    if(seccion.seccion.trim()!=="" ){
      setSeccion({
        ...seccion,
          error: false          
        })
        //setDatosCurso({secciones: seccion});        
        //agregarSeccion(seccion);
        console.log(seccion);
        console.log(datosCurso);                      
        cambiarPaso("paso-tres");               
    }else{
      setSeccion({
        ...seccion,
            error: true,
            errorMsg: " Favor de llenar los campos obligatorios"
          })
          console.log("verda");
    }            
  }

  useEffect( () => {
    //consultarAPI()
    console.log(datosCurso);
  }, []); 
  
             
    const accordeon=[];
    for (var i = 0; i < numAcordeon; i += 1) {
        accordeon.push(<input type="text" key={i} />);
    <div className="card">
    <div className="card-header">
      <a className="collapsed card-link" data-toggle="collapse" href="#collapseOne">
        Collapsible Group Item #1
      </a>
    </div>
    <div id="collapseOne" className="collapse" data-parent="#accordion">
      <div className="card-body">
        Lorem ipsum..
      </div>
    </div>
  </div>
}
    
         return (
          <div className="page-holder w-100 d-flex flex-wrap">
          <div className="container-fluid px-xl-5">
            <section className="py-5">
              <div className="row">
                  <p></p>
              </div>
              <div className="row">
                  <h3></h3>
              </div>
               
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="h6 text-uppercase mb-0">Alta de Curso {datosCurso.curso.nombre}- paso 2 -</h3>
                    </div>
                    <div className="card-body">
                      <p>Agregar Secciones del curso</p>
                    <div className="card2">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={manejadorSubmit} >
                      <div className="form-group row">
                          <label className="col-md-3 form-control-label">Seccion</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="seccion" onChange={ manejadorChange} />                            
                          </div>
                        </div>  
                        <div className="form-group row">
                          <div className="col-md-9 ml-auto">
                            <input type="submit" value="Continuar" className="btn btn-primary" />                          
                          </div>
                        </div>                                                            
                      </form>
                      {seccion.error === true &&
                   <div className="alert alert-danger" role="alert">
                     {seccion.errorMsg}
                   </div>
                 }
                    </div>
                  </div>
  
          </div>
                  </div>
                </div> 
                </div>

                <div className="row">
                <div className="col-lg-12 mb-5">
                <div id="accordion">

  {accordeon}
                    </div>
                </div>
              </div>
            </section>
            </div>
            </div>
         )

}
export default CursoPasoDos;