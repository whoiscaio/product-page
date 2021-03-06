import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, closeCartAnimate } from '../../slice/CartReducer';

import PageHeader from '../PageHeader';
import ProductSection from '../ProductSection';
import GlobalStyle from './GlobalStyle';

function App() {
  const dispatch = useDispatch();

  const cartRef = useRef();

  const { isCartOpen } = useSelector((state) => state.cart);

  function handleCloseCart(e) {

    if(e.target !== cartRef.current && isCartOpen) {
      dispatch(closeCartAnimate());
      setTimeout(() => {
        dispatch(closeCart());
      }, 370);
    };
  }

  useEffect(() => {
    window.addEventListener('click', handleCloseCart);

    return () => window.removeEventListener('click', handleCloseCart);
  }, [isCartOpen]);

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader cartRef={cartRef}/>
      <ProductSection />
    </div>
  );
}

export default App;
