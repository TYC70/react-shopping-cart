import {configureStore} from "@reduxjs/toolkit";
import {applyMiddleware} from "redux";
import {compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(combineReducers({
    products: productsReducer,
    cart: cartReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);

export default store;