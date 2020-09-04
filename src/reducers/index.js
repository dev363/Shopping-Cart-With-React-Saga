import { combineReducers } from 'redux';


import LoadingReducer from './loadingReducer';
import ProductReducer from './ProductReducer';
import PromoReducer from './PromoReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
    loading:LoadingReducer,
    products:ProductReducer,
    promos:PromoReducer,
    cart:CartReducer
});

export default rootReducer;