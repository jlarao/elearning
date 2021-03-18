import React from 'react';
//import {  useDispatch } from "react-redux";
//import { setPrimerVideo } from "../../actions/cursoReproductorActions";
const ListadoVideos = ({curso, temas, subTemas, btnSetReproductorVideo}) => {
    //const dispatch = useDispatch();
    //const setPrimerVideoReproducir = e => dispatch(setPrimerVideo(e));
     
    //const [first,setfirst] = useState(true);
    //<!-- Preloader Starts -->
    if(curso === null) return (        
        <div className="preloader" id="preloader">
            <div className="preloader-inner">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    );
    const btnSetVideoReroducir = (url)=> {
        //console.log(url);
        btnSetReproductorVideo(url);
    }
    const Videos=[];
    var cont = 0;
    var contPrimerVideo = 0;
    //var videoPrimero;
    temas.map(tema => {
        
        Videos.push(
        <div className="card box-shadow-none" key={"tema"+tema.idTema}>
                <div className="card-header" id={"headingTema"+tema.idTema}>
                    <a href="#" role="button" data-toggle="collapse" data-target={"#collaseTema"+tema.idTema} aria-expanded="true" aria-controls={"collaseTema"+tema.idTema}>{tema.nombreTema}</a>
                </div>
                <div id={"collaseTema"+tema.idTema}  className={cont === 0 ? "collapse show " : "collapse"} aria-labelledby={"headingTema"+tema.idTema} data-parent="#accordionExample">                
                    <div className="card-body">
                    {subTemas.map(s => {
            if(s.subTemaCurso.idTema === tema.idTema  ){
                return s.herramientasubTema.map(h => {
                    if(h.nombreTipo === "pdf"){
                        return(
                            <div className="single-course-video-pdf" key={"idHerramienta"+h.idHerramientaCurso}>
                        <button className="button-video-pdf">
                        <a target="_blank" download href={h.urlHerramienta} rel="noopener noreferrer"><i className="fa fa-file-pdf"></i> {h.nombreHerramienta}
                            </a>
                        </button>
                        
                    </div>
                        )
                    }else{
                        
                        if(h.agregarVideo==="agregarVideo"){
                            if(contPrimerVideo=== 0 ){
                                //videoPrimero = h;
                                contPrimerVideo=1;
                            }
                            return(
                                <div className="single-course-video" key={"idHerramienta"+h.idHerramientaCurso}>
                            <button  className="button-video" onClick={ ()=>{btnSetVideoReroducir(h.idHerramientaCurso)} }>
                                <i className="fa fa-play-circle"></i> {s.subTemaCurso.nombreSubTema}
                            </button>
                            <span>{h.duracion}</span>
                        </div>
                            )
                        }
                    }
                })
            }else return null;
            })
        }
             </div>
                </div>
            </div>
            
    )    
    cont++;
    //console.log(cont);
    //console.log(videoPrimero);
    });    
    
    /**
       {subTemas.map(s => {
            if(s.subTemaCurso.idTema === tema.idTema  ){
                return s.herramientasubTema.map(h => {
                    if(h.nombreTipo === "pdf"){
                        return(
                            <div className="single-course-video" key={"idHerramienta"+h.idHerramientaCurso}>
                        <button href="#" className="button">
                            <i className="fa fa-file-pdf"></i> {h.nombreHerramienta}
                        </button>
                        
                    </div>
                        )
                    }else{
                        return(
                            <div className="single-course-video" key={"idHerramienta"+h.idHerramientaCurso}>
                        <a href="#" className="button-video">
                            <i className="fa fa-play-circle"></i> {s.subTemaCurso.nombreSubTema}
                        </a>
                        <span>02:50</span>
                    </div>
                        )
                    }
                })
            }else return null;
            })
        }
    */
    
    return ( <div className="video-playlist-sidebar">        
    <h4>{curso.nombreCurso}</h4>
    <div className="curriculum-accordion margin-top-30">
        <div className="accordion-wrapper tab-margin-bottom-50" id="accordionExample">

        {Videos}            
            
        </div>
    </div>
</div> );
}
 
export default ListadoVideos;