import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { addPromo } from "../../../actions/PromoActions";

const ListProducts = (props) => {
    const [inputs,setInputs]= useState({
        name:"",
        discount:"",
        minOrder:""
    })

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}= e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.addPromo(inputs);
        setInputs({
          name:"",
          discount:"",
          minOrder:""
        })
    }

  return (
    <Row className="add-section">
      <Col md={12}><h5> Add Promo Code</h5></Col>
      <Col>
        <Form inline onSubmit={(e)=>handleSubmit(e)}>
        
          <Form.Control
            className="mb-2 mr-sm-2"
            size="sm"
            required
            placeholder="Promo Code Title"
            name="name"
            value={inputs.name}
            onChange={(e)=>handleChange(e)}
          />
         
          <Form.Control
            type="number"
            min={1}
            max={100}
            required
            className="mb-2 mr-sm-2"
            size="sm"
            placeholder="Discount %"
            name="discount"

            value={inputs.discount}
            onChange={(e)=>handleChange(e)}
          />

<Form.Control
            type="number"
            min={1}
            required
            className="mb-2 mr-sm-2"
            size="sm"
            placeholder="Minimum Order"
            name="minOrder"
            value={inputs.minOrder}
            onChange={(e)=>handleChange(e)}
          />

          <Button type="submit" className="mb-2" size="sm" disabled={props.loading}>
            Save
          </Button>
          {
            props.loading && (
              <i className="fa fa-spinner" aria-hidden="true"></i>
            )
          }
        </Form>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  loading:state.loading.promocode
});

const mapDispatchToProps = {
  addPromo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
