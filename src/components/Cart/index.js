import { useContext } from 'react';

import Container from './styles';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

function Cart() {
  const { isCartOpen, CartRef, cartItems } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <Container ref={CartRef}>
      <header>
        <h1>Cart</h1>
      </header>
      <div className="content">
        {cartItems.length === 0 ? (
          <span id="empty">Your cart is empty</span>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <div className="checkout-button">
              <button type="button">Checkout</button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default Cart;
