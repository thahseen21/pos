import { updateObject } from "../../shared/update";
import * as types from "../action/types";

const initialState = {
  category: [],
  dish: [],
};

const setCategory = (state, data) => {
  let updatedCategory;

  updatedCategory = {
    ...state,
    category: [...data],
  };

  return updateObject(state, updatedCategory);
};
const setDish = (state, data) => {
  let updatedDish;

  updatedDish = {
    ...state,
    dish: [...data],
  };

  return updateObject(state, updatedDish);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORY:
      return setCategory(state, action.data);
    case types.SET_DISH:
      return setDish(state, action.data);
    default:
      return state;
  }
};

export default reducer;
