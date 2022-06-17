import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/CategoryCard.module.css';

interface ICategoryCard {
  image: StaticImageData;
  name: string;
  description: string;
}

const CategoryCard = ({ image, name, description }: ICategoryCard) => {
  console.log(name);
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={'category-image'}
        className={styles.image}
        placeholder="blur"
      />
      <Link href={`/${name.replace(' ', '-').toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <div />
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
