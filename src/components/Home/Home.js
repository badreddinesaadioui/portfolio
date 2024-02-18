import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepic from "../../Assets/homepic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Badreddine saadioui</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homepic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "900px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <section className="contact section" id="contact" data-id="contact">
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in Touch</span>

                <div className="contact__container container grid">
                  <div>
                    <div className="contact__information">
                      <i className="uil uil-envelope contact__icon"></i>
                      <div>
                        <h3 className="contact__title">Email</h3>
                        <p>
                          <a className="contact__subtitle" href="mailto:salma.benslimane@centrale-casablanca.ma">salma.benslimane@centrale-casablanca.ma</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Netlify contact form */}
                  <form name="contact" method="POST" data-netlify="true" className="contact__form grid">
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="contact__inputs grid">
                      <div className="contact__content">
                        <label htmlFor="fullName" className="contact__label">Full Name</label>
                        <input type="text" placeholder="Enter full name" className="contact__input" id="fullName" name="name" />
                        <span id="name-error" className="contact__subtitle"></span>
                      </div>
                      <div className="contact__content">
                        <label htmlFor="email_id" className="contact__label">Email</label>
                        <input type="email" placeholder="Enter email address" className="contact__input" id="email_id" name="email" />
                        <span id="email-error" className="contact__subtitle"></span>
                      </div>
                    </div>
                    <div className="contact__content">
                      <label htmlFor="subject" className="contact__label">Subject</label>
                      <input type="text" id="subject" placeholder="Enter a subject line" className="contact__input" name="subject" />
                    </div>
                    <div className="contact__content">
                      <label htmlFor="message" className="contact__label">Message</label>
                      <textarea name="message" cols="0" rows="7" placeholder="Enter your message" className="contact__input" id="message"></textarea>
                      <span id="message-error" className="contact__subtitle"></span>
                    </div>
                    <div>
                      <button type="submit" className="button button--flex">
                        Send Message
                        <i className="uil uil-message button__icon"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

