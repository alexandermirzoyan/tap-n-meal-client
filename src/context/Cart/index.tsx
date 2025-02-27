'use client';

import {
  ReactNode,
  createContext,
  useMemo,
  useState,
} from 'react';

import { ICartContext } from './types';

export const CartContext = createContext<ICartContext>({ count: 0, products: [] });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState([]);
  const count = products.length;

  const contextValue = useMemo(() => ({ count, products, setProducts }), [products]);

  return (
    <CartContext value={contextValue}>
      {children}
    </CartContext>
  );
};
