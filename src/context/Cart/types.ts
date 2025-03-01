import { IProduct } from '@/app/menu/[table]/_components/Products/types';

export interface ICartProduct extends IProduct {
  count: number;
}

export interface ICartContext {
  count: number;
  products: Array<ICartProduct>;
  addProduct: (_: ICartProduct) => void;
}
