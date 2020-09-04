import { put, call, delay } from "redux-saga/effects";
import { ToastContainer, toast } from "react-toastify";

import {
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../services/productServices";

import * as types from "../constants/";

export function* getProductsSaga(payload) {
  try {
    yield delay(1000);
    yield put({ type: types.PRODUCT_LOADING_START });
    const response = yield call(getAllProducts, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      yield put({ type: types.PRODUCT_GET_SUCCESS, payload: data });
    } else {
      yield put({ type: types.PRODUCT_GET_FAILURE });
    }
    yield put({ type: types.PRODUCT_LOADING_STOP });
  } catch (error) {
    yield put({ type: types.PRODUCT_GET_FAILURE });
    yield put({ type: types.PRODUCT_LOADING_STOP });
  }
}

export function* addProductsSaga(payload) {
  try {
    yield put({ type: types.PRODUCT_LOADING_START });
    yield delay(1000);
    const response = yield call(addProduct, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      toast.success(message);
      yield put({ type: types.PRODUCT_ADD_SUCCESS, payload: data });
    } else {
      toast.error(message);
      yield put({ type: types.PRODUCT_ADD_FAILURE });
    }
    yield put({ type: types.PRODUCT_LOADING_STOP });
  } catch (error) {
    toast.error("Product not add");
    yield put({ type: types.PRODUCT_ADD_FAILURE });
    yield put({ type: types.PRODUCT_LOADING_STOP });
  }
}


export function* deleteProductsSaga(payload) {
  try {
    yield put({ type: types.PRODUCT_LOADING_START });
    yield delay(1000);
    const response = yield call(deleteProduct, payload);
    const { data, message } = response.data;
    if (response.status === 200) {
      toast.success(message);
      yield put({ type: types.PRODUCT_DELETE_SUCCESS, payload: data });
    } else {
      toast.error(message);
      yield put({ type: types.PRODUCT_DELETE_FAILURE });
    }
    yield put({ type: types.PRODUCT_LOADING_STOP });
  } catch (error) {
    toast.error("Product not add");
    yield put({ type: types.PRODUCT_DELETE_FAILURE });
    yield put({ type: types.PRODUCT_LOADING_STOP });
  }
}
