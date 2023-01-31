import * as Styled from './productsStyles';

import { ProductCard } from './ProductCard';
import { useFetch } from '@/hooks/useFetch';
import Image from 'next/image';

import cardSkeleton from '@/assets/cardSkelleton.svg';

interface IProps {}

export function Products({}: IProps) {
  const { data, loading, error } = useFetch(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  );

  if (error) {
    console.error(error);
  }

  return (
    <Styled.Section role='productGrid'>
      {!loading
        ? data &&
          data.map((product) => (
            <ProductCard
              name={product.name}
              desc={product.description}
              img={product.photo}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          ))
        : Array.from({ length: 8 }).map((_, i) => (
            <Image
              key={i}
              alt=''
              style={{ objectFit: 'contain' }}
              height={400}
              width={230}
              src={cardSkeleton}
            />
          ))}
    </Styled.Section>
  );
}
