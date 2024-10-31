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
            <br />a dedicated <span className="purple">AI engineering</span>, navigating the exciting intersection of **AI and business strategies**. My journey integrates applied mathematics, machine learning, a lot of coding, and a knack for translating complex ideas into actionable AI solutions that meet real-world needs. For me, the goal is always to create tangible value to support your vision and goals.
            <br />
            <br />As a person of values, one of mine is impact and collaboration, I thrive equally in <span className="purple">team-focused roles</span> or as a <span className="purple">project lead</span>. I’m experienced in managing projects end-to-end: from discovery to conception, prototyping, testing, and deployment. My skills extend across AI engineering, coding, marketing, and strategic development, allowing me to both understand and solve your business’s AI needs on multiple levels.
            <br />
            <br />This portfolio offers a look into my **professional growth** and **personal values**, though it represents only a small part of my journey. Privacy is a key value for me, especially when it comes to confidential client projects and spin-offs. If you’re interested in discussing my experience further, feel free to reach out—I’m always open to exploring if I’m the right fit for your team. Stay tuned, as I’ll soon be adding more of my **generative AI side projects** here as well!
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
            "Purpose, integrity, adaptability, respect, and family."{" "}
          </p>
          <footer className="blockquote-footer"> Those are my core values</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
