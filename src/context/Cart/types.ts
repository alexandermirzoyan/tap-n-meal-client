import { TProduct } from '@/app/menu/[table]/_components/Products/types';

export interface ICartContext {
  count: number;
  products: Array<TProduct>;
}
