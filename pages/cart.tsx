import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import {decrementQuantity, incrementQuantity, removeFromCart,addToCart} from 'state/cart.slice';
import { ReducerType } from 'state/cart.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductType from 'types/product-type';
import image from 'assets/image/7.png';
import trashIcon from 'assets/icon/Trash.svg';
import creditCard from 'assets/icon/creditCard.svg';
import styles from 'styles/CartPage.module.css';
import { getProducts } from './api/products';
import { userService } from 'services';
const CartPage = () => {
  const cart = useSelector<ReducerType, ProductType[]>(
    (state: any) => state.cart
  );
  const dispatch = useDispatch();
  const products = getProducts();

  const handleUndo = (item:ProductType)=>{
    const productItem = products.find(
      (prd) => String(prd.id) === String(item.id)
    );
    if(productItem){
      const itemCount = item.quantity
      if(itemCount&&itemCount>0){
        for(var i=0;i<itemCount;i++){
          dispatch(addToCart(item))
        }
      }else{
        dispatch(addToCart(item))
      }
    }
  }

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + (item.quantity ?? 0) * item.price,
      0
    );
  };
  const sliceName = (name:string)=>{
    if(name.length>5){
      return name.slice(0,3)+'...'
    }
    return name
  }
  return (
    <div className={styles.container}>
      <ToastContainer style={{width:'400px'}}/>
      {cart.length === 0 ? (
        <h5 className="text-black">😢 장바구니가 비었습니다</h5>
      ) : (
        <>
          <div className={styles.header}>
            <h5 className="text-black">{userService.userValue.username}님의 장바구니</h5>
          </div>
          <div className={styles.body}>
            <div className={styles.cartItems}>
              {cart.map((item: ProductType, index: number) => (
                <div key={index} className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      src={image}
                      alt={'product-image'}
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                  <div className={styles.detail}>
                    <p>{item.product}</p>
                    {/* <p>
                      <b>{item.freeShipping ? '무료배송' : '유료배송'}</b>{' '}
                      (업제직배송)
                    </p> */}
                    <p>
                      가격 <b>{item.price.toLocaleString('ko-KR')}</b>원
                    </p>
                    <p>
                      총 <b>{item.quantity}</b> 개
                    </p>
                  </div>
                  <div className={styles.buttons}>
                    <button onClick={() => dispatch(decrementQuantity(item))}>
                      -
                    </button>
                    <button onClick={() => {
                      dispatch(removeFromCart(item))
                      toast.info(<div><p>제품 '{sliceName(item.product)}'{'(을)'}를 제거하였습니다.</p><div style={{display:'flex',justifyContent:'center'}}>
                        <button
                            className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                            onClick={()=>handleUndo(item)}>
                          <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                  clipRule="evenodd"/>
                          </svg>
                          <span className="mx-1">되돌리기</span>
                        </button></div></div>, {
                        position: "bottom-right",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                      }}>
                      <Image
                        src={trashIcon}
                        alt={'delete'}
                        width={24}
                        height={24}
                      />
                    </button>

                    <button onClick={() => dispatch(incrementQuantity(item))}>
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <div className={styles.totalContent}>
                <p>
                  <span>총 상품금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p>
                <p>
                  <span>총 배송비</span> <span>0원</span>
                </p>
                {/* <p>
                  <span>총 할인금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p> */}
                <p>
                  <span>결제금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p>
              </div>
              <button>
                <Image
                      src={creditCard}
                      alt={'creditcard'}
                      width={24}
                      height={24}/>
                <p>{cart.length}개 상품 구매하기</p>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
