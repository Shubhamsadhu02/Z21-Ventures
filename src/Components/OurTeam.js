import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar'

export default function OurTeam() {
  return (
    <>
   <Sidebar/>

    <section>
        <div className="container mt-5">
            <div className="our-team--header">
                <h1>Our Team</h1>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/Abhinav.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
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
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Raj Shekhar Singh</h2>
                        </div>
                        <div className="team-paragraph mt-4">
                            <p>the COO and Cofounder at Hyperspec AI, a deep tech company developing technology for autonomous driving. Raj was one of the founding executives and head of product at Innovaccer between 2017-2022, Raj also worked as a consultant at McKinsey & Co before that. Raj has a BTech from IIT Kharagpur, PhD from UC Berkeley.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/shekar.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ourteam-box mt-15">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ourteam-img">
                            <img src='/images/OurTeam/tony.png' alt=''/>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="team-name">
                            <h2>Tony (Xiuyuan) Hu</h2>
                        </div>
                        <div className="team-designation mt-4">
                            <h5>Legal counsellor</h5>
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
        </div>
    </section>

    <section className='partner mt-15' style={{background: "#F9FAFA", padding: "150px 100px"}}>
        <div className="container">
            <div className="partner-header text-center">
                <h1>Partners</h1>
            </div>

            <div className="row mt-5" style={{rowGap: "50px"}}>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="partner-list">
                        <div className="partner-img">
                            <img src='' alt=''/>
                        </div>
                        <div className="partner-name mt-4">
                            <h3>Name of partner</h3>
                        </div>
                        <div className="partner-linkdn">
                            <i class="fab fa-linkedin"></i>
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
