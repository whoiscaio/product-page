import { CartItemContainer } from './styles';
import CartItemThumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import DeleteButtonIcon from '../../assets/images/icon-delete.svg';

function CartItem() {
  return (
    <CartItemContainer>
      <div className="item-icon">
        <img src={CartItemThumbnail} alt="Item Icon" />
      </div>
      <div className="item-info">
        <span>Fall Limited Edition Sneakers</span>
        <span>
          $125.00 x 3 <strong>$375.00</strong>
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

export default CartItem;
