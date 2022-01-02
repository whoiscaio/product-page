import propTypes from 'prop-types';
import { createContext, useRef, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const CartRef = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function toggleIsCartOpen() {
    const { current: CartElement } = CartRef;

    if (isCartOpen) {
      CartElement.classList.add('going-out');
      setTimeout(() => {
        CartElement.classList.remove('going-out');
        setIsCartOpen(false);
      }, 370);
    }

    setIsCartOpen(true);
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
        isCartEmpty,
        setIsCartEmpty,
        isCartOpen,
        toggleIsCartOpen,
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
