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

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 1.3rem;
      white-space: nowrap;
      color: hsl(219, 9%, 45%);

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

  .cart {
    position: absolute;
    top: 5rem;
    left: 0;
    transform: translateX(-85%);
    border-radius: 0.8rem;
    background: #fff; 
    box-shadow: 0px 11px 16px 4px rgba(108,108,108,0.39);

    header {
      padding: 1.6rem 1.4rem;
      border-bottom: 2px solid hsl(223, 64%, 98%);
    }

    h1 {
      font-size: 1.8rem;
    }

    .content {
      padding: 2rem;
    }

    .checkout-button {
      margin-top: 2rem;

      button {
        font-weight: 700;
        width: 100%;
        padding: 1.6rem 0;

        background: hsl(26, 100%, 55%);
        color: #fff;
        border: 0;
        border-radius: .8rem;
      }
    }
  }
`;

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;

  .logo {
    margin-right: 5rem;
  }

  ul {
    height: 100%;
    display: flex;
  }

  li {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 3rem;
    padding: 3rem 0.3rem;
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
  margin: 0 auto;
  padding: 0 5rem;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid hsl(223, 64%, 98%);
`;
