import React, {Fragment} from "react";
import { Container, Row, Col, Table  } from "react-bootstrap";

import ListProducts from "./components/ListProducts";
import Cart from "./components/Cart";

export default ()=>{
    return(
       <Container className="products-page">
           <Row>
               <Col md={8}>
               <ListProducts/>
               </Col>
               <Col md={4}>
                   <Cart />
               </Col>
           </Row>
           
       </Container>
    )
}