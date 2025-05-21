import { IProduct } from '@/app/[locale]/[table]/menu/_components/Products/types';

export interface ICartProduct extends IProduct {
  count: number;
  comment?: string;
}

export interface ICartContext {
  count: number;
  products: Array<ICartProduct>;
  addProduct: (_: ICartProduct) => void;
  changeCount: (_id: number, _count: number) => void;
  removeProduct: (_: number) => void;
  clearProducts: () => void;
}
