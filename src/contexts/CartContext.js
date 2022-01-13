import propTypes from 'prop-types';
import { createContext, useRef, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const CartRef = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    const { current: CartElement } = CartRef;

    setIsCartOpen((prevState) => {
      if (!prevState) return prevState;

      CartElement.classList.add('going-out');
      setTimeout(() => {
        CartElement.classList.remove('going-out');
        return false;
      }, 3700);
    })
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
        CartRef,
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
