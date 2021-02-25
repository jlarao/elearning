import React, {useEffect, useState} from 'react';
import ListadoVideos from "./listadoVideos";
import ContenidoTabVideo from "./contenidoTabVideo";
import { useDispatch, useSelector } from "react-redux";
import VideoPlayerUrl from "./video";
//actions redux
import  { obtenerCursoContenidoReproductor } from "../../actions/cursoReproductorActions";
const Reproducir = (props) => {
    const [mostrarReproductorVideo, setMostrarReproductorVideo] = useState(0);   
    //redux
    const dispatch = useDispatch();
    //state curs reproductor
    const curso = useSelector(state => state.cursoReproductor.curso);
    const temas = useSelector(state => state.cursoReproductor.temas);
    const subTemas  = useSelector(state => state.cursoReproductor.subTemas);
    const obtenerContenido = e => dispatch( obtenerCursoContenidoReproductor(e) );
    //const primerVideoR = useSelector( state => state.cursoReproductor.primerVideo);
    useEffect(() => {        
        obtenerContenido(props.match.params.courseid);        
        primerVideoReproductor();
    }, [])
    const primerVideoReproductor=()=>{
        var contPrimerVideo = 0;
        var videoPrimero;
        console.log(temas.length);
        if(temas.length>0){
        temas.map(tema => {        
            {subTemas.map(s => {
                if(s.subTemaCurso.idTema === tema.idTema  ){
                    return s.herramientasubTema.map(h => {
                    if(h.nombreTipo !== "pdf"){
                        let url = h.urlHerramienta;                       
                        if(h.agregarVideo==="agregarVideo"){
                            if(h.agregarVideo==="agregarVideo"){
                                if(contPrimerVideo== 0 ){
                                    videoPrimero = h;
                                    contPrimerVideo=1;
                                }
                                return( null )
                            }
                        }                                           
                    }
                    }
                    )
                }else return null;
            })
            }
        });
        setMostrarReproductorVideo(videoPrimero.idHerramientaCurso);
    }
    }
        
    /*
    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#homec">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1c">Menu 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu2c">Menu 2</a>
                        </li>
                        </ul>
                        <div className="tab-content">
                        <div className="tab-pane container active" id="homec">Home</div>
                        <div className="tab-pane container fade" id="menu1c">Menu 1</div>
                        <div className="tab-pane container fade" id="menu2c">Menu 2</div>
                        </div>
    */   
   
   const btnSetReproductorVideo= (e)=>{
       setMostrarReproductorVideo(e);
   }   
   
   const ReproductoresVideos=[];
    temas.map(tema => {
        
                    {subTemas.map(s => {
            if(s.subTemaCurso.idTema === tema.idTema  ){
                return s.herramientasubTema.map(h => {
                    if(h.nombreTipo !== "pdf"){
                        let url = h.urlHerramienta;                       
                        if(h.agregarVideo==="agregarVideo"){
                            
                        return(
                            ReproductoresVideos.push(
                                <React.Fragment key={h.idHerramientaCurso}>
                            {mostrarReproductorVideo === h.idHerramientaCurso ? < VideoPlayerUrl url={url}/> : null}
                                       </React.Fragment>        
                            )
                        )
                    } }                                           
                })
            }else return null;
            })
        }
    
    });


    return (
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">         
        <section className="course-video-section padding-bottom-110 py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 p-0 order-2 order-lg-1">                        
                        
                        {ReproductoresVideos}
                        <div className="course-video-tab padding-top-60">

                        <ContenidoTabVideo />                            
                            
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 order-1 order-lg-2">
                        <ListadoVideos curso={curso} temas={temas} subTemas={subTemas}  btnSetReproductorVideo={btnSetReproductorVideo}/>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </div>
    );
}
 
export default Reproducir;