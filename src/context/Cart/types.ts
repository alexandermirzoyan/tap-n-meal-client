import { IProduct } from '@/app/menu/[table]/_components/Products/types';

export interface ICartProduct extends IProduct {
  count: number;
  comment?: string;
}

export interface ICartContext {
  count: number;
  products: Array<ICartProduct>;
  addProduct: (_: ICartProduct) => void;
  removeProduct: (_: number) => void;
}
