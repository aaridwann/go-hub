export interface CardProduct {
  id: string | number;
  name: string;
  description: string;
  price: string | number;
  image: string;
  stock: number;
  onClick: VoidFunction;
}
