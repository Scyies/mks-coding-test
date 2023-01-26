import * as Styled from './productsStyles';
import Image from 'next/image';
import defaultImg from '../../../public/default.jpg';
import { ShoppingBagOpen } from 'phosphor-react';

export function ProductCard() {
  return (
    <Styled.CardContainer>
      <Image src={defaultImg} alt='' width={150} height={150} />
      <Styled.ProductNameContainer>
        <Styled.ProductName>Apple Watch Series 4 GPS</Styled.ProductName>
        <Styled.ProductPrice>R$399</Styled.ProductPrice>
      </Styled.ProductNameContainer>
      <Styled.ProductDescription>
        Redesigned from scratch and completely revised
      </Styled.ProductDescription>
      <Styled.ProductButton>
        <ShoppingBagOpen size={20} weight='bold' /> COMPRAR
      </Styled.ProductButton>
    </Styled.CardContainer>
  );
}
