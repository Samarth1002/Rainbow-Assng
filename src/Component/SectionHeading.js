import React from "react";
import { Container } from "reactstrap";

const SectionHeading = ({ title }) => {
  return (
    <Container className="text-center common-title my-3 py-4">
      <div>{title}</div>
    </Container>
  );
};

export default SectionHeading;
