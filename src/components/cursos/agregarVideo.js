import React, {useRef, useState, useContext} from 'react';
import axios, {CancelToken, isCancel} from "axios";
import CursosContext from "../../context/cursos/cursosContext";

const AgregarVideo = ({ocultarFormEdicVideo, herramienta}) => {
  const cursosContext =  useContext(CursosContext);
  const { edicionHerramientaCurso } = cursosContext;
    const cancelSubirVideo = useRef(null);    
    const [urlVideo, setUrlVideo] = useState(null);
    const [porcentajeSubidoVideo, setporcentajeSubidoVideo] = useState(0);  
    const [radioVideo, setRadioVideo] = useState(null);
    const [prevVideo, setPrevVideo] = useState(false);
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

    const { tema} = datos;
    const {nombreHerramienta } = tema;

    const   manejadorSubmit = e =>{
        e.preventDefault();   
      }
      const previsualizarVideo =  e =>{
        setPrevVideo(!prevVideo);
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
        axios.post('http://localhost:81/rest/api/video',formData, options)
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
                  'urlHerramienta': res.data.path
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
      const botonGuardar =  e =>{
        console.log("guardar");
        console.log(datos);
        
        e.preventDefault();
        
          if(datos.tema.nombreHerramienta.trim()!== ""){
            if(datos.tema.urlHerramienta!== ""){
              if(datos.tema.agregarVideo!== ""){
                setDatos({
                  ...datos, 
                  error: false,
                  errorMsg: ""})
                  edicionHerramientaCurso(datos.tema);
                  ocultarFormEdicVideo(); 
               console.log(datos.tema)
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
                errorMsg: "No se ha agregado el video o la url"})    
            }  
    
          }else{
            setDatos({
              ...datos, 
              error: true,
              errorMsg: "No se ha agregado un título para el video"})
      
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
        {true === true &&
        <form className="form-horizontal card2" onSubmit={manejadorSubmit}>
            <div className="row card-body">
                <hr/>
            <div className="col-lg-12 mb-5"><h5>Editar video</h5></div>
                <div className="col-lg-12 mb-5">
                   
                   <div className="form-group row">
                    <label className="col-md-3 form-control-label">Titulo del video</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="nombreHerramienta" onChange={ manejadorChange} value={nombreHerramienta}/>                            
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
                           
            <input type="file" name="video" accept="video/mp4,video/x-m4v,video/*" onChange={uploadVideo} onClick={e => (e.target.value = null)} />           
            {porcentajeSubidoVideo > 0 &&<React.Fragment><div className="row"><div className="progress col-md-6"><div className="progress-bar" style={{"width":porcentajeSubidoVideo+"%"}}>{porcentajeSubidoVideo}</div>
            </div>
                          <div className="col-md-3 ">
                            <span  className="text-primary cursor-pointer" style={{"cursor":"pointer"}}onClick={cancelUploadVideo}>Cancelar</span>                         
                          </div></div>
                          </React.Fragment>}
            </div>            
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
              {prevVideo  == true && <div className="form-group row">
            <div className="col-md-12">
              <div className="embed-responsive embed-responsive-16by9">
              <video src={urlVideo} controls>
              Tu navegador no admite el elemento <code>video</code>.
          </video>   
          </div>         
            </div>
        </div>}
                                                                 
                  </div>
                  </div>
                  <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary mr-1" onClick={botonGuardar}>Guardar</button>
                            <button type="button" className="btn btn-danger" onClick={ocultarFormEdicVideo}>Cancelar</button>
                                                     
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
 
export default AgregarVideo;