type TProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export interface IProductsProps {
  data: Array<TProduct>;
}
