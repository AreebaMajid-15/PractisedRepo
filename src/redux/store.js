import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import {store} from "redux"
import { thunk } from "redux-thunk";
import {productsReducer} from "./reducers/productsReducer"

const rootReducer = combineReducers( {
    product: productsReducer,

})

export const store = createStore( 
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)