import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./pages/aboutUs/About.jsx";
import Product from "./pages/ourProducts/Product.jsx";
import Contact from "./pages/contactUs/Contact.jsx";
import AgeRestriction from "./components/AgeRestriction.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>

      <Navbar />
      <Routes>

        <Route element={<AgeRestriction />} path="/"></Route>
        <Route element={<App />} exact path="/home"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Product />} path="/products"></Route>
        <Route element={<Contact />} path="/contact"></Route>

      </Routes>
      <Footer />

    </React.StrictMode>
  </BrowserRouter>
);