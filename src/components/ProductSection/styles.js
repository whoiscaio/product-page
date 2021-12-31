import styled from 'styled-components';

export const ProductInfoContainer = styled.div``;

export const ProductImagesContainer = styled.div`
  max-width: 580px;
  padding: 4rem 8rem;

  img {
    width: 100%;
    border-radius: 1.6rem;
  }

  .main-image {
    margin-bottom: 2rem;
  }

  .thumbnails {
    display: flex;
    justify-content: space-between;

    div {
      width: 20%;
    }
  }
`;

export default styled.div`
  max-width: 1200px;
  margin: 0 auto 0;

  display: flex;
  align-items: center;
`;
