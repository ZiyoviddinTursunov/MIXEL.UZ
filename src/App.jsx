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
import { baseURL } from "./config";
import Comparison from "./pages/comparison/Comparison";
import { getToken } from "./pages/service/token";
import Liked from "./pages/liked/Liked";
import Search from "./pages/search/Search";
import Oneproduct from "./pages/oneproduct/Oneproduct";
import Cart from "./pages/cart/Cart";
import CartModal from "./components/cardModal/CardModal";

function App() {
  const [modalCtgry, setModalCtgry] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [data, setData] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [brands, setBrands] = useState();
  const [dataLike, setDataLike] = useState(null);
  const [comparison, setComparison] = useState(null);
  const [srcData, setSrcData] = useState(null);

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/products/?page_size=100", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  const getCategory = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/categories/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCategoryInfo(result))
      .catch((error) => console.error(error));
  };

  const getBrands = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/brands/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setBrands(result))
      .catch((error) => console.error(error));
  };

  const likedData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/liked-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => setDataLike(result))
      .catch((error) => console.error(error));
  };

  const comparisonData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/versus-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => setComparison(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
    getCategory();
    getBrands();
    likedData();
    comparisonData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar
        setSrcData={setSrcData}
          getData={getData}
          data={data}
          setModalCtgry={setModalCtgry}
          modalCtgry={modalCtgry}
          categoryInfo={categoryInfo}
          dataLike={dataLike}
        />
      {cardModal && <CartModal setCardModal={setCardModal} />}
        {modalCtgry && <Modalctgry />}
        <ToastContainer autoClose={1000} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
              setCardModal={setCardModal}
                likedData={likedData}
                getData={getData}
                categoryInfo={categoryInfo}
                brands={brands}
                data={data}
              />
            }
          />
          <Route path="/comparison" element={<Comparison comparison={comparison} />} />
          <Route
            path="/wishlist"
            element={
              <Liked dataLike={dataLike} likedData={likedData} getData={getData} setCardModal={setCardModal}/>
            }
          />
          <Route path="/singup" element={<SingPu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search data={data}  srcData={srcData}/>} />
          <Route path="/product/:id" element={<Oneproduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
