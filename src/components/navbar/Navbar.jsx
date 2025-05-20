import React, { useState } from "react";
import "./Navbar.css";
import { FiMapPin, FiShoppingCart, FiUser } from "react-icons/fi";
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
import { Link } from "react-router-dom";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Navbar({ setModalCtgry, modalCtgry }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [langSound, setLangSound] = useState("ru-RU");
  const [activSound, setActivSound] = useState(false);

  const langFunk = (lang) => {
    if (lang == "uz") {
      setLangSound("uz-UZ");
    } else if (lang == "ru") {
      setLangSound("ru-RU");
    } else {
      setLangSound("en-US");
    }
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
    recognition.interimResults = false;

    setStatus("Gapiring...");
    recognition.start();

    recognition.onresult = (event) => {
      const resultText = event.results[0][0].transcript;
      setText(resultText);
      setStatus("Tugatildi.");

      setTimeout(() => {
        setActivSound(false);
      }, 5000);
    };

    recognition.onerror = (event) => {
      setStatus("Xatolik: " + event.error);
    };
  };

  return (
    <nav>
      {/* --- Top bar --- */}
      <div className="nav1">
        <div className="container">
          <ul className="nav1_link">
            <li className="location">
              <FiMapPin />
              <span>Ташкент</span>
            </li>
            <li>
              <a href="#">Наши магазины</a>
            </li>
            <li>
              <a href="#">B2B продажи</a>
            </li>
            <li>
              <a href="#">Покупка в рассрочку</a>
            </li>
            <li>
              <a href="#">Способы оплаты</a>
            </li>
            <li>
              <a href="#">Гарантия на товары</a>
            </li>
          </ul>

          <div className="nav1_contact">
            <div className="phone">
              <BsTelephone />
              <span>+998 95 123 55 88</span>
            </div>
            <select
              onChange={(e) => {
                langFunk(e.target.value);
              }}
              className="lang-select"
            >
              <option value="ru">Рус</option>
              <option value="uz">O‘zb</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- Middle nav with logo and search --- */}
      <div className="nav2">
        <div className="container">
          <Link to={"./"}>
            <div className="nav_logo">
              <img src="/imgs/Logo.svg" alt="Logo" />
            </div>
          </Link>

          <div className="NavSearch">
            <div className="category">
              <span>Все категории</span>
              <MdOutlineKeyboardArrowDown />
              <span className="divider">|</span>
            </div>

            <div className="searchInp">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Телефоны и бытовая техника"
              />

              <div
                onClick={() => {
                  startRecognition();
                  setActivSound(true);
                }}
                className={activSound ? "soundSrc activSound" : "soundSrc"}
              >
                <HiOutlineMicrophone className="HiOutlineMicrophone" />
              </div>
            </div>

            <button className="srcBtn">
              <IoSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className="nav1_iconsMenu">
            <Link to={"/login"}>
              {" "}
              <div className="nav-user">
                <IconButton>
                  <FiUser className="FiUser" />
                </IconButton>
                <span>Войти</span>
              </div>
            </Link>

            <div className="comparison">
              <IconButton>
                <FaBalanceScale className="FaBalanceScale" />
                <CartBadge
                  badgeContent={1}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>

              <span>Сравнение</span>
            </div>

            <div className="likeProduct">
              <IconButton>
                <FaRegHeart className="FaRegHeart" />
                <CartBadge
                  badgeContent={1}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>

              <span>Избранное</span>
            </div>

            <div className="cart">
              <IconButton>
                <FiShoppingCart className="FiShoppingCart" />
                <CartBadge
                  badgeContent={1}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>

              <span>Корзина</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Category menu --- */}
      <div className="nav3">
        <div className="container">
          <Box sx={{ "& button": { m: 1 } }}>
            <div
              onClick={() => {
                setModalCtgry(!modalCtgry);
              }}
            >
              <Button size="small">
                {" "}
                <TfiMenuAlt className="TfiMenuAlt " /> <span>Категории</span>
              </Button>
            </div>
          </Box>

          <ul className="categoryMenuLink">
            <li>
              <a href="#">Наши магазины</a>
            </li>
            <li>
              <a href="#">Моноблоки</a>
            </li>
            <li>
              <a href="#">Телефоны, планшеты</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Комплектующие</a>
            </li>
            <li>
              <a href="#">Сетевое оборудование</a>
            </li>
            <li>
              <a href="#">Оргтехника</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
