import React from "react";
import { Container, Row, Col } from "reactstrap";

const UploadSection = () => {
  return (
    <Container className="my-4 py-3">
      <Row className="px-3 py-6">
        <Col md="6">
          <div className="upload-text-one">Learn Or Teach From Anywhere</div>
          <div className="upload-text-two">
            Take live classes, enrichment programmes and much more using Phone
            or Computer
          </div>
          <div className="upload-text-three">Get Started Today!</div>

          <Row>
            <Col>
              <img
                src="Images/playstore.svg"
                alt="playstore logo"
                height={120}
                width={250}
                className="upload-android-img"
              />
            </Col>
            <Col>
              <img
                src="Images/appstore.svg"
                alt="appstore logo"
                height={120}
                width={250}
                className="upload-ios-img"
              />
            </Col>
          </Row>
        </Col>
        <Col md="6">
            <img src="Images/laptop.svg" width={650} height={340} className="upload-laptop-img"  />
        </Col>
      </Row>
    </Container>
  );
};

export default UploadSection;
