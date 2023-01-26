import Image from 'next/image';
import defaultImg from '../../../public/default.jpg';
import * as Styled from './cartCardStyles';

export function CartCard() {
  return (
    <Styled.CardContainer>
      <Image src={defaultImg} alt='' height={80} width={80} />
      <p>Apple Watch Series 4 GPS</p>
      <Styled.QtdContainer>
        <Styled.Qtd>Qtd:</Styled.Qtd>
        <Styled.QtdCounter>
          <span>-</span>
          <Styled.QtdNumber>1</Styled.QtdNumber>
          <span>+</span>
        </Styled.QtdCounter>
      </Styled.QtdContainer>
      <Styled.ProductPrice>R$399</Styled.ProductPrice>
      <Styled.Exit>X</Styled.Exit>
    </Styled.CardContainer>
  );
}
