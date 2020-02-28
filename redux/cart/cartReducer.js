import { cartActionTypes } from './cartctionTypes';

import { addItemToCart, removeItemCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  orders: []
}
const cartReducer = ( state=INITIAL_STATE, action ) => {
  switch( action.type ){
    case cartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      }
    case cartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemCart( state.cartItems, action.payload )
      }
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return{
        ...state,
        cartItems: []
      }
    case cartActionTypes.ORDER_NOW:
      return{
        ...state,
        orders: [ ...state.orders, ...action.payload]
      }
    default:
      return state;
  }
}
export default cartReducer;