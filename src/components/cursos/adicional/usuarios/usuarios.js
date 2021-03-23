import React,{useState, useEffect,  useContext} from 'react';
//import AlertaContext from "../../../context/alerta/alertaContext";
//import CursosContext from "../../../context/cursos/cursosContext";

import Preloader from "../../curso/preloader";
import Modal from "../../../functions/function";
import CategoriaEditar from '../categoriaEditar';
import { useDispatch, useSelector } from "react-redux";
import {  obtenerCategorias ,obtenerUsuariosRol} from "../../../../actions/adicionalActions";
import { UsuariosTable } from '../tabla/usuariosTable';
import PreLoader from '../../curso/preloader';

const  Usuarios = (props) =>{   
  const dispatch = useDispatch();
  //const categorias = useSelector( state => state.adicional.categorias);
  const usuariosRoles = useSelector( state => state.adicional.usuariosRol);
  //const obtenerCategoriasDatos = e => dispatch( obtenerCategorias());
  const obtenerUsuariosRolDatos = e => dispatch(obtenerUsuariosRol());
  
    
           

    useEffect(() => {              
             obtenerUsuariosRolDatos();
    }, [])


  

  if(usuariosRoles === null) return <PreLoader />
  console.log(usuariosRoles);
    return ( <div className="page-holder w-100 d-flex flex-wrap">
    <div className="container-fluid px-xl-5">
      <section className="pt-5">      
         
        <div className="row">
          <div className="col-lg-12 mb-0">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Secciones del usuarios</h3></div> 
                  <div className="col-lg-3"></div>
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
                <UsuariosTable usuariosRoles={usuariosRoles}/>
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
 
export default Usuarios