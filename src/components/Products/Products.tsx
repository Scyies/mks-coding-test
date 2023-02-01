import * as Styled from './productsStyles';
import Image from 'next/image';
import cardSkeleton from '@/assets/cardSkelleton.svg';
import { ProductCard } from './ProductCard';
import { IData } from '@/context/cartSlice';

interface FetchData {
  products: IData[];
  count: number;
}
interface IProps {
  data: FetchData;
  isLoading: boolean;
}

export function Products({ data, isLoading }: IProps) {
  return (
    <Styled.Section role='productGrid'>
      {!isLoading
        ? data &&
          data.products.map((product: IData) => (
            <ProductCard {...product} key={product.id} />
          ))
        : Array.from({ length: 8 }).map((_, i) => (
            <Styled.CardContainer key={i}>
              <Image
                alt=''
                style={{ objectFit: 'cover' }}
                height={324}
                width={209}
                src={cardSkeleton}
              />
            </Styled.CardContainer>
          ))}
    </Styled.Section>
  );
}
