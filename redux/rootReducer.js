import { combineReducers } from 'redux';

import shopReducer from './shop/shopReducer';
import cartReducer from './cart/cartReducer';

export const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer
});