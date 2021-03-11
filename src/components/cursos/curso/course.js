import React, {useEffect} from 'react';
import CourseDetails from "./course-details";
import CourseContent from './course-content'
import Preloader from '../../cursos/curso/preloader';
import { useSelector,  useDispatch } from "react-redux";
import { obtenerCursoContenidoParaVenta } from "../../../actions/cursoReproductorActions";
const Course = (props) => {
    const dispatch = useDispatch();
    const obtenerContenido = e => dispatch( obtenerCursoContenidoParaVenta(e) );

    const curso =  useSelector(state =>   state.cursoReproductor.curso);
    const temas =  useSelector(state =>   state.cursoReproductor.temas);
    const subTemas = useSelector(state => state.cursoReproductor.subTemas);
    console.log(props.match.params.courseid);
    useEffect( ()=>{
        obtenerContenido(props.match.params.courseid);
    },[] )

    if(curso === null)
        return (<Preloader />             
        );
    return ( 
        <div className="page-holder w-100 d-flex flex-wrap">
          <div className="container-fluid px-xl-5">
        <section className="course-details-section padding-120 pt-3">
            <div className="container">
                <div className="row">
                    <CourseDetails curso={curso} />

                    <div className="col-lg-8">
                        <div className="course-details-title">
                            <h2>{curso.nombreCurso}</h2>
                        </div>
                        <div className="course-details-tab">
                       

                            <div className="tab">
                                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                                    <li className="nav-item">
                                    <a className="nav-link active show" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><span>Resumen</span></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link " id="menu1-tab" data-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false"><span>Plan</span></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link " id="menu2-tab" data-toggle="tab" href="#menu2" role="tab" aria-controls="menu2" aria-selected="false"><span>Instructor</span></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link " id="menu3-tab" data-toggle="tab" href="#menu3" role="tab" aria-controls="menu3" aria-selected="false"><span>Valoración</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade show active tab-one-content tab-content-bg overview-content lost active" role="tabpanel" aria-labelledby="home-tab">
                                    <h4>Descripción</h4>
                                    <p className="margin-top-20">{curso.descripcion}</p>
                                    <div className="overview-video margin-top-30 overflow-hidden">
                                        <img src={curso.poster} alt="thumbnail" style={{"height":"100vh"}} className="img-fluid vh-100"/>
                                        <div className="video-play-button">
                                            <a href="https://www.youtube.com/watch?v=8AGgbIQyqR8" className="button-video">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="overview-title margin-top-30">
                                        <h4>¿Qué aprenderas?</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p>{curso.que_aprenderas}</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="learn-item">
                                                <li><i className="fa fa-check"></i> Assemble machine learning algorithms from scratch! Digital Marketing Trade<span></span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="learn-item">
                                                <li><i className="fa fa-check"></i> <span> Unique Ways of Promoting a Business from Scratch Inbound Marketing</span></li>
                                            </ul>
                                        </div>

                                        
                                    </div>
                                    
                                    <div className="overview-title margin-top-20">
                                        <h4>Requisitos</h4>
                                    </div>
                                    <ul className="require-item">
                                        <li>{curso.requisitos}</li>
                                        <li><i className="fa fa-square"></i> <span>computer</span></li>
                                        <li><i className="fa fa-square"></i> <span>internet</span></li>
                                    </ul>
                                    
                                </div>
                                <div id="menu1" className="tab-pane fade tab-three-content tab-content-bg instructor-content"  role="tabpanel" aria-labelledby="menu1-tab">
                                    <h4>Contenido</h4>
                                    <p className="margin-top-20">Advanced story telling techniques for writers: Personas, Characters & Plots.</p>
                                    <CourseContent curso={curso}  temas={temas} subTemas={subTemas} />                                   
                                    <div className="overview-title margin-top-30">
                                        <h4>Requisitos</h4>
                                    </div>
                                    <ul className="require-item">
                                        <li><i className="fa fa-square"></i> <span>computer</span></li>
                                        <li><i className="fa fa-square"></i> <span>internet</span></li>
                                    </ul>
                                    <p>{curso.requisitos}</p>
                                </div>
                                <div id="menu2" className="tab-pane fade tab-three-content tab-content-bg instructor-content lost"
                                         role="tabpanel" aria-labelledby="menu2-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="instructor-author">
                                                <div className="single-instructor">
                                                    <span className="instructor-sign">{curso.nombre}</span>
                                                    <div className="instructor-image overflow-hidden">
                                                        <img src={curso.avatar} alt="image" className="img-fluid " style={{"height":"30vh"}}/>
                                                    </div>
                                                    <div className="instructor-content">
                                                        <h4>{curso.nombre} {curso.apellidoPaterno} {curso.apellidoMaterno}</h4>
                                                        <span>{curso.nombreProfesion}</span>
                                                    </div>
                                                    <div className="hover-state">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="instructor-about">
                                                <h4>Instructor {curso.nombre} {curso.apellidoPaterno} {curso.apellidoMaterno}</h4>
                                                <p className="margin-top-20">{curso.expositor}</p>
                                                
                                                <div className="instructor-button margin-top-30">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="instructor-skill-part margin-top-30">
                                        <div className="bottom-content-title">
                                            <h4>my skills</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="single-skill-item">
                                                    <div className="progress-info d-flex justify-content-between">
                                                        <div className="progress-info-left">
                                                            <span>{curso.nombreProfesion}</span>
                                                        </div>
                                                        <div className="progress-info-right">
                                                            <span>80%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-skill-item">
                                                    <div className="progress-info d-flex justify-content-between">
                                                        <div className="progress-info-left">
                                                            <span>wordPress</span>
                                                        </div>
                                                        <div className="progress-info-right">
                                                            <span>90%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-skill-item">
                                                    <div className="progress-info d-flex justify-content-between">
                                                        <div className="progress-info-left">
                                                            <span>technology</span>
                                                        </div>
                                                        <div className="progress-info-right">
                                                            <span>70%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-skill-item">
                                                    <div className="progress-info d-flex justify-content-between">
                                                        <div className="progress-info-left">
                                                            <span>marketing</span>
                                                        </div>
                                                        <div className="progress-info-right">
                                                            <span>60%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu3" className="tab-pane fade tab-four-content tab-content-bg review-content lost"
                                     role="tabpanel" aria-labelledby="menu3-tab" >
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="rating-left">
                                                <h2>4.5</h2>
                                                <ul className="green-starts">
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star-half-o"></i></a></li>
                                                </ul>
                                                <span>average rating</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="rating-right">
                                                <div className="review-title">
                                                    <h4>course reviews</h4>
                                                </div>
                                                <div className="single-review">
                                                    <div className="progress-part">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="start-part">
                                                        <ul className="yellow-starts">
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="percentage-part">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                                <div className="single-review">
                                                    <div className="progress-part">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="start-part">
                                                        <ul className="yellow-starts">
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="percentage-part">
                                                        <span>50%</span>
                                                    </div>
                                                </div>
                                                <div className="single-review">
                                                    <div className="progress-part">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="start-part">
                                                        <ul className="yellow-starts">
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="percentage-part">
                                                        <span>20%</span>
                                                    </div>
                                                </div>
                                                <div className="single-review">
                                                    <div className="progress-part">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="start-part">
                                                        <ul className="yellow-starts">
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="percentage-part">
                                                        <span>10%</span>
                                                    </div>
                                                </div>
                                                <div className="single-review">
                                                    <div className="progress-part">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="start-part">
                                                        <ul className="yellow-starts">
                                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="percentage-part">
                                                        <span>10%</span>
                                                    </div>
                                                </div>
                                            </div>
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
        </div>
     );
}
 
export default Course;