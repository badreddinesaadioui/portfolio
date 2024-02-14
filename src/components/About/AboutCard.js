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
            <br />Second year generalist engineering ex-change student at ECL CENTRALE de Lyon. Interested in Artificial Intelligence and data science and consulting because of the mixture of applied mathematics, modelization, data analysis and software engineering. My curiosity towards science, new technologies and entrepreneurship is growing and supports my engagement to broaden my knowledge and build my skills.


            <br />
            <br />This portfolio seeks to best convey my character, my professional trajectory, and my future goals. You can find information about my experiences, initiatives, and skills, both professionally and personally. Please get in touch with me if you want additional information about my experience or the projects I worked on.
            <br />
            <br />
            <br />Apart from consulting and data, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports ( All of them XD )
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "Ta7aja matghlebna, rjal brjal wrjal blah !"{" "}
          </p>
          <footer className="blockquote-footer"> Badreddine Saadioui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
