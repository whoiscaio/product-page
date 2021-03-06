import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-85%, -20%);
  }

  to {
    opacity: 1;
    transform: translate(-85%, 0);
  }
`;

const slideInMobile = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-85%, 0);
  }

  to {
    opacity: 0;
    transform: translate(-85%, -20%);
  }
`;

const slideOutMobile = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -20%);
  }
`;

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
      font-size: 1.4rem;
      white-space: nowrap;

      &:first-of-type {
        margin-bottom: 0.6rem;
      }

      @media (max-width: 520px) {
        font-size: 1.6rem;
      }
    }

    strong {
      color: #000;
    }
  }

  .delete-button {
    pointer-events: initial;
  }
`;

export default styled.div`
  width: 380px;

  position: absolute;
  top: 4.6rem;
  left: 0;
  transform: translateX(-85%);
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0px 11px 16px 4px rgba(108, 108, 108, 0.39);

  animation: ${slideIn} 0.38s ease-out;

  z-index: 1001;

  div, header {
    pointer-events: none;
  }

  &.going-out {
    animation: ${slideOut} 0.38s ease-out;
  }

  cursor: initial;

  button {
    cursor: pointer;
  }

  header {
    padding: 1.6rem 1.4rem;
    border-bottom: 2px solid hsl(223, 64%, 98%);
  }

  h1 {
    font-size: 1.8rem;
  }

  .content {
    padding: 2rem;
    color: hsl(219, 9%, 45%);

    #empty {
      width: 100%;
      padding: 4rem 0;
      display: flex;
      justify-content: center;
      font-weight: 700;
      font-size: 1.4rem;
    }
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
      border-radius: 0.8rem;
    }
  }

  @media (max-width: 520px) {
    width: 80vw;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);

    animation: ${slideInMobile} 0.38s ease-out;

    &.going-out {
      animation: ${slideOutMobile} 0.38s ease-out;
    }
  }
`;
