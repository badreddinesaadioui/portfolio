import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/International/travel.png";


function International() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Design <strong className="purple"> Skills </strong>
        </h1>
        <p style={{ color: "white" }}>
        Design is an increasingly crucial and in-demand aspect of various industries as the digital world advances. Fortunately, my lifelong passion for art has led me to hone my skills and specialize in this field, which I consider a natural extension of my abilities. My background in art has given me a profound understanding of design principles and techniques, allowing me to create visually stunning and innovative designs. I find the creative aspect of design work to be immensely fulfilling and enjoyable, and it is a true passion of mine. Continuously seeking new ways to push the boundaries of what is possible in this dynamic and exciting field, I am dedicated to delivering exceptional design solutions to clients.
        </p>
        <h2 className="project-subheading">My Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel the world"
              description="I have the intent to visit all countries of the world and discover new things, and to be able to express with others differently. I haven't traveled yet to many countries, I have been in Morocco, France, Spain and Portugal, I really liked those experiences."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Another Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default International;
