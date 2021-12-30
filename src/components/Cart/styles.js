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

export default styled.div`
  width: 320px;

  position: absolute;
  top: 4.6rem;
  left: 0;
  transform: translateX(-85%);
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0px 11px 16px 4px rgba(108, 108, 108, 0.39);

  animation: ${slideIn} .38s ease-out;

  &.going-out {
    animation: ${slideOut} .38s ease-out;
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
`;
