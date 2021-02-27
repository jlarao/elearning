import React, {useEffect, useContext, useState, useRef } from 'react';
import axios, {CancelToken, isCancel} from "axios";
import AlertaContext from "../../context/alerta/alertaContext";
import CursosContext from "../../context/cursos/cursosContext";
import PreLoader from "../../components/cursos/curso/course";
const CursoContenidoEditar = ({nombreC, id, idC, pos, desc, req, que_}) => {
  const alertaContext = useContext(AlertaContext);
  const { alerta } = alertaContext;
  const cursosContext = useContext(CursosContext);
  const { editarCurso  } = cursosContext;
  console.log(id);
  if(id===null)
    <PreLoader />
  const [datos, setDatos] = useState({
    curso:  {
      idCurso: id,
      nombreCurso: nombreC,
      idCategoria: idC,
      categoria: "",
      poster: pos,
      descripcion: desc,
      requisitos: req,
      que_aprenderas: que_
      },
    error: false,
    errorMsg: ""       
});

const { curso } = datos;
const { nombreCurso, idCategoria,
  poster,
  descripcion,
  requisitos,
  que_aprenderas } = curso;
const [urlImagen, setUrlImagen] = useState(null);
const [categorias, setCategorias] = useState([]);
const [porcentajeSubidoImagen, setporcentajeSubidoImagen] = useState(0);
const cancelSubirPoster = useRef(null);  
const   manejadorSubmit = e =>{    
  e.preventDefault();    
  if(datos.curso.nombreCurso.trim()!==""){
    if(datos.curso.descripcion.trim()!==""){ 
      if(datos.curso.requisitos.trim()!==""){
        if(datos.curso.que_aprenderas.trim()!==""){
    if(datos.curso.idCategoria.trim()!==""){
      if(datos.curso.poster.trim()!==""){                                  
            console.log(datos);                            
            editarCurso(datos.curso);
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
    }
    else{
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
          errorMsg: " Favor de llenar el campo ¿Qué aprenderas?"
        })
        console.log("verda");
  }
  }  
  else{
    setDatos({
      ...datos,
          error: true,
          errorMsg: " Favor de llenar el campo requisitos"
        })
        console.log("verda");
  }
  }else{
    setDatos({
      ...datos,
          error: true,
          errorMsg: " Favor de llenar el campo descripcion"
        })
        console.log("verda");
       
  }             
  } else{
    setDatos({
      ...datos,
          error: true,
          errorMsg: " Favor de llenar el campo nombre"
        })
        console.log("verda");
  }        
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
  axios.post('http://localhost:81/rest/api/imagen',formData, options).then(res =>{
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
  const  manejadorChange =  async e => {           
    setDatos({
      ...datos,
          curso: {
            ...datos.curso,
            [e.target.name]: e.target.value        
      }})
    //console.log(state);
}
useEffect( () => {    
  consultarAPI();    
}, []); 

const consultarAPI =async  () => {    
  const api = await fetch('http://localhost:81/rest/api/categorias?page=0');
  const frase = await api.json()
  setCategorias(frase);            
} 
    return ( 
        <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Editar Contenido Curso - {nombreCurso} - </h3></div>                   
                </div>
              </div>
              <div className="card-body">
                <p></p>
              <div className="card2">
              <div className="card-body">                

                <div className="row">
                  <div className="col-lg-12 ">
                <div id="accordionE">
                  <div className="card">
                    <div className="card-header">
                    <div className="row">
                    <div className="col-lg-11" >
                    <a className="collapsed card-link d-flex" data-toggle="collapse" href="#collapseOneE">
                      Editar Curso - Contenido
                      <i className="fas fa-angle-down rotate-icon ml-auto"></i>
                      </a></div>
                      </div>
                    </div>
                    <div id="collapseOneE" className="collapse " data-parent="#accordionE">
                    <div className="card-body">
                      <p>Favor de capturar la información que se solicita.</p>
                    <div className="card2">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={manejadorSubmit} >
                      <div className="form-group row">
                          <label className="col-md-3 form-control-label">Nombre</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" name="nombreCurso" onChange={manejadorChange} value={nombreCurso} />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Descripción</label>
                          <div className="col-md-9">
                            <textarea className="form-control" name="descripcion" onChange={manejadorChange} value= {descripcion} rows="3"></textarea>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Requisitos</label>
                          <div className="col-md-9">
                            <textarea className="form-control" name="requisitos" onChange={manejadorChange} value= {requisitos} rows="3"></textarea>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">¿Qué aprenderas?</label>
                          <div className="col-md-9">
                            <textarea className="form-control" name="que_aprenderas" onChange={manejadorChange} value= {que_aprenderas} rows="3"></textarea>
                          </div>
                        </div>


  
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label">Categoria</label>
                          <div className="col-md-9 select mb-3">
                            <select name="idCategoria" className="form-control" onChange={manejadorChange} value={idCategoria}>
                              <option>Seleccione una opción</option>
                              {categorias.map(c=>(
                              <option key={c.idCategoria} value={c.idCategoria}>{c.nombreCategoria}</option>))
                          }
                            </select>
                          </div>                      
                        </div>
  
                        <div className="form-group row">
                          <label className="col-md-3 form-control-label"></label>
                          <div className="col-md-9">
                            <img src={poster} className="img-fluid" name="imagen" />
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
                            <input type="submit" value="Guardar" className="btn btn-primary" />                          
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
                  </div>
                </div>                                                                                                
                
              </div>
            </div>

    </div>
            </div>
     );
}
 
export default CursoContenidoEditar;