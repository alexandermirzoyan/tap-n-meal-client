import { IProduct } from '@/app/[locale]/[table]/menu/_components/Products/types';

export interface IAddToCartProps {
  max: number;
  product: IProduct;
}
