import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard({name, price, image}) {
  return(
    <div className={styles.productCard}>
    <div className={styles.productImage}>
      <Image
        src={image}
        height={420}
        width={288}
        alt={name}
      />
    </div>
    <div className={styles.description}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.price}>
        USD {price.toFixed(2)}
      </div>
    </div>
  </div>
  );
}