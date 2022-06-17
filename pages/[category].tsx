import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

import { getProductsByCategory } from 'pages/api/products/[category]';
import ProductCard from 'components/ProductCard';
import ProductsType from 'types/products-type';
import { sortByPriceAscending, sortByPriceDescending } from '../util/filter';
import styles from 'styles/ProductPage.module.css';
import Link from 'next/link';

const CategoryPage = ({ products }: ProductsType) => {
  const router = useRouter();
  const category = router.query.category?.toString();
  const sort = router.query.sort?.toString();
  console.log(sort)
  return (
    <div className={styles.container}>
      <h3 className={styles.title} style={{color:'black'}}>{category?.split('-').join(' ')}</h3>
      <ul className={styles.filter}>
        <Link href={`/${category}`} passHref><li
          className={sort===undefined ? styles.active : styles.inactive}
        >
          조건없음
        </li></Link>
        <Link href={`/${category}?sort=desc`} passHref><li
          className={sort==="desc" ? styles.active : styles.inactive}
        >
          낮은 가격
        </li></Link>
        <Link href={`/${category}?sort=asc`} passHref><li
          className={sort==="asc" ? styles.active : styles.inactive}
        >
          높은 가격
        </li></Link>
      </ul>
      <div className={styles.cards}>
        {
          products.map((product) => (
            <a key={product.id}>
              <ProductCard key={product.id} product={product} />
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx: NextPageContext) {
  const sortArr = ['desc', 'asc'];
  const category = ctx.query.category;
  const sort = ctx.query.sort;
  const products = await getProductsByCategory(category);
  const sortedProducts = sort === 'asc' ? sortByPriceAscending(products) : sort === 'desc' ? sortByPriceDescending(products) : products;
  return { props: { products:sortedProducts } };
}
