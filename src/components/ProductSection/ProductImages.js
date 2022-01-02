import { useState, useRef } from 'react';

import { ProductImagesContainer } from './styles';

import previousImageButton from '../../assets/images/icon-previous.svg';
import nextImageButton from '../../assets/images/icon-next.svg';

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
import LightboxGallery from './LightboxGallery';

function ProductImages() {
  const [isLightboxGalleryOpen, setIsLightboxGalleryOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(1);
  const products = [product1, product2, product3, product4];

  const imageButton1 = useRef();
  const imageButton2 = useRef();
  const imageButton3 = useRef();
  const imageButton4 = useRef();

  const references = [imageButton1, imageButton2, imageButton3, imageButton4];

  function clearClasses(refs) {
    refs.forEach((ref) => ref.current.classList.remove('selected'));
  }

  function toggleLightboxGallery() {
    setIsLightboxGalleryOpen((prevState) => !prevState);
  }

  function goToNextImage(e, ...refs) {
    
    setCurrentImage((prevState) => {
      if(refs) console.log('oi', refs);
      if(refs) refs.forEach((refGroup) => clearClasses(refGroup));

      if (prevState !== 4) {
        if(refs) refs.forEach((refGroup) => refGroup[prevState].current.classList.add('selected'))
        return prevState + 1;
      }

      return 1;
    });
  }

  function goToPreviousImage(e, ...refs) {
    setCurrentImage((prevState) => {
      if(refs) refs.forEach((refGroup) => clearClasses(refGroup));

      if(prevState !== 1) {
        if(refs) refs.forEach((refGroup) => refGroup[prevState - 2].current.classList.add('selected'))
        return prevState - 1;
      }

      return 4;
    });
  }

  function changeImage(imgId, e, refs) {
    if (currentImage === imgId) return;

    const { target } = e;
    const button = target.parentNode;

    clearClasses(refs);
    button.classList.add('selected');
    setCurrentImage(imgId);
  }

  return (
    <ProductImagesContainer>
      <button
        type="button"
        onClick={toggleLightboxGallery}
        className="main-image"
      >
        <img src={products[currentImage - 1]} alt="Selected" />
      </button>
      <div className="thumbnails">
        <button
          ref={imageButton1}
          type="button"
          onClick={(e) => changeImage(1, e, references)}
          className="selected"
        >
          <img src={thumbnail1} alt="Thumbnail 1" />
          <div className="overlay" />
        </button>
        <button
          ref={imageButton2}
          type="button"
          onClick={(e) => changeImage(2, e, references)}
        >
          <img src={thumbnail2} alt="Thumbnail 2" />
          <div className="overlay" />
        </button>
        <button
          ref={imageButton3}
          type="button"
          onClick={(e) => changeImage(3, e, references)}
        >
          <img src={thumbnail3} alt="Thumbnail 3" />
          <div className="overlay" />
        </button>
        <button
          ref={imageButton4}
          type="button"
          onClick={(e) => changeImage(4, e, references)}
        >
          <img src={thumbnail4} alt="Thumbnail 4" />
          <div className="overlay" />
        </button>
      </div>
      <div className="mobile-slider">
        <div className={`slider p${currentImage}`}>
          <div className="image">
            <img src={product1} alt="Product 1" />
          </div>
          <div className="image">
            <img src={product2} alt="Product 2" />
          </div>
          <div className="image">
            <img src={product3} alt="Product 3" />
          </div>
          <div className="image">
            <img src={product4} alt="Product 4" />
          </div>
        </div>
        <div className="actions">
          <button
            type="button"
            onClick={goToPreviousImage}
            className="previousImage"
          >
            <div className="wrapper">
              <img src={previousImageButton} alt="Previous" />
            </div>
          </button>
          <button type="button" onClick={goToNextImage} className="nextImage">
            <div className="wrapper">
              <img src={nextImageButton} alt="Next" />
            </div>
          </button>
        </div>
      </div>
      {isLightboxGalleryOpen && (
        <LightboxGallery
          isOpen={isLightboxGalleryOpen}
          products={products}
          current={currentImage}
          change={changeImage}
          next={goToNextImage}
          previous={goToPreviousImage}
          toggle={toggleLightboxGallery}
          desktopRefs={references}
        />
      )}
    </ProductImagesContainer>
  );
}

export default ProductImages;
