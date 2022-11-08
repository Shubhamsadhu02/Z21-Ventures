import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar'

export default function OurTeam() {
  return (
    <>
   <Sidebar/>

    <section>
        <div className="container">
            <div className="our-team--header mt-5">
                <h1>Our Team</h1>
            </div>
        </div>
    </section>

    <section className='team-members mb-15'>
        <div className="container">
            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/Abhinav.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Abhinav Shashank</h2>
                        </div>
                        <div className="team-designation mt-4">
                            <h5>General Partner</h5>
                        </div>
                        <div className="team-paragraph mt-4">
                            <p>CEO and CO-founder of Innovaccer, a healthcare technology company. Innovaccer is one of the largest SaaS companies coming out of India. Innovaccer was valued at &gt;$3B in 2021. Abhinav has a BTech from IIT Kharagpur and worked at Ingersoll Rand before starting Innovaccer in 2012. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                        <div className="team-name">
                            <h2>Raj Shekhar Singh</h2>
                        </div>
                        <div className="team-designation mt-4">
                            <h5>General Partner</h5>
                        </div>
                        <div className="team-paragraph mt-4">
                            <p>The COO and Cofounder at Hyperspec AI, a deep tech company developing technology for autonomous driving. Raj was one of the founding executives and head of product at Innovaccer between 2017-2022, Raj also worked as a consultant at McKinsey & Co before that. Raj has a BTech from IIT Kharagpur, PhD from UC Berkeley.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end order-md-2 order-1">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/shekar.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/tony.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Tony Hu</h2>
                        </div>
                        <div className="team-designation mt-4">
                            <h5>Legal counsel</h5>
                        </div>
                        <div className="team-paragraph mt-4">
                            <p>He has a JD from Berkeley Law and a BA from UC Berkeley. He is the founder and managing partner of Hu LLP. Mr. Hu also serves as the assistant manager and in-house counsel of a 501(c)(3) non-profit organization based in the Bay Area.
                                <br/>
                                <br/>
                                Mr. Hu is currently completing a part-time Tax LLM program at the NYU Law School, and he has published two well received tax law articles. Mr. Hu clerked for the United States Attorneys' Office in San Francisco and Los Angeles during law school.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                        <div className="team-name">
                            <h2>Jyotika Gupta</h2>
                        </div>
                        {/* <div className="team-designation mt-4">
                            <h5>Operating Partner</h5>
                        </div> */}
                        <div className="team-paragraph mt-4">
                            <p>Jyotika Gupta is a business operations leader at Glassdoor, based out of San Francisco. Prior to joining Glassdoor, Jyotika worked in various strategy and analytical roles at Marketsandmarkets, Accenture and Merilytics. Jyotika has an MBA from Indian School of Business and completed her undergraduate studies from IIT Kharagpur.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end order-md-2 order-1">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/jyotika.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/anand.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Anand Akela</h2>
                        </div>
                        {/* <div className="team-designation mt-4">
                            <h5>Operating Partner</h5>
                        </div> */}
                        <div className="team-paragraph mt-4">
                            <p>Anand is a seasoned GTM strategy and marketing executive. Most recently, he was the VP of Marketing at Nutanix. Prior to Nutanix, Anand led various product marketing, product management, and engineering roles at Tricentis, CA Technologies, AppDynamics, Oracle, and HP. Anand serves on the board of TiE, a non-profit with a goal to foster entrepreneurship. Anand has an MBA from Fuqua School of Business, Duke University, and a B.S. in Computer Science from Pune University.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                        <div className="team-name">
                            <h2>Dibyendu Rana</h2>
                        </div>
                        {/* <div className="team-designation mt-4">
                            <h5>Operating Partner</h5>
                        </div> */}
                        <div className="team-paragraph mt-4">
                            <p>Dibyendu is a senior technologist at Apple. Prior to Apple, Dibyendu was an engineer at Fairchild Semiconductor. Dibyendu has a graduate degree in Power Electronics from Texas A&M University and a BTech from IIT Kharagpur.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end order-md-2 order-1">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/dibyendu.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/ankit.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Ankit Bhangar</h2>
                        </div>
                        {/* <div className="team-designation mt-4">
                            <h5>Operating Partner</h5>
                        </div> */}
                        <div className="team-paragraph mt-4">
                            <p>Ankit Bhangar is Director - Risk Measurement at Barclays. Ankit is an experienced risk management & analytics professional with extensive experience in the financial services industry. Ankit has a Masters in Mathematics and Computing from IIT Kharagpur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    </>
  )
}
