import React, {useEffect, useState} from 'react';
import ListadoVideos from "./listadoVideos";
import ContenidoTabVideo from "./contenidoTabVideo";
import { useDispatch, useSelector } from "react-redux";
//actions redux
import  { obtenerCursoContenidoReproductor } from "../../actions/cursoReproductorActions";
const Reproducir = (props) => {
    //redux
    const dispatch = useDispatch();
    //state curs reproductor
    const curso = useSelector(state => state.cursoReproductor.curso)
    useEffect(() => {
        const obtenerContenido = e => dispatch( obtenerCursoContenidoReproductor(e) );
        obtenerContenido(props.match.params.courseid);
    }, [])
    console.log(curso);
    //state
    const [subTemas, setSubTemas] = useState([]);
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
    return (
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">         
        <section className="course-video-section padding-bottom-110 py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 p-0 order-2 order-lg-1">
                        <div className="course-video-part">
                            <video controls>
                                <source src="assets/video/html.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div className="course-video-tab padding-top-60">

                        <ContenidoTabVideo />                            
                            
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 order-1 order-lg-2">
                        <ListadoVideos curso={curso}/>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </div>
    );
}
 
export default Reproducir;