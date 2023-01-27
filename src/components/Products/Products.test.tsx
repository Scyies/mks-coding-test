import { render, fireEvent, screen } from '@testing-library/react';
import { Products } from './Products';

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useState: jest.fn(() => [
      [{ name: 'Mocked Product', price: 9.99 }],
      jest.fn(),
    ]),
  };
});

describe('funcionalidades do grid de produtos', () => {
  // beforeEach(() => {
  //   actualReact;
  // });
  test('adicionar produto ao carrinho', () => {
    const { getByText } = render(<Products />);

    // button
    const addToCartButton = screen.getByRole('button');

    fireEvent.click(addToCartButton);

    expect(getByText('Apple Watch Series 4 GPS')).toBeInTheDocument();
  });
});
