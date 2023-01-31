import { IDataContext, useCartData } from '@/context/cartContext';
import Image from 'next/image';
import * as Styled from './cartCardStyles';

interface IProps {
  name: string;
  img: string;
  price: string;
  id: number;
  quantity?: number;
  cartPrice?: string;
}

export function CartCard({
  name,
  img,
  quantity = 1,
  price,
  cartPrice = price,
  id,
}: IProps) {
  const { cartItems, setCartItems } = useCartData() as IDataContext;

  function addItemQuantity(id: number, signal: 'diminuir' | 'aumentar') {
    const currentItem = cartItems.filter((item) => item.id === id);
    if (currentItem[0].quantity === 1 && signal === 'diminuir') {
      return setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
    setCartItems((prev) =>
      prev.map((item) => {
        const resolver =
          signal === 'diminuir' ? item.quantity! - 1 : item.quantity! + 1;
        if (item.id === id) {
          return {
            ...item,
            quantity: resolver,
            cartPrice: String(Number(item.price) * resolver),
          };
        }
        return item;
      })
    );
  }

  function deleteItemFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <Styled.CardContainer>
      <Image src={img} alt='' height={80} width={80} />
      <p>{name}</p>
      <Styled.QtdContainer>
        <Styled.Qtd>Qtd:</Styled.Qtd>
        <Styled.QtdCounter>
          <span role='button' onClick={() => addItemQuantity(id, 'diminuir')}>
            -
          </span>
          <Styled.QtdNumber data-testid='quantity'>{quantity}</Styled.QtdNumber>
          <span role='button' onClick={() => addItemQuantity(id, 'aumentar')}>
            +
          </span>
        </Styled.QtdCounter>
      </Styled.QtdContainer>
      <Styled.ProductPrice>R${cartPrice}</Styled.ProductPrice>
      <Styled.Exit onClick={() => deleteItemFromCart(id)} role='button'>
        X
      </Styled.Exit>
    </Styled.CardContainer>
  );
}
