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
              title="A PostgreSQL Administrator"
              description="PostgreSQL Browser is a web-based PostgreSQL database admin tool written in python using Flask, HTML, CSS, JavaScript. It is a tool that will help you view your database from Heroku and edit them directly with a more friendly interface. This project was part of my final project to validate my cs50x certification."
              demoLink="https://spark.adobe.com/video/rv3QwkwFtNMfx"
              ghLink="https://github.com/Abdelmouhaimen/browser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipe}
              isBlog={false}
              title="TIPE : Heart Rate Monitor"
              description="Supervised personal initiative project or TIPE is a common test to most entrance examinations to the Grandes Ecoles of Science. During my preparatory classes, I made a heart rate monitor as a project for my TIPE. The device measured heart rate using a technique called Photoplethysmography. I had to make the sensor using IR LED also photodiode, also I had make the electronic circuit to ensure the output contains only the alternative signal from heart pulse. Finally I did the post-processing using Arduino kit to visualise the heart rate."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjobglasses}
              isBlog={false}
              title="MyJobGlasses Certificate"
              description="The certificate is a document designed by My Job Glasses to promote the approach of young people in their orientation. It attests to their ability to contact and meet mentors on the My Job Glasses mentoring tool to: find out more about a job or training | develop their professional network | expand their knowledge of an industry or company | get a professional opportunity such as an internship or work-study"           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
