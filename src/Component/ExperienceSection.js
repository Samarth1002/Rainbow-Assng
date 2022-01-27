import React from "react";
import { Row, Col, Container } from "reactstrap";
const ExperienceSection = () => {
  return (
    <>
      <Container className="sub-section-div">
        <Row className="exp-section-media">
          <Col md="4" className="exp-div seprater exp-section-txt">
            <div className="exp-div-txt">50,0000 Hrs+</div>
            <div className="exp-txt">of Teaching</div>
          </Col>
          <Col md="4" className="exp-div seprater exp-section-txt">
            <div className="exp-div-txt">10 Years</div>
            <div className="exp-txt">of teaching experience</div>
          </Col>
          <Col className="exp-div exp-section-txt" md="4">
            <div className="exp-div-txt">10 Years</div>
            <div className="exp-txt">of teaching experience</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;
