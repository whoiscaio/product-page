import Container, { NavigationBar, UserSection, CartContainer } from './styles';
import Logo from '../../assets/images/logo.svg';
import ProfileIcon from '../../assets/images/image-avatar.png';
import CartIcon from '../../assets/images/icon-cart.svg';

function PageHeader() {
  return (
    <Container>
      <NavigationBar>
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
        </CartContainer>

        <div className="profile">
          <img src={ProfileIcon} alt="Profile Icon" />
        </div>
      </UserSection>
    </Container>
  );
}

export default PageHeader;
