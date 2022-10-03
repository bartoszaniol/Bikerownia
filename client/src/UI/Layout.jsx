import { Fragment } from "react";
import Props from "../helpers/Interfaces";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <div>{children}</div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;