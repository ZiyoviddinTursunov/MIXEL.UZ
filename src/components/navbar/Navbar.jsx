import React, { useState } from "react";
import "./Navbar.css";
import { FiLogIn, FiMapPin, FiShoppingCart, FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaBalanceScale, FaRegHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../pages/service/token";
import { CgLogIn } from "react-icons/cg";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Navbar({
  setModalCtgry,
  modalCtgry,
  categoryInfo,
  dataLike,
  getData,
  data,
  setSrcData,
}) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [langSound, setLangSound] = useState("uz-UZ");
  const [activSound, setActivSound] = useState(false);
  const navigate = useNavigate(null);

  const langFunk = (lang) => {
    setLangSound(lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US");
  };
  

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setStatus("Brauzer ovozli qidiruvni qo‘llab-quvvatlamaydi.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = langSound;
    recognition.interimResults = true;

    setStatus("Gapiring...");
    recognition.start();

    recognition.onresult = (event) => {
      const resultText = event.results[0][0].transcript;
      setText(resultText);
      setStatus("Tugatildi.");
      fiterData(resultText);
      setTimeout(() => {
        setActivSound(false);
      }, 5000);
    };

    recognition.onerror = (event) => {
      setStatus("Xatolik: " + event.error);
    };
  };
  const fiterData = (text) => {
    const filtered = data?.results?.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    if (filtered.length > 0) {
      setSrcData(filtered);
    }
  };

  return (
    <nav>
      {/* --- Top bar --- */}
      {/* <div className="nav1">
        <div className="container">
          <ul className="nav1_link">
            <li className="location">
              <FiMapPin />
              <span>Tashkent</span>
            </li>
            <li>
              <a href="#">Our shop</a>
            </li>
            <li>
              <a href="#">B2B sales</a>
            </li>
            <li>
              <a href="#">Installments</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Warranty</a>
            </li>
          </ul>
          <div className="nav1_contact">
            <div className="phone">
              <BsTelephone />
              <span>+998 95 123 55 88</span>
            </div>
            <select
              onChange={(e) => langFunk(e.target.value)}
              className="lang-select"
            >
              <option value="ru">Рус</option>
              <option value="uz">O‘zb</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </div>
      </div> */}

      {/* --- Middle nav with logo and search --- */}
      <div className="nav2">
        <div className="container">
          <Link to="/">
            <div className="nav_logo">
              <img src="/imgs/Logo.svg" alt="Logo" />
            </div>
          </Link>

          <div className="NavSearch">
            <div className="searchInp">
              <input
                value={text}
                onClick={() => navigate("/search")}
                onChange={(e) => {
                  setText(e.target.value);
                  fiterData(e.target.value);
                }}
                type="text"
                placeholder="Type a product name, brand, or category"
              />
              <div
                onClick={() => {
                  startRecognition();
                  setActivSound(true);
                }}
                className={activSound ? "soundSrc activSound" : "soundSrc"}
              >
                <HiOutlineMicrophone />
              </div>
            </div>

            <button className="srcBtn">
              <IoSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className="nav1_iconsMenu">
            <Link to="/comparison">
              <div className="comparison">
                <IconButton>
                  <FaBalanceScale />
                  <CartBadge
                    badgeContent={1}
                    color="primary"
                    overlap="circular"
                  />
                </IconButton>
                <span>Comparision</span>
              </div>
            </Link>

            <Link to="/wishlist">
              <div className="likeProduct">
                <IconButton>
                  <FaRegHeart />
                  <CartBadge
                    badgeContent={dataLike?.count || 0}
                    color="primary"
                    overlap="circular"
                  />
                </IconButton>
                <span>Favourites</span>
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart">
                <IconButton>
                  <FiShoppingCart />
                  <CartBadge
                    badgeContent={1}
                    color="primary"
                    overlap="circular"
                  />
                </IconButton>
                <span>Cart</span>
              </div>
            </Link>

            {getToken() ? (
              <Link to="/profile">
                <div className="nav-user">
                  <IconButton>
                    <FiUser />
                  </IconButton>
                  <span>Profile</span>
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <div className="nav-user">
                  <IconButton>
                    <FiLogIn />
                  </IconButton>
                  <span>Login</span>
                </div>
              </Link>
            )}

           
          </div>
        </div>
      </div>

      {/* --- Category menu --- */}
      <div className="nav3">
        <div className="container">
          <Box sx={{ "& button": { m: 1 } }}>
            <Button size="small" onClick={() => setModalCtgry(!modalCtgry)}>
              <TfiMenuAlt /> <span>Categories</span>
            </Button>
          </Box>

          <ul className="categoryMenuLink">
            {data
              ? categoryInfo?.results?.map((item, index) => (
                  <li key={index}>
                    <Link to={`/category/${item.id}`}>{item.name}</Link>
                  </li>
                ))
              : [...Array(5)].map((_, i) => (
                  <div key={i} className="gradient-placeholder"></div>
                ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
