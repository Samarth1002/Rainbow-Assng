import React from "react";
import { Container, Button } from "reactstrap";

const ButtonSection = ({ title }) => {
  return (
    <Container className="text-center my-3 " >
      <Button className="text-center  form-btn" color="danger">
        {title}
      </Button>
    </Container>
  );
};

export default ButtonSection;
