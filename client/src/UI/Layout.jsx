import { Fragment } from "react";
import Props from "../helpers/Interfaces";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ props }) => {
  return (
    <Fragment>
      <Navigation />
      <div>{props.children}</div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
