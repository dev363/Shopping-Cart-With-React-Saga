import { put, call, delay ,select} from "redux-saga/effects";
import { ToastContainer, toast } from "react-toastify";


import * as types from "../constants/";

export function* getCartSaga(){
  try {
    yield put({ type: types.CART_GET_SUCCESS});
  } catch (error) {
    yield put({ type: types.CART_GET_FAILURE});
  }
}

export function* addCartSaga(payload){
  try {
    yield put({ type: types.CART_ADD_SUCCESS,payload });
    toast.success("Item add to cart")
  } catch (error) {

    yield put({ type: types.CART_ADD_FAILURE});
    toast.error("Uable to add item")
  }
}

export function* deleteCartSaga(payload){
  try {

    yield put({ type: types.CART_DELETE_SUCCESS,payload });
    toast.success("Item delete from cart")
  } catch (error) {
    yield put({ type: types.CART_DELETE_FAILURE});
    toast.sucess("Unable to delete item")
  }
}


export function* applyCouponSaga(payload){
  try {
    const state = yield select();
    const {cart,promos}= state;
    const CheckCoupon= (promos.promos).filter(i=>i.name === payload.coupon)
  
    if(CheckCoupon.length < 1){
      toast.error("Coupon does not exist")
      yield put({ type: types.COUPON_APPLY_FAILURE});
    }else{
      
  
      const{discount,minOrder}= CheckCoupon[0];
      if(cart.subtotal >= minOrder){
        toast.success(`Wow! You save ${discount}% :)`)
        yield put({ type: types.COUPON_APPLY_SUCCESS,payload:{promo:payload.coupon,discount:discount,minOrder:minOrder} });
      }else{
        
        toast.error(`Please add more items. Coupon valid for minimun ${minOrder}`)
        yield put({ type: types.COUPON_APPLY_FAILURE});
      }
    }
  } catch (error) {
    yield put({ type: types.COUPON_APPLY_FAILURE});
  }
}