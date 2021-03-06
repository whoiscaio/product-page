import styled from 'styled-components';

export const CartContainer = styled.div`
  position: relative;
  margin-right: 4rem;
  
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  #cart-quantity {
    background: hsl(26, 100%, 55%);
    border-radius: 50%;
    color: #fff;
    font-size: 1.2rem;

    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.6rem;
    height: 1.6rem;

    transform: translate(50%, -50%);
  }

  @media (max-width: 520px) {
    position: initial;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;

  .menu-icon {
    display: none;
    background: none;
    border: 0;
    transform: translateY(15%);
    margin-right: 2rem;

    cursor: pointer;

    @media (max-width: 750px) {
      display: initial;
    }
  }

  .logo {
    margin-right: 5rem;
  }

  .desktop-menu {
    height: 100%;
    display: flex;

    li {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 3rem;
      padding: 0 .3rem;
      border-bottom: 5px solid #fff;
      transition: border-bottom 0.2s ease-out;
      cursor: pointer;

      &:hover {
        border-bottom: 5px solid hsl(26, 100%, 55%);
      }
    }

    a {
      font-size: 1.5rem;
      color: hsl(219, 9%, 45%);
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;

  > div {
    cursor: pointer;
  }

  .profile {
    width: 5rem;
    height: 5rem;
    border: 2px solid #fff;
    border-radius: 50%;

    transition: border 0.2s ease-out;

    img {
      width: 100%;
    }

    &:hover {
      border: 2px solid hsl(26, 100%, 55%);
    }
  }
`;

export default styled.header`
  max-width: 1400px;
  height: 7.4rem;
  margin: 0 auto;
  padding: 0 5rem;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid hsl(223, 64%, 98%);
`;
