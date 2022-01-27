import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FaQuoteLeft } from "react-icons/fa";
import {
  BsArrowLeftCircleFill,
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
  BsArrowRightCircle,
} from "react-icons/bs";
const QuoteSection = () => {
  return (
    <Container className="my-5 py-4 quote-section">
      <Row className="quote-section quote-section-col">
        <Col md="8">
          <FaQuoteLeft className="quote" />
          <div className="testimonial">Testimonial</div>
          <div className="testimonial-text">
            "My kids remember every artist and their work, many weeks after the
            lessons." - Kathy, Parent of 11, 9 & 6 yr old 3-"My kids are
            encouraged to try out different styles of creating art and always
            look forward to the next class."
          </div>
          <div className="testimonial-text-author ">
            - Fiona, Parent of 7 & 8 yr old
          </div>

          <BsArrowLeftCircle className="quote-arrow" />
          <BsArrowRightCircleFill className="quote-arrow" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default QuoteSection;
