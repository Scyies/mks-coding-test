import * as Styled from './productsStyles';

import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <Styled.Section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Styled.Section>
  );
}
