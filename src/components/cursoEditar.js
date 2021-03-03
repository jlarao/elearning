import React,{useState, useEffect,  useContext} from 'react';
import AlertaContext from "../context/alerta/alertaContext";
import CursosContext from "../context/cursos/cursosContext";
import TemaCurso from './cursos/temaCurso';
import SubTemaCurso from './cursos/subTemaCurso';
import ListadoSubTema from "./cursos/listadoSubTema";
import TemaCursoEditar from "./cursos/temaCursoEditar";
import CursoContenidoEditar from "./cursos/cursoContenidoEditar";
import Preloader from "./cursos/curso/preloader";
import Modal from "./functions/function";
const  CursoEditar = (props) =>{   
  
  const cursosContext =  useContext(CursosContext);
  const {  cargando, precio, id, idCategoria, poster, nombreCurso,descripcion,requisitos,que_aprenderas, 
    mensaje, subTemasCurso, temasCurso,formTemaCurso ,   
    obtenerCursosPorId, mostrarFormTemaCurso,obtenerTemaCursoPorIdCurso,setIdTema,
     obtenerSubTemasByTemaId, eliminarTemaCurso, limpiarMensaje} = cursosContext;
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;
  
  const [temaForm, setTemaForm] = useState(0);
  const [subTemaForm, setSubTemaForm] = useState(0);
    
           

    useEffect(() => {        
        obtenerCursoById(props.match.params.courseid);
        if(mensaje){
          mostrarAlerta(mensaje.msg, mensaje.categoria);
          console.log(mensaje);
          tratarMensajes(mensaje)
          
        }
        //if(temasCurso){
          //guardarSeccion(temasCurso);
        //}
    }, [mensaje])

    const tratarMensajes=()=>{
      Modal.Toast.show({html: mensaje.msg, mensaje: mensaje});
      setTimeout( ()=>{ limpiarMensaje() } ,5000 );
    }
    const obtenerCursoById = async(id) => { 
      obtenerCursosPorId(id);
      obtenerTemaCursoPorIdCurso(id);
      obtenerSubTemasByTemaId(id);
    }
    
    if(cargando){
    return (
        <Preloader />
    );
    }

    

    const btnSubTemaAgregar =  e =>{
      console.log(e);
      //let cambiar = !formSubTema;
      //console.log(formSubTema);
      //mostrarFormSubTema(true);
      setSubTemaForm(e);
      setIdTema(e);
    }
    const btnObtenerSubTemaCurso = e => { 
      //obtenerSubTemasByTemaCursoId(e);
      console.log(" obtener subtemacurso: " + e); 
    }
    const btnSubTemaOcultarForm = e =>{
      setSubTemaForm(0);
    }

    const btnTemaOcultarForm = e =>{
      setTemaForm(0);
    }
    const btnTemaCursoEditar = e =>{      
        setTemaForm(e);
    }
    const btnTemaCursoEliminar = e =>{
      console.log(e);
      eliminarTemaCurso(e);
    }
    const accordeon=[];               
            
    for (var i = 0; i < temasCurso.length; i += 1) {
      let id = temasCurso[i].idTema; 
      let nombreTema =  temasCurso[i].nombreTema;
        accordeon.push(<React.Fragment key={"temasCurso"+id}>
    <div className="card mb-2" key={"tema"+id}>
    <div className="card-header">
    <div className="row">
      <div className="col-lg-10" >
        <a className="collapsed card-link d-flex" data-toggle="collapse" href={"#collapse"+i} onClick= {()=>{btnObtenerSubTemaCurso(id)}}>
          Sección {temasCurso[i].nombreTema}<i className="fas fa-angle-down rotate-icon ml-auto"></i>
        </a>
      </div>
      <div className="col-lg-2" title = "Editar Titulo"  > 
      <button className ="btn  btn-outline-primary" onClick={ ()=>{btnTemaCursoEditar(`tema${id}`)} }><i className="fa fa-pencil-alt"></i></button>
  <button className ="btn  btn-outline-danger ml-1" onClick={ ()=>{btnTemaCursoEliminar(id)} }><i className="fa fa-trash"></i></button></div>      
      
    </div>
    </div>
    <div id={"collapse"+i}  className={i!==0 ? "collapse" : "collapse"}    data-parent="#accordionTema">
      <div className="card-body">          
      
      
      <div id={"accordionSubTema"} >
      {subTemasCurso.map(subTema=>{
        if(subTema.subTemaCurso.idTema === id){
        return <ListadoSubTema subTema={subTema} key ={"subTema"+subTema.subTemaCurso.idSubTema}/>
        }else {
          return null;
        }
      }
      )
    }
      </div>


      {subTemaForm===id ? <SubTemaCurso  btnSubTemaOcultarForm={btnSubTemaOcultarForm} idTema={id} /> : null}
      

      <div className="col-lg-12 text-right mb-4"><button className ="btn btn-info" onClick={ ()=>{btnSubTemaAgregar(id)}} title="Agregar contenido"><i className="fas fa-plus ml-auto" ></i></button></div>
      </div>
    </div>
  </div>

{temaForm  === `tema${id}` ? <TemaCursoEditar btnTemaOcultarForm={btnTemaOcultarForm} idTema={id} nombreTem ={nombreTema}/> : null }
</React.Fragment>);
}

  const btnTemaCursoAgregar = ()=>{
    //let cambiar = !formTemaCurso;
    console.log(formTemaCurso);
    mostrarFormTemaCurso(true);
  }

  
    return ( <div className="page-holder w-100 d-flex flex-wrap">
    <div className="container-fluid px-xl-5">
      <section className="pt-5">
        <div className="row">
        <div className="col-lg-12 mb-2">
              <CursoContenidoEditar nombreC={nombreCurso} id={id} idC={idCategoria} pos={poster} desc={descripcion} 
              req={requisitos} que_={que_aprenderas} precioCurso = {precio}/>
               
          </div>
        </div>
        
         
        <div className="row">
          <div className="col-lg-12 mb-0">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Secciones del curso</h3></div> 
                  <div className="col-lg-3"><button type="button" className="btn btn-primary" onClick={btnTemaCursoAgregar}>Agregar Sección</button></div>
                </div>
              </div>
              <div className="card-body">
                <p></p>
              <div className="card2">
              <div className="card-body">
                {<TemaCurso />}

                <div className="row">
                  <div className="col-lg-12 mb-5">
                  
                  <div id="accordionTema">
                          {accordeon}
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
 
export default CursoEditar