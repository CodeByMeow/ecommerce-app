import React, { useState, useContext, useEffect } from "react";
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
import ProductService from "./services/productService";
//styles
import "./App.css";
import useFetchProducts from "./hooks/useFetchProducts";

// data
// import { products } from "./utils/data.js";

const App = () => {
    const [products, setProduct] = useState(null);
    useEffect(() => {
        ProductService.getList().then((res) => {
            setProduct(res.data.data.itemsList);
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
                            <Route path="/" element={<HomePage />} />
                            <Route path="/signin" element={<SigninPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route
                                path="/products"
                                element={<ProductListPage />}
                            />
                            <Route
                                path="/products/:slug"
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
