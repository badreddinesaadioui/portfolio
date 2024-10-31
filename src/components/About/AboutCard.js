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
            <br />a dedicated **AI engineering student** at ECL Centrale de Lyon, navigating the exciting intersection of **AI, consulting, and business strategy**. My journey integrates applied mathematics, machine learning, and a knack for translating complex ideas into actionable AI solutions that meet real-world needs. For me, the goal is always to create tangible value—whether by building AI tools from the ground up or refining existing models to better support **your vision and goals**.
            <br />
            <br />I thrive in **both collaborative team roles** and **leading projects from A to Z**. My experience spans the full project lifecycle, from initial discovery to final deployment, balancing technical insight with strategic foresight. This allows me to contribute not only as an **AI engineer** but as a partner in understanding and solving complex business challenges.
            <br />
            <br />
            <br />This portfolio offers a look into my **professional growth** and **personal values**, though it represents only part of my journey. Privacy is a key value for me, especially when it comes to confidential client projects and spin-offs. If you’re interested in discussing my experience further, feel free to reach out—I’m always open to exploring if I’m the right fit for your team. Stay tuned, as I’ll soon be adding more of my **generative AI side projects** here as well!
            <br />
            <br />Apart from AI engineering, here some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic design and art
            </li>
            <li className="about-activity">
              <ImPointRight /> Video editing and film-making
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding and sports
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "I love turning complexity into the simple building blocks of success !"{" "}
          </p>
          <footer className="blockquote-footer"> Badreddine Saadioui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
