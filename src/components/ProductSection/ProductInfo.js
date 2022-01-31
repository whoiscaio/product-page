import PropTypes from 'prop-types';

import { ProductInfoContainer } from './styles';
import whiteCartIcon from '../../assets/images/icon-white-cart.png';

function ProductInfo(props) {
  const { add, qtd, plus, minus } = props;

  return (
    <ProductInfoContainer>
      <header>
        <span className="company">SNEAKER COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
      </header>
      <section className="description">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </section>
      <section className="price">
        <span className="main-price">
          <span>${125 * qtd}.00</span>
          <div className="discount">
            <span>50%</span>
          </div>
        </span>
        <div className="old-price">
          <span>${250 * qtd}.00</span>
        </div>
      </section>
      <section className="actions">
        <div className="set-quantity">
          <button onClick={minus} type="button">-</button>
          <span role="definition">{qtd}</span>
          <button onClick={plus} type="button">+</button>
        </div>
        <div className="add-to-cart">
          <button onClick={add} type="button"><img src={whiteCartIcon} alt="Cart Icon" /><span>Add to cart</span></button>
        </div>
      </section>
    </ProductInfoContainer>
  );
}

ProductInfo.propTypes = {
  add: PropTypes.func.isRequired,
  qtd: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
}

export default ProductInfo;
