const initialValues = {
  isCartOpen: false,
  isCartClosing: false,
  cartItems: [],
}

function CartReducer(state = initialValues, action) {
  switch (action.type) {
    case 'open_cart':
      return {
        ...state,
        isCartOpen: true,
      }

    case 'close_cart_animate':
      return {
        ...state,
        isCartClosing: true,
      }

    case 'close_cart':
      return {
        ...state,
        isCartClosing: false,
        isCartOpen: false,
      }

    case 'add_item':
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      }

    case 'remove_item':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.itemId),
      }

    default:
      return state;
  }
}

export default CartReducer;