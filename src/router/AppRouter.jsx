import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  return (
    
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/:id" element={<ProductDetail />} />
          {/* //*absolute path */}
          <Route path="/dashboard/about" element={<About />} />
          {/*  //*relative path */}
          {/* <Route path="about" element={<About />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    
  );
};

export default AppRouter;
