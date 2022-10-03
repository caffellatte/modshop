import styles from '../styles/Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBackground}>
        <div className={styles.copyright}>© 2020 MODSHOP Clothing</div>
      </div>
    </div>
  );
}