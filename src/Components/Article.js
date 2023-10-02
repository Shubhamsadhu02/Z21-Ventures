import React from 'react'
import Footer from '../partials/Footer'
import Sidebar from '../partials/Sidebar'

export default function Article() {
    return (
        <>
            <Sidebar />

            <section className='blog-details__page'>
                <div className="container" style={{ padding: "100px 180px" }}>
                    {/* <div className="press-release text-center mb-5">
                        <h1>Z21 Press Release</h1>
                    </div> */}

                    <div className="order-md-1 order-2 text-center">
                        <img src='/images/Blog/article.png' alt='' />
                    </div>
                    <div className="blog-description order-md-2 order-1">
                        <div className="blog-head mt-4">
                            <h3>Z21 Ventures Announces Early-Stage India-Focused Fund To Help Companies Go From Zero To One</h3>
                        </div>
                        <div className="blog-date">
                            <h5>11 November, 2022</h5>
                        </div>
                    </div>
                    <div className="article-detils">
                        {/* <div className="article-head mt-5">
                            <h4>San Francisco, CA– Nov. 09, 2022</h4>
                        </div> */}
                        <div className="blog-paragraph mt-3">
                            <p>Z21 Ventures, an early stage venture fund with a vision to democratize early stage funding, is delighted to announce the launch of Z21 Ventures Fund, their inaugural $5M early-stage venture capital fund, to invest in early-stage companies that are looking to drive growth by leveraging technology and talent in India.
                                <br />
                                <br />
                                The Indian startup scene is set to explode over the next decade. The country with an abundant pool of world class technology talent also has access to one of the most diverse and fast growing home markets. There is also a very strong India-US technology corridor with strong exchanges in technology, people and expertise. This has created a goldilocks moment in India's startup ecosystem. Z21 Ventures Fund will aim to focus and provide value to both the startups and investors.
                                <br />
                                <br />
                                Z21 Ventures Fund aims to create a large pool of seed funded technology startups who are ready to disrupt various sectors across the world. The goal would be to identify early-stage technology companies and invest in them and then support them in their growth with help of a community of investors who are subject matter experts in different technology and business domains.
                                <br />
                                <br />
                                The Z21 Ventures Fund strives to build a community of subject matter experts who are not only willing to invest as limited partners in the fund, but are also excited to participate in selecting, supporting and guiding the early-stage companies. These subject matter experts can really guide the early-stage startups that are just beginning to fine-tune their GTM, product strategy and product market fit etc. Z21 Ventures Fund lowers the barrier to entry for subject matter experts to invest in and guide multiple early-stage technology companies by keeping a lower investment amount and providing access to a diverse set of early stage startups when compared with other peer venture funds and angel networks.
                            </p>
                        </div>
                        <div className="article-head mt-5">
                            <h4>The Team Behind Z21 Ventures</h4>
                        </div>
                        <div className="blog-paragraph mt-3">
                            <p>
                                Z21 Ventures was founded by Abhinav Shashank and Raj Singh. Abhinav is CEO and Co-founder of Innovaccer, a healthcare technology company. Innovaccer is one of the largest SaaS companies coming out of India and was valued more than $3B in 2021. Raj is the COO and Co-Founder at Hyperspec AI, a deep tech company developing technology for autonomous driving. Raj was one of the founding executives and head of product at Innovaccer between 2017-2022.
                                <br />
                                <br />
                                “We were very fortunate to have advisors and subject matter experts who guided us in our journey at Innovaccer as a health cloud leader; however, I saw many startups in India struggle due to the lack of access to subject matter experts who could contribute to their global growth.”, said Raj Singh, General Partner at Z21 Ventures. “We are really proud to welcome many subject matter experts in different technology and business domains as limited partners who are excited about supporting and guiding the early-stage companies.”
                                <br />
                                <br />
                                “As a limited partner, I appreciate the focus of the Z21 investment hypothesis and the participation of a number of limited partners who are interested in helping support Z21's investments, not just passively participating in early stage businesses.”, said Evan Grossman, Chief Product Officer at CODAMETRIX.”I am really excited about engaging with the vibrant Z21 community and supporting the growth of many early-stage companies Z21 Ventures invests in.”
                            </p>
                        </div>
                        <div className="article-head mt-5">
                            <h4>Z21 Investments</h4>
                        </div>
                        <div className="blog-paragraph mt-3">
                            <p>
                                Z21 Venture fund I has invested in TrueFoundry, HEN Nozzles, Inito and Explorex so far and going through due diligence of many early stage companies.
                                <br />
                                <br />
                                “Z21 ventures not just invested in HEN but they have also provided some invaluable advice and feedback as part of their due diligence process. They have assembled a very talented and well balanced team with expertise in technology, business and manufacturing”, said Sunny Sethi, Founder and CEO of HEN Nozzles. “For us they are not just investors but an extended team with subject matter experts that can help propel us to the next stage. We are excited to partner with them and start making a difference”
                                <br />
                                <br />
                                "Z21 Ventures is founded by entrepreneurs who not only understand the ups and downs of the entrepreneurial journey but they also help you along the journey as partners in the truest sense”, said Mainak Sarkar, Co-founder & CEO of Explorex. “We really value the continuous guidance and support from the Z21 team to help us in our growth journey. I truly believe that other entrepreneurs can also expect this level of support from Z21 Ventures.”
                            </p>
                        </div>
                        <div className="article-head mt-5">
                            <h4>About Z21 Ventures</h4>
                        </div>
                        <div className="blog-paragraph mt-3">
                            <p>Z21 Ventures is a community driven venture fund for early-stage companies that are looking to drive growth by leveraging technology and talent in India.The Z21 Ventures Fund aims to build a community of subject matter experts who are not only willing to invest as limited partners in the fund, but are also excited to participate in selecting, supporting and guiding the early-stage companies. For more information, please visit https://z21.ventures/
                                <br/>
                                <br/>
                                Media Contact:
                                <br/>
                                Raj Singh - raj@z21.ventures
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
