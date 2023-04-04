import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaChartLine,
  FaDatabase
} from "react-icons/fa";
import { DiScikitLearn, DiPytorch, DiTensorflow, DiOpencv } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
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

