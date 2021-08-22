//to store the order in the reducer
export const ADD_ORDER = "ADD_ORDER";
export const INCREMENT_ORDER = "INCREMENT_ORDER";
export const DECREMENT_ORDER = "DECREMENT_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const SETTLE = "SETTLE";

//to trigger saga
export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const INCREMENT_ORDER_REQUEST = "INCREMENT_ORDER_REQUEST";
export const DECREMENT_ORDER_REQUEST = "DECREMENT_ORDER_REQUEST";
export const REMOVE_ORDER_REQUEST = "REMOVE_ORDER_REQUEST";
export const SETTLE_REQUEST = "SETTLE_REQUEST";

//to trigger saga for fetching the category and dish
export const FETCH_MENU = "FETCH_MENU";

//to store the category and dish
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_DISH = "SET_DISH";

//Network error handling saga
export const ERROR = "ERROR";

export const DISMISS_ERROR = "DISMISS_ERROR";
