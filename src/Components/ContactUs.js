import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { handleSubmit } from '../Helpers/Api'

export default function ContactUs() {

    const [modalShow, setModalShow] = React.useState(false);

    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    }

    const [file, setFile] = useState([]);
    const inputFile = useRef(null);

    const handleChange = e => {
        setFile([...file, e.target.files[0]]);
    }

    return (
        <>

            <div className="overlay"></div>
            <section className='contactus' style={{ paddingBottom: "100px" }}>
                <div className="container mt-3">
                    <div className="cross-img d-flex justify-content-end">
                        <img src='images/cross.svg' alt='' onClick={handleBack} />
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
                            <form className='contact-form' method="post" action="/" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="text" id="fullName" placeholder="Full Name"></input>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="email" id="email" placeholder="Email"></input>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" id="subject" placeholder="Subject"></input>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea type="text" id="description" style={{ marginBottom: "0" }} placeholder='Description'></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="attachment d-flex justify-content-between">Attach file or link {file.map(x => x.name).join(', ')}
                                            <input type="file" onChange={handleChange}  ref={inputFile} placeholder='Attach file or link' />
                                            <div className="attachment-icon d-flex ">
                                                <Button type='button' id="attachment" onClick={() => inputFile.current.click()}><i class="fas fa-paperclip"></i></Button>
                                                <Button type="button" id="addLink" onClick={() => setModalShow(true)}><i class="fas fa-link"></i></Button>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <button className='form-submit' type='submit' id="submitBtn">Send</button>
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
                    <input type="text" id="nameLink" placeholder="Name Link"></input>
                    <input type="url" id="urlLink" placeholder="Paste link here"></input>
                    <button className='form-submit form-submit1 mt-5' type='submit'>Add</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}