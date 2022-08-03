import React from 'react'
import {useNavigate} from "react-router-dom"

export default function ContactUs() {

    const naviagte= useNavigate();
    const handleBack = () =>  {
        naviagte(-1);
    }
  return (
    <>

    <div className="overlay"></div>
    <section className='contactus'>
        <div className="container mt-3">
            <div className="cross-img d-flex justify-content-end" onClick={handleBack}>
                <img src='images/cross.png' alt=''/>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-5 d-flex justify-content-center" style={{zIndex: 15}}>
                    <div className="contact-img d-flex justify-content-center align-items-center">
                        <img src='images/contact.png' alt='' />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-7" style={{paddingLeft: "150px"}}>                    
                    <div className="contact-head mb-4">
                        <h2>Contact us</h2>
                    </div>
                    <form className='contact-form'>
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" placeholder="Full Name"></input>
                            </div>
                            <div className="col-lg-12">
                                <input type="email" placeholder="Email"></input>
                            </div>
                            <div className="col-lg-12">
                                <input type="text" placeholder="Subject"></input>
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder='Description'></textarea>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <button type='submit'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
