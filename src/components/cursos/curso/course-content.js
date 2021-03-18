import React from 'react';
import Preloader from './preloader'
const Coursecontent = ({curso, temas, subTemas}) => {

    if(curso === null) return (        
        <Preloader />
    );
    const nothing = (e) =>{
        e.preventDefault();
    }
    const Videos=[];
    var cont = 0;
    temas.map(tema => {
        
        Videos.push(
        <div className="card " key={"tema"+tema.idTema}>
                <div className="card-header" id={"headingTema"+tema.idTema}>
                    <a href="#" role="button" data-toggle="collapse" data-target={"#collaseTema"+tema.idTema} aria-expanded="true" 
                    aria-controls={"collaseTema"+tema.idTema}><span>{tema.nombreTema}</span></a>
                </div>
                <div id={"collaseTema"+tema.idTema}  className={cont === 0 ? "collapse show " : "collapse"} aria-labelledby={"headingTema"+tema.idTema}
                 data-parent="#accordionExample">                
                    <div className="card-body">
                    {subTemas.map(s => {
            if(s.subTemaCurso.idTema === tema.idTema  ){
                return s.herramientasubTema.map(h => {
                    if(h.nombreTipo === "pdf"){
                        return(null)
                    }else{
                        
                        if(h.agregarVideo==="agregarVideo"){
                           /* if(contPrimerVideo== 0 ){
                                videoPrimero = h;
                                contPrimerVideo=1;
                            } */
                            return(
                                <div className="single-course-video" key={"idHerramienta"+h.idHerramientaCurso}>
                            <a  href={void(0)} onClick={(e)=>{ nothing(e)}} className="button-video">
                                <i className="fa fa-play-circle"></i> {s.subTemaCurso.nombreSubTema}
                            </a>
                            <span className="locked"><a href={void(0)} onClick={(e)=>{ nothing(e) }} >Bloqueado</a></span>
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
    }); 
    return ( 
        <div className="curriculum-accordion margin-top-30">
        <div className="accordion-wrapper tab-margin-bottom-50" id="accordionExample">

        {Videos}            
            
        </div>
    </div>
     );
}
 
export default Coursecontent;