'use client';

import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { ICartContext, ICartProduct } from './types';

export const CartContext = createContext<ICartContext>({
  count: 0,
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const count = products.length;

  const insertProduct = (newProduct: ICartProduct) => {
    const productsCopy = [...products];
    const productIndex = products.findIndex((product) => product.id === newProduct.id);

    if (productIndex >= 0) {
      productsCopy[productIndex] = newProduct;
    } else {
      productsCopy.push(newProduct);
    }

    setProducts(productsCopy);
  };

  const removeProduct = (productId: number) => {
    const productsCopy = [...products];
    const productIndex = products.findIndex((product) => product.id === productId);
    productsCopy.splice(productIndex, 1);
    setProducts(productsCopy);
  };

  const contextValue = useMemo(() => ({
    count,
    products,
    addProduct: insertProduct,
    removeProduct,
  }), [products]);

  useEffect(() => {
    const sessionProducts = sessionStorage.getItem('products');
    const productsInStorage = sessionProducts ? JSON.parse(sessionProducts) : null;

    if (!productsInStorage) {
      return;
    }

    setProducts(productsInStorage);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <CartContext value={contextValue}>
      {children}
    </CartContext>
  );
};
