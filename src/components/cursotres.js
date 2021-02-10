import React,{useState, useEffect, useRef} from 'react';
import axios, {CancelToken, isCancel} from "axios";

  const  CursoPasoTres = ({setDatosCurso, datosCurso}) =>{   
  const [numAcordeon,setNumAcordeon] = useState(1);
  const [video, setVideo] = useState(null);
  const [urlVideo, setUrlVideo] = useState(null);
  const [urlPdf, setUrlPdf] = useState(null);
  const [prevPdf, setPrevPdf] = useState(false);
  const [prevVideo, setPrevVideo] = useState(false);
  const [porcentajeSubidoVideo, setporcentajeSubidoVideo] = useState(0);  
  const [porcentajeSubidoPdf, setporcentajeSubidoPdf] = useState(0);
  const [pdf, setPdf] = useState(null);
  const [radioVideo, setRadioVideo] = useState(null);
  const [datos, setDatos] = useState({
    tema:{ nombre:"", agregarVideo:"", url:"", urlPdf:""},
    error: false,
    errorMsg: ""      
    });

  const cancelSubirVideo = useRef(null);
  const cancelSubirPdf = useRef(null);

  const  manejadorChange =  async e => {      
        setDatos({
          ...datos, 
              tema: {
                ...datos.tema,
                [e.target.name]: e.target.value
              }    })       
      /*  setDatosCurso({
                  ...datosCurso, 
                  seccion: {
                        ...datosCurso.seccion,
                        temas: { ...datosCurso.seccion.temas, 
                          [e.target.name]: e.target.value
                        } } } )*/
        //console.log(state);
    }

  const   manejadorSubmit = e =>{
    e.preventDefault();   
  }
  
  useEffect( () => {
    //consultarAPI()
    console.log(datosCurso);
    console.log(porcentajeSubidoVideo);
    console.log(porcentajeSubidoPdf);
  }, []);   
              
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
              'url': res.data.path
            }    })
      console.log(urlVideo);      
    })
    .catch(err =>{
      console.log(err);
      if(isCancel(err)){
        setDatos({
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
                'urlPdf': res.data.path
              }    })
      console.log(urlPdf);
    })
    .catch(err =>{
      console.log(err);
      if(isCancel(err)){
        setDatos({
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

  const manejadorChangeRadio =  e =>{
      setRadioVideo(e.target.value);     
      setDatos({
        ...datos, 
            tema: {
              ...datos.tema,
              [e.target.name]: e.target.value
            }    })
  }
  const previsualizarPdf =  e =>{
    setPrevPdf(!prevPdf);
}
 
const previsualizarVideo =  e =>{
  setPrevVideo(!prevVideo);
}
 const botonGuardar =  e =>{
    console.log("guardar");
    console.log(datos);
    console.log(datosCurso);
    e.preventDefault();
    if(datos.tema.nombre.trim()!==""){
      if(datos.tema.agregarVideo.trim()!== ""){
        if(datos.tema.url!== ""){
          console.log("informacion agregada correctamente");
          setDatos({
            ...datos, 
            error: false,
            errorMsg: ""})
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
          errorMsg: "No se ha seleccionado subir video o agregar url"})
  
      }       
       
    }else{
      setDatos({
        ...datos, 
        error: true,
        errorMsg: " Campo nombre vacio"})

        console.log("verda");
    } 
}

    const accordeon=[];
    let seccion = datosCurso.curso.secciones;
    
    for (var i = 0; i < seccion.length; i += 1) {
        accordeon.push(
    <div className="card" key={i}>
    <div className="card-header">
      <a className="collapsed card-link" data-toggle="collapse" href="#collapseOne">
        Sección {seccion[i].nombre}
      </a>
    </div>
    <div id="collapseOne" className="collapse show" data-parent="#accordion">
      <div className="card-body">
      <div className="form-group row">
            <label className="col-md-3 form-control-label">Nombre del Tema</label>
            <div className="col-md-9">
            <input type="text" className="form-control" name="nombre" onChange={ manejadorChange} />                            
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
            <input type="file" name="video" accept="video/mp4,video/x-m4v,video/*" onChange={uploadVideo}/>           
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
  </div>
  );
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
                      <h3 className="h6 text-uppercase mb-0">Alta de Curso {datosCurso.curso.nombre}- paso 3 -</h3>
                    </div>
                    <div className="card-body">
                      <p>Agregar Secciones del curso</p>
                    <div className="card2">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={manejadorSubmit} >
                      <div className="row">
                <div className="col-lg-12 mb-5">
                <div id="accordion">
                        {accordeon}
                    </div>
                </div>
              </div>                                                     
                      </form>

                      <div className="row">
                <div className="col-lg-12 mb-5">
                <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary" onClick={botonGuardar}>Guardar</button>                         
                          </div>
                </div>
                </div>
                      {datos.error === true &&
                   <div className="alert alert-danger" role="alert">
                     {datos.errorMsg}
                   </div>
                 }
                    </div>
                  </div>
  
          </div>
                  </div>
                </div> 
                </div>

                
            </section>
            </div>
            </div>
         )

}
export default CursoPasoTres;