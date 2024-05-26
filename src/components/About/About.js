import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';
const About = () => {
  return (
    <Container fluid className="about-section">
      <Row className="justify-content-center my-5">
        {/* <Col md={8}>
          <h1 className="text-center mb-4">About Me</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2ihWIvG1MyQ?si=7hFRTn7dH4lrF0Yj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p className="lead">
            I am an artist and art educator based in India, drawing profound inspiration from the beauty of nature and landscapes. My work reflects a deep connection to the natural world, capturing its essence and serenity through my artistic vision.
          </p>
          <p>
            Although I am a self-taught artist, my journey in art has been enriched by completing a diploma in fine arts later in life. My academic background is diverse; I studied plant breeding and genetics, which initially set me on a path towards research. It was during my master's studies in plant breeding and genetics that my passion for art began to grow stronger. Despite being admitted to a Ph.D. program, I realized that the academic world was overwhelming and didn't resonate with my true calling.
          </p>
          <p>
            After a year in the Ph.D. program, I decided to follow my heart and pursue art full-time. I moved back home and dedicated myself to my art practice. Since then, I have had the privilege of showcasing my work in a solo exhibition in my hometown and participating in a group exhibition at the State Art Gallery, Rabindra Bhawan, Guwahati, in 2023.
          </p>
          <p>
            As an art educator, I am passionate about teaching and inspiring young minds. I strive to provide children with an environment conducive to growth and creativity, an opportunity I wish I had during my early years. Each day is a learning process, both for my students and myself, as we explore the boundless possibilities of art together.
          </p>
          <p>
            My journey from science to art underscores my belief in following one's passion and the transformative power of creativity. Through my work, I aim to share the beauty of the natural world and inspire others to find their own connection to it.
          </p>
        </Col> */}
        <Container fluid className="about-section" style={{ minHeight: "92vh", textAlign: "center" }}>
          <h1 className="text-center mb-4">About Me</h1>
          <Row>
            <Col md={4} >
              <iframe
                className='youtube-desktop'
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/2ihWIvG1MyQ?si=7hFRTn7dH4lrF0Yj"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </Col>
            <Col md={8} style={{ textAlign: "left" }}>
              <p className="lead">
                I am an artist and art educator based in India, drawing profound inspiration from the beauty of nature and landscapes. My work reflects a deep connection to the natural world, capturing its essence and serenity through my artistic vision.
              </p>
              <p>
                Although I am a self-taught artist, my journey in art has been enriched by completing a diploma in fine arts later in life. My academic background is diverse; I studied plant breeding and genetics, which initially set me on a path towards research. It was during my master's studies in plant breeding and genetics that my passion for art began to grow stronger. Despite being admitted to a Ph.D. program, I realized that the academic world was overwhelming and didn't resonate with my true calling.
              </p>
              <p>
                After a year in the Ph.D. program, I decided to follow my heart and pursue art full-time. I moved back home and dedicated myself to my art practice. Since then, I have had the privilege of showcasing my work in a solo exhibition in my hometown and participating in a group exhibition at the State Art Gallery, Rabindra Bhawan, Guwahati, in 2023.
              </p>
              <p>
                As an art educator, I am passionate about teaching and inspiring young minds. I strive to provide children with an environment conducive to growth and creativity, an opportunity I wish I had during my early years. Each day is a learning process, both for my students and myself, as we explore the boundless possibilities of art together.
              </p>
              <p>
                My journey from science to art underscores my belief in following one's passion and the transformative power of creativity. Through my work, I aim to share the beauty of the natural world and inspire others to find their own connection to it.
              </p>
            </Col>
          </Row>
          <iframe
            className='youtube-responsive'
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2ihWIvG1MyQ?si=7hFRTn7dH4lrF0Yj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Container>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1 className="universaltextcolor">FIND ME ON</h1>
          <ul className="home-about-social-links">

            <li className="social-icons">
              <a
                href="https://www.instagram.com/u.p.a.s.a.n.a?igsh=MTBydGFwanJmNGswNA=="
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://youtube.com/@upasana_bordoloi?si=YF682_5JR5uIiKtG"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/upasana.bordoloi.58?mibextid=ZbWKwL"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/upasana-bordoloi-95398423a/"
                style={{ color: "black" }}
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
};

export default About;
