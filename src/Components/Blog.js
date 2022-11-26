import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'

export default function Blog() {
    return (
        <>
            <Sidebar />

            <section className="latest-blogs" style={{ background: "rgba(81, 91, 112, 0.04)", padding: "100px 120px" }}>
                <div className="container">
                    <div>
                        <div className="latest-blogs__header mb-5">
                            <h3>Videos</h3>
                        </div>
                        <div className="latest-blogs__container">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="video">
                                        {/* For testing */}
                                        <iframe src="https://www.youtube.com/embed/xZDDOwGqLFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="video-description">
                                        <div className="video-head mt-4">
                                            <h3 style={{ color: "#111318" }}>The perfect pitch deck - By Zack Snyder</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
            <section className="blog" style={{ background: "#BE3222", padding: "100px 120px" }}>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8 col-lg-8">
                                <div className="video">
                                    
                                    <iframe src="https://www.youtube.com/embed/xZDDOwGqLFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-description">
                                    <div className="video-head mt-4">
                                        <h3 style={{ color: "#FFFFFF" }}>The perfect pitch deck - By Zack Snyder</h3>
                                    </div>
                                    <div className="video-date">
                                        <h5 style={{ color: "#FFFFFF" }}>01 November, 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="next-blog__videoes d-flex mb-2">
                                    <div className="short-video">
                                        
                                        <iframe src="https://www.youtube.com/embed/xZDDOwGqLFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="video-description" style={{ marginLeft: "15px" }}>
                                        <div className="video-head">
                                            <h3 style={{ color: "#FFFFFF", fontSize: "14px" }}>The perfect pitch deck - By Zack Snyder</h3>
                                        </div>
                                        <div className="video-date">
                                            <h5 style={{ color: "#FFFFFF", fontSize: "12px" }}>01 November, 2022</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="next-blog__videoes d-flex mb-2">
                                    <div className="short-video">
                                        
                                        <iframe src="https://www.youtube.com/embed/xZDDOwGqLFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="video-description" style={{ marginLeft: "15px" }}>
                                        <div className="video-head">
                                            <h3 style={{ color: "#FFFFFF", fontSize: "14px" }}>The perfect pitch deck - By Zack Snyder</h3>
                                        </div>
                                        <div className="video-date">
                                            <h5 style={{ color: "#FFFFFF", fontSize: "12px" }}>01 November, 2022</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="next-blog__videoes d-flex mb-2">
                                    <div className="short-video">
                                        
                                        <iframe src="https://www.youtube.com/embed/xZDDOwGqLFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="video-description" style={{ marginLeft: "15px" }}>
                                        <div className="video-head">
                                            <h3 style={{ color: "#FFFFFF", fontSize: "14px" }}>The perfect pitch deck - By Zack Snyder</h3>
                                        </div>
                                        <div className="video-date">
                                            <h5 style={{ color: "#FFFFFF", fontSize: "12px" }}>01 November, 2022</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="arrow d-flex justify-content-end mt-4">
                                    <div className="left-arrow">
                                        <i class="fas fa-arrow-left"></i>
                                    </div>
                                    <div className="right-arrow">
                                        <i class="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    */}

            <section className="latest-blogs mt-15 mb-15">
                <div className="container">
                    <div className="latest-blogs__header mb-5">
                        <h3>Latest Z21 Blogs</h3>
                    </div>

                    <div className="latest-blogs__container">
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="blog-image">
                                    <img src='/images/Blog/blog1.png' alt='' />
                                </div>
                                <div className="blog-description">
                                    <div className="blog-head mt-4">
                                        <h3 style={{ color: "#111318" }}>The perfect pitch deck - By Zack Snyder</h3>
                                    </div>
                                    <div className="read-more">
                                        <Link to={"#"}>Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-view__more mt-5 d-flex justify-content-center">
                        <button type='button'>View More</button>
                    </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
