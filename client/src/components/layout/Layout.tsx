import Footer from "./Footer";
import Header from "./Header";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
