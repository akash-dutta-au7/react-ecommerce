import {TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART} from '../actionTypes'
import {addToCart} from '../Utils/cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            }
        case ADD_ITEM_TO_CART:
            return {
                ...state, cartItems: addToCart(state.cartItems, payload)
            }    
        default:
            return state    
    }
}

export default cartReducer;