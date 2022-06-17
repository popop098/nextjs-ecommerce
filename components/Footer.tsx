import styles from 'styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <h1 className={styles.brand}>Nextjs</h1>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <p>사업자 등록번호 : 123-45-67890 | 대표 : 홍길동</p>
          <p>
            <span>
              호스팅 서비스 : 주식회사 Nextjs | 통신판매업 신고번호 :
              2021-서울강남-123456
            </span>
            <span>01234 서울틀별시 강남구</span>
          </p>
        </div>
        <div className={styles.contentRight}>
          <ul>
            <li>서비스 이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>입점/제휴 문의</li>
          </ul>
          <span>
            Copyright &copy; Nextjs{currentYear - 10}-{currentYear} All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
