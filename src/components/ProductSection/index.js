import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import Container from './styles';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import { addItem } from '../../slice/CartReducer';

function ProductSection() {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  function plusQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function minusQuantity() {
    setQuantity((prevState) => prevState === 1 ? 1 : prevState - 1);
  }

  function addToCart() {
    dispatch(addItem({
      image: thumbnail1,
      title: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity,
      id: uuid(),
    }));

    setQuantity(1);
  }

  return (
    <Container>
      <ProductImages />
      <ProductInfo add={addToCart} qtd={quantity} plus={plusQuantity} minus={minusQuantity} />
    </Container>
  );
}

export default ProductSection;
