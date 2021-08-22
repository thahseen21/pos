import { takeEvery, all } from "redux-saga/effects";
import * as types from "../action/types";

import * as orderSaga from "./order";
import menuSaga from "./menu";

function* watch() {
  yield all([takeEvery(types.ADD_ORDER_REQUEST, orderSaga.addOrder)]);
  yield all([
    takeEvery(types.INCREMENT_ORDER_REQUEST, orderSaga.incrementOrder),
  ]);
  yield all([
    takeEvery(types.DECREMENT_ORDER_REQUEST, orderSaga.decrementOrder),
  ]);
  yield all([takeEvery(types.FETCH_MENU, menuSaga)]);
  yield all([takeEvery(types.SETTLE_REQUEST, orderSaga.settle)]);
}

export default watch;
