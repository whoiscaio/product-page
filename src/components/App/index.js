import CartProvider from '../../contexts/CartContext';
import PageHeader from '../PageHeader';
import ProductSection from '../ProductSection';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CartProvider>
        <PageHeader />
        <ProductSection />
      </CartProvider>
    </div>
  );
}

export default App;
