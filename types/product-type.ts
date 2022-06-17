export default interface ProductType {
  key?: number;
  id: number;
  product: string;
  quantity?: number;
  category: string;
  price: number;
  freeShipping: boolean;
}
