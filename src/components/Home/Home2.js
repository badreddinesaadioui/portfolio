import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
<h1> Introducing Myself</h1>
<p className="home-about-body">
    const name = "Your Name"; <br />
    const degree = "System Engineering"; <br />
    const university = "Ecole Centrale Casablanca"; <br />
    const languages = ["Python"]; <br />
    const interests = ["AI-based Products and Services", "Deep Learning", "Computer Vision"]; <br />
    const tools = ["Pandas", "NumPy", "Scikit-Learn"]; <br />
    <br />
    console.log(`Hi there! My name is ${name} and I'm currently pursuing a degree in ${degree} at ${university}. I'm fluent in programming languages like ${languages.join(", ")} which are essential for building cutting-edge AI applications.`); <br />
    console.log(`My primary focus is on developing ${interests.join(", ")} using my knowledge and experience in data science and AI engineering.`); <br />
    console.log(`I'm skilled in data analysis using tools like ${tools.join(", ")} and I'm always looking to improve my skills in these areas.`); <br />
    console.log(`If you're looking for someone who is passionate about data science and AI engineering, please don't hesitate to get in touch with me!`); <br />
</p>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/badreddinesaadioui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/prepakid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/badreddine-saadioui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prepakid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
