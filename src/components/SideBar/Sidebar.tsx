import * as Styled from './sidebarStyles';
import { Dispatch, SetStateAction } from 'react';
import { CartCard } from './CartCard';
import { useAppSelector } from '@/hooks/reduxHooks';
import { selectCart, totalCart } from '@/context/cartSlice';

interface IProps {
  setStatus: Dispatch<SetStateAction<boolean>>;
  status: boolean;
}

export function Sidebar({ setStatus, status }: IProps) {
  const cartItems = useAppSelector(selectCart);

  const cartTotal = useAppSelector(totalCart);

  return (
    <Styled.Sidebar aria-expanded={status}>
      <Styled.FlexCenter>
        <Styled.HeadingText>Carrinho de compras</Styled.HeadingText>
        <Styled.Exit onClick={() => setStatus((prev) => !prev)}>X</Styled.Exit>
      </Styled.FlexCenter>
      <Styled.ProductsSection role='cartProductGrid'>
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
        <Styled.HeadingText>R${cartTotal}</Styled.HeadingText>
      </Styled.FlexCenter>
      <Styled.Button>Finalizar Compra</Styled.Button>
    </Styled.Sidebar>
  );
}
