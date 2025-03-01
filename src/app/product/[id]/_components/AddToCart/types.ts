import { IProduct } from '@/app/menu/[table]/_components/Products/types';

export interface IAddToCartProps {
  max: number;
  product: IProduct;
}
