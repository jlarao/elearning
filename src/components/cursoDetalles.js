import React,{useState, useEffect, useRef, useContext} from 'react';
import AlertaContext from "../context/alerta/alertaContext";
import CursosContext from "../context/cursos/cursosContext";
import TemaCurso from './cursos/temaCurso';
import SubTemaCurso from './cursos/subTemaCurso';
import ListadoSubTema from "./cursos/listadoSubTema";

const  CursoDetalles = (props) =>{   
  
  const cursosContext =  useContext(CursosContext);
  const {  subTemasCurso, temasCurso,formTemaCurso , nombreCurso,redirect, mensaje , 
    obtenerCursosPorId, mostrarFormTemaCurso,obtenerTemaCursoPorIdCurso,setIdTema,
    obtenerSubTemasByTemaCursoId} = cursosContext;
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;
  
  const [paso, setPaso] = useState(0);
    const [datos, setDatos] = useState({
      tema:{ nombre:"", agregarVideo:"", url:"", urlPdf:""},
      error: false,
      errorMsg: ""      
      });
           

    useEffect(() => {        
        obtenerCursoById(props.match.params.courseid);
        if(mensaje){
          mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //if(temasCurso){
          //guardarSeccion(temasCurso);
        //}
    }, [mensaje])

    const obtenerCursoById = async(id) => { 
      obtenerCursosPorId(id);
      obtenerTemaCursoPorIdCurso(id);
    }

    const manejadorSubmit =()=>{

    }

    const botonGuardar =()=>{
        
    }

    const  manejadorChange =  async e => {  }
    
    const manejadorChangeRadio =  e =>{

    }

    const btnSubTemaAgregar =  e =>{
      console.log(e);
      //let cambiar = !formSubTema;
      //console.log(formSubTema);
      //mostrarFormSubTema(true);
      setPaso(e);
      setIdTema(e);
    }
    const btnObtenerSubTemaCurso = e => { 
      obtenerSubTemasByTemaCursoId(e);
      console.log(" obtener subtemacurso: " + e); 
    }

    const accordeon=[];               
            
    for (var i = 0; i < temasCurso.length; i += 1) {
      let id = temasCurso[i].idTema; 
        accordeon.push(
    <div className="card mb-2" key={i}>
    <div className="card-header">
    <div className="row">
      <div className="col-lg-12" >
        <a className="collapsed card-link d-flex" data-toggle="collapse" href={"#collapse"+i} onClick= {()=>{btnObtenerSubTemaCurso(id)}}>
          Sección {temasCurso[i].nombreTema}<i className="fas fa-angle-down rotate-icon ml-auto"></i>
        </a>
      </div>      
      
    </div>
    </div>
    <div id={"collapse"+i}  className={i!=0 ? "collapse" : "collapse"}    data-parent="#accordionTema">
      <div className="card-body">          
      <div className="col-lg-12 text-right mb-4"><button className ="btn btn-info" onClick={ ()=>{btnSubTemaAgregar(id)}} title="Agregar contenido"><i className="fas fa-plus ml-auto" ></i></button></div>
      
      {subTemasCurso.map(subTema=>(
        <ListadoSubTema subTema={subTema} key ={subTema.subTemaCurso.idSubTema} />        
      ))}
      
      {paso==id ? <SubTemaCurso /> : null}
      </div>
    </div>
  </div>
  );
}

  const btnTemaCursoAgregar = ()=>{
    let cambiar = !formTemaCurso;
    console.log(formTemaCurso);
    mostrarFormTemaCurso(cambiar);
  }

  
    return ( <div className="page-holder w-100 d-flex flex-wrap">
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
                <div className="row">
                  <div className="col-lg-9"><h3 className="h6 text-uppercase mb-0">Curso - {nombreCurso}</h3></div> 
                  <div className="col-lg-3"><button type="button" className="btn btn-primary" onClick={btnTemaCursoAgregar}>Agregar Sección</button></div>
                </div>
              </div>
              <div className="card-body">
                <p>Secciones del curso</p>
              <div className="card2">
              <div className="card-body">
                {<TemaCurso />}

                <div className="row">
                  <div className="col-lg-12 mb-5">
                  {alerta ? <div className={`alert alert-${alerta.categoria}`} role ="alert">{alerta.msg}</div> : null}
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
 
export default CursoDetalles