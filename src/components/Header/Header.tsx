import * as Styled from './headerStyles';
import { ShoppingCartSimple } from 'phosphor-react';
import { Sidebar } from '../SideBar/Sidebar';
import { useState } from 'react';
import { useAppSelector } from '@/hooks/reduxHooks';
import { cartTotalItems } from '@/context/cartSlice';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartTotal = useAppSelector(cartTotalItems);
  return (
    <>
      <Styled.Header>
        <div>
          <Styled.MKSLogo>MKS</Styled.MKSLogo>{' '}
          <Styled.Span>Sistemas</Styled.Span>
        </div>
        <Styled.CartButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <ShoppingCartSimple size={20} weight='fill' /> {cartTotal}
        </Styled.CartButton>
      </Styled.Header>
      {isSidebarOpen && (
        <Sidebar setStatus={setIsSidebarOpen} status={isSidebarOpen} />
      )}
    </>
  );
}
