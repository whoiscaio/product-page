import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
  padding-right: 14rem;

  header {
    margin-bottom: 4rem;

    .company {
      color: hsl(26, 100%, 55%);
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }

    h1 {
      font-size: 3.6rem;
      margin-top: 2rem;
    }
  }

  .description {
    color: hsl(219, 9%, 45%);
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
      top: 0.4rem;
      left: 11rem;

      padding: 0.4rem;

      border-radius: 0.4rem;
      background: hsl(25, 100%, 94%);
      color: hsl(26, 100%, 55%);

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
        color: hsl(26, 100%, 55%);
        font-weight: 700;
        font-size: 2.8rem;
        padding: 0.8rem 1.6rem;

        background: none;
        border: 0;

        cursor: pointer;
        transform: translateY(-8%);
        transition: transform 0.3s ease-out;

        &:hover {
          transform: translateY(-8%) scale(1.2);
        }
      }

      span {
        font-size: 1.6rem;
        font-weight: 700;
        padding: 0.8rem 1.6rem;
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

        background: hsl(26, 100%, 55%);
        border: 0;
        border-radius: 1rem;
        color: #fff;

        font-size: 1.6rem;
        font-weight: 700;

        padding: 0.4rem 0;

        cursor: pointer;
        transition: opacity 0.3s ease-out;

        &:hover {
          opacity: 0.6;
        }

        img {
          width: 2rem;
          margin-right: 1.5rem;
        }
      }
    }

    @media (max-width: 780px) {
      flex-direction: column;

      .set-quantity {
        margin-bottom: 1rem;
        
        button {
          height: 6rem;
          flex: 1;

          &:first-child {
            text-align: left;
          }

          &:last-child {
            text-align: right;
          }

          &:hover {
            transform: translateY(-8%);
          }
        }
      }

      .add-to-cart {
        padding-left: 0;

        button {
          padding: 1.6rem 0;
        }
      }
    }
  }

  @media (max-width: 520px) {
    padding: 3rem;

    header {
      h1 {
        margin-top: 1rem;
      }
    }

    .price {
      .old-price {
        float: right;
        transform: translateY(25%);
      }
    }
  }

  @media (max-width: 680px) {
    header {
      margin-bottom: 2rem;
    }
  }
`;

export const ProductImagesContainer = styled.div`
  max-width: 580px;
  padding: 0 8rem;

  img {
    width: 100%;
    border-radius: 1.6rem;
  }

  .main-image {
    margin-bottom: 2rem;

    @media (max-width: 520px) {
      display: none;
    }
  }

  .thumbnails {
    display: flex;
    justify-content: space-between;

    div {
      width: 20%;

      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .selected {
      position: relative;

      img {
        opacity: 0.4;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        border: 2px solid hsl(26, 100%, 55%);
        border-radius: 1.6rem;

        z-index: 1000;
      }
    }

    @media (max-width: 520px) {
      display: none;
    }
  }

  .mobile-slider {
    position: relative;

    width: 100%;
    overflow: hidden;

    .slider {
      display: flex;
      width: 400%;
      transition: transform .3s ease-out;

      .image {
        width: 100%;
        max-height: 50rem;
      }

      img {
        margin-top: -20%;
        object-fit: contain;
        border-radius: 0;
      }

      &.p1 {
        transform: translateX(0);
      }

      &.p2 {
        transform: translateX(-25%);
      }

      &.p3 {
        transform: translateX(-50%);
      }

      &.p4 {
        transform: translateX(-75%);
      }

      @media (min-width: 520px) {
        display: none;
      }
    }

    .actions {
      display: flex;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      z-index: 1000;

      button {
        height: 100%;
        display: flex;
        align-items: center;

        background: none;
        border: 0;

        cursor: pointer;

        &:hover {
          .wrapper {
            transform: scale(1.1);
          }

          img {
            transform: scale(1.1);
          }
        }
      }

      .previousImage {
        width: 20vw;
        justify-content: center;
      }

      .nextImage {
        width: 80vw;
        padding-right: 3.4rem;
        justify-content: flex-end;
      }

      .wrapper {
        width: 8rem;
        height: 8rem;
        background: #fff;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: transform .2s ease-out;

        img {
          width: 4rem;
          height: 5rem;

          transition: transform .2s ease-out;
        }
      }
    }
  }

  @media (max-width: 520px) {
    max-width: initial;
    padding: 0;
  }
`;

export default styled.div`
  max-width: 1200px;
  margin: 0 auto 0;
  padding: 4rem 0;

  display: flex;
  align-items: center;

  @media (max-width: 520px) {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;
