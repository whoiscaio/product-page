import propTypes from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function addCartItem(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  function removeCartItem(itemId) {
    setCartItems((prevState) => prevState.filter((item) => item.id !== itemId));
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        cartItems,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default CartProvider;
