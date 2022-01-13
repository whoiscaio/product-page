import { useContext, useState } from 'react';

import Container, { NavigationBar, UserSection, CartContainer } from './styles';

import Logo from '../../assets/images/logo.svg';
import ProfileIcon from '../../assets/images/image-avatar.png';
import CartIcon from '../../assets/images/icon-cart.svg';
import MenuIcon from '../../assets/images/icon-menu.svg';

import MobileMenu from '../MobileMenu';
import Cart from '../Cart';
import { CartContext } from '../../contexts/CartContext';

function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleIsCartOpen, cartItems } = useContext(CartContext);

  const cartQuantity = cartItems.length;

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <NavigationBar>
        <button className="menu-icon" type="button" onClick={toggleMobileMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </button>
        <div className="logo">
          <img src={Logo} alt="Sneakers Logo" />
        </div>
        <ul className="desktop-menu">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </NavigationBar>

      <UserSection>
        <CartContainer>
          <button type="button" onClick={toggleIsCartOpen}>
            <img src={CartIcon} alt="Cart Icon" />
          </button>
          {cartQuantity > 0 && <span id="cart-quantity">{cartItems.length}</span>}
          <Cart />
        </CartContainer>

        <div className="profile">
          <img src={ProfileIcon} alt="Profile Icon" />
        </div>
      </UserSection>

      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </Container>
  );
}

export default PageHeader;
