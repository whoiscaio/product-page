import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CartItemContainer } from './styles';
import DeleteButtonIcon from '../../assets/images/icon-delete.svg';
import { removeItem } from '../../actions/cartActions';

function CartItem(props) {
  const dispatch = useDispatch();

  const { image, title, price, quantity, id } = props.item;

  return (
    <CartItemContainer>
      <div className="item-icon">
        <img src={image} alt="Item Icon" />
      </div>
      <div className="item-info">
        <span>{title}</span>
        <span>
          ${price.toFixed(2)} x {quantity} <strong>${(price * quantity).toFixed(2)}</strong>
        </span>
      </div>
      <div className="delete-button">
        <button type="button" onClick={(e) => {
          e.stopPropagation();
          dispatch(removeItem(id));
        }}>
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
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
