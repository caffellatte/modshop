import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page }) {
  return (
    <>
      <Header page={page} />
      {children}
      <Footer />
    </>
  );
}