import * as actionTypes from "./types";

export const fetchMenu = () => {
  return {
    type: actionTypes.FETCH_MENU,
  };
};

export const setCategory = (data) => {
  return {
    type: actionTypes.SET_CATEGORY,
    data,
  };
};

export const setDish = (data) => {
  return {
    type: actionTypes.SET_DISH,
    data,
  };
};
