import { cartActionTypes } from './cartctionTypes';


export const addItem = item =>({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = () => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART
})

export const orderNow = items => ({
  type: cartActionTypes.ORDER_NOW,
  payload: items
})