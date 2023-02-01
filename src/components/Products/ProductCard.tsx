import * as Styled from './productsStyles';
import Image from 'next/image';
import { ShoppingBagOpen } from 'phosphor-react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { IData, setCartItems } from '@/context/cartSlice';

export function ProductCard({ name, photo, description, price, id }: IData) {
  const dispatch = useAppDispatch();

  const product = {
    name,
    photo,
    description,
    price,
    id,
    cartPrice: price,
  };

  function handleAddToCart(product: IData) {
    dispatch(setCartItems(product));
  }

  return (
    <Styled.CardContainer role='productContainer'>
      <Image src={photo} alt='' width={150} height={150} />
      <Styled.ProductNameContainer>
        <Styled.ProductName>{name}</Styled.ProductName>
        <Styled.ProductPrice>R${price}</Styled.ProductPrice>
      </Styled.ProductNameContainer>
      <Styled.ProductDescription>{description}</Styled.ProductDescription>
      <Styled.ProductButton
        onClick={() => handleAddToCart(product)}
        role='comprar'
      >
        <ShoppingBagOpen size={20} weight='bold' /> COMPRAR
      </Styled.ProductButton>
    </Styled.CardContainer>
  );
}
