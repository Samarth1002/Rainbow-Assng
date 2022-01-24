import React from "react";
import { Container, Row, Col } from "reactstrap";

const BlogSection = () => {
  return (
    <>
      <Row className="my-3 py-5 m-0 p-0 ">
        <Col md="6" className="blog-section">
          <div className="blog-section-text">
            <div className="blog-title">Blogs</div>
            <div className="blog-text-one">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </div>
            <div className="blog-text-two">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor
              sit amet Lorem ipsum dolor sit am...
            </div>
            <div className="blog-text-three">BY AMIN SHAH | 5mins read</div>
          </div>
        </Col>
        <Col md="6">
          <img src="Images/vr-game.jpg" className="blog-section-gaming" />
        </Col>
      </Row>
    </>
  );
};

export default BlogSection;
