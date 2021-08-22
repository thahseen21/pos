import { put, call } from "redux-saga/effects";
import * as orderApi from "../../api/methods/order";
import { error } from "../action/error";
import * as orderActions from "../action/order";

export function* addOrder(action) {
  let response = yield call(orderApi.placeorder, action.data);

  if (response?.status === 404) {
    yield put(
      error({
        error: response,
        errorMsg: "Something Went wrong...",
      })
    );
  } else {
    yield put(
      orderActions.setOrder({ ...action.data, orderId: response.orderId })
    );
  }
}

export function* incrementOrder(action) {
  let response = yield call(orderApi.incrementOrder, action.data);

  if (response?.status === 404) {
    yield put(
      error({
        error: response,
        errorMsg: "Something Went wrong...",
      })
    );
  } else {
    yield put(orderActions.setIncrementOrder(action.data));
  }
}

export function* decrementOrder(action) {
  let response = yield call(orderApi.decrementOrder, action.data);

  if (response?.status === 404) {
    yield put(
      error({
        error: response,
        errorMsg: "Something Went wrong...",
      })
    );
  } else {
    yield put(orderActions.setDecrementOrder(action.data));
  }
}

export function* settle(action) {
  let response = yield call(orderApi.settle, action.data);

  if (response?.status === 404) {
    yield put(
      error({
        error: response,
        errorMsg: "Something Went wrong...",
      })
    );
  } else {
    yield put(orderActions.settle(action.data));
  }
}
