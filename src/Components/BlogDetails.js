import React, { useEffect, useState } from 'react'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'
import { useParams } from 'react-router-dom'
import { fetchSingleBlog } from '../Helpers/Api'

export default function BlogDetails() {
  var params = useParams();
  var [blog, setBlog] = useState(false);
  useEffect(() => {
    fetchSingleBlog(params.slug)
    .then(response => setBlog(response));
  }, [params.slug]);

  function createMarkup(blog) {
    return {__html: blog.content.rendered};
  }
  
  
 if(!blog){
  return (
    <>
    <Sidebar />
    </>
  );
 } 

  return (
    <>
    <Sidebar />

    <section className='blog-details__page'>
      <div className="container" style={{padding: "100px 180px"}}>
        <div className="order-md-1 order-2">
          <img src={blog.fimg_url} alt='' />
        </div>
        <div className="blog-description order-md-2 order-1">
            <div className="blog-head mt-4">
                <h3>{blog.title.rendered}</h3>
            </div>
            <div className="blog-date">
                <h5>01 November, 2022</h5>
            </div>
        </div>
        <div className="blog-paragraph mt-5" dangerouslySetInnerHTML={createMarkup(blog)}>
        </div>
      </div>
    </section>

    <section className="latest-blogs mb-15">
                <div className="container">
                    <div>
                        <div className="latest-blogs__header mb-5">
                            <h3>Related Z21 Blogs</h3>
                        </div>
                        <div className="latest-blogs__container">

                        </div>
                    </div>
                </div>
            </section>
    <Footer/>
    </>
  )
}
