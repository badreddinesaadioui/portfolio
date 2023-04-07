import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Badreddine Saadioui </span>
            <br />I am first year system engineering student at ECC CENTRALE CASABLANCA. Interested in Artificial Intelligence and data science because of the mixture of applied mathematics, modelization, data analysis and software engineering. My curiosity towards science and new technologies is growing and supports my engagement to broaden my knowledge and build my skills.


            <br />
            <br />This portfolio seeks to best convey my character, my professional trajectory, and my future goals. You can find information about my experiences, initiatives, and skills, both professionally and personally. Please get in touch with me if you want additional information about my experience or the projects I worked on.
            <br />
            <br />
            <br />Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "Empower your imagination to make the impossible inevitable!"{" "}
          </p>
          <footer className="blockquote-footer"> Badreddine Saadioui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
