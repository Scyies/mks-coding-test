import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ProductCard } from '@/components/Products/ProductCard';
import CartProvider, { CartContext } from '@/context/cartContext';
import { IData } from '@/hooks/useFetch';
import { Sidebar } from '@/components/SideBar/Sidebar';

const product = {
  name: 'Test Product',
  img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
  price: '10',
  desc: 'Yes',
  id: 1,
  quantity: 1,
  cartPrice: '10',
};

describe('testando o carrinho de compras', () => {
  let cartItems: IData[] = [
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
  ];
  const setCartItems = jest.fn(() => {
    cartItems.push({
      name: 'Test Product',
      photo:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371886835',
      description: 'Yes',
      price: '10',
      id: 3,
      quantity: 1,
      cartPrice: '10',
    });
  });

  it('deve renderizar os produtos no carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Sidebar setStatus={setStatus} status={status} />
      </CartContext.Provider>
    );

    const productImg = screen.getByAltText('');
    const productName = screen.getByText(product.name);
    const productQuantity = screen.getByText(product.quantity);
    const productPrice = screen.queryAllByText(`R$${product.price}`);

    expect(productImg).toBeDefined();
    expect(productName).toBeDefined();
    expect(productQuantity).toBeDefined();
    expect(productPrice).toBeDefined();
  });

  it('adicionar novo produto ao carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

    //verifica se o novo produto foi renderizado na tela
    expect(productsSection.children).toHaveLength(1);
  });

  it('exclui produto do carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    const deleteButton = screen.queryAllByRole('button', {
      name: 'X',
    });

    //exclui o produto do carrinho
    fireEvent.click(deleteButton[0]);

    //verificase o produto foi removido
    expect(productsSection.children).toHaveLength(0);
  });

  it('se já existir produto com o mesmo id, aumentar quantidade', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

    //verifica se o produto foi adicionado
    expect(productsSection.children).toHaveLength(1);

    //adiciona produto ao carrinho
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
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

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
  });

  it('diminui a quantidade do produto no carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

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

  it('se a quantidade for 0, remove do carrinho', () => {
    const setStatus = jest.fn();
    const status = true;
    render(
      <CartProvider>
        <ProductCard {...product} />
        <Sidebar setStatus={setStatus} status={status} />
      </CartProvider>
    );

    const addToCartButton = screen.getByTestId('comprar');

    //adiciona produto ao carrinho
    fireEvent.click(addToCartButton);

    const productsSection = screen.getByTestId('section');

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
