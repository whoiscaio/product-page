import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductInfo from './ProductInfo';

describe('product info', () => {

  const productCounterValue = 1;

  it('counter should start with 1', () => {
    render(<ProductInfo
      add={() => { }}
      qtd={productCounterValue}
      minus={() => { }}
      plus={() => { }}
    />);

    expect(screen.getByRole('definition').textContent).toEqual(String(productCounterValue));
  });

  it('should increse the value when the plus button is clicked', () => {
    const mockFunction = jest.fn();

    render(<ProductInfo
      add={() => { }}
      qtd={productCounterValue}
      minus={() => { }}
      plus={mockFunction}
    />);

    const plusButton = screen.getByRole('button', { name: '+' });

    userEvent.click(plusButton);

    expect(mockFunction).toHaveBeenCalled();
  });

  it('should decrease the value when the minus button is clicked', () => {
    const mockFunction = jest.fn();

    render(<ProductInfo
      add={() => { }}
      qtd={productCounterValue}
      minus={mockFunction}
      plus={() => { }}
    />);

    const minusButton = screen.getByRole('button', { name: '-' });

    userEvent.click(minusButton);

    expect(mockFunction).toHaveBeenCalled();
  });

  it('should add the item to the cart when the add button is clicked', () => {
    const mockFunction = jest.fn();

    render(<ProductInfo
      add={mockFunction}
      qtd={productCounterValue}
      plus={() => { }}
      minus={() => { }}
    />)

    const addButton = screen.getByText('Add to cart');

    userEvent.click(addButton);

    expect(mockFunction).toHaveBeenCalled();
  })

});
