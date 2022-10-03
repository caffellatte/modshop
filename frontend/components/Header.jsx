import styles from '../styles/Header.module.css'
import cn from 'classnames';
import Link from 'next/link';

export default function Header({page}) {
  return (
    <div className={styles.header}>
      <div className={styles.navigationBar}>
        <Link href="/">
          <img className={styles.logo} src='./images/modshopLogo.svg' alt='MODSHOP Logo'/>
        </Link>
        <ul className={styles.navigationList}>
          <li className={styles.navigationLinks}>
            <Link href="/register">
              <a className={cn({
                [styles.linkActive]: page === 'register',
                [styles.link]: page !== 'register',
              })}> 
                REGISTER
              </a>
            </Link>
          </li> 
          <li className={styles.navigationLinks}>LOG IN</li>
        </ul>
      </div>
    </div>
  );
}