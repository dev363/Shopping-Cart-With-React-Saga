import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";

import { getPromos, deletePromo} from "../../../actions/PromoActions";

const ListPromoCodes = (props) => {
  
  useEffect(() => {

    if (!props.promos) {
      props.getPromos();
    }

  }, []);

  const deleteMe=(e,id)=>{
    e.preventDefault();
    if (window.confirm("Are you sure to delete this PromoCode?")) {
      props.deletePromo(id)
    }
  }

  return (
    <Row className="list-section">
      <Col md={12}>
        <h5> List Promo Codes</h5>
      </Col>
      <Col>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Discount %</th>
              <th>Min Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            {!props.loading && props.promos ? (
              <Fragment>
                {props.promos.map((p, index) => {
                  return (
                    <tr key={p._id}>
                      <td>{++index}</td>
                      <td>{p.name}</td>
                      <td>{p.discount}</td>
                      <td>{p.minOrder}</td>
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
  loading: state.loading.promocode,
  promos: state.promos.promos,
});

const mapDispatchToProps = {
  getPromos,
  deletePromo
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPromoCodes);
