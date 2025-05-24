import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import SingPu from "./pages/singUp/SingUp";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import Modalctgry from "./components/modalctgry/Modalctgry";
import Category from "./pages/category/Category";
import { ToastContainer } from "react-toastify";
import { FaLaptopHouse } from "react-icons/fa";
import { baseURL } from "./config";
import Comparison from "./pages/comparison/Comparison";
import { getToken } from "./pages/service/token";
import Liked from "./pages/liked/Liked";
import Search from "./pages/search/Search";
import Oneproduct from "./pages/oneproduct/Oneproduct";
import Cart from "./pages/cart/Cart";

function App() {
  const [modalCtgry, setModalCtgry] = useState(false);
  const [data, setData] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [brands, setBrands] = useState();

  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/products/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error(error));
  };

  const getCategory = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/categories/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategoryInfo(result);
      })
      .catch((error) => console.error(error));
  };

  const getBrands = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/brands/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBrands(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
    getCategory();
    getBrands();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar
          setModalCtgry={setModalCtgry}
          modalCtgry={modalCtgry}
          categoryInfo={categoryInfo}
        />
        {modalCtgry && <Modalctgry />}
        <ToastContainer autoClose={1000} />
        <Routes>
          <Route
            path="/"
            element={
              <Home categoryInfo={categoryInfo} brands={brands} data={data} />
            }
          />

          <Route path="/comparison" element={<Comparison />} />
          <Route path="/wishlist" element={<Liked />} />
          <Route path="/singup" element={<SingPu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search data={data} />} />
          <Route path="/product/:id" element={<Oneproduct/> } />
          <Route path="/cart" element={<Cart/> } />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
