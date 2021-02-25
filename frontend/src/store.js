import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducers/product.js';

const initialState = {};

const reducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
