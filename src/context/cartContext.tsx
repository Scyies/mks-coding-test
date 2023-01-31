import { IData } from '@/hooks/useFetch';
import { createContext, useContext, useState } from 'react';

export interface IDataContext {
  cartItems: IData[];
  setCartItems: React.Dispatch<React.SetStateAction<IData[]>>;
}

interface IProps {
  children: React.ReactNode;
}

export const CartContext = createContext<IDataContext>({} as IDataContext);

export default function CartProvider({ children }: IProps) {
  const [cartItems, setCartItems] = useState<IData[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartData() {
  return useContext(CartContext);
}
