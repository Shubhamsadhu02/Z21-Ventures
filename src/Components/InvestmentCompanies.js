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
        },
        {
            image: "/images/Home/Investment/KidEx.png",
            link: "https://kid-ex.com/"
        },
        {
            image: "/images/Home/Investment/optwise.png",
            link: "https://www.optiwise.ai/"
        },
        {
            image: "/images/Home/Investment/livsyt.png",
            link: "https://livsyt.com/"
        },
        {
            image: "/images/Home/Investment/moneyclub.png",
            link: "https://moneyclubber.com/"
        },
        {
            image: "/images/Home/Investment/perceptyne.png",
            link: "https://www.perceptyne.com/"
        }
        ,
        {
            image: "/images/Home/Investment/stealth.png",
            link: "https://www.linkedin.com/company/stealth-startup-51/people/"
        },
        {
            image: "/images/Home/Investment/earkart.png",
            link: "https://best-hearing-aid.earkart.in/"
        },
        {
            image: "/images/Home/Investment/inspecthoa.png",
            link: "https://inspecthoa.com/"
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
