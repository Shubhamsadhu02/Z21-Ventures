import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: "#BE3222", height: "auto"}}>
        <div className="container">
            <div className="footer" style={{ padding: "50px 20px" }}>
                <div className="row">
                    <div className="col-lg-4">
                        <a href='/'><img src='/images/venturesfooterlogo.svg' alt=''/></a>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-list">
                            <ul className='d-flex'>
                                <li>
                                    <a href='/investment'>Investment Thesis</a>
                                </li>
                                <li>
                                    <a href='/contactus'>Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end align-items-center">
                        <div className="copyright">
                            <p>© Copyright | Z21 Ventures</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
