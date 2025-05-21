export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    path: string;
  };
}

export interface IProductsProps {}
