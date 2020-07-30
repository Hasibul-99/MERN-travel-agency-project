import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

export default class Blog extends Component {
    render() {
        return (
            <>
                <HeaderNavbar/>
                <section class="breadcrumb-outer text-center">
                    <div class="container">
                        <div class="breadcrumb-content">
                            <h2>Blog List View</h2>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Destinations</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="section-overlay"></div>
                </section>



                <section class="blog-list grid-list">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-12">
                                <div class="blog-wrapper">                            
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid5.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid2.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid3.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid4.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item grid-item">
                                        <div class="row">
                                            <div class="col-sm-5 col-xs-12">
                                                <div class="blog-image">
                                                    <img src="images/grid.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-sm-7 col-xs-12">
                                                <div class="blog-content">
                                                    <div class="blog-date"><p><i class="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div class="blog-author">
                                                        <div class="pull-left">
                                                            <p><Link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                                        </div>
                                                        <div class="pull-right blog-date-icon">
                                                            <p><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
                                                            <p><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
                                                            <p><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="sidebar-sticky" class="col-md-4 col-sm-12">
                                <aside class="detail-sidebar sidebar-wrapper">
                                    <div class="item-sidebar">
                                        <div class="sidebar-item sidebar-item-dark">
                                            <div class="detail-title">
                                                <h3>Search</h3>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="form-group col-md-12">
                                                        <input type="text" class="form-control" id="Name" 
                                                        placeholder="Enter the place you want to search"/>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="comment-btn">
                                                            <Link to="#" class="btn-blue btn-red">Search Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="post-categories sidebar-item">
                                            <div class="detail-title">
                                                <h3>Categories</h3>
                                            </div>
                                            <ul>
                                                <li><Link to="#">Science</Link></li>
                                                <li><Link to="#">Management</Link></li>
                                                <li><Link to="#">Humanities</Link></li>
                                                <li><Link to="#">Arts</Link></li>
                                                <li><Link to="#">Biology</Link></li>
                                                <li><Link to="#">Technology</Link></li>
                                            </ul>
                                        </div>
                                        <div class="recent-post clearfix sidebar-item">
                                            <div class="detail-title">
                                                <h3>Recent Posts</h3>
                                            </div>
                                            <div class="recent-item">
                                                <div class="recent-image">
                                                    <img src="images/profile1.jpg" alt=""/>
                                                </div>
                                                <div class="recent-content">
                                                    <Link to="#" class="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#" ><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="recent-item">
                                                <div class="recent-image">
                                                    <img src="images/recent2.jpg" alt=""/>
                                                </div>
                                                <div class="recent-content">
                                                    <Link to="#" class="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#" ><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="recent-item">
                                                <div class="recent-image">
                                                    <img src="images/recent1.jpg" alt=""/>
                                                </div>
                                                <div class="recent-content">
                                                    <Link to="#" class="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#" ><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>   
                                            <div class="recent-item">
                                                <div class="recent-image">
                                                    <img src="images/recent2.jpg" alt=""/>
                                                </div>
                                                <div class="recent-content">
                                                    <Link to="#" class="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#" ><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>                            
                                        </div>
                                        <div class="ad1 sidebar-item">
                                            <div class="detail-title">
                                                <h3>Popular Tags</h3>
                                            </div>
                                            <div class="popular-tag-content">
                                                <ul>
                                                    <li><Link to="#">Flights</Link></li>
                                                    <li><Link to="#">Trek</Link></li>
                                                    <li><Link to="#">Travelling</Link></li>
                                                    <li><Link to="#">Cruises</Link></li>
                                                    <li><Link to="#">Sale</Link></li>
                                                    <li><Link to="#">Hotels</Link></li>
                                                    <li><Link to="#">Restaurants</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="popular-post sidebar-item">
                                            <div class="detail-title">
                                                <h3>Popular Posts</h3>
                                            </div>
                                            <div class="popular-item">
                                                <div class="popular-content">
                                                    <span class="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#"><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i class="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-item">
                                            <div class="popular-content">
                                                    <span class="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#"><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i class="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-item">
                                            <div class="popular-content">
                                                    <span class="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#"><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i class="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-item">
                                            <div class="popular-content">
                                                    <span class="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div class="author-detail">
                                                        <p><Link to="#"><i class="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i class="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i class="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}