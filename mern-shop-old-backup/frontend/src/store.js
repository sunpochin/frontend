import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer, productDetailsReducer } from './reducers/productReducers'
 import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
	cart: {cartItems: cartItemFromStorage},
	userLogin: {userInfo: userInfoFromStorage}
};
const middleware = [reduxThunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


