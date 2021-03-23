import React,{useState, useEffect,  useContext} from 'react';
//import AlertaContext from "../../../context/alerta/alertaContext";
//import CursosContext from "../../../context/cursos/cursosContext";

import Preloader from "../../curso/preloader";
import Modal from "../../../functions/function";

import { useDispatch, useSelector } from "react-redux";
import {  datosUsuarioAction, obtenerUsuariosCursos, obtenerCursosUsuarioNoInscrito } from "../../../../actions/adicionalActions";
//import { UsuariosTable } from '../tabla/usuariosTable';
import PreLoader from '../../curso/preloader';
import { UsuariosCursosTable } from '../tabla/usuariosCursosTable';
import CategoriaAgregar from '../categoriaAgregar';
import InscribirUsuario from './inscribirUsuario';

const  UsuariosCursos = (props) =>{   
  const dispatch = useDispatch();
  //const categorias = useSelector( state => state.adicional.categorias);
  const cursosInscritos = useSelector( state => state.adicional.cursosInscritos);
  const cursosNoInscrito = useSelector(state => state.adicional.cursosNoInscrito)
  const datosUsuario = useSelector(state => state.adicional.datosUsuario);
  //const obtenerCategoriasDatos = e => dispatch( obtenerCategorias());
  const obtenerUsuariosCursosDatos = e => dispatch(obtenerUsuariosCursos(e));
  const obtenerCursosUsuarioNoInscritoDatos = e => dispatch(obtenerCursosUsuarioNoInscrito(e));
  const obtenerDatosUsuario = e => dispatch(datosUsuarioAction(e));
           
  const [formInscribir,setFormInscribir] = useState(false);
    useEffect(() => {              
             obtenerUsuariosCursosDatos(props.match.params.id);
             obtenerCursosUsuarioNoInscritoDatos(props.match.params.id);
             obtenerDatosUsuario(props.match.params.id);
    }, [])


  const btnCursoAgregar = ()=>{   
      setFormInscribir(true);
  }
  const btnFormInscribirCerrar = (e)=>{   
    setFormInscribir(false);
}

  if(cursosInscritos === null) return <PreLoader />
  if(cursosNoInscrito === null) return <Preloader />
  console.log(cursosInscritos);
    return ( <div className="page-holder w-100 d-flex flex-wrap">
    <div className="container-fluid px-xl-5">
      <section className="pt-5">      
         
        <div className="row">
          <div className="col-lg-12 mb-0">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Secciones del estudiante: <span>{datosUsuario.nombre} {datosUsuario.apellidoPaterno} {datosUsuario.apellidoMaterno}</span></h3></div> 
                  <div className="col-lg-3"></div>
                </div>
              </div>
              <div className="card-body">
              
              <div className="card2">
              <div className="card-body">
                

                <div className="row">
                  <div className="col-lg-12 mb-5">
                  
                  <div id="accordionTema">
                          
                  </div>
                      
                  </div>
                </div>                                                     
               
                <div className="row">
                <div className="col-lg-9 mb-1">
                <h5 className="text-center">Listado de cursos inscrito</h5>                
                </div>
                <div className="col-lg-3 mb-1"><button type="button" className="btn btn-primary" onClick={btnCursoAgregar}>Inscribir</button></div>
                <div className="col-lg-12 mb-2">
                
                <UsuariosCursosTable cursosInscritos={cursosInscritos} idUsuario={props.match.params.id}/>
            
            </div>
            </div>

            <div className="row">
                <div className="col-lg-12 mb-5">
                <InscribirUsuario btnFormInscribirCerrar={btnFormInscribirCerrar} formInscribir={formInscribir} cursosNoInscrito={cursosNoInscrito} idUsuario={props.match.params.id} />    
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
 
export default UsuariosCursos