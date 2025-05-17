import React from "react";
import "./Navbar.css";
import { FiMapPin, FiShoppingCart, FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaBalanceScale, FaRegHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

function Navbar() {
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
            <li><a href="#">Наши магазины</a></li>
            <li><a href="#">B2B продажи</a></li>
            <li><a href="#">Покупка в рассрочку</a></li>
            <li><a href="#">Способы оплаты</a></li>
            <li><a href="#">Гарантия на товары</a></li>
          </ul>

          <div className="nav1_contact">
            <div className="phone">
              <BsTelephone />
              <span>+998 95 123 55 88</span>
            </div>
            <select className="lang-select">
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
          <div className="nav_logo">
            <img src="/imgs/Logo.svg" alt="Logo" />
          </div>

          <div className="NavSearch">
            <div className="category">
              <span> категории</span>
              <MdOutlineKeyboardArrowDown />
              <span className="divider">|</span>
            </div>

            <div className="searchInp">
              <input type="text" placeholder="Телефоны и бытовая техника" />
              <HiOutlineMicrophone className="HiOutlineMicrophone" />
            </div>

            <button className="srcBtn">
              <IoSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className="nav1_iconsMenu">
            <div className="nav-user">
              <FiUser />
              <span>Войти</span>
            </div>

            <div className="comparison">
            <FaBalanceScale/>
              <span>Сравнение</span>
            </div>

            <div className="likeProduct">
              <FaRegHeart />
              <span>Избранное</span>
            </div>

            <div className="cart">
              <FiShoppingCart />
              <span>Корзина</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Category menu --- */}
      <div className="nav3">
        <div className="container">
          <button className="category-button">
            <TfiMenuAlt className="TfiMenuAlt" />
            <span>Категории</span>
          </button>

          <ul className="categoryMenuLink">
            <li><a href="#">Наши магазины</a></li>
            <li><a href="#">Моноблоки</a></li>
            <li><a href="#">Телефоны, планшеты</a></li>
            <li><a href="#">Ноутбуки</a></li>
            <li><a href="#">Комплектующие</a></li>
            <li><a href="#">Сетевое оборудование</a></li>
            <li><a href="#">Оргтехника</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
