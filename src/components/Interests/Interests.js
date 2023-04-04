import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import graphicdesign from "../../Assets/Interests/graphicdesign.jpg";
import bodybuilding from "../../Assets/Interests/bodybuilding.jpg";
import coding from "../../Assets/Interests/coding.png";
import science from "../../Assets/Interests/science.png";


function Interests() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What Else <strong className="purple"> I do </strong>
        </h1>
        <p style={{ color: "white" }}>
          Balancing intellectual pursuits, physical exercise, and recreation is key to productivity and creativity. As an engineering student, I prioritize a sound mind and healthy body to reach my full potential.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphicdesign}
              isBlog={false}
              title="Graphic design"
              description="Having always been interested in art, I have developed a strong passion for graphic design and its crucial role in the field of marketing. Whether it's creating eye-catching logos or designing captivating ads, I am committed to using my skills to deliver visually appealing designs that effectively promote brands and products."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bodybuilding}
              isBlog={false}
              title="Bodybuilding"
              description="I am deeply passionate about fitness, and my interest in bodybuilding has allowed me to appreciate its ability to shape and sculpt the body. My unwavering commitment to maintaining a healthy lifestyle involves pushing my physical limits at the gym and adhering to a strict nutrition plan. Moreover, to augment my physical prowess and self-discipline, I have also pursued martial arts training."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coding}
              isBlog={false}
              title="Coding"
              description="There are so many things to love about coding, both from a technical and philosophical perspective. It can sharpen your mind, rewire your brain, provide people with great software... the options and impact are nearly endless. Programming can really empower to change the world."           
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="Science"
              description="I am interested in all forms of science, but mathematics are special, that's why after high school, I chose to pursuit a two-year intensive program of preparatory classes to the competitive entrance exams to the top engineering schools."           
            />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;
