import Header from "@app/layout/header";
import Footer from "@app/layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
