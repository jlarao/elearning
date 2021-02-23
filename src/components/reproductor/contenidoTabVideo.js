import React from 'react';

const ContenidoTabVideo = () => {
    return ( 

        <React.Fragment>
            <div className="tab">
                <ul className="nav nav-tabs"> 
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home"><span>overview</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu1"><span><span>Q&A</span></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu2"><span><span>note</span></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu3"><span><span>announcement</span></span></a>                                        
                    </li>
                </ul>
                <div className="hr-line"></div>
            </div>
            <div className="tab-content">
                                <div className="tab-pane container" id="home">
                                    <div className="video-tab-title">
                                        <h5>about this course</h5>
                                    </div>
                                    <p className="margin-top-20">Advanced story telling techniques for writers: Personas, Characters & Plots  Proven Tips and Tricks of the Digital Marketing Trade growth Hacking. Unique Ways of Promoting a Business from Scratch</p>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>what you'll learn?</h5>
                                    </div>
                                    <div className="content-list-items margin-top-20">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> Delectus harum deserunt ut optio corporis cum facilis aliquid tempore</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> Veniam maiores adipisci placeat ipsa dolorem culpa ipsam tenetur</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> Minima fugit nobis earum exercitationem a deleniti veniam maiores</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> Atque minima fugit nobis earum exercitationem ipsa obcaecati</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>by the numbers</h5>
                                    </div>
                                    <div className="content-list-items margin-top-20">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> skill level : beginner</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> lecture : 40</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> student : 50</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> video length : 02:00</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="single-list"><i className="fa fa-check"></i> language : english</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>certificate</h5>
                                    </div>
                                    <p className="margin-top-20">Get Course certificate by completing entire course</p>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>description</h5>
                                    </div>
                                    <p className="margin-top-20">This course is aimed at teaching photographers what it takes to improve your techniques to earn more money.You'll start with the basics and tackle how a camera operates, the types of cameras and lenses available, and equipment you'll need for accomplishing your goals. </p>
                                    <span className="uppercase-font">UPDATED WITH A 273-PAGE NOTEBOOK & NEW LESSONS</span>
                                    <p className="margin-top-20">This online photography course will teach you how to take amazing images and even sell them, whether you use a smartphone, mirrorless or DSLR camera. </p>
                                    <ul className="caret-list">
                                        <li><i className="fa fa-caret-right"></i> What do all these packages, tools, libraries and frameworks do?</li>
                                        <li><i className="fa fa-caret-right"></i> What IS a library and what's the difference to a framework?</li>
                                        <li><i className="fa fa-caret-right"></i> Which framework should you learn? Angular, React.js or Vue.js?</li>
                                        <li><i className="fa fa-caret-right"></i> What about jQuery?</li>
                                    </ul>
                                    <div className="video-tab-title margin-top-30">
                                        <h5>what you will learn</h5>
                                    </div>
                                    <ul className="caret-list">
                                        <li><i className="fa fa-caret-right"></i> Understand how cameras work and what gear you need</li>
                                        <li><i className="fa fa-caret-right"></i> Master shooting in manual mode and understanding your camera</li>
                                        <li><i className="fa fa-caret-right"></i> Know what equipment you should buy no matter what your budget</li>
                                        <li><i className="fa fa-caret-right"></i> Follow our practical demonstrations to see how we shoot in real-world scenarios</li>
                                    </ul>
                                </div>

                                <div className="tab-pane container fade tab-two-content tab-content-bg q-a-content lost" id="menu1">
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
                                            <img src="https://placeimg.com/100/100/people?tutors-10" alt="image"/>
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
                                            <img src="https://placeimg.com/100/100/people?tutors-11" alt="image"/>
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
                                            <img src="https://placeimg.com/100/100/people?tutors-12" alt="image"/>
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
                                            <img src="https://placeimg.com/100/100/people?tutors-13" alt="image"/>
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

                                <div className="tab-pane container fade tab-three-content tab-content-bg note-content lost" id="menu2">
                                    <div className="header-search">
                                        <form action="#">
                                            <input type="text" placeholder="Create New Note"/>
                                            <button type="submit"><i className="fa fa-plus"></i></button>
                                        </form>
                                    </div>
                                    <span>Click the "Create a new note" box, the "+" button, or press "N" to make your first note.</span>
                                </div>

                                <div className="tab-pane container fade tab-four-content tab-content-bg announcement-content lost" id="menu3">
                                    <div className="announcement-top">
                                        <div className="top-image">
                                            <img src="https://placeimg.com/100/100/people?tutors-15" alt="image"/>
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
                                            <img src="https://placeimg.com/100/100/people?tutors-14" alt="image"/>
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