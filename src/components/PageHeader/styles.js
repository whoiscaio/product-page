import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: 0;
  }

  .item-icon {
    width: 5rem;

    img {
      width: 100%;
      border-radius: 0.6rem;
    }
  }

  .item-info {
    height: 100%;
    margin: 0 2rem;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 1.3rem;
      white-space: nowrap;

      &:first-of-type {
        margin-bottom: 0.6rem;
      }
    }

    strong {
      color: #000;
    }
  }
`;

export const CartContainer = styled.div`
  position: relative;
  margin-right: 4rem;
  
  button {
    background: none;
    border: 0;
    cursor: pointer;
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
