import {
  CART_ADD,
  CART_DELETE,
  CART_GET,
  COUPON_APPLY
  } from "../constants";

export const getCart = () => {
    return {
      type: CART_GET
    }
  };

  export const addCart = (item) => {
    return {
      type: CART_ADD,
      item
    }
  };

  export const deleteCartItem = (id) => {
    return {
      type: CART_DELETE,
      id
    }
  };

  export const applyCoupon =(coupon)=>{
    return({
      type:COUPON_APPLY,
      coupon
    })
  }