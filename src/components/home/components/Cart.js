import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";

import ApplyPromoCode from "./ApplyPromoCode";

import { getCart, deleteCartItem } from "../../../actions/CartActions";

const ListItems = (props) => {
  const { items, promo, subtotal, discount, minOrder } = props.cart;
  useEffect(() => {
    if (!props.cart.items) {
      props.getCart();
    }
  }, []);

  const deleteMe = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure to delete this Item?")) {
      props.deleteCartItem(id);
    }
  };

  const CouponRow = () => {
    return (
      <Fragment>
        {promo && discount && (
          <tr>
            <th >Coupon</th>
            <th><span className="applied-coupon">{promo}</span></th>
            <th>{discount}%</th>
            <th colSpan={2}>{((subtotal * discount) / 100).toFixed(2)} $</th>
          </tr>
        )}
      </Fragment>
    );
  };

  const TotalRow = () => {
    const total =
      promo && discount ? subtotal - (subtotal * discount) / 100 : subtotal;
    return (
      <Fragment>
        <tr>
          <th colSpan={3}>Total</th>
          <th colSpan={2}>{total.toFixed(2)} $</th>
        </tr>
      </Fragment>
    );
  };

  return (
    <Row className="list-section cart">
      <Col md={12}>
        <h5> Cart items</h5>
      </Col>
      <Col>
        <Table responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price($)</th>
              <th>Qty</th>
              <th>Total($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              <Fragment>
                {items.map((p, index) => {
                  return (
                    <tr key={p._id}>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.qty}</td>
                      <td>{p.qty * p.price}</td>
                      <td>
                        <i
                          className="fa fa-trash"
                          onClick={(e) => {
                            deleteMe(e, p._id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th colSpan={3}>Subtotal</th>
                  <th colSpan={2}>{subtotal || 0} $</th>
                </tr>
                <tr>
                  <th colSpan={5}>
                    <ApplyPromoCode />
                  </th>
                </tr>
                <CouponRow />
                <TotalRow />
              </Fragment>
            ) : (
              <tr>
                <td colSpan={5}>No Item in cart</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  getCart,
  deleteCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
