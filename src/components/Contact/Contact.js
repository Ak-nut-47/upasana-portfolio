import React from "react";
import { Col, Container } from "react-bootstrap";
import { AiFillFacebook, AiFillHome, AiFillInstagram, AiFillYoutube, AiTwotoneMail, AiTwotonePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <Container fluid className="contact-section" style={{ minHeight: "100vh", textAlign: "center" }}>
            <h2>Contact Me</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "50px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <AiFillHome style={{ fontSize: "1.5rem", marginRight: "10px" }} />
                    <span>Duliajan, Assam, India</span>
                </div>
                <br />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <AiTwotoneMail style={{ fontSize: "1.5rem", marginRight: "10px" }} />
                    <span>upasanasartgallery@gmail.com</span>
                </div>
                <br />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <AiTwotonePhone style={{ fontSize: "1.5rem", marginRight: "10px" }} />
                    <span>+91 8822004967</span>
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <AiOutlineWhatsApp style={{ fontSize: "1.5rem", marginRight: "10px" }} />
                    <span>+91 8822004967</span>
                </div>

            </div>
            <hr />
            <Col md={12} className="home-about-social">
                <h2>Find me on</h2>
                <ul className="home-about-social-links">

                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/u.p.a.s.a.n.a?igsh=MTBydGFwanJmNGswNA=="
                            style={{ color: "black", fontSize: "30px", borderRadius: "15px", padding: "10px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>

                    <li className="social-icons">
                        <a
                            href="https://youtube.com/@upasana_bordoloi?si=YF682_5JR5uIiKtG"
                            style={{ color: "black", fontSize: "30px", borderRadius: "15px", padding: "10px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.facebook.com/upasana.bordoloi.58?mibextid=ZbWKwL"
                            style={{ color: "black", fontSize: "30px", borderRadius: "15px", padding: "10px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillFacebook />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/upasana-bordoloi-95398423a/"
                            style={{ color: "black", fontSize: "30px", borderRadius: "15px", padding: "10px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </Col>


        </Container >
    );
};

export default Contact;
