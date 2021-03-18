import React, {useState, useRef, useContext} from 'react';
import axios, {CancelToken, isCancel} from "axios";
import CursosContext from "../../context/cursos/cursosContext";


const SubTemaCurso = ({idTema, btnSubTemaOcultarForm, maxFileUpload}) => {
    const cursosContext =  useContext(CursosContext);
    const { guardarSubTemaCurso } = cursosContext;

    const [urlPdf, setUrlPdf] = useState(null);
    const [prevPdf, setPrevPdf] = useState(false);
    
    const [urlVideo, setUrlVideo] = useState(null);
    const [porcentajeSubidoVideo, setporcentajeSubidoVideo] = useState(0);  
    const [porcentajeSubidoPdf, setporcentajeSubidoPdf] = useState(0);
    
    const [radioVideo, setRadioVideo] = useState(null);
    const [prevVideo, setPrevVideo] = useState(false);

    const cancelSubirVideo = useRef(null);
    const cancelSubirPdf = useRef(null);

    const [datos, setDatos] = useState({        
        subTema:"",
        id:0,        
        error: false,
        errorMsg: "",
        tema: {
          subTema: "",
          agregarVideo: "",
          tituloVideo: "",
          urlPdf: "",
          tituloDocumento: "",
          idTema: idTema,
          duracion: ""
        }       
    });

    const previsualizarPdf =  e =>{
        setPrevPdf(!prevPdf);
    }
     
    const previsualizarVideo =  e =>{
      setPrevVideo(!prevVideo);
    }

    const   manejadorSubmit = e =>{
      e.preventDefault();   
    }

    const uploadVideo = ({target: { files }}) =>{
        console.log(files[0]);
        const formData = new FormData();  
        // Update the formData object
        formData.append(      "video",files[0]    ); 
        const options = {
          onUploadProgress:   (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total )
            console.log(`${loaded}kb of ${total}kb | percent ${percent}`)
            if(percent < 100){
              setporcentajeSubidoVideo(percent)
            }
          },
          cancelToken: new CancelToken( cancel => cancelSubirVideo.current = cancel )
        };
        axios.post(process.env.REACT_APP_BACKEND_URL+'video',formData, options)
        .then(res =>{
          console.log(res);
          setporcentajeSubidoVideo(100)
          setTimeout(setporcentajeSubidoVideo(0) ,2000)
          console.log(res.data);
          setUrlVideo(res.data.path);
          setDatos({
            ...datos, 
                tema: {
                  ...datos.tema,
                  'url': res.data.path,
                  'duracion': res.data.Duration,
                  'formatoHerramienta': files[0].type
                }    })
          console.log(urlVideo);      
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
          setporcentajeSubidoVideo(0);
        })
      }

      const cancelUploadVideo = ()=> {
        console.log("Cancelando subida video");
        if( cancelSubirVideo.current)
          cancelSubirVideo.current(" Usuario ha cancelado la subida del video");
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
        axios.post(process.env.REACT_APP_BACKEND_URL+'pdf',formData, options).then(res =>{
          console.log(res);
          setporcentajeSubidoPdf(100)
          setTimeout(setporcentajeSubidoPdf(0) ,2000)
          console.log(res.data);
          setUrlPdf(res.data.path);      
          setDatos({
              ...datos, 
                  tema: {
                    ...datos.tema,
                    'urlPdf': res.data.path
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
        if(datos.tema.subTema.trim()!==""){
          if(datos.tema.agregarVideo.trim()!== ""){
            if(datos.tema.url!== ""){
              if(datos.tema.tituloVideo!== ""){
                if(datos.tema.urlPdf!== ""){
                  if(datos.tema.tituloDocumento!== ""){                    
                    setDatos({
                      ...datos, 
                      error: false,
                      errorMsg: ""})
                      //idTema                      
                      setDatos({
                        ...datos, 
                            tema: {
                              ...datos.tema,
                              'idTema': idTema
                            }    })
                            console.log(datos);
                            console.log("informacion agregada correctamente");
                            btnSubTemaOcultarForm();
                            guardarSubTemaCurso(datos.tema);
              }else{
              setDatos({
                ...datos, 
                error: true,
                errorMsg: "No se ha agregado un título para el documento"})    
              }
            } else{              
              setDatos({
                ...datos, 
                error: false,
                errorMsg: ""})
                //idTema                      
                setDatos({
                  ...datos, 
                      tema: {
                        ...datos.tema,
                        'idTema': idTema
                      }    })
                      console.log(datos);
                      console.log("informacion agregada correctamente");
                      guardarSubTemaCurso(datos.tema);
                      btnSubTemaOcultarForm();
              }
          }else{
                setDatos({
                  ...datos, 
                  error: true,
                  errorMsg: "No se ha agregado un título para el video"})    
              }               
            }else{
              setDatos({
                ...datos, 
                error: true,
                errorMsg: "No se ha agregado el video o la url"})    
            }  
    
          }else{
            setDatos({
              ...datos, 
              error: true,
              errorMsg: "No se ha seleccionado, subir video o agregar url"})
      
          }       
           
        }else{
          setDatos({
            ...datos, 
            error: true,
            errorMsg: " Campo nombre vacio"})
    
            console.log("verda");
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

  const manejadorChangeRadio =  e =>{
    setRadioVideo(e.target.value);     
    setDatos({
      ...datos, 
          tema: {
            ...datos.tema,
            [e.target.name]: e.target.value,
            url: ""
          }    })
}

    return ( <React.Fragment>
        
        <form className="form-horizontal card2" onSubmit={manejadorSubmit}>
            <div className="row card-body">
                <hr/>
            <div className="col-lg-12 mb-5"><h5>Agregar tema</h5></div>
                <div className="col-lg-12 mb-5">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Nombre del Tema</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="subTema" onChange={ manejadorChange} />                            
                    </div>
                   </div> 
                   <div className="form-group row">
                    <label className="col-md-3 form-control-label">Titulo del video</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="tituloVideo" onChange={ manejadorChange} />                            
                    </div>
                   </div>
        <div className="form-group row">
                        <label className="col-md-3 form-control-label">Agregar Video</label>
                        <div className="col-md-9">
                          
                          <div className="custom-control custom-radio custom-control-inline" onChange={manejadorChangeRadio}>
                            <input id="customRadioInline1" type="radio" name="agregarVideo" className="custom-control-input" value="agregarVideo"/>
                            <label htmlFor="customRadioInline1" className="custom-control-label">Subir video</label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline" onChange={manejadorChangeRadio}>
                            <input id="customRadioInline2" type="radio" name="agregarVideo" className="custom-control-input" value="agregarUrl"/>
                            <label htmlFor="customRadioInline2" className="custom-control-label">Agregar url </label>
                          </div>
                        </div>
        </div>

        {radioVideo === "agregarVideo" &&
        <div className="form-group row">
            <label className="col-md-3 form-control-label">Subir video</label>
            <div className="col-md-9">
                           
            <input type="file" name="video" accept="video/mp4,video/ogg,video/webm" onChange={uploadVideo} onClick={e => (e.target.value = null)} />           
            {porcentajeSubidoVideo > 0 &&<React.Fragment><div className="row"><div className="progress col-md-6"><div className="progress-bar" style={{"width":porcentajeSubidoVideo+"%"}}>{porcentajeSubidoVideo}</div>
            </div>
                          <div className="col-md-3 ">
                            <span  className="text-primary cursor-pointer" style={{"cursor":"pointer"}}onClick={cancelUploadVideo}>Cancelar</span>                         
                          </div></div>
                          </React.Fragment>}
            </div> 
            <label className="col-md-3 form-control-label"></label>
                        <div className="col-md-9"><span> Maximo tamaño de archivo permitido {maxFileUpload} MB</span></div>           
        </div>}

        {radioVideo === "agregarUrl" &&
        <div className="form-group row">
            <label className="col-md-3 form-control-label">Agregar url de video</label>
            <div className="col-md-9">
            <input type="text" className="form-control" name="url" onChange={manejadorChange} />                            
            </div>
        </div> }

        {urlVideo !== null && <div className="form-group row">
                          <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-info" onClick={previsualizarVideo}>{prevVideo ?  "Ocultar Video" : "Previsualizar Video"}</button>                         
                          </div>
              </div>}
              {prevVideo  === true && <div className="form-group row">
            <div className="col-md-12">
              <div className="embed-responsive embed-responsive-16by9">
              <video src={urlVideo} controls>
              Tu navegador no admite el elemento <code>video</code>.
          </video>   
          </div>         
            </div>
        </div>}

        <div className="form-group row">
                    <label className="col-md-3 form-control-label">Titulo del documento</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="tituloDocumento" onChange={ manejadorChange} />                            
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
                        <label className="col-md-3 form-control-label"></label>
                        <div className="col-md-9"><span> Maximo tamaño de archivo permitido {maxFileUpload} MB</span></div>                               
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
                            <button type="button" className="btn btn-danger" onClick={btnSubTemaOcultarForm}>Cancelar</button>                            
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
 
export default SubTemaCurso;