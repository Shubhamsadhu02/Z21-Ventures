import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar'
import InvestmentCompanies from './InvestmentCompanies'
// import Header from '../partials/Header'

export default function Home() {
  return (
    <>
    <Sidebar/>

    <section className='top-section' style={{background: "url('/images/Home/homebg.png')", backgroundSize: "cover" ,height:"768px"}}>
        <div className="container-fluid text-center">
            <div className="home-header">
                <h1>We Invest In India.</h1>
            </div>
            <div className="home-paragrapgh mt-4">
                <p>Democratize early stage venture investing for all of us</p>
            </div>
            <div className="contact-btn mt-4">
                <button type='submit'>Contact us</button>
            </div>
        </div>
    </section>

    <section className='ventures-funds mt-15'>
        <div className="container">
            <div className="fund-sub--header text-center">
                <h4>Z21 Ventures Fund</h4>
            </div>
            <div className="fund-header text-center mt-4">
                <h2>Unique Selling Point</h2>
            </div>

            <div className="row" style={{marginTop: "6rem"}}>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="fund-card">
                        <div className="fund-img">
                            <img src='/images/Home/community.png' alt=''/>
                        </div>
                        <div className="fund-topic mt-4">
                            <h3>Community </h3>
                        </div>
                        <div className="fund-paragraph mt-4">
                            <p>Z21 Community is going to be one of the largest communities of entrepreneurs, executives, and innovation enthusiasts that will be available to help the companies on specific problems.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="fund-card">
                        <div className="fund-img">
                            <img src='/images/Home/corporate.png' alt=''/>
                        </div>
                        <div className="fund-topic mt-4">
                            <h3>Corporate Partnerships  </h3>
                        </div>
                        <div className="fund-paragraph mt-4">
                            <p>Z21 will have partnerships with hundreds of Corporate Development teams across the world to facilitate partnerships for portfolio companies.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="fund-card">
                        <div className="fund-img">
                            <img src='/images/Home/investor.png' alt=''/>
                        </div>
                        <div className="fund-topic mt-4">
                            <h3>Investor Partnerships  </h3>
                        </div>
                        <div className="fund-paragraph mt-4">
                            <p>Z21 will have partnerships with hundreds of later stage investors and will facilitate introductions for later stage investments.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="fund-card">
                        <div className="fund-img">
                            <img src='/images/Home/ledearship.png' alt=''/>
                        </div>
                        <div className="fund-topic mt-4">
                            <h3>Leadership Summit  </h3>
                        </div>
                        <div className="fund-paragraph mt-4">
                            <p>Held at Stanford every year, Z21 Leadership Summit will get portfolio leaders across the world to come meet executives from hundreds of tech companies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="investment mt-15">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 p-5 d-flex justify-content-center">
                    <div className="investment-img">
                        <img src='/images/Home/investment.png' alt=''/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="investment-header">
                        <h2>Investment Philosophy</h2>
                    </div>
                    <div className="investment-paragraph">
                        <p>The Indian startup scene is set to explode over the next decade. The country with an abundant pool of world class, cheap technology talent also has access to one of the most diverse and fast growing home markets. There is also a very strong India-US technology corridor with strong exchanges in technology, people</p>
                    </div>
                    <div className="read-btn red-btn">
                        <button type='submit'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <InvestmentCompanies />
    <Footer />
    </>
  )
}
