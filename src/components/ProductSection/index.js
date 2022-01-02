import { useContext, useState } from 'react';

import { CartContext } from '../../contexts/CartContext';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import Container from './styles';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';

function ProductSection() {
  const [quantity, setQuantity] = useState(0);
  const { addCartItem } = useContext(CartContext);

  function plusQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function minusQuantity() {
    setQuantity((prevState) => prevState === 0 ? 0 : prevState - 1);
  }

  function addToCart() {
    addCartItem({
      image: thumbnail1,
      title: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity,
    })
  }

  return (
    <Container>
      <ProductImages />
      <ProductInfo add={addToCart} qtd={quantity} plus={plusQuantity} minus={minusQuantity} />
    </Container>
  );
}

export default ProductSection;
