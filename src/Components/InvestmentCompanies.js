import React from 'react'

export default function InvestmentCompanies() {
  return (
    <>
    <section className='InvestmentCompanies' style={{background: "#F9FAFA", padding: "150px 153px"}}>
        <div className="container">
            <div className="investment-header text-center">
                <h2>Our portfolio companies</h2>
            </div>
            <div className="investment-companies" style={{marginTop: "80px"}}>
                <div className="row d-flex justify-content-center" style={{rowGap: "45px"}}>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://www.scaler.com/' target="framename"><img src='/images/Home/Investment/scaler.png' alt=''/></a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://www.mintoak.com/' target="framename"><img src='/images/Home/Investment/mintoak.png' alt=''/></a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://kaagaz.app/' target="framename"><img src='/images/Home/Investment/kaagaz.png' alt=''/></a>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <a href='https://www.explorex.io/' target="framename"><img src='/images/Home/Investment/explorex.png' alt=''/></a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://opslyft.com/' target="framename"><img src='/images/Home/Investment/opslyft.png' alt=''/></a>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <a href='https://hyperspec.ai/' target="framename"><img src='/images/Home/Investment/hyperspec.png' alt=''/></a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://hennozzles.com/' target="framename"><img src='/images/Home/Investment/hen.png' alt=''/></a>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <a href='https://www.truefoundry.com/' target="framename"><img src='/images/Home/Investment/truefoundry.png' alt=''/></a>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <a href='https://www.inito.com/' target="framename"><img src='/images/Home/Investment/inito.png' alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
