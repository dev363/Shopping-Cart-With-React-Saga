import React, { Fragment } from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import { NavLink ,Link} from 'react-router-dom'

export default () => {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand >Cart Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/">Home</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/backend" className="admin-page">Go to Admin</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
