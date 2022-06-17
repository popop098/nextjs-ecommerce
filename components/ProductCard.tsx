import Image from 'next/image';

import ProductType from 'types/product-type';
import image from 'assets/image/7.png';
import styles from 'styles/ProductCard.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getProducts } from 'pages/api/products';
import { useDispatch } from 'react-redux';
import { addToCart } from 'state/cart.slice';
import {useRouter} from 'next/router'
interface IProductCard {
  product: ProductType;
}

const ProductCard = ({ product }: IProductCard) => {
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch();
  const products = getProducts();
  const router = useRouter()
  const productItem = products.find(
    (item) => String(item.id) === String(product.id)
  );
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={'product-image'}
        width={'100%'}
        height={'100%'}
        placeholder={'blur'}
      />
      {/* <p className={styles.shipping}>
        {product.freeShipping ? '무료배송' : '유료배송'}
      </p> */}
      <h4 className={styles.title}>{product.product}</h4>
      <p className={styles.price}>
        {/* <span>50%</span> */}
        <span>{product.price.toLocaleString('ko-KR')} 원</span>
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            productItem && dispatch(addToCart(productItem))
            MySwal.fire({
              title: '장바구니에 담았습니다.',
              text: '장바구니로 이동하시겠습니까?',
              showDenyButton: true,
              confirmButtonText: '🛒 장바구니로 이동',
              denyButtonText: `계속 고르기`,
              icon: 'success',
              denyButtonColor:'#32a852'
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                router.push('/cart')
              }
            })}}
        >
          장바구니 담기 / 구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
