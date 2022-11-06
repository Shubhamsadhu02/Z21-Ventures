import React from 'react';
import { useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ContactUs() {

    const [modalShow, setModalShow] = React.useState(false);

    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    }
    return (
        <>

            <div className="overlay"></div>
            <section className='contactus' style={{ paddingBottom: "100px" }}>
                <div className="container mt-3">
                    <div className="cross-img d-flex justify-content-end" onClick={handleBack}>
                        <img src='images/cross.svg' alt='' />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-5 d-flex justify-content-center" style={{ zIndex: 15 }}>
                            <div className="contact-img d-flex justify-content-center align-items-center">
                                <img src='images/contact.png' alt='' />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-7" style={{ paddingLeft: "150px" }}>
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
                                        <textarea type="text" style={{ marginBottom: "0" }} placeholder='Description'></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <div type='submit' className="attachment d-flex justify-content-between"> Attach file or link
                                            <input type="file" />
                                            <div className="attachment-icon d-flex ">
                                                <Button type='button'><i class="fas fa-paperclip"></i></Button>
                                                <Button type="button" onClick={() => setModalShow(true)}><i class="fas fa-link"></i></Button>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <button className='form-submit' type='submit'>Send</button>
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


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add link
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='contact-form'>
                    <input type="text" placeholder="Name Link"></input>
                    <input type="url" placeholder="Paste link here"></input>
                    <button className='form-submit form-submit1 mt-5' type='submit'>Add</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}