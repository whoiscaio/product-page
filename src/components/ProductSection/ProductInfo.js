import { useState } from 'react';

import { ProductInfoContainer } from './styles';
import whiteCartIcon from '../../assets/images/icon-white-cart.png';

function ProductInfo() {
  const [quantity, setQuantity] = useState(0);

  function plusQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function minusQuantity() {
    setQuantity((prevState) => prevState === 0 ? 0 : prevState - 1);
  }

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
          <span>$125.00</span>
        </span>
        <div className="discount">
          <span>50%</span>
        </div>
        <div className="old-price">
          <span>$250.00</span>
        </div>
      </section>
      <section className="actions">
        <div className="set-quantity">
          <button onClick={minusQuantity} type="button">-</button>
          <span>{quantity}</span>
          <button onClick={plusQuantity} type="button">+</button>
        </div>
        <div className="add-to-cart">
          <button type="button"><img src={whiteCartIcon} alt="Cart Icon" /><span>Add to cart</span></button>
        </div>
      </section>
    </ProductInfoContainer>
  );
}

export default ProductInfo;
