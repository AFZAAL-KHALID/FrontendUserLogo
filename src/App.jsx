import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import Collections from "./Pages/Collections.jsx";
import Contact from "./Pages/Contact.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import allProducts from "./assets/allProducts.js"; // from dummy js file
import { useDispatch, useSelector } from "react-redux";
import { setProductsInStore } from "./Features/ProductSlice.js";
import DetailProduct from "./Pages/DetailProduct.jsx";
import Login from "./Components/Login.jsx";
import Orders from "./Pages/Orders.jsx";
import Cart from "./Pages/Cart.jsx";
import DeliveryAddress from "./Pages/DeliveryAddress.jsx";
import { RxDoubleArrowUp } from "react-icons/rx"; //icon

const textColor = "#ef233c"; //main Color
const bgColor = "#edf2f4"; //background Color

const App = () => {
  const disptach = useDispatch();
  const allProductsFromStore = useSelector(
    (state) => state.mySlice.allProducts
  );

  useEffect(() => {
    if (allProducts) {
      disptach(setProductsInStore(allProducts)); //puting allproducts in Redux Store
    }
  }, []);

  return (
    <>
      <div
        className="mainContainer p-4  sm:p-12 sm:pt-5 flex flex-col justify-start items-center text-sm sm:text-xl w-full min-h-screen bg-[#edf2f4]"
        style={{ "--main-color": textColor, "--bg-color": bgColor }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="topIcon fixed md:hidden bottom-4 right-4 w-[15vw] active:bg-[var(--main-color)] h-[15vw] flex justify-center items-center rounded-full bg-gray-800 text-white shadow-lg hover:scale-105 transition"
        >
          <RxDoubleArrowUp size={24} />
        </button>

        {/* <a href='.Navebar' className='topIcon fixed md:hidden  bottom-4 right-4  w-[15vw] h-[15vw] flex justify-center items-center rounded-full'><RxDoubleArrowUp /></a> */}
        
        <ToastContainer position="top-right" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Collections" element={<Collections />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route path="/DetailProduct/:id" element={<DetailProduct />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/DeliveryAddress" element={<DeliveryAddress />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
