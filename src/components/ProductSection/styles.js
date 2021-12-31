import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
  header {
    margin-bottom: 4rem;

    .company {
      color: hsl(26,100%,55%);
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: .2rem;
    }

    h1 {
      font-size: 3.6rem;
      margin-top: 2rem;
    }
  }

  .description {
    color: hsl(219,9%,45%);
    font-size: 1.5rem;
    line-height: 2.6rem;
  }

  .price {
    position: relative;
    margin: 2rem 0;

    .main-price {
      font-weight: 700;
      font-size: 2.8rem;
    }

    .old-price {
      color: hsl(220, 14%, 75%);
      text-decoration: line-through;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .discount {
      position: absolute;
      top: .4rem;
      left: 11rem;

      padding: .4rem;

      border-radius: .4rem;
      background: hsl(25, 100%, 94%);
      color: hsl(26,100%,55%);

      font-size: 1.6rem;
      font-weight: 700;
    }
  }

  .actions {
    display: flex;

    .set-quantity {
      display: flex;
      align-items: center;
      
      background: hsl(223, 64%, 98%);
      border-radius: 1rem;

      button {
        color: hsl(26,100%,55%);
        font-weight: 700;
        font-size: 2.8rem;
        padding: .8rem 1.6rem;

        background: none;
        border: 0;

        cursor: pointer;
        transform: translateY(-8%);
        transition: transform .3s ease-out;
        
        &:hover {
          transform: translateY(-8%) scale(1.2);
        }
      }

      span {
        font-size: 1.6rem;
        font-weight: 700;
        padding: .8rem 1.6rem;
      }
    }

    .add-to-cart {
      flex: 1;
      padding-left: 3rem;
      
      button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        background: hsl(26,100%,55%);
        border: 0;
        border-radius: 1rem;
        color: #fff;

        font-size: 1.6rem;
        font-weight: 700;

        padding: .4rem 0;

        cursor: pointer;
        transition: opacity .3s ease-out;

        &:hover {
          opacity: .6;
        }

        img {
          width: 2rem;
          margin-right: 1.5rem;
        }
      }
    }
  }
`;

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
