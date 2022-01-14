import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/CartContext';
import PageHeader from '../PageHeader';
import ProductSection from '../ProductSection';
import GlobalStyle from './GlobalStyle';

function App() {
  const { isCartOpen, closeCart } = useContext(CartContext);

  function handleCloseCart(e) {
    if(e.target !== isCartOpen && isCartOpen) closeCart();
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
