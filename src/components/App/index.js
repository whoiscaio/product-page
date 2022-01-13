import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/CartContext';
import PageHeader from '../PageHeader';
import ProductSection from '../ProductSection';
import GlobalStyle from './GlobalStyle';

function App() {
  const { CartRef, closeCart } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(e.target !== CartRef.current && CartRef.current) closeCart();
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <ProductSection />
    </div>
  );
}

export default App;
