import ProductType from 'types/product-type';

export const sortByPriceAscending = (products: ProductType[]) => {
  return products.sort((a, b) => b.price - a.price);
};
export const sortByPriceDescending = (products: ProductType[]) => {
  return products.sort((a, b) => a.price - b.price);
};
