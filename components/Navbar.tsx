import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ReducerType } from 'state/cart.slice';
import ProductType from 'types/product-type';
import favoriteIcon from 'assets/icon/Heart.svg';
import cartIcon from 'assets/icon/Cart.svg';
import styles from 'styles/Navbar.module.css';
import {userService} from 'services'
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  const cart = useSelector<ReducerType, ProductType[]>(
    (state: any) => state.cart
  );

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + (item.quantity ?? 0),
      0
    );
  };

  return (
    <>
      <nav className={styles.navbarWeb}>
        <Link href="/">
          <a className={styles.brand}>
            <h5>Nextjs</h5>
          </a>
        </Link>
        {
          userService.userValue && (
              <>
                <ul className={styles.links}>
                  <li className={styles.navlink}>
                    <Link href="/new-releases">New Releases</Link>
                  </li>
                  <li className={styles.navlink}>
                    <Link href="/men">Men</Link>
                  </li>
                  <li className={styles.navlink}>
                    <Link href="/women">Women</Link>
                  </li>
                  <li className={styles.navlink}>
                    <Link href="/kids">Kids</Link>
                  </li>
                </ul>
                <ul className={styles.icons}>
                  <li className={styles.navlink}>
                    <Image src={favoriteIcon} alt={'favorite'} width={24} height={24} />
                  </li>
                  <li className={styles.navlink}>
                    <Link href="/cart">
              <span>
                <Image src={cartIcon} alt={'cart'} width={24} height={24} /> (
                {getItemsCount()})
              </span>
                    </Link>
                  </li>
                </ul>
              </>
            )
        }

        <span className={styles.burger} onClick={() => setOpen(true)}>
          {' '}
          ≡{' '}
        </span>
      </nav>
      {open && (
        <div className={open ? styles.open : styles.navbarMobile}>
          <div className={styles.close} onClick={() => close()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          {
            userService.userValue ? (
                <>
                  <ul className={styles.links}>
                    <li onClick={() => close()} className={styles.navlink}>
                      <Link href="/new-releases">New Releases</Link>
                    </li>
                    <li onClick={() => close()} className={styles.navlink}>
                      <Link href="/men">Men</Link>
                    </li>
                    <li onClick={() => close()} className={styles.navlink}>
                      <Link href="/women">Women</Link>
                    </li>
                    <li onClick={() => close()} className={styles.navlink}>
                      <Link href="/kids">Kids</Link>
                    </li>
                  </ul>
                  <ul className={styles.icons}>
                    <li className={styles.navlink}>
                      <Image
                          src={favoriteIcon}
                          alt={'favorite'}
                          width={24}
                          height={24}
                      />
                    </li>
                    <li onClick={() => close()} className={styles.navlink}>
                      <Link href="/cart">
                <span>
                  <Image src={cartIcon} alt={'cart'} width={24} height={24} /> (
                  {getItemsCount()})
                </span>
                      </Link>
                    </li>
                  </ul>
                </>
            ) :(
                <p className="text-3xl text-black"><strong>로그인이 필요합니다.</strong></p>
            )
          }

        </div>
      )}
    </>
  );
};

export default Navbar;
