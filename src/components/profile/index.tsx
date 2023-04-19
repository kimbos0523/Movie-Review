import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProfileComponent: React.FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>Hello</Col>
        <Col>World</Col>
      </Row>
      <Row>
        <Col sm={true}>Hello</Col>
        <Col sm={true}>World</Col>
      </Row>
    </Container>
  );
};

export default ProfileComponent;
