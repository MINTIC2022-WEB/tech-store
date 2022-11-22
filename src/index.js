import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>

  <div className="container">
    <Navbar/>
  </div>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product-list" element={<ProductList/>} />
  </Routes>
  
  </BrowserRouter>

);
