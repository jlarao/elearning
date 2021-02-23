import React, {useRef, useState, useContext} from 'react';
import axios, {CancelToken, isCancel} from "axios";
import CursosContext from "../../context/cursos/cursosContext";

const EditarDoc = ({ocultarFormEdicDoc, herramienta}) => {
  const cursosContext =  useContext(CursosContext);
  const { edicionHerramientaDocCurso } = cursosContext;
  
  const [datos, setDatos] = useState({                
        error: false,
        errorMsg: "",
        tema: {          
            agregarVideo: "",
            formatoHerramienta: herramienta.formatoHerramienta,
            idHerramientaCurso: herramienta.idHerramientaCurso,
            idTema: herramienta.idTema,
            nombreHerramienta: herramienta.nombreHerramienta,
            nombreTipo: herramienta.nombreTipo,
            urlHerramienta:  ""
        }       
    });
    const cancelSubirPdf = useRef(null);
    const { tema} = datos;
    const {nombreHerramienta } = tema;
    const [porcentajeSubidoPdf, setporcentajeSubidoPdf] = useState(0);
    const [pdf, setPdf] = useState(null);
    const [urlPdf, setUrlPdf] = useState(null);
    const [prevPdf, setPrevPdf] = useState(false);

    const previsualizarPdf =  e =>{
      setPrevPdf(!prevPdf);
  }
    const   manejadorSubmit = e =>{
        e.preventDefault();   
      }
      
      const uploadPdf = ({target: { files }}) =>{
        console.log(files[0]);
        const formData = new FormData();  
        // Update the formData object
        formData.append(      "pdf",files[0]    ); 
        const options = {
          onUploadProgress:   (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total )
            console.log(`${loaded}kb of ${total}kb | percent ${percent}`)
            if(percent < 100){
              setporcentajeSubidoPdf(percent)
            }
          },
          cancelToken: new CancelToken( cancel => cancelSubirPdf.current = cancel )
        };
        axios.post('http://localhost:81/rest/api/pdf',formData, options).then(res =>{
          console.log(res);
          setporcentajeSubidoPdf(100)
          setTimeout(setporcentajeSubidoPdf(0) ,2000)
          console.log(res.data);
          setUrlPdf(res.data.path);      
          setDatos({
              ...datos, 
                  tema: {
                    ...datos.tema,
                    'urlHerramienta': res.data.path
                  }    })
          console.log(urlPdf);
        })
        .catch(err =>{
          console.log(err);
          if(isCancel(err)){
            setDatos({
              ...datos,
              error: true,
              errorMsg: err.message
            })
            console.log(err);
          }
          setporcentajeSubidoPdf(0);
        })
      }

      const cancelUploadPdf = ()=> {
        console.log("Cancelando subida de pdf");
        if( cancelSubirPdf.current)
          cancelSubirPdf.current(" Usuario ha cancelado la subida del pdf");
      }
      

      
      const botonGuardar =  e =>{
        console.log("guardar");
        console.log(datos);
        
        e.preventDefault();
        
          if(datos.tema.nombreHerramienta.trim()!== ""){
            if(datos.tema.urlHerramienta!== ""){
              //if(datos.tema.agregarVideo!== ""){
                setDatos({
                  ...datos, 
                  error: false,
                  errorMsg: ""})
                  edicionHerramientaDocCurso(datos.tema);
                  ocultarFormEdicDoc(); 
               console.log(datos.tema)
                       
            }else{
              setDatos({
                ...datos, 
                error: true,
                errorMsg: "No se ha agregado el archivo"})    
            }  
    
          }else{
            setDatos({
              ...datos, 
              error: true,
              errorMsg: "No se ha agregado un título"})
      
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
        {true === true &&
        <form className="form-horizontal card2" onSubmit={manejadorSubmit}>
            <div className="row card-body">
                <hr/>
            <div className="col-lg-12 mb-5"><h5>Agregar documento</h5></div>
                <div className="col-lg-12 mb-5">
                   
                   <div className="form-group row">
                    <label className="col-md-3 form-control-label">Titulo del documento</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="nombreHerramienta" onChange={ manejadorChange} value={nombreHerramienta}/>                            
                    </div>
                   </div>
                   <div className="form-group row">
            <label className="col-md-3 form-control-label">Subir documento pdf</label>
            <div className="col-md-9">
            <input type="file" name="documento" accept="application/pdf" onChange={uploadPdf}/>
            {porcentajeSubidoPdf > 0 &&<React.Fragment> <div className="progress col-md-6"><div className="progress-bar" style={{"width":porcentajeSubidoPdf+"%"}}>{porcentajeSubidoPdf}</div>
            </div><div className="form-group row">
                          <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary" onClick={cancelUploadPdf}>Cancelar</button>                         
                          </div>
                        </div></React.Fragment>}</div>                                 
        </div>

        

        

        
        {urlPdf !== null && <div className="form-group row">
                          <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-info" onClick={previsualizarPdf}>{prevPdf ?  "Ocultar pdf" : "Previsualizar PDF"}</button>                         
                          </div>
              </div>} 
              {prevPdf === true &&
        <div className="form-group row">
        <div className="col-md-12">
        <object data={urlPdf} type="application/pdf" width="100%" height="100%">
              <p>Alternative text - include a link <a href={urlPdf}>to the PDF!</a></p>
            </object>
          </div>
          </div>  }
                                                                 
                  </div>
                  </div>
                  <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary mr-1" onClick={botonGuardar}>Guardar</button>
                            <button type="button" className="btn btn-danger" onClick={ocultarFormEdicDoc}>Cancelar</button>
                                                     
                          </div>
                          {datos.error === true &&
             <div className="alert alert-danger" role="alert">
               {datos.errorMsg}
             </div>
           }
                </div>
                </div>
                  </form>}
                
                  
            </React.Fragment>  );
}
 
export default EditarDoc;