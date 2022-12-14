import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./MessagesReducer";
import thunkMiddleware from "redux-thunk";

let reducers=combineReducers({
    messages: messagesReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store
export default store;