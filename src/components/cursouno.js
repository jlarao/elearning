import React,{useState, useEffect, useRef, useContext} from 'react';
import axios, {CancelToken, isCancel} from "axios";
import AlertaContext from "../context/alerta/alertaContext";
import CursosContext from "../context/cursos/cursosContext"
import AuthContext from '../context/authentication/authContext';
const  CursoPasoUno = (props) =>{  
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;
  const cursosContext =  useContext(CursosContext);
  const { redirect, mensaje ,agregarCurso } = cursosContext;
  const authContext = useContext(AuthContext);
  //const { mensaje } = authContext;

const [porcentajeSubidoImagen, setporcentajeSubidoImagen] = useState(0);
const cancelSubirPoster = useRef(null);  
const [datos, setDatos] = useState({
    curso:  {
      nombre:"",
      categoria:"",
      poster:"",
      },
    error: false,
    errorMsg: ""       
});

const [urlImagen, setUrlImagen] = useState(null);
const [categorias, setCategorias] = useState([]);  

useEffect(()=> {  
  if(mensaje){
    console.log("mostrar mensaje");
    mostrarAlerta(mensaje.msg, mensaje.categoria);
  }
  if(redirect){
    //props.history.push("/dashboard");
    console.log(redirect);
    //props.history.push(redirect);
    props.history.push("/curso-detalles/15");
  }
}, [mensaje,redirect, props.history])

  const  manejadorChange =  async e => {           
        setDatos({
          ...datos,
              curso: {
                ...datos.curso,
                [e.target.name]: e.target.value        
          }})
        //console.log(state);
    }

  const   manejadorSubmit = e =>{    
    e.preventDefault();    
    if(datos.curso.nombre.trim()!==""){
      if(datos.curso.categoria.trim()!==""){
        if(datos.curso.poster.trim()!==""){                                  
              console.log(datos);                            
              agregarCurso(datos.curso);
              setDatos({
                ...datos,
                    error: false,
                    errorMsg: ""
                  })
        }else{
          setDatos({
            ...datos,
                error: true,
                errorMsg: " Favor de seleccionar una imagen de portada"
              })
              console.log("verda");
        }        
      }else{
        setDatos({
          ...datos,
              error: true,
              errorMsg: " Favor de seleccionar una categoria"
            })
            console.log("verda");
      }                
    }else{
      setDatos({
        ...datos,
            error: true,
            errorMsg: " Favor de llenar el campo nombre"
          })
          console.log("verda");
    }        
  }

  useEffect( () => {    
    consultarAPI();    
  }, []); 
  
  const consultarAPI =async  () => {    
    const api = await fetch(process.env.REACT_APP_BACKEND_URL+'categorias?page=0');
    const frase = await api.json()
    setCategorias(frase);            
  }  

  const uploadPoster = ({target: { files }}) =>{
    console.log(files[0]);
    const formData = new FormData();  
    // Update the formData object
    formData.append(      "imagen",files[0]    ); 
    const options = {
      onUploadProgress:   (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total )
        console.log(`${loaded}kb of ${total}kb | percent ${percent}`)
        if(percent < 100){
          setporcentajeSubidoImagen(percent)
        }
      },
      cancelToken: new CancelToken( cancel => cancelSubirPoster.current = cancel )
    };
    axios.post(process.env.REACT_APP_BACKEND_URL+'imagen',formData, options).then(res =>{
      //console.log(res);
      setporcentajeSubidoImagen(100)
      setTimeout(setporcentajeSubidoImagen(0) ,2000)
      console.log(res.data);
      setUrlImagen(res.data.path);      
      setDatos({
        ...datos,
            curso: {
              ...datos.curso,
              'poster': res.data.path        
        }})
             
      console.log(urlImagen);
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
      setporcentajeSubidoImagen(0);
    })
  }
        
  const cancelUploadPoster = ()=> {
    console.log("Cancelando subida de pdf");
    if( cancelSubirPoster.current)
      cancelSubirPoster.current(" Usuario ha cancelado la subida de la imagens");
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
                      <h3 className="h6 text-uppercase mb-0">Alta de Curso -</h3>
                    </div>
                    <div className="card-body">
                      <p>Favor de capturar la información que se solicita.</p>
                    <div className="card2">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={manejadorSubmit} >
                      <div className="form-group row">
                          <label className="col-md-3 form-control-label">Nombre</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="nombre" onChange={manejadorChange} />
                          </div>
                        </div>
  
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Categoria</label>
                          <div className="col-md-9 select mb-3">
                            <select name="categoria" className="form-control" onChange={manejadorChange}>
                              <option>Seleccione una opción</option>
                              {categorias.map(c=>(
                              <option key={c.idCategoria} value={c.idCategoria}>{c.nombreCategoria}</option>))
                          }
                            </select>
                          </div>                      
                        </div>
  
  
                        <div className="form-group row">
            <label className="col-md-3 form-control-label">Subir imagen de portada</label>
            <div className="col-md-9">
            <input type="file" name="poster" accept="image/x-png,image/gif,image/jpeg" onChange={uploadPoster}/>
            {porcentajeSubidoImagen > 0 &&<React.Fragment> <div className="progress col-md-6"><div className="progress-bar" style={{"width":porcentajeSubidoImagen+"%"}}>{porcentajeSubidoImagen}</div>
            </div><div className="form-group row">
                          <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary" onClick={cancelUploadPoster}>Cancelar</button>                         
                          </div>
                        </div></React.Fragment>}</div>                                 
        </div> 

                        <div className="form-group row">
                          <div className="col-md-9 ml-auto">
                            <input type="submit" value="Continuar" className="btn btn-primary" />                          
                          </div>
                        </div>                   
                                           
                      </form>
                      {datos.error === true &&
                   <div className="alert alert-danger" role="alert">
                     {datos.errorMsg}
                   </div>
                 }  {alerta ? <div className={`alert alert-${alerta.categoria}`} role ="alert">{alerta.msg}</div> : null}
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
export default CursoPasoUno;