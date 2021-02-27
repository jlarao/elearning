import React from 'react';

const CourseDetails = () => {
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
                                            <span>$ 200.00</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-user-circle"></i> instructor</span>
                                        </div>
                                        <div className="item-right">
                                            <span>john doe</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-clock"></i> duration</span>
                                        </div>
                                        <div className="item-right">
                                            <span>16 hourse</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-file-video"></i> lecture</span>
                                        </div>
                                        <div className="item-right">
                                            <span>20</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-shopping-cart"></i> enrolled</span>
                                        </div>
                                        <div className="item-right">
                                            <span>50 student</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-language"></i> language</span>
                                        </div>
                                        <div className="item-right">
                                            <span>english</span>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="item-left">
                                            <span><i className="fa fa-calendar"></i> deadline</span>
                                        </div>
                                        <div className="item-right">
                                            <span>22 oct 2020</span>
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
                                    
                                    <a href="#" className="template-button">buy this course</a>
                                </div>
                            </div>
                        </div>
                    </div>
     );
}
 
export default CourseDetails;