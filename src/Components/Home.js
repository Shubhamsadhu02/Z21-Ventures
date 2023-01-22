import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar'
import InvestmentCompanies from './InvestmentCompanies'

export default function Home() {
  return (
    <>
    <Sidebar/>

    <section className='top-section' style={{background: "url('/images/Home/homebg.png')", backgroundSize: "cover" ,height:"700px"}}>
        <div className="container-fluid text-center d-flex flex-column align-items-center" style={{width: "890px"}}>
            <div className="home-header">
                <h1>We help companies go from zero to one</h1>
            </div>
            <div className="home-paragrapgh text-center mt-5" style={{width: "573px"}}>
                <p>A venture fund for early-stage companies that are looking to drive growth by leveraging technology and talent in India</p>
            </div>
            <div className="contact-btn mt-5">
                <Link to={'/contact'}><button type='submit'>Contact us</button></Link>
            </div>
        </div>
    </section>

    <section className='ventures-funds mt-15'>
        <div className="container">
            <div className="fund-sub--header text-center">
                <h4>Z21 Ventures Fund</h4>
            </div>
            <div className="fund-header text-center mt-4">
                <h2>The power of a community</h2>
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
                            <p>One of the largest communities of
                                entrepreneurs, executives, and innovation enthusiasts that will be available to help the companies on specific problems and scale</p>
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
                            <p>Work with our partner corporate development teams across the world to facilitate partnerships for portfolio companies</p>
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
                            <p>Get introductions to our partner investors for later stage investments</p>
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
                            <p>Meet executives from hundreds of tech companies, late stage investors, and leaders from other portfolio companies at the yearly Z21 Leadership Summit at Stanford</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="investment mt-15 mb-15">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="investment-img">
                        <img src='/images/Home/investment.png' alt='' height={307} width={448}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ">
                    <div className="investment-header">
                        <h2>A community to grow and support your company</h2>
                    </div>
                    <div className="investment-paragraph mt-4">
                        <p>The Indian startup scene is exploding. Z21 Ventures aims to support it and help it grow further by creating a community of mentor investors who bring in their expertise at the early stages of the company building process</p>
                    </div>
                    <div className="read-btn red-btn mt-4">
                        <Link to={'/investment'}><button type='submit'>Read More</button></Link>
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
