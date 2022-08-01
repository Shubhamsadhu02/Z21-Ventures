import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar'

import InvestmentCompanies from './InvestmentCompanies'

export default function Investment() {
  return (
    <>
    <Sidebar/>

    <section className='top-section' style={{background: "url('/images/Investment/investmentbg.png')", backgroundSize: "cover" ,height:"768px"}}>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="top-arrow">
                <img src='/images/Investment/arrow.png' alt=''/>
            </div>
            <div className="home-header">
                <h1>Investment Philosophy.</h1>
            </div>
            <div className="home-paragrapgh text-center mt-4" style={{width: "750px"}}>
                <p>The Indian startup scene is set to explode over the next decade. The country with an abundant pool of world class, cheap technology talent also has access to one of the most diverse and fast-growing home markets. There is also a very strong India-US technology corridor with strong exchanges in technology, people and expertise. This has created a goldilocks moment in India's startup ecosystem. Z21 Ventures Fund will aim to focus and provide value to both the startups and investors. 
                    <br/>
                    <br/>
                    Z21 Ventures Fund will aim to create a large pool of seed funded technology startups who are ready to disrupt various sectors across the world. The goal would be to identify early-stage technology companies and invest in them.
                </p>
            </div>
        </div>
    </section>

    <section className='core mt-15'>
        <div className="container">
            <div className="core-header text-center mb-5">
                <h2>Core Values</h2>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="fund-img">
                        <img src='/images/Investment/build.png' alt=''/>
                    </div>
                    <div className="core-topic mt-4">
                        <h3>Build a community</h3>
                    </div>
                    <div className="core-paragraph mt-4">
                        <p>Build a community of LPs, Startups, other investors, and corporate partners which support the growth of the company and provide value</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="fund-img">
                        <img src='/images/Investment/transparent.png' alt=''/>
                    </div>
                    <div className="core-topic mt-4">
                        <h3>Be Transparent</h3>
                    </div>
                    <div className="core-paragraph mt-4">
                        <p>Provide all information transparently to the LPs. Z21 will use Carta platform and Slack to disseminate information and provide documentation.
                            <br/>
                            <br/>
                            Transparent process on selection of startups
                            </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="core-img">
                        <img src='/images/Investment/india.png' alt=''/>
                    </div>
                    <div className="core-topic mt-4">
                        <h3>India First</h3>
                    </div>
                    <div className="core-paragraph mt-4">
                        <p>Focus on startups with strong India connections, and startups that can leverage the growing Indian market or the large tech talent there.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='necessary mt-15' style={{background: "url('/images/Investment/investmentbg2.png')", backgroundSize: "cover" ,height:"923px", padding:"150px 100px"}}>
        <div className="container">
            <div className="necessary-header text-center">
                <h2 style={{color: "#FFFFFF"}}>Necessary attribute <br/> for the startups</h2>
            </div>
            <div className="necessary-paragrapgh text-center mt-5" style={{position: "relative", left: "20%" ,width: "650px" }}>
                <p style={{color: "#FFFFFF"}}>Startups need to be technology focused and should be able to leverage large and affordable technology talent in India to power growth. The weighted average of the following attributes will be taken into consideration when deciding on any investment.</p>
            </div>

            <div className="row" style={{marginTop: "7rem"}}>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="necessary-box">
                        <div className="necessary-topic">
                            <h3>Team</h3>
                        </div>
                        <div className="necessary-list">
                            <ul>
                                <li>Pedigree of founders and team</li>
                                <li>Work experience of the team</li>
                                <li>Hustle and motivation</li>
                                <li>Co-founder chemistry</li>
                                <li>Tech talent in the team</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="necessary-box">
                        <div className="necessary-topic">
                            <h3>Market</h3>
                        </div>
                        <div className="necessary-list">
                            <ul>
                                <li>Large TAM and SAM</li>
                                <li>Barrier to entry</li>
                                <li>Competitive landscape</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="necessary-box">
                        <div className="necessary-topic">
                            <h3>Traction</h3>
                        </div>
                        <div className="necessary-list">
                            <ul>
                                <li>Product Market Fit</li>
                                <li>Current revenue</li>
                                <li>Number of customers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='interaction mt-15'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center" style={{paddingRight: "65px"}}>
                    <div className="interaction-header">
                        <h2>Interaction with LPs</h2>
                    </div>
                    <div className="interaction-paragraph mt-4">
                        <p>Z21 is looking to build a community of ‘Invite Only’ LPs who are not just investors but are also looking to help and support the startups grow. Z21 will provide the LPs</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="interaction-lps">
                        <div className="interaction-lps--img">
                            <img src='/images/Investment/interaction1.png' alt=''/>
                        </div>
                        <div className="interaction-lps--paragraph">
                            <p>Access to curated list of startups</p>
                        </div>
                    </div>

                    <div className="interaction-lps">
                        <div className="interaction-lps--img">
                            <img src='/images/Investment/interaction4.png' alt=''/>
                        </div>
                        <div className="interaction-lps--paragraph">
                            <p>A community where LPs can interact with other LPs and founders</p>
                        </div>
                    </div>

                    <div className="interaction-lps">
                        <div className="interaction-lps--img">
                            <img src='/images/Investment/interaction2.png' alt=''/>
                        </div>
                        <div className="interaction-lps--paragraph">
                            <p>Opportunity to advise and engage with their chosen startups</p>
                        </div>
                    </div>

                    <div className="interaction-lps">
                        <div className="interaction-lps--img">
                            <img src='/images/Investment/interaction5.png' alt=''/>
                        </div>
                        <div className="interaction-lps--paragraph">
                            <p>Get involved in the due diligence and evaluation of potential investments</p>
                        </div>
                    </div>

                    <div className="interaction-lps">
                        <div className="interaction-lps--img">
                            <img src='/images/Investment/interaction3.png' alt=''/>
                        </div>
                        <div className="interaction-lps--paragraph">
                            <p>Participate in Z21 events</p>
                        </div>
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
