import ReactDOM from 'react-dom';

import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
import { LightboxGalleryContainer, LightboxGalleryOverlay } from './styles';

import nextImageIcon from '../../assets/images/icon-next.svg';
import previousImageIcon from '../../assets/images/icon-previous.svg';

function LightboxGallery(props) {
  const { products, current, change, next, previous, toggle } = props;

  return ReactDOM.createPortal(
    <LightboxGalleryOverlay>
      <LightboxGalleryContainer>
        <div className="main-image">
          <img src={products[current - 1]} alt="Selected" />
          <div className="actions">
            <button type="button" onClick={previous}>
              <div className="wrapper">
                <img src={previousImageIcon} alt="Previous" />
              </div>
            </button>
            <button type="button" onClick={next}>
              <div className="wrapper">
                <img src={nextImageIcon} alt="Next" />
              </div>
            </button>
          </div>
        </div>
        <div className="thumbnails">
          <button
            type="button"
            onClick={(e) => change(1, e)}
            className={current === 1 ? "selected" : undefined}
          >
            <img src={thumbnail1} alt="Thumbnail 1" />
            <div className="overlay" />
          </button>
          <button
            type="button"
            onClick={(e) => change(2, e)}
            className={current === 2 ? "selected" : undefined}
          >
            <img src={thumbnail2} alt="Thumbnail 2" />
            <div className="overlay" />
          </button>
          <button
            type="button"
            onClick={(e) => change(3, e)}
            className={current === 3 ? "selected" : undefined}
          >
            <img src={thumbnail3} alt="Thumbnail 3" />
            <div className="overlay" />
          </button>
          <button
            type="button"
            onClick={(e) => change(4, e)}
            className={current === 4 ? "selected" : undefined}
          >
            <img src={thumbnail4} alt="Thumbnail 4" />
            <div className="overlay" />
          </button>
        </div>
        <button type="button" className="close" onClick={toggle}>
          X
        </button>
      </LightboxGalleryContainer>
    </LightboxGalleryOverlay>,
    document.getElementById('lightbox-gallery-portal')
  );
}

export default LightboxGallery;
