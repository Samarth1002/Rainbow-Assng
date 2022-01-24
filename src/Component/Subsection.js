import React from "react";
import { Container, Row, Col } from "reactstrap";

const Subsection = () => {
  return (
    <Container className="sub-section-div">
      <div>
        <Row className="my-3 py-5 b-2">
          <Col md="5" className="sub-section-img-col">
            <img src="Images/graduating.jpg" className="sub-section-img" />
          </Col>
          <Col md="7">
            <div className="sub-section-grad">
              <div className="sub-section-text-main">K-12 School</div>
              <div className="sub-section-text-mini">
                Integrated fun activities for learners that aid academic
                progress and whole brain development.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="7">
            <div className="sub-section-grad">
              <div className="sub-section-text-main">Academic</div>
              <div className="sub-section-text-mini">
                Integrated fun activities for learners that aid academic
                progress and whole brain development.
              </div>
            </div>
          </Col>
          <Col md="5" className="sub-section-img-col">
            <img src="Images/classroom.jpg" className="sub-section-img" />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md="5" className="sub-section-img-col">
            <img src="Images/enrichment.jpg" className="sub-section-img" />
          </Col>
          <Col md="7">
            <div className="sub-section-grad">
              <div className="sub-section-text-main">Enrichment</div>
              <div className="sub-section-text-mini">
                Integrated fun activities for learners that aid academic
                progress and whole brain development.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Subsection;
