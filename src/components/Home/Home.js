import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../Assets/upasana.jpg"
import ImageGalleryComponent from "../ImageGalleryComponent";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">


              <h1 className="heading-name universaltextcolor">
                <strong className="main-name"> UPASANA BORDOLOI</strong>
              </h1>
              <h2 style={{ paddingBottom: 15 }} className="heading universaltextcolor">
                Fine Artist
              </h2>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={image}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  // border: "4px solid #c770f0",
                  borderRadius: "15px",
                  padding: "10px" // Optional: Add padding to the image for a more spacious look
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <ImageGalleryComponent />
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
