import { ProductImagesContainer } from './styles';

import mainImage from '../../assets/images/image-product-1.jpg';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

function ProductImages() {
  return (
    <ProductImagesContainer>
      <div className="main-image">
        <img src={mainImage} alt="Selected" />
      </div>
      <div className="thumbnails">
        <div className="select">
          <img src={thumbnail1} alt="Thumbnail 1" />
        </div>
        <div>
          <img src={thumbnail2} alt="Thumbnail 2" />
        </div>
        <div>
          <img src={thumbnail3} alt="Thumbnail 3" />
        </div>
        <div>
          <img src={thumbnail4} alt="Thumbnail 4" />
        </div>
      </div>
    </ProductImagesContainer>
  )
}

export default ProductImages;