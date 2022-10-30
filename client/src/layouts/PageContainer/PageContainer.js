import React from "react";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageContainer = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageContainer;
