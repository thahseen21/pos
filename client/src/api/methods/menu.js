import api from "../index";
import * as ApiConstants from "../ApiConstants";

export const category = () => {
  return api(ApiConstants.CATEGORY, "GET");
};

export const dish = () => {
  return api(ApiConstants.DISH, "GET");
};
