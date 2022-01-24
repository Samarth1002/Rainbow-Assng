import React from "react";
import { Row, Col, Container } from "reactstrap";
const ExperienceSection = () => {
  return (
    <>
      <Container className="sub-section-div">
        <Row>
          <Col md="4" className="exp-div seprater">
            <div className="exp-div-txt">50,0000 Hrs+</div>
            <div className="exp-txt">of Teaching</div>
          </Col>
          <Col md="4" className="exp-div seprater">
            <div className="exp-div-txt">10 Years</div>
            <div className="exp-txt">of teaching experience</div>
          </Col>
          <Col className="exp-div" md="4">
            <div className="exp-div-txt">10 Years</div>
            <div className="exp-txt">of teaching experience</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;