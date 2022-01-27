import React from "react";
import { Row, Col, Button } from "reactstrap";

const Jumbotron = () => {
  return (
    <>
      <Row className="m-0 my-4 py-3 jumbo-section-media">
        <Col md="5" className="jumbo-section-col-1">
          <div className="jumbo-txt-one">
            Find nurturing and diverse opportunities for children!
          </div>
          <div className="jumbo-txt-two">
            Integrated fun activities for learners that aid academic progress
            and whole brain development.
          </div>
          <div className="jumbo-start-div">
            <div className="jumbo-start-div-txt-one">Are you a student, parent or a teacher?</div>
            <div className="jumbo-start-div-txt-two">
              <Button className="jumbo-start-div-txt-two-btn " color="danger">Get started</Button>
            </div>
          </div>
        </Col>
        <Col md="7" className="jumbo-section-col-2">
          <img src="Images/children.jpg" className="jumbo-img p-3" />
        </Col>
      </Row>
    </>
  );
};

export default Jumbotron;
