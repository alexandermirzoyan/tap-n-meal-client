'use client';

import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { getSessionStorageItem } from '@/utils/getSessionStorageItem';

import { ICartContext, ICartProduct } from './types';

export const CartContext = createContext<ICartContext>({
  count: 0,
  products: [],
  addProduct: () => {},
  changeCount: () => {},
  removeProduct: () => {},
  clearProducts: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ICartProduct[]>(getSessionStorageItem('products') || []);
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

  const changeCount = (productId: number, newCount: number) => {
    const foundProductIndex = products.findIndex((product) => product.id === productId);
    const foundProduct = products[foundProductIndex];
    const copyFoundProduct = { ...foundProduct, count: newCount };
    const copyProducts = [...products];
    copyProducts[foundProductIndex] = copyFoundProduct;
    setProducts(copyProducts);
  };

  const removeProduct = (productId: number) => {
    const productsCopy = [...products];
    const productIndex = products.findIndex((product) => product.id === productId);
    productsCopy.splice(productIndex, 1);
    setProducts(productsCopy);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const contextValue = useMemo(() => ({
    count,
    products,
    addProduct: insertProduct,
    changeCount,
    removeProduct,
    clearProducts,
  }), [products]);

  useEffect(() => {
    const productsInStorage = getSessionStorageItem('products');

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
