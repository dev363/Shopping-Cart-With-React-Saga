import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Routes from "./Routes";

export default () => {
  return (
    <Container>
      <Header />
      <Routes />
      {/* <Footer /> */}
    </Container>
  );
};

