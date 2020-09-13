import { SET_CURRENT_USER } from "../actionTypes";
import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from "../actionTypes";

//User actions
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

//Cart actions
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});
