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
        </Container>
      </Container>
      <Home2 />
    </section>
        <!--==================== CONTACT ME ====================-->
        <section class="contact section" id="contact" data-id="contact">
            <h2 class="section__title">Contact Me</h2>
            <span class="section__subtitle">Get in Touch</span>
        
            <div class="contact__container container grid">
                <div>
        
                    <div class="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>
        
                        <div>
                            <h3 class="contact__title">Email</h3>
                            <p><a class="contact__subtitle" href="mailto:salma.benslimane@centrale-casablanca.ma">salma.benslimane@centrale-casablanca.ma</a></p>
                        </div>
                    </div>
                </div>
        
                <!-- Add the Netlify form attributes -->
                <form name="contact" method="POST" data-netlify="true" class="contact__form grid">
                    <input type="hidden" name="form-name" value="contact">
        
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="fullName" class="contact__label">Full Name</label>
                            <input type="text" placeholder="Enter full name" class="contact__input" id="fullName" name="name">
                            <span id="name-error" class="contact__subtitle"></span>
                        </div>
                        <div class="contact__content">
                            <label for="email_id" class="contact__label">Email</label>
                            <input type="email" placeholder="Enter email address" class="contact__input" id="email_id" name="email">
                            <span id="email-error" class="contact__subtitle"></span>
                        </div>
                    </div>
                    <div class="contact__content">
                        <label for="subject" class="contact__label">Subject</label>
                        <input type="text" id="subject" placeholder="Enter a subject line" class="contact__input" name="subject">
                    </div>
                    <div class="contact__content">
                        <label for="message" class="contact__label">Message</label>
                        <textarea name="message" cols="0" rows="7" placeholder="Enter your message" class="contact__input" id="message"></textarea>
                        <span id="message-error" class="contact__subtitle"></span>
                    </div>
                    <div>
                        <button type="submit" class="button button--flex">
                            Send Message
                            <i class="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
  );
}

export default Home;
