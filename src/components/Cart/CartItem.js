import PropTypes from 'prop-types';

import { CartItemContainer } from './styles';
import DeleteButtonIcon from '../../assets/images/icon-delete.svg';

function CartItem(item) {
  const { image, title, price, quantity } = item;

  return (
    <CartItemContainer>
      <div className="item-icon">
        <img src={image} alt="Item Icon" />
      </div>
      <div className="item-info">
        <span>{title}</span>
        <span>
          ${price} x {quantity} <strong>${price * quantity}</strong>
        </span>
      </div>
      <div className="delete-button">
        <button type="button">
          <img src={DeleteButtonIcon} alt="Delete Button Icon" />
        </button>
      </div>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

export default CartItem;
