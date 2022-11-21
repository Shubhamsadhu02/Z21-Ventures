import React from 'react'

export default function InvestmentCompanies() {
    let companieslogo = [
        {
            image: "/images/Home/Investment/hen.png",
            link: "https://hennozzles.com/"
        },
        {
            image: "/images/Home/Investment/truefoundry.png",
            link: "https://www.truefoundry.com/"
        },
        {
            image: "/images/Home/Investment/inito.png",
            link: "https://www.inito.com/"
        },
        {
            image: "/images/Home/Investment/explorex.png",
            link: "https://www.explorex.co/"
        }
    ]

    return (
        <>
            <section className='InvestmentCompanies' style={{ background: "#F9FAFA", padding: "150px 153px" }}>
                <div className="container">
                    <div className="investment-header text-center">
                        <h2>Our portfolio companies</h2>
                    </div>
                    <div className="investment-companies" style={{ marginTop: "80px" }}>
                        <div className="row d-flex justify-content-center" style={{ rowGap: "45px" }}>
                            {
                                companieslogo.map((item) => {
                                    return (
                                        <div className="col-sm-6 col-lg-3">
                                            <a href={item.link} target="framename"><img src={item.image} alt={item.link} /></a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
