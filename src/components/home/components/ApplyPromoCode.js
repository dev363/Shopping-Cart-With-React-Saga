import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { applyCoupon } from "../../../actions/CartActions";

const ApplyCoupon = (props) => {
    const [promoCode,setpromoCode]= useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.applyCoupon(promoCode);
        setpromoCode("")
    }

  return (
    <Row className="add-section">
      <Col>
        <Form inline onSubmit={(e)=>handleSubmit(e)}>
        
          <Form.Control
            className="mb-2"
            size="sm"
            required
            placeholder="Add your Coupon"
            value={promoCode}
            onChange={(e)=>setpromoCode(e.target.value)}
          />
       
          <Button type="submit" className="mb-2" size="sm">
            Apply Coupon
          </Button>
          
        </Form>
      </Col>
    </Row>
  );
};


const mapDispatchToProps = {
    applyCoupon,
};

export default connect(null, mapDispatchToProps)(ApplyCoupon);
