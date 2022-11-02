import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage/HomePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";

import PrivateRoute from "./components//PrivateRoute/PrivateRoute";
import AuthState from "./contexts/AuthContext/AuthState";
import { StoreContext } from "./contexts/StoreContext";

//styles
import "./App.css";

// data
import { products } from "./utils/data.js";

const App = () => {
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
              <Route path="/products/:category" element={<CategoryPage />} />
              <Route path="/products/:id" />
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
