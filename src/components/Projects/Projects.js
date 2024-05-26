import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Dynamically import all images from the specified directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../../Assets/Artworks", false, /\.(jpg|jpeg|png)$/));

// Define artwork information
const artworksInfo = [
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '24" x 36"' },
  { medium: "Acrylic on Canvas", size: '24" x 36"' },
  { medium: "Acrylic on Canvas", size: '24" x 36"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '8" x 10"' },
  { medium: "Acrylic on Canvas", size: '24" x 36"' },
  { medium: "Oil on Canvas", size: '24" x 36"' },
  { medium: "Oil on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '24" x 36"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '8" x 10"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: '12" x 16"' },
  { medium: "Acrylic on Canvas", size: 'Dia 12"' },

  // Add more artworks with their respective information
];

function Projects() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
      <Container>
        <h1 className="project-heading">
          <span className="purple">My Recent</span> <strong className="purple">Works</strong>
        </h1>
        {/* <p className="purple" style={{ marginBottom: "50px" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {images.map((image, index) => (
            <Col key={index} style={{ marginBottom: "20px" }}>
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="img-fluid"
                style={{ width: "100%" }}
              />
              <div className="artwork-info">
                <p><strong>Medium:</strong> {artworksInfo[index]?.medium}</p>
                <p><strong>Size:</strong> {artworksInfo[index]?.size}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
