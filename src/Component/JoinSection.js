import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const JoinSection = () => {
  const [data, setData] = useState([
    {
      src: "Images/smartkid.jpg",
      title: "Find Nurturing",
    },
    {
      src: "",
      title: "Find Nurturing",
    },
    {
      src: "Images/randompic.png",
      title: "Find Nurturing",
    },
    {
      src: "Images/randompic2.png",
      title: "Find Nurturing",
    },
  ]);
  return (
    <Container>
      <Row className="my-3 py-4">
        <Col sm="6" md="3" className="text-center">
          <img
            src="Images/smartkid.jpg"
            height={167}
            width={167}
            className="upload-img-smart-radius"
          />
          <div>Find Nurturing</div>
        </Col>
        <Col sm="6" md="3" className="text-center">
          <img
            src="Images/flag.png"
            height={167}
            width={167}
            className="upload-img-smart-radius"
          />
          <div> Find Nurturing</div>
        </Col>
        <Col sm="6" md="3" className="text-center">
          <img
            src="Images/randompic.png"
            height={167}
            width={167}
            className="upload-img-smart-radius"
          />
          <div>Find Nurturing</div>
        </Col>
        <Col sm="6" md="3" className="text-center">
          <img
            src="Images/randompic2.png"
            height={167}
            width={167}
            className="upload-img-smart-radius"
          />
          <div>Find Nurturing</div>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinSection;
