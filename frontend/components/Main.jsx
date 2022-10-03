import styles from '../styles/Main.module.css';
import Category from './Category';

export default function Main({ categories, strapiURL }) {
  return (
    <div className={styles.main}>
      {categories?.length > 0 &&
        categories.map(category => <Category
          key={category.id}
          category={category}
          strapiURL={strapiURL}
        />
        )
      }
    </div>
  );
}