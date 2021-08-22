import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import saga from "./saga";
import OrderReducer from "./reducer/order";
import MenuReducer from "./reducer/menu";
import ErrorReducer from "./reducer/error";

const rootReducer = combineReducers({
  Order: OrderReducer,
  Menu: MenuReducer,
  Error: ErrorReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
