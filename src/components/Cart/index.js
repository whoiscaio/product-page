import { useSelector } from 'react-redux';

import Container from './styles';
import CartItem from './CartItem';

function Cart() {
  const { isCartOpen, cartItems } = useSelector((state) => state);

  if (!isCartOpen) return null;

  return (
    <Container>
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
