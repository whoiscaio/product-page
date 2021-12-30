import propTypes from 'prop-types';
import { createContext, useRef, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const CartRef = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  function toggleIsCartOpen() {
    const { current: CartElement } = CartRef;

    if(isCartOpen) {
      CartElement.classList.add('going-out');
      setTimeout(() => {
        CartElement.classList.remove('going-out');
        setIsCartOpen(false);
      }, 370);
    }

    setIsCartOpen(true);
  }

  return (
    <CartContext.Provider
      value={{
        isCartEmpty,
        setIsCartEmpty,
        isCartOpen,
        toggleIsCartOpen,
        CartRef,
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
