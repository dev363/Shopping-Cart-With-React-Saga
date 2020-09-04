import { put, call, delay } from "redux-saga/effects";
import { ToastContainer, toast } from "react-toastify";

import {
  getAllPromos,
  addPromo,
  deletePromo
} from "../services/promoServices";

import * as types from "../constants/";

export function* getPromosSaga(payload) {
  try {
    yield delay(1000);
    yield put({ type: types.PROMO_LOADING_START });
    const response = yield call(getAllPromos, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      yield put({ type: types.PROMO_GET_SUCCESS, payload: data });
    } else {
      yield put({ type: types.PROMO_GET_FAILURE });
    }
    yield put({ type: types.PROMO_LOADING_STOP });
  } catch (error) {
    yield put({ type: types.PROMO_GET_FAILURE });
    yield put({ type: types.PROMO_LOADING_STOP });
  }
}

export function* addPromoSaga(payload) {
  try {
    yield put({ type: types.PROMO_LOADING_START });
    yield delay(1000);
    const response = yield call(addPromo, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      toast.success(message);
      yield put({ type: types.PROMO_ADD_SUCCESS, payload: data });
    } else {
      toast.error(message);
      yield put({ type: types.PROMO_ADD_FAILURE });
    }
    yield put({ type: types.PROMO_LOADING_STOP });
  } catch (error) {
    toast.error("Product not add");
    yield put({ type: types.PROMO_ADD_FAILURE });
    yield put({ type: types.PROMO_LOADING_STOP });
  }
}


export function* deletePromoSaga(payload) {
  try {
    yield put({ type: types.PROMO_LOADING_START });
    yield delay(1000);
    const response = yield call(deletePromo, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      toast.success(message);
      yield put({ type: types.PROMO_DELETE_SUCCESS, payload: data });
    } else {
      toast.error(message);
      yield put({ type: types.PROMO_DELETE_FAILURE });
    }
    yield put({ type: types.PROMO_LOADING_STOP });
  } catch (error) {
    toast.error("Product not add");
    yield put({ type: types.PROMO_DELETE_FAILURE });
    yield put({ type: types.PROMO_LOADING_STOP });
  }
}
