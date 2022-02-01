import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import Cart from '.';

describe('cart', () => {

  it('should start closed', () => {
    render(<Provider store={store}><Cart /></Provider>)

    const cart = screen.queryByTestId("cart-container");

    expect(cart).not.toBeInTheDocument();
  });

})
