import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = () => {
  return (dispatch) => {
    console.log("add to absket");

    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
