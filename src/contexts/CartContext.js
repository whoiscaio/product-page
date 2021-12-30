import propTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const values = useMemo(() => ({ isCartEmpty, setIsCartEmpty }), []);

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export default CartProvider;
