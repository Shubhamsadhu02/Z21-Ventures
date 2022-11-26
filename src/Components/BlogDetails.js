import React, { useEffect, useState } from 'react'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'
import { useParams } from 'react-router-dom'
import { fetchSingleBlog, fetchRelatedBlogs } from '../Helpers/Api'
import BlogCard from './BlogCard'

export default function BlogDetails() {
  var params = useParams();
  var [blog, setBlog] = useState(false);
  var [blogs, setBlogs] = useState([]); 
  useEffect(() => {
    fetchSingleBlog(params.slug)
    .then(response => setBlog(response));
    fetchRelatedBlogs()
        .then( result => setBlogs(result));
  }, [params.slug]);

  function createMarkup(blog) {
    return {__html: blog.content.rendered};
  }
  function formatDate(date) {
    var d = new Date(date),
        month = d.toLocaleString('default', { month: 'long' }),
        day = d.getDate(),
        year = d.getFullYear();


    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return `${day} ${month}, ${year}`;
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
                <h5>{formatDate(blog.modified)}</h5>
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
                          <div className="row">
                          {
                                blogs.length < 1 ? "No Blogs Present" : blogs.map((blog) => {
                                    return (<BlogCard thumbnail={blog.fimg_url} 
                                                        title={blog.title.rendered} slug={blog.slug} />);
                                })
                            }
                          </div>
                        
                        </div>
                    </div>
                </div>
            </section>
    <Footer/>
    </>
  )
}
