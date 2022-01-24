import React from "react";
import { Row, Col, Button } from "reactstrap";

import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderSection = () => {
  return (
    <>
      <Row className="m-0">
        <Col className="header">
          <Col className="header-col">
            <Col className="header-title-div">
              <div className="main-logo"></div>
              <div className="header-title">
                <div className="main-title"> TRILINGUAL ACADEMY</div>
                <div className="main-sub-title"> Singapore</div>
              </div>
            </Col>
          </Col>
          <Col className="header-col">
            <Col className="m-3">
              <div className="main-cart-logo">
                <AiOutlineShoppingCart />
              </div>
            </Col>
            <Col className="m-3">
              <div className="main-button">Contact Now</div>
            </Col>
            <Col className="m-3">
              <div className="main-button" id="main-btn-active">
                Sign Up
              </div>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default HeaderSection;
