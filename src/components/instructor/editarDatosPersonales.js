import React, { useEffect, useState, useContext } from 'react';
import AlertaContext from '../../context/alerta/alertaContext';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDatosInstructor, limpiarMensaje } from "../../actions/instructorActions";
import FormDatosPersonales from "./formDatosPersonales";
import Modal from "../functions/function";

const EditarDatosPersonalesInstructor = (props) => {
    const dispatch = useDispatch();
    const instructor = useSelector( state => state.instructor.instructor);
    const loading = useSelector( state => state.instructor.loading);
    const mensaje = useSelector ( state => state.instructor.mensaje);
    const obtenerDatosInstructorForm = e => dispatch( obtenerDatosInstructor(e));
    const limpiarMensajeForm = e => dispatch( limpiarMensaje());
    useEffect( () =>{
      console.log(props.match.params.id);
      obtenerDatosInstructorForm(props.match.params.id);
      if(mensaje){
        tratarMensajes(mensaje);
      }
    }, [mensaje] )

    const tratarMensajes=(m)=>{
      Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
      //setTimeout( ()=>{ limpiarMensajeForm() } ,5000 );
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
      <React.Fragment>
        <FormDatosPersonales instructor={instructor} />
        {alerta ? (<div className="alert alert-warning" role="alert">
               {alerta.msg}
             </div>) : null
           }
      </React.Fragment> 
        
     );
}
 
export default EditarDatosPersonalesInstructor;