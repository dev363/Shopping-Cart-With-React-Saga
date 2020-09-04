import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { addProduct } from "../../../actions/ProductActions";

const ListProducts = (props) => {
    const [inputs,setInputs]= useState({
        name:"",
        price:""
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
        props.addProduct(inputs);
        setInputs({
          name:"",
          price:""
        })
    }

  return (
    <Row className="add-section">
      <Col md={12}><h5> Add Products</h5></Col>
      <Col>
        <Form inline onSubmit={(e)=>handleSubmit(e)}>
        
          <Form.Control
            className="mb-2 mr-sm-2"
            size="sm"
            required
            placeholder="Product Title"
            name="name"
            value={inputs.name}
            onChange={(e)=>handleChange(e)}
          />
         
          <Form.Control
            type="number"
            min={1}
            required
            className="mb-2 mr-sm-2"
            size="sm"
            placeholder="Price"
            name="price"
            value={inputs.price}
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
  loading:state.loading.product
});

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
