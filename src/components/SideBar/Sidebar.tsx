import { IDataContext, useCartData } from '@/context/cartContext';
import { Dispatch, SetStateAction } from 'react';
import { CartCard } from './CartCard';
import * as Styled from './sidebarStyles';

interface IProps {
  setStatus: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ setStatus }: IProps) {
  const { cartItems } = useCartData() as IDataContext;

  const totalPrice = cartItems.reduce((acc, object) => {
    return acc + Number(object.cartPrice!);
  }, 0);
  return (
    <Styled.Sidebar>
      <Styled.FlexCenter>
        <Styled.HeadingText>Carrinho de compras</Styled.HeadingText>
        <Styled.Exit onClick={() => setStatus((prev) => !prev)}>X</Styled.Exit>
      </Styled.FlexCenter>
      <Styled.ProductsSection>
        {cartItems.map((item) => (
          <CartCard
            name={item.name}
            id={item.id}
            img={item.photo}
            price={item.cartPrice!}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </Styled.ProductsSection>
      <Styled.FlexCenter>
        <Styled.HeadingText>Total:</Styled.HeadingText>
        <Styled.HeadingText>R${totalPrice}</Styled.HeadingText>
      </Styled.FlexCenter>
      <Styled.Button>Finalizar Compra</Styled.Button>
    </Styled.Sidebar>
  );
}
