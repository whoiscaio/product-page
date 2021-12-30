import Container, { NavigationBar, UserSection } from './styles';
import Logo from '../../assets/images/logo.svg';

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

      <UserSection>User Section</UserSection>
    </Container>
  );
}

export default PageHeader;
