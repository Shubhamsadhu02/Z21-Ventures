import React from 'react'

export default function InestmentCompanies() {
  return (
    <>
    <section className='mt-15' style={{background: "#F9FAFA", padding: "150px 153px"}}>
        <div className="container">
            <div className="investment-header text-center">
                <h2>Investments History</h2>
            </div>
            <div className="investment-companies mt-15">
                <div className="row d-flex justify-content-center" style={{rowGap: "45px"}}>
                    <div className="col-lg-4">
                        <img src='/images/Home/Investment/scaler.png' alt=''/>
                    </div>
                    <div className="col-lg-4">
                        <img src='/images/Home/Investment/mintoak.png' alt=''/>
                    </div>
                    <div className="col-lg-4">
                        <img src='/images/Home/Investment/kaagaz.png' alt=''/>
                    </div>

                    <div className="col-lg-4">
                        <img src='/images/Home/Investment/explorex.png' alt=''/>
                    </div>
                    <div className="col-lg-4">
                        <img src='/images/Home/Investment/opslyft.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
