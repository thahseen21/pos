import _ from "lodash";

import { updateObject } from "../../shared/update";
import * as actionTypes from "../action/types";

const initialState = {};

const addOrder = (state, data) => {
  let updatedOrder;

  if (state?.[data.table]) {
    updatedOrder = {
      ...state,
      [data.table]: {
        ...state[data.table],
        dish: [...state?.[data.table].dish, { dishId: data.dishId, count: 1 }],
      },
    };
  } else {
    updatedOrder = {
      ...state,
      [data.table]: {
        orderId: data.orderId,
        dish: [{ dishId: data.dishId, count: 1 }],
      },
    };
  }

  return updateObject(state, updatedOrder);
};

const incrementOrder = (state, data) => {
  let updatedOrder;

  updatedOrder = {
    ...state,
    [data.table]: {
      ...state[data.table],
      dish: [
        ...state?.[data.table].dish,
        ...state?.[data.table].dish.filter((item) => {
          if (data.dishId === item.dishId) {
            item.count = item.count + 1;
          }
        }),
      ],
    },
  };

  return updateObject(state, updatedOrder);
};

const decrementOrder = (state, data) => {
  let updatedOrder, index;

  updatedOrder = {
    ...state,
    [data.table]: {
      ...state[data.table],
      dish: [
        ...state?.[data.table].dish,
        ...state?.[data.table].dish.filter((item, ind) => {
          if (data.dishId === item.dishId) {
            item.count = item.count - 1;
            index = ind;
          }
        }),
      ],
    },
  };

  let countRef = state?.[data.table]?.dish[index]?.count;

  if (countRef === 0) {
    return removeOrder(updatedOrder, { ...data, index });
  }

  return updateObject(state, updatedOrder);
};

const removeOrder = (state, data) => {
  let updatedOrder = state[data.table].dish.splice(data.index, 1);

  if (state?.[data.table].length === 0) {
    updatedOrder = delete state[data.table];
    return updateObject(state, updatedOrder);
  }

  return state;
};

const settleOrder = (state, data) => {
  let updatedOrder = delete state[data.table];
  return updateObject(state, updatedOrder);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return addOrder(state, action.data);
    case actionTypes.INCREMENT_ORDER:
      return incrementOrder(state, action.data);
    case actionTypes.DECREMENT_ORDER:
      return decrementOrder(state, action.data);
    case actionTypes.SETTLE:
      return settleOrder(state, action.data);
    default:
      return state;
  }
};

export default reducer;
