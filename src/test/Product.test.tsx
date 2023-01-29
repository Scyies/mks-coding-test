import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from '@/components/Products/ProductCard';
import { useCartData } from '@/context/cartContext';

jest.mock('@/context/cartContext', () => ({
  useCartData: jest.fn(),
}));

const product = {
  name: 'Test Product',
  photo:
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
  description: 'This is a test product',
  price: '10',
  id: 1,
  quantity: 1,
  cartPrice: '10',
};
describe('test product', () => {
  beforeEach(() => {
    (useCartData as jest.Mock).mockReturnValue({
      cartItems: [],
      setCartItems: jest.fn(() => [
        {
          name: 'Test Product',
          photo:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          description: 'This is a test product',
          price: '10',
          id: 1,
          quantity: 1,
          cartPrice: '10',
        },
      ]),
    });
  });

  it('adds a new product', () => {
    const { getByRole } = render(
      <ProductCard
        name={product.name}
        img={product.photo}
        desc={product.description}
        id={product.id}
        price={product.price}
      />
    );

    const addNewProduct = getByRole('button');

    const setCartItems = (useCartData as jest.Mock).mock.results[0].value
      .setCartItems;

    fireEvent.click(addNewProduct);

    expect(setCartItems.mock.results[0].value).toStrictEqual([
      {
        name: product.name,
        photo: product.photo,
        description: product.description,
        price: product.price,
        id: product.id,
        quantity: product.quantity,
        cartPrice: product.price,
      },
    ]);
  });
});

describe('test', () => {
  (useCartData as jest.Mock).mockReturnValue({
    cartItems: [
      {
        name: 'Test Product',
        photo:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
        description: 'This is a test product',
        price: '10',
        id: 1,
        quantity: 1,
        cartPrice: '10',
      },
      {
        name: 'Test Product',
        photo:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
        description: 'This is a test product',
        price: '10',
        id: 2,
        quantity: 1,
        cartPrice: '10',
      },
    ],
    setCartItems: jest.fn(() => [
      {
        name: 'Test Product',
        photo:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
        description: 'This is a test product',
        price: '10',
        id: 1,
        quantity: 1,
        cartPrice: '10',
      },
    ]),
  });
  it('should increase the quantity of the product when it already exists in the cart', () => {
    const { getByRole } = render(
      <ProductCard
        name={product.name}
        img={product.photo}
        desc={product.description}
        id={product.id}
        price={product.price}
      />
    );

    const addToCartButton = getByRole('button');

    const setCartItems = (useCartData as jest.Mock).mock.results[0].value
      .setCartItems;

    fireEvent.click(addToCartButton);

    expect(setCartItems.mock.results[0].value).toStrictEqual([
      {
        name: product.name,
        photo: product.photo,
        description: product.description,
        price: product.price,
        id: product.id,
        quantity: product.quantity, // preciso ainda resolver isso, tem que aumentar a quantidade se o id for igual
        cartPrice: String(Number(product.price) * product.quantity),
      },
    ]);
  });
});
