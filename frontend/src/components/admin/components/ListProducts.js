import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";

import { getProducts, deleteProduct} from "../../../actions/ProductActions";

const ListProducts = (props) => {
  
  useEffect(() => {

    if (!props.products) {
      props.getProducts();
    }

  }, []);

  const deleteMe=(e,id)=>{
    e.preventDefault();
    if (window.confirm("Are you sure to delete this Product?")) {
      props.deleteProduct(id)
    }
  }
  return (
    <Row className="list-section">
      <Col md={12}>
        <h5> List Products</h5>
      </Col>
      <Col>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            {!props.loading && props.products ? (
              <Fragment>
                {props.products.map((p, index) => {
                  return (
                    <tr key={p._id}>
                      <td>{++index}</td>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>
                        <i className="fa fa-trash" onClick={(e)=>{deleteMe(e,p._id)}}></i>
                      </td>
                    </tr>
                  );
                })}
              </Fragment>
            ) : (
              <tr>
                <td colSpan={4}>
                  <i className="fa fa-spinner" aria-hidden="true"></i>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
    loading: state.loading.product,
    products: state.products.products,
  })

const mapDispatchToProps = {
  getProducts,
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
