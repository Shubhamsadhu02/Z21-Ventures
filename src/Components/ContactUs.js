import React from 'react'

export default function ContactUs() {
  return (
    <>

    <div className="overlay"></div>
    <section className='contactus'>
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-5 d-flex align-items-center" style={{zIndex: 15, height: "768px"}}>
                    <div className="contact-img">
                        <img src='images/contact.png' alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingLeft: "150px"}}>
                    <div className="cross-img d-flex justify-content-end">
                        <img src='images/cross.png' alt=''/>
                    </div>
                    <div className="contact-head mt-4 mb-4">
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
