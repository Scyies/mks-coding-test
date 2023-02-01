import React, { ReactNode } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ProductCard } from '@/components/Products/ProductCard';
import { Sidebar } from '@/components/SideBar/Sidebar';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from '@/context/store';

const product = {
  name: 'Test Product',
  photo:
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
  description: 'Yes',
  price: '10',
  id: 1,
  quantity: 1,
  cartPrice: '10',
};

const providedRender = (children: ReactNode) =>
  render(<Provider store={createStore()}>{children}</Provider>);

describe('testando o carrinho de compras', () => {
  it('adicionar novo produto ao carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productImg = screen.queryAllByAltText('');
    const productName = screen.queryAllByText(product.name);
    const productQuantity = screen.getByTestId('quantity');
    const productPrice = screen.queryAllByText(`R$${product.price}`);

    expect(productImg[1]).toBeInTheDocument();
    expect(productName[1]).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
    expect(productPrice[1]).toBeInTheDocument();
  });

  it('exclui produto do carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const productsSection = screen.getByRole('cartProductGrid');

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    //verifica o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    const deleteButton = screen.queryAllByRole('button', {
      name: 'X',
    });

    //exclui o produto do carrinho
    fireEvent.click(deleteButton[1]);

    //verifica se o produto foi removido
    expect(productsSection.children).toHaveLength(0);
  });

  it('se já existir produto com o mesmo id, aumentar quantidade', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByRole('cartProductGrid');

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    //adiciona novamente o mesmo produto ao carrinho
    fireEvent.click(addToCartButton);

    const productQuantity = screen.getByTestId('quantity');

    //verifica se o produto não foi adicionado novamente
    expect(productsSection.children).toHaveLength(1);

    //verifica se a quantidade do produto foi aumentada
    expect(productQuantity.textContent).toStrictEqual('2');
  });

  it('aumenta a quantidade do produto no carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const productsSection = screen.getByRole('cartProductGrid');

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    const productQuantity = screen.getByTestId('quantity');

    const addQuantity = screen.getByRole('button', {
      name: '+',
    });

    //aumenta a quantidade do produto
    fireEvent.click(addQuantity);

    //verifica se a quantidade foi aumentada
    expect(productQuantity.textContent).toStrictEqual('2');
  });

  it('diminui a quantidade do produto no carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByRole('cartProductGrid');

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    const addQuantity = screen.getByRole('button', {
      name: '+',
    });

    //aumenta a quantidade do produto
    fireEvent.click(addQuantity);

    const productQuantity = screen.getByTestId('quantity');

    //verifica se a quantidade foi aumentada
    expect(productQuantity.textContent).toStrictEqual('2');

    const reduceQuantity = screen.getByRole('button', {
      name: '-',
    });

    //reduz a quantidade do produto
    fireEvent.click(reduceQuantity);

    //verifica se a quantidade foi reduzida
    expect(productQuantity.textContent).toStrictEqual('1');
  });

  it('se a quantidade for 0 quando for diminuir, remove do carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    providedRender(
      <>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </>
    );

    const addToCartButton = screen.getByRole('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByRole('cartProductGrid');

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    const reduceQuantity = screen.getByRole('button', {
      name: '-',
    });

    //reduz a quantidade do produto
    fireEvent.click(reduceQuantity);

    //verifica se o produto foi removido do carrinho
    expect(productsSection.children).toHaveLength(0);
  });
});

describe('adicionando produtos', () => {});
