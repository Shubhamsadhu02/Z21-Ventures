import React from 'react'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'

export default function BlogDetails() {
  return (
    <>
    <Sidebar />

    <section className='blog-details__page'>
      <div className="container" style={{padding: "100px 180px"}}>
        <div className="blog-image order-md-1 order-2">
          <img src='/images/Blog/blogimg.png' alt='' />
        </div>
        <div className="blog-description order-md-2 order-1">
            <div className="blog-head mt-4">
                <h3>The perfect pitch deck - By Zack Snyder</h3>
            </div>
            <div className="blog-date">
                <h5>01 November, 2022</h5>
            </div>
        </div>
        <div className="blog-paragraph mt-5">
          <p>A flotilla of tankers carrying liquefied natural gas have been parked in a maritime traffic jam off the coast of Spain in recent days, waiting to unload their precious cargo for Europe’s power grid. In Finland, where sweltering sauna baths are a national pastime, the government is urging friends and families to take saunas together to save energy.
          <br/>
          <br/>
          Both efforts are emblematic of the measures Europe is taking to increase energy supplies and conserve fuel before a winter without Russian gas.
          <br/>
          <br/>
          The tactic by President Vladimir V. Putin of Russia to weaponize energy against countries supporting Ukraine has produced a startling transformation in how Europe generates and saves power. Countries are banding together to buy, borrow and build additional power supplies, while pushing out major conservation programs that recall the response to the 1970s oil crisis.
          <br/>
          <br/>
          A flotilla of tankers carrying liquefied natural gas have been parked in a maritime traffic jam off the coast of Spain in recent days, waiting to unload their precious cargo for Europe’s power grid. In Finland, where sweltering sauna baths are a national pastime, the government is urging friends and families to take saunas together to save energy.
          <br/>
          <br/>
          Both efforts are emblematic of the measures Europe is taking to increase energy supplies and conserve fuel before a winter without Russian gas.
          <br/>
          <br/>
          The tactic by President Vladimir V. Putin of Russia to weaponize energy against countries supporting Ukraine has produced a startling transformation in how Europe generates and saves power. Countries are banding together to buy, borrow and build additional power supplies, while pushing out major conservation programs that recall the response to the 1970s oil crisis.</p>
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
