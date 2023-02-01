import React, { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Products } from '@/components/Products/Products';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from '@/context/store';

const mockData = {
  products: [
    {
      name: 'Test Product',
      photo:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
      description: 'Yes',
      price: '10',
      id: 2,
      quantity: 1,
      cartPrice: '10',
    },
    {
      name: 'Test Product',
      photo:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
      description: 'Yes',
      price: '10',
      id: 3,
      quantity: 1,
      cartPrice: '10',
    },
  ],
  count: 2,
};

const providedRender = (children: ReactNode) =>
  render(<Provider store={createStore()}>{children}</Provider>);

describe('Home products', () => {
  it('renderiza o skelleton equando estiver em loading', () => {
    providedRender(<Products data={mockData} isLoading={true} />);

    const productsSection = screen.getByRole('productGrid');

    //verifica se os 8 slots foram preenchidos com o skelleton
    expect(productsSection.children).toHaveLength(8);
  });

  it('renderiza os produtos', async () => {
    providedRender(<Products data={mockData} isLoading={false} />);

    const productsSection = waitFor(() => screen.getByRole('productGrid'));

    //verifica se o produto foi renderizado na tela
    expect((await productsSection).children).toHaveLength(2);
  });
});
