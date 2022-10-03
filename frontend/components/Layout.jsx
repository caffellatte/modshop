import styles from '../styles/Layout.module.css'
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page }) {
  return (
    <div className={styles.layout}>
      <Header page={page} />
      {children}
      <Footer />
    </div>
  );
}