import styled from 'styled-components';

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
    padding: 3rem .3rem;
    border-bottom: 5px solid #fff;
    transition: border-bottom .2s ease-out;


    &:hover {
      border-bottom: 5px solid hsl(26, 100%, 55%);
    }
  }

  a {
    font-size: 1.5rem;
    color: hsl(219, 9%, 45%);
  }
`;

export const UserSection = styled.div``;

export default styled.header`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid hsl(223, 64%, 98%);
`;
