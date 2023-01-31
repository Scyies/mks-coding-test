import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useFetch } from '@/hooks/useFetch';
import { Products } from '@/components/Products/Products';
import '@testing-library/jest-dom';

jest.mock('@/hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('Home products', () => {
  it('renderiza o skelleton equando estiver em loading', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(<Products />);

    const productsSection = screen.getByRole('productGrid');

    //verifica se os 8 slots foram preenchidos com o skelleton
    expect(productsSection.children).toHaveLength(8);
  });

  it('renderiza os produtos', async () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [
        {
          name: 'Test Product',
          photo:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
          description: 'Yes',
          price: '10',
          id: 1,
          quantity: 1,
          cartPrice: '10',
        },
      ],
      loading: false,
      error: null,
    });

    render(<Products />);

    const productsSection = waitFor(() => screen.getByRole('productGrid'));

    //verifica se o produto foi renderizado na tela
    expect((await productsSection).children).toHaveLength(1);
  });
});
