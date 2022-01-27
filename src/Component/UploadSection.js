import React from "react";
import { Container, Row, Col } from "reactstrap";

const UploadSection = () => {
  return (
    <Container className="my-4 py-3">
      <Row className="px-3 py-6 upload-section">
        <Col md="6">
          <div className="upload-text-one upload-text">Learn Or Teach From Anywhere</div>
          <div className="upload-text-two upload-text">
            Take live classes, enrichment programmes and much more using Phone
            or Computer
          </div>
          <div className="upload-text-three upload-text">Get Started Today!</div>

          <Row className="upload-btn">
            <Col className="upload-btn">
              <img
                src="Images/playstore.svg"
                alt="playstore logo"
                height={120}
                width={250}
                className="upload-android-img upload-btn-1"
              />
            </Col>
            <Col className="upload-btn">
              <img
                src="Images/appstore.svg"
                alt="appstore logo"
                height={120}
                width={250}
                className="upload-ios-img upload-btn-2"
              />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <img
            src="Images/laptop.svg"
            width={650}
            height={340}
            className="upload-laptop-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UploadSection;
