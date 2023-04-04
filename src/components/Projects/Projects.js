import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgresql from "../../Assets/Projects/PostegreSQL.png";
import tipe from "../../Assets/Projects/tipe.png";
import myjobglasses from "../../Assets/Projects/myjobglasses.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postgresql}
              isBlog={false}
              title="Detection Of Microcalcifications In Mammography"
              description="In this project, we conducted a comprehensive analysis of various machine learning models, including KNN, SVM, and random forest, with different parameter settings and combinations, to accurately detect microcalcifications on mammograms. Early detection of microcalcifications is crucial in breast cancer screening. However, the dataset used in this project was highly imbalanced, which presented a significant challenge. This project was supervised by ECC CODING WEEK."
              demoLink="https://youtu.be/hXpkJLSBqd0"
              ghLink="https://github.com/badreddinesaadioui/Detection-Of-Microcalcifications-In-Mammography"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipe}
              isBlog={false}
              title="TIPE Genetic Disease Propagation: A Population Modeling and Analysis Approach."
              description="Supervised personal initiative project or TIPE is a common test to most entrance examinations to the Grandes Ecoles of Science. Throughout my project, I explored the relationship between genetics, statistics, and the spread of diseases. I began by delving into the importance of probabilities in genetics and how they are vital for genetic studies. From there, I went on to write a Python code to model the spread of a disease over time. Using this code, I was able to investigate the statistical evolution of a general hereditary disease, and gain insight into how these diseases'frequency vary over time."
              ghLink="https://github.com/badreddinesaadioui/TIPE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjobglasses}
              isBlog={false}
              title="PLBD : Traffic Optimization"
              description="The Project Learning by Doing is an annual project that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we utilized OpenCV to analyze traffic images and extract traffic density information, which enabled us to develop an optimization code that dynamically adjusted traffic light timings to improve traffic flow and alleviate congestion in real-time. To assess the effectiveness of our optimization code, we compared our model with both a deep learning-based approach and a traditional timing system using a traffic simulator. Our results highlighted the potential of computer vision and machine learning techniques to optimize traffic control systems."           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
