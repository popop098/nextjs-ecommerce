import CategoryCard from 'components/CategoryCard';
import category1 from 'assets/image/1.png';
import category2 from 'assets/image/2.png';
import category3 from 'assets/image/3.png';
import category4 from 'assets/image/4.png';
import category5 from 'assets/image/5.png';
import category6 from 'assets/image/6.png';
import styles from 'styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.spanningCol}>
        <CategoryCard
          image={category1}
          name="New Releases"
          description="2021년 신상품"
        />
      </div>
      <div className={styles.box2}>
        <CategoryCard image={category2} name="Men" description="남성 상품" />
      </div>
      <div className={styles.box3}>
        <CategoryCard image={category3} name="Women" description="여성 상품" />
      </div>
      <div className={styles.box4}>
        <CategoryCard image={category4} name="Kids" description="어린이 상품" />
      </div>
      <div className={styles.spanningRow}>
        <CategoryCard image={category5} name="Sale" description="세일 살품" />
      </div>
      <div className={styles.box5}>
        <CategoryCard image={category6} name="Upcoming" description="준비 중" />
      </div>
    </main>
  );
};

export default HomePage;
