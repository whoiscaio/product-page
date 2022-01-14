import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from './styles';
import CartItem from './CartItem';

function Cart() {
  const { isCartOpen, isCartClosing, cartItems } = useSelector((state) => state);

  if (!isCartOpen) return null;

  return (
    <Container className={isCartClosing ? 'going-out' : undefined}>
      <header>
        <h1>Cart</h1>
      </header>
      <div className="content">
        {cartItems.length === 0 ? (
          <span id="empty">Your cart is empty</span>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
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
