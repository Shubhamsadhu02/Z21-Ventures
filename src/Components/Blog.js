import React from 'react'
import { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'
import { fetchBlogs, fetchVideos } from '../Helpers/Api'
import BlogCard from './BlogCard'

export default function Blog() {
    var [blogs, setBlogs] = useState([]); 
    var [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs()
        .then( result => setBlogs(result));

        fetchVideos().then(result => setVideos(result));

    }, []);
    
    function createTitleMarkup(data) {
        return {__html: data.rendered};
      }
    
    return (
        <>
            <Sidebar />

            <section className="latest-blogs" style={{ background: "rgba(81, 91, 112, 0.04)"}}>
                <div className="container">
                    <div>
                        <div className="latest-blogs__header mb-5">
                            <div className="row">
                                <div className="col-12">
                                <h3>Videos</h3>
                                </div>
                            </div>
                            
                        </div>
                        <div className="latest-blogs__container">
                            <div className="row">
                            {
                                videos.length < 1 ? "No Videos Present" : videos.map((video) => {
                                    return (
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="video">
                                        {/* For testing */}
                                        <iframe src={video.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="video-description">
                                        <div className="video-head mt-4">
                                            <h3 style={{ color: "#111318" }} dangerouslySetInnerHTML={createTitleMarkup(video.title)}></h3>
                                        </div>
                                    </div>
                                </div>);
                                })
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-blogs mt-2 mb-5">
                <div className="container">
                    <div className="latest-blogs__header">
                        <div className="row">
                            <div className="col-12">
                            <h3>Latest Z21 Blogs</h3>
                            </div>
                        </div>
                    </div>

                    <div className="latest-blogs__container">
                        <div className='row'>
                            {
                                blogs.length < 1 ? "No Blogs Present" : blogs.map((blog) => {
                                    return (<BlogCard thumbnail={blog.fimg_url} 
                                                        title={blog.title.rendered} slug={blog.slug} />);
                                })
                            }
                        </div>
                        {
                            blogs.length < 6?""
                            :
                        <div className="blog-view__more mt-5 d-flex justify-content-center">
                            <button type='button'>View More</button>
                        </div>
                        }
                        
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
