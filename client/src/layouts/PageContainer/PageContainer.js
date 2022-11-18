import React from "react";
import { Helmet } from "react-helmet-async";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageContainer = ({
    children,
    shouldShowHeader = true,
    shouldShowFooter = true,
    title = "Page Title",
    description = "Page Description",
    ...props
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {shouldShowHeader && <Header />}
            <main className="lg:w-10/12 mx-auto">{children}</main>
            {shouldShowFooter && <Footer />}
        </>
    );
};

export default PageContainer;
