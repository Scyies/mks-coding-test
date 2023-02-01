import { decreaseQtd, increaseQtd, removeCartItems } from '@/context/cartSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';
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
  quantity,
  price,
  cartPrice = price,
  id,
}: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Styled.CardContainer>
      <Image src={img} alt='' height={80} width={80} />
      <p>{name}</p>
      <Styled.QtdContainer>
        <Styled.Qtd>Qtd:</Styled.Qtd>
        <Styled.QtdCounter>
          <Styled.ChangeQuantity onClick={() => dispatch(decreaseQtd(id))}>
            -
          </Styled.ChangeQuantity>
          <Styled.QtdNumber data-testid='quantity'>{quantity}</Styled.QtdNumber>
          <Styled.ChangeQuantity onClick={() => dispatch(increaseQtd(id))}>
            +
          </Styled.ChangeQuantity>
        </Styled.QtdCounter>
      </Styled.QtdContainer>
      <Styled.ProductPrice>
        R${String(Number(cartPrice) * 1)}
      </Styled.ProductPrice>
      <Styled.Exit onClick={() => dispatch(removeCartItems(id))}>X</Styled.Exit>
    </Styled.CardContainer>
  );
}
