import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../actions/cartActions';

import PageHeader from '../PageHeader';
import ProductSection from '../ProductSection';
import GlobalStyle from './GlobalStyle';

function App() {
  const dispatch = useDispatch();

  const { isCartOpen } = useSelector((state) => state);

  function handleCloseCart(e) {
    if(e.target !== isCartOpen && isCartOpen) dispatch(closeCart());
  }

  useEffect(() => {
    window.addEventListener('click', handleCloseCart);

    return () => window.removeEventListener('click', handleCloseCart);
  }, [isCartOpen]);

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <ProductSection />
    </div>
  );
}

export default App;
