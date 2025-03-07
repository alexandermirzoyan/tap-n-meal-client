import { IProduct } from '@/app/[locale]/menu/[table]/_components/Products/types';

export interface IAddToCartProps {
  max: number;
  product: IProduct;
}
