import React from "react";
import Header from "./Components/Header/Header";
import Add from "./Components/Add/Add";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./Components/View/View";
import Home from './Components/Home/Home';
import Edit from "./Components/Edit/Edit";
import Product from "./Components/Product/Product";
import AddToCart from "./Components/AddToCart/AddToCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
