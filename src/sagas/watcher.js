import { takeLatest, takeEvery } from 'redux-saga/effects';

import { getProductsSaga ,addProductsSaga,deleteProductsSaga} from './productSaga';
import { getPromosSaga,addPromoSaga,deletePromoSaga} from './promoSaga';
import { getCartSaga,addCartSaga,deleteCartSaga,applyCouponSaga} from './cartSaga';

import * as types from '../constants/';


export default function* watcher() {
  yield takeLatest(types.PRODUCT_GET, getProductsSaga);
  yield takeLatest(types.PRODUCT_ADD, addProductsSaga);
  yield takeLatest(types.PRODUCT_DELETE, deleteProductsSaga);

  yield takeLatest(types.PROMO_GET, getPromosSaga);
  yield takeLatest(types.PROMO_ADD, addPromoSaga);
  yield takeLatest(types.PROMO_DELETE, deletePromoSaga);

  yield takeLatest(types.CART_GET, getCartSaga);
  yield takeEvery(types.CART_ADD, addCartSaga);
  yield takeLatest(types.CART_DELETE, deleteCartSaga);
  yield takeLatest(types.COUPON_APPLY, applyCouponSaga);
}