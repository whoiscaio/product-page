const initialValues = {
  isCartOpen: false,
  cartItems: [],
}

function cartReducer(state = initialValues, action) {
  switch (action.type) {
    case 'open_cart':
      return {
        ...state,
        isCartOpen: true,
      }

    case 'close_cart':
      return {
        ...state,
        isCartOpen: false
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

export default cartReducer;