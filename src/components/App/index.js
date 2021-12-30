import CartProvider from '../../contexts/CartContext';
import PageHeader from '../PageHeader';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CartProvider>
        <PageHeader />
      </CartProvider>
    </div>
  );
}

export default App;
