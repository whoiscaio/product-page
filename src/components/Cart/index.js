import { useContext } from 'react';

import Container from './styles';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../PageHeader/CartItem';

function Cart() {
  const { isCartEmpty, isCartOpen, CartRef } = useContext(CartContext);

  if(!isCartOpen) return null;

  return (
    <Container ref={CartRef}>
      <header>
        <h1>Cart</h1>
      </header>
      <div className="content">
        {isCartEmpty ? (
          <span id="empty">Your cart is empty</span>
        ) : (
          <>
            <CartItem />
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
