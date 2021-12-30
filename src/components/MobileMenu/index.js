import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/images/icon-close.svg';

import Container, { Overlay } from './styles';

function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <button type="button">
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        <ul>
          <li>
            <a href>Collections</a>
          </li>
          <li>
            <a href>Men</a>
          </li>
          <li>
            <a href>Women</a>
          </li>
          <li>
            <a href>About</a>
          </li>
          <li>
            <a href>Contact</a>
          </li>
        </ul>
      </Container>
    </Overlay>,
    document.getElementById('mobile-menu-portal')
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
