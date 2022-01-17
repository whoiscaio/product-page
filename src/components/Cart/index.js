import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import Container from './styles';
import CartItem from './CartItem';

function Cart({cartRef}) {
  const { isCartOpen, isCartClosing, cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  if (!isCartOpen) return null;

  return (
    <Container ref={cartRef} className={isCartClosing ? 'going-out' : undefined}>
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

Cart.propTypes = {
  cartRef: propTypes.shape().isRequired,
};

export default Cart;
