import React, {useContext, useState} from 'react';

import CursosContext from "../../context/cursos/cursosContext";
import AgregarVideo from "./agregarVideo";
import EditarDoc from "./editarDoc";
import AgregarDoc from "./agregarDoc";
import SubTemaCursoEditar from "./subTemaCursoEditar";
const ListadoSubTema = ({subTema, maxFileUpload}) => {
  const cursosContext =  useContext(CursosContext);
  const {  eliminarHerramientaCurso, eliminarHerramientaDocCurso, eliminarSubTemaCurso} = cursosContext;
  
  
  const [mostrarFormVideo, setMostrarFormVideo] = useState(0);
  const [mostrarFormDoc, setMostrarFormDoc]  = useState(0);
  const [mostrarFormAgregarDoc, setMostrarFormAgregarDoc]  = useState(0);
  const [mostrarFormSubTemaEditar, setMostrarFormSubTemaEditar]  = useState(0);
    const videosA=[]; 
    const recursosA=[];
    const editVideo=[];
    const editDoc=[];
    const agregarDoc=[];
    const video=[];
    const recurso=[];

    const btnEditarVideo = (id) =>{
        console.log(id);
        setMostrarFormVideo(id);
    }
    const btnEditarDocHerramienta = (id) =>{
      console.log(id);
      setMostrarFormDoc(id);
    }
    const btnEliminarDocHerramienta = (id) =>{
      console.log(id);
      eliminarHerramientaDocCurso(id);
    }

    const btnEliminarSubTemaCurso = (id) =>{
      console.log(id);
      eliminarHerramientaCurso(id);
    }

    const  ocultarFormEdicVideo =() =>{
      setMostrarFormVideo(0);
      console.log("ocultar video edic video");
    }

    const ocultarFormEdicDoc = () =>{
      setMostrarFormDoc(0);
    }

    const ocultarFormAgregarDoc = () =>{
      setMostrarFormAgregarDoc(0);
    }

    const btnAgregarDocumento = (idTema) =>{
        console.log(idTema);
        setMostrarFormAgregarDoc(idTema);
    }

    const btnEditarSubTema = (idSubTema) =>{
      setMostrarFormSubTemaEditar(idSubTema);
        console.log(idSubTema);
    }

    const btnEliminarSubTema = (idSubTema) =>{
      console.log(idSubTema);
      eliminarSubTemaCurso(idSubTema);
    }
    const ocultarFormSubTemaEdita = () =>{
      setMostrarFormSubTemaEditar(0);
    }
    for(let i=0; i< subTema.herramientasubTema.length; i++){
      let her = subTema.herramientasubTema[i];
      if(her.nombreTipo==="pdf"){
        recursosA.push(her);
      }else{
        videosA.push(her);
      }      //console.log(subTema.herramientasubTema);                 
    }
    //console.log(recursosA);
    //console.log(videosA);
    if(videosA.length>0){
    for(let i=0; i< videosA.length; i++){ //
      let id = videosA[i].idHerramientaCurso;
      let herramienta = videosA[i];            
      if(videosA[i].agregarVideo==="agregarVideo"){//almacenado localmente
      video.push(<React.Fragment key={`idHerramientaCursoF${id}`}>
        <div className="col-12 " key={`idHerramientaCurso${id}`}>
        <h5 className="card-title"><p className="border-bottom">{videosA[i].nombreHerramienta}</p></h5> </div>
        <div className="col-12 col-sm-6 d-flex flex-column" >
          <h5 className="card-title"><p >Video:</p> </h5>          
          <div className="card-body">
          <p className="card-text"></p>
          { videosA[i].urlHerramienta !== "" ? <video  src={videosA[i].urlHerramienta}  controls width="200" height="200">Tu navegador no admite el elemento <code>video</code></video> 
          :
          <p className="card-text">No se encontro video</p>
           }
          
          </div>
          <div className="card-footer text-muted">
          { videosA[i].urlHerramienta !== "" ? <React.Fragment>
            <button  className="btn btn-success mr-2" title="Editar Video" onClick= {()=>{btnEditarVideo(`editarVideo${id}`)}}><i className="fa fa-pencil-alt ml-auto"></i></button>
            <button  className="btn btn-danger" title="Eliminar Video" onClick= {()=>{btnEliminarSubTemaCurso(id)}}><i className="fas fa-trash ml-auto"></i></button>
            </React.Fragment>
            :
            <button  className="btn btn-success mr-2" title="Agregar Video" onClick= {()=>{btnEditarVideo(`editarVideo${id}`)}}><i className="fa fa-plus ml-auto"></i></button>
          }            
          </div>
          
          </div>
          
          </React.Fragment>);
          editVideo.push(
          <div className="col-12"  key={`idHerramientaCursoVideo${id}`}>
            {mostrarFormVideo === `editarVideo${id}` ? <AgregarVideo ocultarFormEdicVideo={ocultarFormEdicVideo}  herramienta={herramienta}  maxFileUpload = {maxFileUpload}/> : null}
          </div>);
    }else{//almacenado exterior
      video.push(<React.Fragment key={`idHerramientaCursoF${id}`}>
        <div className="col-12 "  key={`idHerramientaCurso${id}`}> 
        <h5 className="card-title"><p className="border-bottom">{videosA[i].nombreHerramienta}</p></h5> </div>
        <div className="col-12 col-sm-6 d-flex flex-column">
          <h5 className="card-title"><p >Video:</p> </h5>          
          <div className="card-body">
          <p className="card-text"></p>
          No soportado
          </div>
          <div className="card-footer text-muted">
            <button  className="btn btn-success mr-2" title="Editar Video" onClick= {()=>{btnEditarVideo(`editarVideo${id}`)}}><i className="fa fa-pencil-alt ml-auto" ></i></button>
            <button  className="btn btn-danger" title="Eliminar Video" onClick= {()=>{btnEliminarSubTemaCurso(id)}}><i className="fas fa-trash ml-auto"></i></button>
          </div>          
          </div>
       </React.Fragment>);
        editVideo.push(
          <div className="col-12 " key={`idHerramientaCursoVideo${id}`}>
            {mostrarFormVideo === `editarVideo${id}`  ? <AgregarVideo ocultarFormEdicVideo={ocultarFormEdicVideo} herramienta={herramienta}  maxFileUpload = {maxFileUpload}/> : null}
          </div>);
    }
  }
}else{
 
}


  if(recursosA.length>0){
    let idTema = recursosA[0].idTema;
        recurso.push(
          <div className="col-12 col-sm-6 d-flex flex-column" key={`idHerramientaCursoRecurso${recursosA[0].idHerramientaCurso}`}>
            <h5 className="card-title"><p >Recursos:</p> </h5>
            <div className="card-body ">

        {recursosA.map(herramienta=>{
              let idH = herramienta.idHerramientaCurso
          if(herramienta.nombreTipo==="pdf"){ 
            if(herramienta.urlHerramienta !== ""){                 
              if(herramienta.estatus === "Activo"){
              return(  <p className="card-text d-flex" key={`idHerramientaCursoRecurso${idH}`}><i className="fas fa-check ml-2"></i> <span className="font-weight-bold"></span>
                <span className="ml-2">{herramienta.nombreHerramienta} </span>               
                <i className="fas fa-file-pdf ml-2"></i>
                <button  className="btn btn-success ml-auto" title="Editar archivo" onClick={()=>{btnEditarDocHerramienta(`editarDocumento${idH}`);}}><i className="fa fa-pencil-alt "></i></button>
                <button  className="btn btn-danger ml-auto" title="Eliminar archivo" onClick={()=>{btnEliminarDocHerramienta(idH);}}><i className="fas fa-trash "></i></button>
                </p>              
                )
              }else{ return null;}
              }else{
                return (<p className="card-text" key={`idHerramientaCursoRecurso${idH}`}>No se encontro el archivo</p>)
              }                        
            }else{
              return (<p className="card-text" key={`idHerramientaCursoRecurso${idH}`}>No se encontro el archivo</p>)
            }
          }   
        )
        }

          </div>
          <div className="card-footer text-muted">
            <button  className="btn btn-info mr-2" title="Agregar archivo" onClick={()=>{btnAgregarDocumento(`agregarDocumento${idTema}`)}}> <i className="fa fa-plus ml-auto"></i></button>
            
          </div>
          </div>
        )
        
        editDoc.push(
          <React.Fragment key={`idHerramientaCursoRecursoEditDoc${idTema}`}>
          {recursosA.map(herramienta=>{
            let idH = herramienta.idHerramientaCurso
        if(herramienta.nombreTipo==="pdf"){ 
          if(herramienta.urlHerramienta !== ""){
            if(herramienta.estatus === "Activo"){                 
            return(<React.Fragment key={`idHerramientaCursoRecursoED${idH}`}>
          <div className="col-12 " key={`idHerramientaCursoRecursoEDd${idH}`}>
            {mostrarFormDoc === `editarDocumento${idH}`  ? <EditarDoc ocultarFormEdicDoc={ocultarFormEdicDoc} herramienta={herramienta} maxFileUpload = {maxFileUpload}/> : null}
          </div>

          
          </React.Fragment>
            )
            }else{ return null;}
          }
        }
      }
          )
    }    
            
    </React.Fragment>
    );
    agregarDoc.push(<div className="col-12 " key={"agregarDocHerramientaId"+0}>
    {mostrarFormAgregarDoc === `agregarDocumento${idTema}` ? <AgregarDoc ocultarFormAgregarDoc={ocultarFormAgregarDoc } idTema={idTema}  maxFileUpload = {maxFileUpload} /> : null}
  </div>)
    
}else{//almacenado exterior
  
    recurso.push(
      <div className="col-12 col-sm-6 d-flex flex-column" key={0}>
      <h5 className="card-title"><p >Recursos:</p> </h5>
      <div className="card-body">
        <p className="card-text"><span className="font-weight-bold"></span>
         <span className="ml-1"> </span>               
          Sin Recursos</p>
        
        </div>
    <div className="card-footer text-muted">      
    <button  className="btn btn-info mr-2" title="Agregar archivo" onClick={()=>{btnAgregarDocumento(`agregarDocumento${subTema.subTemaCurso.idSubTema}`)}}><i className="fa fa-plus ml-auto"></i></button>
    </div>
      
    </div> 
    )
      agregarDoc.push(<div className="col-12 " key={"agregarDocHerramientaId"+0}>
    {mostrarFormAgregarDoc === `agregarDocumento${subTema.subTemaCurso.idSubTema}` ? <AgregarDoc ocultarFormAgregarDoc={ocultarFormAgregarDoc } idTema={subTema.subTemaCurso.idSubTema}  maxFileUpload = {maxFileUpload}/> : null}
  </div>)
}
//recurso.push(<AgregarVideo />);
    return ( 
                       
        
       
       
        
        
    
    <div className="card mb-2" key={"subTemaCurso"+subTema.subTemaCurso.idSubTema}>
<div className="card-header">
<div className="row">
  <div className="col-lg-9" >
    <a className="collapsed card-link d-flex" data-toggle="collapse" href={"#collapseSubTema"+subTema.subTemaCurso.idSubTema} >
    Tema: {subTema.subTemaCurso.nombreSubTema} <i className="fas fa-angle-down rotate-icon ml-auto"></i>
    </a>
  </div>
  <div className="col-lg-3" > 
  <button className ="btn  btn-outline-info" title = "Editar Titulo" onClick={()=>{btnEditarSubTema(`SubTemaCursoEditar${subTema.subTemaCurso.idSubTema}`)}}><i className="fa fa-pencil-ruler"></i></button>
  <button className ="btn  btn-outline-warning ml-1" title = "Eliminar Tema" onClick={()=>{ btnEliminarSubTema(subTema.subTemaCurso.idSubTema) }} ><i className="fa fa-times-circle"></i></button></div>
</div>
</div>
<div id={"collapseSubTema"+subTema.subTemaCurso.idSubTema}  className= "collapse"    data-parent="#accordionSubTema">
  <div className="card-body">            
    <div className="row no-gutters"> 
      
        {video}
        {recurso}
        {editVideo}
        {editDoc}
        {agregarDoc}
     </div>
</div>
</div>  

{ mostrarFormSubTemaEditar === `SubTemaCursoEditar${subTema.subTemaCurso.idSubTema}`  &&
<SubTemaCursoEditar  idSubTema = {subTema.subTemaCurso.idSubTema } nombreSubT = {subTema.subTemaCurso.nombreSubTema } idTema = {subTema.subTemaCurso.idTema} ocultarFormSubTemaEdita= {ocultarFormSubTemaEdita}  />}
 </div>
 
 
   );
}
 
export default ListadoSubTema;