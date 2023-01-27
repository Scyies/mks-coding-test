import * as Styled from './headerStyles';
import { ShoppingCartSimple } from 'phosphor-react';
import { Sidebar } from '../SideBar/Sidebar';
import { useState } from 'react';
import { IDataContext, useCartData } from '@/context/cartContext';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems } = useCartData() as IDataContext;
  return (
    <>
      <Styled.Header>
        <div>
          <Styled.MKSLogo>MKS</Styled.MKSLogo>{' '}
          <Styled.Span>Sistemas</Styled.Span>
        </div>
        <Styled.CartButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <ShoppingCartSimple size={20} weight='fill' /> {cartItems.length}
        </Styled.CartButton>
      </Styled.Header>
      {isSidebarOpen && <Sidebar setStatus={setIsSidebarOpen} />}
    </>
  );
}
