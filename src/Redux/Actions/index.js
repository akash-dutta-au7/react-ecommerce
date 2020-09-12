import { SET_CURRENT_USER } from "../actionTypes";
import { TOGGLE_CART_HIDDEN } from "../actionTypes";

//User actions
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

//Cart actions
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});
