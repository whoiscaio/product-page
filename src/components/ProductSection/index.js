import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import Container from './styles';

function ProductSection() {
  return (
    <Container>
      <ProductImages />
      <ProductInfo />
    </Container>
  );
}

export default ProductSection;
