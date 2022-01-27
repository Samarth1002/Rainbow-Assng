import React from "react";
import { Container, Row, Col } from "reactstrap";

const BlogSection = () => {
  return (
    <>
      <Row className="my-3 py-5 m-0 p-0 blog-section-media">
        <Col md="6" className="blog-section blog-section-col-1">
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
        <Col md="6" className="blog-section-col-2">
          <img src="Images/vr-game.jpg" className="blog-section-gaming" />
        </Col>
      </Row>
    </>
  );
};

export default BlogSection;
