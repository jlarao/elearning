import React, {useContext, useState} from 'react';
import AlertaContext from "../../context/alerta/alertaContext";
import CursosContext from "../../context/cursos/cursosContext";
import AgregarVideo from "./agregarVideo";

const ListadoSubTema = ({subTema}) => {
  const cursosContext =  useContext(CursosContext);
  const {  eliminarHerramientaCurso} = cursosContext;
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;
  const [paso, setPaso] = useState(0);
    const videosA=[]; 
    const recursosA=[];
    const editVideo=[];
    const video=[];
    const recurso=[];

    const btnEditarSubTemaCurso = (id) =>{
        console.log(id);
        setPaso(id);
    }

    const btnEliminarSubTemaCurso = (id) =>{
      console.log(id);
      eliminarHerramientaCurso(id);
    }

    const  ocultarFormEdicVideo =() =>{
      setPaso(0);
      console.log("ocultar video edic video");
    }

    for(let i=0; i< subTema.herramientasubTema.length; i++){
      let her = subTema.herramientasubTema[i];
      if(her.nombreTipo=="pdf"){
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
      let idTema =  videosA[i].idTema;
      let nombreHerramienta = videosA[i].nombreHerramienta;
      if(videosA[i].agregarVideo=="agregarVideo"){//almacenado localmente
      video.push(<React.Fragment>
        <div className="col-12 " key={id}>
        <h5 className="card-title"><p className="border-bottom">{videosA[i].nombreHerramienta}</p></h5> </div>
        <div className="col-12 col-sm-6 " >
          <h5 className="card-title"><p >Video:</p> </h5>          
          <div className="card-body">
          <p className="card-text"></p>
          { videosA[i].urlHerramienta != "" ? <video  src={videosA[i].urlHerramienta}  controls width="200" height="200">Tu navegador no admite el elemento <code>video</code></video> 
          :
          <p className="card-text">No se encontro video</p>
           }
          
          </div>
          <div className="card-footer text-muted">
          { videosA[i].urlHerramienta != "" ? <React.Fragment>
            <button  className="btn btn-success mr-2" title="Editar Video" onClick= {()=>{btnEditarSubTemaCurso(id)}}><i className="fa fa-pencil-alt ml-auto"></i></button>
            <button  className="btn btn-danger" title="Eliminar Video" onClick= {()=>{btnEliminarSubTemaCurso(id)}}><i className="fas fa-trash ml-auto"></i></button>
            </React.Fragment>
            :
            <button  className="btn btn-success mr-2" title="Agregar Video" onClick= {()=>{btnEditarSubTemaCurso(id)}}><i className="fa fa-plus ml-auto"></i></button>
          }            
          </div>
          
          </div>
          
          </React.Fragment>);
          editVideo.push(
          <div className="col-12 ">
            {paso == id ? <AgregarVideo ocultarFormEdicVideo={ocultarFormEdicVideo}  herramienta={herramienta}/> : null}
          </div>);
    }else{//almacenado exterior
      video.push(<React.Fragment>
        <div className="col-12 "  key={id}> 
        <h5 className="card-title"><p className="border-bottom">{videosA[i].nombreHerramienta}</p></h5> </div>
        <div className="col-12 col-sm-6 d-flex flex-column">
          <h5 className="card-title"><p >Video:</p> </h5>          
          <div className="card-body">
          <p className="card-text"></p>
          No soportado
          </div>
          <div className="card-footer text-muted">
            <button  className="btn btn-success mr-2" title="Editar Video" onClick= {()=>{btnEditarSubTemaCurso(id)}}><i className="fa fa-pencil-alt ml-auto" ></i></button>
            <button  className="btn btn-danger" title="Eliminar Video" onClick= {()=>{btnEliminarSubTemaCurso(id)}}><i className="fas fa-trash ml-auto"></i></button>
          </div>          
          </div>
       </React.Fragment>);
        editVideo.push(
          <div className="col-12 ">
            {paso == id ? <AgregarVideo ocultarFormEdicVideo={ocultarFormEdicVideo} herramienta={herramienta}/> : null}
          </div>);
    }
  }
}else{
 
}


  if(recursosA.length>0){
  for(let i=0; i< recursosA.length; i++){
    if(recursosA[i].nombreTipo=="pdf"){//almacenado localmente      
        recurso.push(
          <div className="col-12 col-sm-6 d-flex flex-column" key={recursosA[i].idHerramientaCurso}>
            <h5 className="card-title"><p >Recursos:</p> </h5>
            <div className="card-body">
              <p className="card-text"><i className="fas fa-check ml-auto"></i> <span className="font-weight-bold"></span>
               <span className="ml-1">{recursosA[i].nombreHerramienta} </span>               
              {recursosA[i].urlHerramienta =! "" ? (<i className="fas fa-file-pdf ml-auto"></i>): "Sin Recursos"}</p>
              
              </div>
          <div className="card-footer text-muted">
            <button  className="btn btn-success mr-2" title="Editar archivo"><i className="fa fa-pencil-alt ml-auto"></i></button>
            <button  className="btn btn-danger" title="Eliminar archivo" ><i className="fas fa-trash ml-auto"></i></button>
          </div>
            
          </div>
        )
    }
  }
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
      <button  className="btn btn-success mr-2" title="Editar archivo"><i className="fa fa-pencil-alt ml-auto"></i></button>
      <button  className="btn btn-danger" title="Eliminar archivo" ><i className="fas fa-trash ml-auto"></i></button>
    </div>
      
    </div>
    
        
      
    )

}
//recurso.push(<AgregarVideo />);
    return ( 
        <div className="row" key={subTema.subTemaCurso.idSubTema}>        
        <div className="col-12" >                 
        
       
       
        
        
    <div id={"accordionSubTema"+subTema.subTemaCurso.idSubTema} >
    <div className="card mb-2" >
<div className="card-header">
<div className="row">
  <div className="col-lg-11" >
    <a className="collapsed card-link d-flex" data-toggle="collapse" href={"#collapseSubTema"+subTema.subTemaCurso.idSubTema} >
    Tema: {subTema.subTemaCurso.nombreSubTema} <i className="fas fa-angle-down rotate-icon ml-auto"></i>
    </a>
  </div>            
</div>
</div>
<div id={"collapseSubTema"+subTema.subTemaCurso.idSubTema}  className= "collapse"    data-parent={"#accordionSubTema"+subTema.subTemaCurso.idSubTema}>
  <div className="card-body">            
    <div className="row no-gutters">  
      
        {video}
        {recurso}
        {editVideo}              
     </div>
</div>
</div>             
 </div>
 </div> 
 </div> 
 </div>   );
}
 
export default ListadoSubTema;