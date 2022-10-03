import styles from '../styles/Category.module.css';
import ProductCard from './ProductCard';

export default function Category({ category, strapiURL }) {
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        {category.name}
      </div>
      <div className={styles.products}>
        {category.products.map((product) =>
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={`${strapiURL}${product.image.formats.small.url}`}
          />
        )}
      </div>
    </div>
  );
}


