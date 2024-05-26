import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://www.instagram.com/u.p.a.s.a.n.a?igsh=MTBydGFwanJmNGswNA=="

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://youtube.com/@upasana_bordoloi?si=YF682_5JR5uIiKtG"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/upasana.bordoloi.58?mibextid=ZbWKwL"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/upasana-bordoloi-95398423a/"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
