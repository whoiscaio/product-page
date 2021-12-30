import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Overlay = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
`;

export default styled.div`
  height: 100%;
  background: #fff;
  padding: 3rem;

  animation: ${slideIn} .38s ease-out;

  float: left;

  button {
    background: none;
    border: 0;
    
    margin-bottom: 3.6rem;
  }

  li {
    font-size: 1.8rem;
    font-weight: 700;

    padding: 0 10rem 1.8rem 0;

    cursor: pointer;
  }
`;
