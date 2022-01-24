import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  return (
    <Container className="my-5 py-5">
      <Row>
        <Col md="6" className="text-center">
          <img src="Images/email.svg" height={480} width={555} />
        </Col>
        <Col md="5">
          <Form>
            <Row className="form-cnt">
              <Col sm="10" className="bg-white py-3">
                <Label htmlFor="name" className="bg-white my-2  ">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  className="form-input-field"
                />
                <Label htmlFor="course" className="bg-white my-2">
                  Course
                </Label>
                <Input
                  id="course"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  placeholder="Course"
                  className="form-input-field"
                />
                <Label htmlFor="email" className="bg-white my-2" >
                  Email ID
                </Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email id"
                  className="form-input-field"
                />
                <Row className="my-2">
                  <Col sm="6" className="bg-white">
                    <Label htmlFor="phone" className="bg-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="form-input-field"
                      placeholder="phone"
                    />
                  </Col>
                  <Col sm="6" className="bg-white">
                    <Label htmlFor="age" className="bg-white">
                      Age
                    </Label>
                    <Input
                      id="age"
                      placeholder="age"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      className="form-input-field"
                    />
                  </Col>
                </Row>
              </Col>

              <Col sm="7" className="text-center m-4 bg-white">
                <Button className="text-center form-btn " color="danger">
                  PROCEED
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
