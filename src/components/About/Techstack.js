import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiMatplotlib,
  DiPandas,
  DiScikitLearn,
  DiPytorch,
  DiTensorflow,
  DiOpencv,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMatplotlib />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScikitLearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOpencv />
      </Col>
    </Row>
  );
}

export default Techstack;
