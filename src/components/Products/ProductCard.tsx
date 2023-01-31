import * as Styled from './productsStyles';
import Image from 'next/image';
import { ShoppingBagOpen } from 'phosphor-react';
import { IDataContext, useCartData } from '@/context/cartContext';

interface IProps {
  name: string;
  img: string;
  desc: string;
  price: string;
  id: number;
}

export function ProductCard({ name, img, desc, price, id }: IProps) {
  const { cartItems, setCartItems } = useCartData() as IDataContext;

  function addProductToCart(id: number) {
    const repeatedItem = cartItems.find((item) => item.id === id);

    if (repeatedItem) {
      setCartItems((prev) => {
        const addQuantity = prev!.map((item) => {
          const defaultQuantity = item.quantity !== 1 ? 2 : 1;
          if (item.id === id) {
            return {
              ...item,
              cartPrice: String(
                Number(item.price) * (item.quantity! + defaultQuantity)
              ),
              quantity: item.quantity! + 1,
            };
          }
          return item;
        });
        return addQuantity;
      });
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          name,
          photo: img,
          description: desc,
          id,
          price,
          quantity: 1,
          cartPrice: price,
        },
      ]);
    }
  }

  return (
    <Styled.CardContainer role='productContainer'>
      <Image src={img} alt='' width={150} height={150} />
      <Styled.ProductNameContainer>
        <Styled.ProductName>{name}</Styled.ProductName>
        <Styled.ProductPrice>R${price}</Styled.ProductPrice>
      </Styled.ProductNameContainer>
      <Styled.ProductDescription>{desc}</Styled.ProductDescription>
      <Styled.ProductButton onClick={() => addProductToCart(id)} role='comprar'>
        <ShoppingBagOpen size={20} weight='bold' /> COMPRAR
      </Styled.ProductButton>
    </Styled.CardContainer>
  );
}
