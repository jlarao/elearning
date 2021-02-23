import React from 'react';
import { useSelector } from "react-redux";
const ListadoVideos = ({curso}) => {
    //if(curso)
    

    return ( <div className="video-playlist-sidebar">
    <h4>{curso.nombreCurso}</h4>
    <div className="curriculum-accordion margin-top-30">
        <div className="accordion-wrapper tab-margin-bottom-50" id="accordionExample">
            <div className="card box-shadow-none">
                <div className="card-header" id="headingOne">
                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">introduction</a>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 01
                            </a>
                            <span>02:50</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 02
                            </a>
                            <span>03:20</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card box-shadow-none">
                <div className="card-header" id="headingTwo">
                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">basic knowledge</a>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 01
                            </a>
                            <span>02:50</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 02
                            </a>
                            <span>03:20</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 03
                            </a>
                            <span>04:10</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 04
                            </a>
                            <span>07:20</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 05
                            </a>
                            <span>08:40</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingThree">
                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">theme development</a>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 01
                            </a>
                            <span>02:50</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 02
                            </a>
                            <span>03:20</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 03
                            </a>
                            <span>04:10</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 04
                            </a>
                            <span>07:20</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingFour">
                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">plugin development</a>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 01
                            </a>
                            <span>02:50</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 02
                            </a>
                            <span>03:20</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 03
                            </a>
                            <span>04:10</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 04
                            </a>
                            <span>07:20</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 05
                            </a>
                            <span>08:40</span>
                        </div>
                        <div className="single-course-video">
                            <a href="#" className="button-video">
                                <i className="fa fa-play-circle"></i> lesson 06
                            </a>
                            <span>08:40</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> );
}
 
export default ListadoVideos;