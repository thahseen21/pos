import * as actionTypes from "./types";

export const addOrder = (data) => {
  return {
    type: actionTypes.ADD_ORDER_REQUEST,
    data: data,
  };
};

export const setOrder = (data) => {
  return {
    type: actionTypes.ADD_ORDER,
    data: data,
  };
};

export const incrementOrder = (data) => {
  return {
    type: actionTypes.INCREMENT_ORDER_REQUEST,
    data,
  };
};

export const setIncrementOrder = (data) => {
  return {
    type: actionTypes.INCREMENT_ORDER,
    data,
  };
};

export const setDecrementOrder = (data) => {
  return {
    type: actionTypes.DECREMENT_ORDER,
    data,
  };
};
export const decrementOrder = (data) => {
  return {
    type: actionTypes.DECREMENT_ORDER_REQUEST,
    data,
  };
};

export const settle = (data) => {
  return {
    type: actionTypes.SETTLE,
    data,
  };
};

export const settleRequest = (data) => {
  return {
    type: actionTypes.SETTLE_REQUEST,
    data,
  };
};
