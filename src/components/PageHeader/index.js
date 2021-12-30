import { useContext, useState } from 'react';

import Container, { NavigationBar, UserSection, CartContainer } from './styles';

import Logo from '../../assets/images/logo.svg';
import ProfileIcon from '../../assets/images/image-avatar.png';
import CartIcon from '../../assets/images/icon-cart.svg';
import MenuIcon from '../../assets/images/icon-menu.svg';

import CartItem from './CartItem';
import { CartContext } from '../../contexts/CartContext';
import MobileMenu from '../MobileMenu';

function PageHeader() {
  const { isCartEmpty } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <img src={CartIcon} alt="Cart Icon" />
          <div className="cart">
            <header>
              <h1>Cart</h1>
            </header>
            <div className="content">
              {isCartEmpty ? (
                <span id="empty">Your cart is empty</span>
              ) : (
                <>
                  <CartItem />
                  <div className="checkout-button">
                    <button type="button">Checkout</button>
                  </div>
                </>
              )}
            </div>
          </div>
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
