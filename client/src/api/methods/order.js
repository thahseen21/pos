import api from "../index";
import * as ApiConstants from "../ApiConstants";

export const placeorder = (data) => {
  return api(ApiConstants.PLACE_ORDER, "POST", data);
};

export const incrementOrder = (data) => {
  return api(ApiConstants.INC_ORDER, "PUT", data);
};

export const decrementOrder = (data) => {
  return api(ApiConstants.DEC_ORDER, "PUT", data);
};

export const settle = (data) => {
  return api(ApiConstants.SETTLE, "POST", data);
};
