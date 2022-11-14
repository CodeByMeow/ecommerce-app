import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage/HomePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import CartPage from "./pages/CartPage/CartPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

import PrivateRoute from "./components//PrivateRoute/PrivateRoute";
import AuthState from "./contexts/AuthContext/AuthState";
import { StoreContext } from "./contexts/StoreContext";
//styles
import "./App.css";
<<<<<<< HEAD
=======
import productService from "./services/productService";
>>>>>>> 04848d986b15e3f6e96a742d7d8f750a9accdc6b

// data
// import { products } from "./utils/data.js";

const App = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        setLoading(true);
        productService.getList({ perpage: 4 }).then((res) => {
            setLoading(false);
            setProducts(res.data.data.itemsList);
        });
    }, []);

    return (
        <HelmetProvider>
            <AuthState>
                <StoreContext.Provider
                    value={{
                        products,
                    }}
                >
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={<HomePage loading={loading} />}
                            />
                            <Route path="/signin" element={<SigninPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route
                                path="/products"
                                element={<ProductListPage />}
                            />
                            <Route
                                path="/products/:itemId"
                                element={<ItemDetailPage />}
                            />
                            <Route path="/about-us" element={<AboutPage />} />
                            <Route
                                path="/cart"
                                element={<PrivateRoute component={CartPage} />}
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Router>
                </StoreContext.Provider>
            </AuthState>
        </HelmetProvider>
    );
};

export default App;
