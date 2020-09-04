import React, { Fragment } from "react";
import { Container, Row, Col, Table  } from "react-bootstrap";


import ListProduct from "./components/ListProducts"
import AddProduct from "./components/AddProduct";
import AddPromoCodes from "./components/AddPromoCode";
import ListPromoCodes from "./components/ListPromoCodes";

export default () =>{

    return (
        <Container>
            <Row>
                <Col id="product-section">
                <AddProduct/>
                <ListProduct/>
                </Col>
                <Col  id="promo-section">
                <AddPromoCodes />
                <ListPromoCodes />
                </Col>
            </Row>

           
        </Container>
    )
}