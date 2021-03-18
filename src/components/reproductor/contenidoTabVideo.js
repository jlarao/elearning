import React from 'react';

const ContenidoTabVideo = ({curso}) => {
    return ( 

        <React.Fragment>
            <div className="tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist"> 
                    <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"  role="tab" aria-controls="home" aria-selected="true"><span>Resumen</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="menu1-tab" data-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false"><span><span>Preguntas</span></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="menu2-tab" data-toggle="tab" href="#menu2" role="tab" aria-controls="menu2" aria-selected="false"><span><span>Notas</span></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="menu3-tab" data-toggle="tab" href="#menu3" role="tab" aria-controls="menu3" aria-selected="false"><span><span>Anuncios</span></span></a>                                        
                    </li>
                </ul>
                <div className="hr-line"></div>
            </div>
            <div className="tab-content">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="video-tab-title">
                                        <h5>Descripcion del curso</h5>
                                    </div>
                                    <p className="margin-top-20">{curso.descripcion}</p>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>¿Que arenderas?</h5>
                                    </div>
                                    <div className="content-list-items margin-top-20">
                                        <div className="row">
                                        <p>{curso.que_aprenderas}</p>
                                        </div>
                                    </div>
                                    <div className="video-tab-title margin-top-30">
                                        <h5></h5>
                                    </div>
                                    <div className="content-list-items margin-top-20">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-checks"></i> </span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="video-tab-title margin-top-30">
                                        <h5></h5>
                                    </div>
                                    <p className="margin-top-20"></p>
                                    
                                   
                                   
                                </div>

                                <div className="tab-pane container fade tab-two-content tab-content-bg q-a-content lost" id="menu1"role="tabpanel" aria-labelledby="menu1-tab">
                                    <div className="header-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search Question"/>
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>10 questions in this course</h5>
                                    </div>
                                    <div className="hr-line"></div>
                                    <div className="single-question">
                                        <div className="question-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-10" alt="ten-answers"/>
                                        </div>
                                        <div className="question-content">
                                            <h6>how to install wordpress in cpanel?</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                                            <div className="content-bottom">
                                                <h6>john doe</h6>
                                                <span>5 min ago</span>
                                                <span><a href="#"><i className="fa fa-comments"></i> 10 comments</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-question">
                                        <div className="question-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-11" alt="single"/>
                                        </div>
                                        <div className="question-content">
                                            <h6>how to install wordpress in cpanel?</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                                            <div className="content-bottom">
                                                <h6>john doe</h6>
                                                <span>5 min ago</span>
                                                <span><a href="#"><i className="fa fa-comments"></i> 10 comments</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-question">
                                        <div className="question-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-12" alt="questions"/>
                                        </div>
                                        <div className="question-content">
                                            <h6>how to install wordpress in cpanel?</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                                            <div className="content-bottom">
                                                <h6>john doe</h6>
                                                <span>5 min ago</span>
                                                <span><a href="#"><i className="fa fa-comments"></i> 10 comments</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-question">
                                        <div className="question-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-13" alt="question"/>
                                        </div>
                                        <div className="question-content">
                                            <h6>how to install wordpress in cpanel?</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                                            <div className="content-bottom">
                                                <h6>john doe</h6>
                                                <span>5 min ago</span>
                                                <span><a href="#"><i className="fa fa-comments"></i> 10 comments</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane  fade tab-three-content tab-content-bg note-content lost" id="menu2" role="tabpanel" aria-labelledby="menu2-tab">
                                    <div className="header-search">
                                        <form action="#">
                                            <input type="text" placeholder="Create New Note"/>
                                            <button type="submit"><i className="fa fa-plus"></i></button>
                                        </form>
                                    </div>
                                    <span>Click the "Create a new note" box, the "+" button, or press "N" to make your first note.</span>
                                </div>

                                <div className="tab-pane  fade tab-four-content tab-content-bg announcement-content lost" id="menu3" role="tabpanel" aria-labelledby="menu3-tab">
                                    <div className="announcement-top">
                                        <div className="top-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-15" alt="top-comment"/>
                                        </div>
                                        <div className="top-name">
                                            <h6>john doe</h6>
                                            <span>product designer</span>
                                        </div>
                                    </div>
                                    <h5>My 7 Favorite Learning  Growth Techniques</h5>
                                    <p className="margin-top-20">Hey! <br/>A lot of you have asked me for my personal approach towards learning, how I learn new things and how I overcome motivational issues.In this article and video, I share my seven favorite techniques,</p>
                                    
                                    <p className="margin-top-20">"hacks" and thoughts on those topics - and I hope they are helpful to you as well!</p>
                                    
                                    <p className="margin-top-20">Unfortunately this will result in delayed responses by me in the QA section and to direct messages. This is only for the next week and once back I will be back to 100%.</p>
                                    
                                    <p className="margin-top-20">I will continue to do my best to respond to as many questions as possible but only one person, regularly I spend 4-5 hours daily on this and with over 440000 students as you can image that its a lot of work.</p>
                                    <div className="announcement-comment margin-top-30">
                                        <div className="comment-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-14" alt="comments"/>
                                        </div>
                                        <div className="comment-box">
                                            <form action="#">
                                                <input type="text" placeholder="Enter Your Comment"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </React.Fragment>
    );
}
 
export default ContenidoTabVideo;