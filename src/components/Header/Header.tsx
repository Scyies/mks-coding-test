import * as Styled from './headerStyles';
import { ShoppingCartSimple } from 'phosphor-react';
import { Sidebar } from '../SideBar/Sidebar';

export function Header() {
  return (
    <>
      <Styled.Header>
        <div>
          <Styled.MKSLogo>MKS</Styled.MKSLogo>{' '}
          <Styled.Span>Sistemas</Styled.Span>
        </div>
        <Styled.CartButton>
          <ShoppingCartSimple size={20} weight='fill' /> 0
        </Styled.CartButton>
      </Styled.Header>
      <Sidebar />
    </>
  );
}
