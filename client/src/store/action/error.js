import * as types from "./types";

export const error = (data) => {
  return {
    type: types.ERROR,
    data,
  };
};

export const dismissError = (data) => {
  return {
    type: types.DISMISS_ERROR,
    data,
  };
};
