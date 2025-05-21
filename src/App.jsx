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

function App() {
  const [modalCtgry, setModalCtgry] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [brands, setBrands] = useState();

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
            element={<Home categoryInfo={categoryInfo} brands={brands} />}
          />
          <Route path="/singup" element={<SingPu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
