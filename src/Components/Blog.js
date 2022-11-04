import React from 'react'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'

export default function Blog() {
    return (
        <>
            <Sidebar />

            <section className="blog" style={{ background: "#BE3222", padding: "100px 120px" }}>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8 col-lg-8">
                                <div className="video">
                                    {/* this iframe is for testing */}
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
                                        {/* this iframe is for testing */}
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
                                        {/* this iframe is for testing */}
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
                                        {/* this iframe is for testing */}
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

            <section className="latest-blogs mt-15 mb-15">
                <div className="container">
                    <div>
                        <div className="latest-blogs__header mb-5">
                            <h3>Latest Z21 Blogs</h3>
                        </div>
                        <div className="latest-blogs__container">

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
