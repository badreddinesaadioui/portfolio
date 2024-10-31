import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import {
  SiOpencv,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
  SiDocker,
} from "react-icons/si";
import { FaStreamlit } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Added LangChain */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col>
      {/* Added OpenAI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      {/* Added Streamlit */}
      <Col xs={4} md={2} className="tech-icons">
        <FaStreamlit />
      </Col>
      {/* Added Hugging Face */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
      </Col>
      {/* Added Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      {/* Original Tech Stack */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
