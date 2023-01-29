import React from 'react';
import {
  render,
  fireEvent,
  getByAltText,
  getByText,
  queryByRole,
} from '@testing-library/react';
import { CartContext, useCartData } from '@/context/cartContext';
import { CartCard } from '@/components/SideBar/CartCard';
import { IData } from '@/hooks/useFetch';
import { Sidebar } from '@/components/SideBar/Sidebar';

jest.mock('@/context/cartContext', () => ({
  useCartData: jest.fn(),
}));

const product = {
  name: 'Test Product',
  photo:
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
  price: '10',
  id: 1,
  quantity: 1,
  cartPrice: '10',
};

describe('testes dentro do carrinho de compras', () => {
  beforeEach(() => {
    (useCartData as jest.Mock).mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: 'item 1',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          price: '10',
          quantity: 1,
          cartPrice: '10',
        },
        {
          id: 2,
          name: 'item 2',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          price: '20',
          quantity: 2,
          cartPrice: '40',
        },
      ],
      setCartItems: jest.fn(),
    });
  });
  it('verifica se o card foi renderizado', () => {
    const setStatus = jest.fn();
    const { queryAllByAltText, queryAllByText } = render(
      <Sidebar setStatus={setStatus} />
    );

    const productImg = queryAllByAltText('');
    const productName = queryAllByText(product.name);
    const productQuantity = queryAllByText(product.quantity);
    const productPrice = queryAllByText(`R$${product.price}`);

    expect(productImg).toBeDefined();
    expect(productName).toBeDefined();
    expect(productQuantity).toBeDefined();
    expect(productPrice).toBeDefined();
  });
});

describe('remover produto', () => {
  beforeEach(() => {
    (useCartData as jest.Mock).mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: 'item 1',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          price: '10',
          quantity: 1,
          cartPrice: '10',
        },
        {
          id: 2,
          name: 'item 2',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          price: '20',
          quantity: 2,
          cartPrice: '40',
        },
      ],
      setCartItems: jest.fn(),
    });
  });
  it('should delete item from cart when X button is clicked', () => {
    const setStatus = jest.fn();
    const { queryAllByText, getByTestId } = render(
      <Sidebar setStatus={setStatus} />
    );
    const productsSection = getByTestId('section');

    const deleteButton = queryAllByText('X');
    const setCartItems = (useCartData as jest.Mock).mock.results[0].value
      .setCartItems;

    fireEvent.click(deleteButton[0]);

    const newCartItems: IData[] = (
      useCartData as jest.Mock
    ).mock.results[0].value.cartItems.filter((item: IData) => item.id !== 1);

    setCartItems(newCartItems);

    expect(productsSection.children).toHaveLength(2);

    expect(setCartItems).toHaveBeenCalledWith(newCartItems);
  });
});
