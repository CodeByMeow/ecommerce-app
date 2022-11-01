import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage/HomePage";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

import AuthState from "./contexts/AuthContext/AuthState";

//
import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <AuthState>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:id"></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthState>
    </HelmetProvider>
  );
};

export default App;
