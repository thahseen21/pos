import { updateArray, updateObject } from "../../shared/update";
import * as types from "../action/types";

const initialState = {
  error: [],
};

const error = (state, data) => {
  let updatedError;

  updatedError = {
    ...state,
    error: [
      ...state.error,
      {
        reponse: {
          status: data.error.status,
          statusText: data.error.statusText,
        },
        error_msg: data.errorMsg,
      },
    ],
  };

  return updateObject(state, updatedError);
};

const dismissError = (state, data) => {
  let updatedError;
  updatedError = {
    ...state,
    error: [...state.error.filter((item, index) => index != data)],
  };

  return updateObject(state, updatedError);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return error(state, action.data);
    case types.DISMISS_ERROR:
      return dismissError(state, action.data);
    default:
      return state;
  }
};

export default reducer;
