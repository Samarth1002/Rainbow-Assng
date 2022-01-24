import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import ButtonSection from "./ButtonSection";
import { GrMailOption } from "react-icons/gr";

const DetailSection = () => {
  const [colOne, setColOne] = useState([
    {
      title: "Servicing",
    },
    {
      title: "Counselling",
    },
    {
      title: "Programms",
    },
    {
      title: "Careers",
    },
  ]);
  const [colTwo, setColTwo] = useState([
    {
      title: "About",
    },
    {
      title: "Blog",
    },
    {
      title: "Training",
    },
  ]);
  return (
    <>
      <Row className="m-0 p-0 detail-section">
        <Col md="5" className="detail-section">
          <div className="detail-col-one-section">
            <div className="detail-img-logo-section">
              <img
                src="data:image/png;base64,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"
                alt="logo-goes-here"
                className="detail-logo"
              />
            </div>
            <div className="detail-text-section ">
              <div className="detail-text-one">TRILINGUAL KIDS ACADEMY</div>
              <div className="detail-section">
                <Button className="detail-section detail-btn">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="detail-section">
          <Row className="detail-section">
            <Col className="detail-col-one detail-section " sm="3">
              <div
                className="detail-col-one-text detail-section my-4 sub-col-title"
                color="#fff"
              >
                Company
              </div>
              {colOne.map((item, index) => {
                return (
                  <div key={index}>
                    {
                      <div className="detail-section sub-colTwo-title">
                        {item.title}
                      </div>
                    }
                  </div>
                );
              })}
            </Col>
            <Col sm="3" className="detail-col-two detail-section ">
              <div className="detail-col-two-text detail-section my-4 sub-col-title">
                Resources
              </div>
              {colTwo.map((item, index) => {
                return (
                  <div key={index}>
                    {
                      <div className="detail-section sub-colTwo-title">
                        {item.title}
                      </div>
                    }
                  </div>
                );
              })}
            </Col>
            <Col sm="3" className="detail-col-three detail-section ">
              <div className="detail-col-three-text detail-section my-4 sub-col-title">
                Connect
              </div>

              <div className="detail-mail-contact">
                <div className="detail-section">
                  <GrMailOption className="detail-mail-logo" />
                </div>
                <div className="detail-section sub-colTwo-title">
                  support@trilingual.com
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DetailSection;
