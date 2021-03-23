import React, {useEffect, useContext, useState, useRef } from 'react';
import axios, {CancelToken, isCancel} from "axios";
import AlertaContext from "../../../context/alerta/alertaContext";
import CursosContext from "../../../context/cursos/cursosContext";
import PreLoader from "../../../components/cursos/curso/course";
import CategoriaAgregar from './categoriaAgregar';
import CategoriaEditarForm from './categoriaEditarForm';
import { useDispatch, useSelector } from "react-redux";
import {  eliminarDatosCategoria, limpiarMensajeAdicional } from "../../../actions/adicionalActions";
import Modal from "../../functions/function";
const CategoriaEditar = ({categorias}) => {

  const dispatch = useDispatch();
  const editarDatosCategoriaGuardar = e => dispatch( eliminarDatosCategoria(e));
  const limpiarMensaje = e => dispatch(limpiarMensajeAdicional());
  const mensaje = useSelector( state => state.adicional.mensaje);

  const alertaContext = useContext(AlertaContext);
  const { alerta } = alertaContext;
  const cursosContext = useContext(CursosContext);
  const { editarCurso  } = cursosContext;
  
  const [datos, setDatos] = useState({
    curso:  {
      idCurso:""     
      },
    error: false,
    errorMsg: ""       
});
const [categoriaForm, setcategoriaForm] = useState(false);
const [categoriaEditarFormVar, setcategoriaEditarFormVar] = useState(0);
const { curso } = datos;
const { nombreCurso,  } = curso;

  if(!!(nombreCurso))
    <PreLoader />
    useEffect(() => {               
      if(mensaje){
       
        console.log(mensaje);
        tratarMensajes(mensaje); 
               
      }              
  }, [mensaje])

  const tratarMensajes=()=>{
    
    Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
    setTimeout( ()=>{ limpiarMensaje() } ,5000 );
  }
const   manejadorSubmit = e =>{    
  e.preventDefault();    
  if(datos.curso.nombreCurso.trim()!==""){
    if(datos.curso.descripcion.trim()!==""){ 
      if(datos.curso.requisitos.trim()!==""){
        if(datos.curso.que_aprenderas.trim()!==""){
    if(datos.curso.idCategoria.trim()!==""){
      if(datos.curso.poster.trim()!==""){                                  
            
            const du = datos.curso.horas + ":"+ datos.curso.minutos +":"+ datos.curso.segundos;
            console.log(du);
            
           
              setDatos({
                ...datos,
                    curso: {
                      ...datos.curso,
                      'duracion': datos.curso.horas + ":"+ datos.curso.minutos +":"+ datos.curso.segundos        
                }})
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

      

  const  manejadorChange =  async e => {           
    setDatos({
      ...datos,
          curso: {
            ...datos.curso,
            [e.target.name]: e.target.value        
      }})
  console.log(categorias);
}
useEffect( () => {    
      
}, []); 

const btnCategoriaForm = e =>{
  setcategoriaForm(e);
}
const btnEditarCategoria = e =>{
  setcategoriaEditarFormVar(e);
}
const btnEliminarCategoria = e =>{
  setcategoriaForm(e);
}
const ocultarFormEdicCategoria = () =>{
  setcategoriaEditarFormVar(0);
}

 if(categorias===null) return <p>Loading</p>
    return ( 
        <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Editar  </h3></div>  
                  
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
                    <div className="col-lg-9" >
                    <a className="collapsed card-link d-flex" data-toggle="collapse" href="#collapseOneE">
                      Editar Categorias
                      <i className="fas fa-angle-down rotate-icon ml-auto"></i>
                      </a></div>
                      
                      </div>
                    </div>
                    <div id="collapseOneE" className="collapse " data-parent="#accordionE">
                    <div className="card-body">
                      <div className="row">
                    <div className="col-lg-9">
                      <p></p> </div>
                      <div className="col-lg-3"><button type="button" className="btn btn-primary" onClick={()=>{btnCategoriaForm(true)}}>Agregar categoria</button></div>                 
                      </div>
                    <div className="card2">
                    <div className="card-body">
                    { categorias.map(c => (<React.Fragment>
                      <p className="card-text">{c.nombreCategoria}                      
                      <button  className="btn btn-success ml-2 float-right" title="Editar Video" onClick= {()=>{btnEditarCategoria(`editarForm${c.idCategoria}`)}}><i className="fa fa-pencil-alt ml-auto"></i></button>
            <button  className="btn btn-danger float-right" title="Eliminar Video" onClick= {()=>{editarDatosCategoriaGuardar(c.idCategoria)}}><i className="fas fa-trash ml-auto"></i></button>
            </p>            
            </React.Fragment>
            )
                )}
                { categorias.map(c => (<React.Fragment>
                {  categoriaEditarFormVar === `editarForm${c.idCategoria}`  ? <CategoriaEditarForm  ocultarFormEdicCategoria={ocultarFormEdicCategoria} categoria={c}/> : null }
                </React.Fragment>
                )
                )}

                    { categoriaForm === true && <CategoriaAgregar btnCategoriaForm={btnCategoriaForm}/>} 
                    
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
 
export default CategoriaEditar;