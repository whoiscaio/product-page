import { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/images/icon-close.svg';

import Container, { Overlay } from './styles';

function MobileMenu({ isOpen, toggleMenu }) {
  if (!isOpen) return null;
  
  const ContainerRef = useRef();

  function handleToggle() {
    const { current: containerElement } = ContainerRef;

    if(isOpen) {
      containerElement.classList.add('going-out');
      setTimeout(() => {
        toggleMenu();
        containerElement.classList.remove('going-out');
      }, 370);
    }
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container ref={ContainerRef}>
        <button onClick={handleToggle} type="button">
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
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
