import React,{useState, useEffect,  useContext} from 'react';
import AlertaContext from "../../../context/alerta/alertaContext";
import CursosContext from "../../../context/cursos/cursosContext";
import SubTemaCurso from '../subTemaCurso';
import ListadoSubTema from "../listadoSubTema";
import TemaCursoEditar from "../temaCursoEditar";
import Preloader from "../curso/preloader";
import Modal from "../../functions/function";
import CategoriaEditar from './categoriaEditar';
import { useDispatch, useSelector } from "react-redux";
import {  obtenerCategorias } from "../../../actions/adicionalActions";

const  Categorias = (props) =>{   
  const dispatch = useDispatch();
  const categorias = useSelector( state => state.adicional.categorias);
  const obtenerCategoriasDatos = e => dispatch( obtenerCategorias());

  const cursosContext =  useContext(CursosContext);
  const {    cargando,   mensaje,  formTemaCurso ,   
     mostrarFormTemaCurso,
       limpiarMensaje} = cursosContext;
  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta}  = alertaContext;
  

    
           

    useEffect(() => {
        
       
        if(mensaje){
          mostrarAlerta(mensaje.msg, mensaje.categoria);
          console.log(mensaje);
          tratarMensajes(mensaje);                    
        }
        obtenerCategoriasDatos();
        
    }, [mensaje])

    const tratarMensajes=()=>{
      Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
      setTimeout( ()=>{ limpiarMensaje() } ,5000 );
    }
    
    
    if(cargando){
    return (
        <Preloader />
    );
    }

    

    
   
    
    
    
   
            
    

  const btnTemaCursoAgregar = ()=>{   
    console.log(formTemaCurso);
    mostrarFormTemaCurso(true);
  }

  
    return ( <div className="page-holder w-100 d-flex flex-wrap">
    <div className="container-fluid px-xl-5">
      <section className="pt-5">
        <div className="row">
        <div className="col-lg-12 mb-2">
              <CategoriaEditar categorias={categorias}/>
               

          </div>
        </div>
        
         
        <div className="row">
          <div className="col-lg-12 mb-0">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Secciones del usuarios</h3></div> 
                  <div className="col-lg-3"><button type="button" className="btn btn-primary" onClick={btnTemaCursoAgregar}>Agregar Sección</button></div>
                </div>
              </div>
              <div className="card-body">
                <p></p>
              <div className="card2">
              <div className="card-body">
                

                <div className="row">
                  <div className="col-lg-12 mb-5">
                  
                  <div id="accordionTema">
                          
                      </div>
                      
                  </div>
                </div>                                                     
               
                <div className="row">
                <div className="col-lg-12 mb-5">
                
            </div>
            </div>
                
                
              </div>
            </div>

    </div>
            </div>
          </div> 
          </div>

         

          
      </section>
      </div>
      </div> );
}
 
export default Categorias