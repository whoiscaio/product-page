import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../slice/CartReducer';

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;