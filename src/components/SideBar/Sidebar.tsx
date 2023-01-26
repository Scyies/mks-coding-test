import { CartCard } from './CartCard';
import * as Styled from './sidebarStyles';

export function Sidebar() {
  return (
    <Styled.Sidebar>
      <Styled.FlexCenter>
        <Styled.HeadingText>Carrinho de compras</Styled.HeadingText>
        <Styled.Exit>X</Styled.Exit>
      </Styled.FlexCenter>
      <Styled.ProductsSection>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </Styled.ProductsSection>
      <Styled.FlexCenter>
        <Styled.HeadingText>Total:</Styled.HeadingText>
        <Styled.HeadingText>R$798</Styled.HeadingText>
      </Styled.FlexCenter>
      <Styled.Button>Finalizar Compra</Styled.Button>
    </Styled.Sidebar>
  );
}
