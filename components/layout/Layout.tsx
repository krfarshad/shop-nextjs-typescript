import React, { ReactNode } from "react";
import SiteHead from "../Head/SiteHead";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useTheme } from 'next-themes';
type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {

  return (
    <>
      <SiteHead />
      {/* header */}
      <Header />
      {/* children */}
      {children}
      {/* footer */}
      <Footer />
    </>
  );
};
export default Layout;
