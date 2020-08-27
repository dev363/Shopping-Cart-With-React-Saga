import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import ProductCard from "./ProductCard"

import { getPromos} from "../../../actions/PromoActions";
import { getProducts} from "../../../actions/ProductActions";
import { addCart} from "../../../actions/CartActions";

const ListProducts = (props) => {
  
  useEffect(() => {

    if (!props.products) {
      props.getProducts();
      props.getPromos();
    }

  }, []);

  const deleteMe=(e,id)=>{
    e.preventDefault();
    if (window.confirm("Are you sure to delete this Product?")) {
      props.deleteProduct(id)
    }
  }

  const addCartItem =(e,item)=>{
      e.preventDefault();
      props.addCart(item)
  }

  return (
    <Row className="list-section">
      <Col md={12}>
        <h5> List Products</h5>
      </Col>
      {
        !props.loading && props.products ? (
               <Fragment>
                   {
                       props.products.map((p, index) => {
                        return (
                            <Col md={3} key={index}>
                            <ProductCard data={p} addCart={addCartItem} />
                            </Col>
                        )
                       })
                   }
               </Fragment>
           ):
           (
               <p>No Product Found</p>
           )
      }
      </Row>
  );
};

const mapStateToProps = (state) => ({
    loading: state.loading.product,
    products: state.products.products,
    cart:state.cart
  })

const mapDispatchToProps = {
  getProducts,
  getPromos,
  addCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
