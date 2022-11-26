import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function BlogCard({ thumbnail, slug, title }) {
    const navigate = useNavigate();
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 mt-4 mb-2">
                                <div className="blog-image" onClick={()=>navigate("/blog/"+slug)}>
                                    <img src={thumbnail} alt='' />
                                </div>
                                <div className="blog-description">
                                    <h3 className="blog-head">
                                        {title}
                                    </h3>
                                    <div className="read-more">
                                        <Link to={"/blog/"+slug}>Read more</Link>
                                    </div>
                                </div>
                            </div>
  )
}
