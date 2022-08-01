import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className="navbar" style={{background: "red"}}>
        <div className="container">
            <div className="hamberger-icon">
                <img src='/images/hambergericon.png' alt='' height="24" width="24"/>
            </div>
            <div className="logo">
                <a href="/" className="navbar-brand"><img src="/images/ventureslogo.svg" alt='' height="28" width="182" /></a>
            </div>
            <div className="contact-nav">
                <Link to={'/ContactUs'}>Contact us</Link>
            </div>
        </div>
    </nav>
    </>
  )
}
