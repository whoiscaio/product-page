import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  isCartClosing: false,
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
      state.isCartClosing = false;
    },
    closeCartAnimate: (state) => {
      state.isCartClosing = true;
    },
    addItem: (state, action) => {
      console.log(action);

      state.cartItems = [
        ...state.cartItems,
        action.payload
      ]
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    }
  }
});

export const { openCart, closeCart, closeCartAnimate, addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
