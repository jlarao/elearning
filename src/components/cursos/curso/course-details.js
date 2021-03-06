import React from 'react';
import { Link } from "react-router-dom";
const CourseDetails = ({ curso }) => {
    return ( 
        <div className="col-lg-4">
                        <div className="course-details-sidebar">
                            <div className="course-details-widget">
                                <div className="course-widget-title">
                                    <h4>course details</h4>
                                </div>
                                <div className="course-widget-items">
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-dollar-sign"></i> price</span>
                                        </div>
                                        <div className="item-right">
                                            <span>$ {curso.precio}</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-user-circle"></i> instructor</span>
                                        </div>
                                        <div className="item-right">
                                            <span>{curso.nombre} {curso.apellidoPaterno}</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-clock"></i> duración</span>
                                        </div>
                                        <div className="item-right">
                                            <span>{curso.duracion} </span>
                                        </div>
                                    </div>
                                    
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-shopping-cart"></i> estudiantes</span>
                                        </div>
                                        <div className="item-right">
                                            <span>50 student</span>
                                        </div>
                                    </div>
                                   
                                   
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-share-alt"></i> share</span>
                                        </div>
                                        <div className="item-right">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-widget-buttons">
                                    
                                    
                                    <Link to="/comprar" className="template-button">Comprar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
     );
}
 
export default CourseDetails;