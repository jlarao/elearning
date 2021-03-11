import React, { useEffect, useState, useContext } from 'react';
import AlertaContext from '../../context/alerta/alertaContext';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDatosInstructor, limpiarMensaje } from "../../actions/instructorActions";
import FormDatosPersonales from "./formDatosPersonales";
import FormDatosInstructor from "./formDatosInstructor";
import Modal from "../functions/function";

const EditarDatosPersonalesInstructor = (props) => {
    const dispatch = useDispatch();
    const instructor = useSelector( state => state.instructor.instructor);
    const loading = useSelector( state => state.instructor.loading);
    const mensaje = useSelector ( state => state.instructor.mensaje);
    const expositor = useSelector ( state => state.instructor.expositor);
    const obtenerDatosInstructorForm = e => dispatch( obtenerDatosInstructor(e));
    const limpiarMensajeForm = e => dispatch( limpiarMensaje());
    useEffect( () =>{
      console.log(props.match.params.id);
      
      if(mensaje){
        tratarMensajes(mensaje);        
      }else {
        if(instructor===null){
          obtenerDatosInstructorForm(props.match.params.id);
        }
      }
    }, [mensaje] )

    const tratarMensajes=(m)=>{
      Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
      setTimeout( ()=>{ limpiarMensajeForm() } ,5000 );
    }

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta}  = alertaContext;    

if(loading){
  return (<p>Cargando...</p>);
  //console.log("datos"); 
}
if(instructor===null){
  return (<p>Cargando...</p>);
}

    return (
      <div className="page-holder w-100 d-flex flex-wrap">
    <div className="container-fluid px-xl-5">
        <FormDatosPersonales instructor={instructor}  />
        <FormDatosInstructor expositor ={expositor} idUsuario={instructor.idUsuario}/>
        {alerta ? (<div className="alert alert-warning" role="alert">
               {alerta.msg}
             </div>) : null
           }
      </div>
      </div>
     );
}
 
export default EditarDatosPersonalesInstructor;