import "./App.css";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Men from "./pages/Men";
import Woman from "./pages/woman";
import Home from "./pages/home";
import Login from "./pages/Login";
import Kid from "./pages/Kid";
import Product from "./pages/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import AddProduct from "./pages/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="/Men" element={<Men />} />

        <Route
          path="/AddProduct"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route path="/Woman" element={<Woman />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
