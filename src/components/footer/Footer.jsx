import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
function Footer() {
  return (
  <footer>
    <div className="container">
        <div className="footer-header">
            <img src="/imgs/footerLogo.svg" alt="" />
            <p>График работы колл-центра
            Понедельник - Суббота: 9:00–18:00</p>
            <span>Колл-центр: <br />
            + 998 (71) 205-93-93    </span>
<div className="footer-social">
    <div className="socialBox"><FaTelegramPlane/></div>
    <div className="socialBox"> <FaInstagram/></div>
    <div className="socialBox"><FaFacebookF/></div>
    <div className="socialBox"><FaYoutube/></div>
</div>

        </div>
        <div className="footer-link">
            <ul className="footer_ul">
                <h5>Категории   </h5>
                <li><a href="">Ноутбуки</a></li>
                <li><a href="">Игровые кресла</a></li>
                <li><a href="">Телефоны</a></li>
                <li><a href="">Моноблоки</a></li>
                <li><a href="">Модули памяти</a></li>
            </ul>
            <ul className="footer_ul">
                <h5>Общее   </h5>
                <li><a href="">Новости</a></li>
                <li><a href="">О нас</a></li>
                <li><a href="">Наши магазины</a></li>
                <li><a href="">Политика конфиденциальности</a></li>
                <li><a href="">Правила программы лояльности</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
            <ul className="footer_ul">
                <h5>Покупателям   </h5>
                <li><a href="">Покупка в рассрочку</a></li>
                <li><a href="">Доставка и оплата</a></li>
                <li><a href="">Правила покупок с cashback</a></li>
                <li><a href="">Возврат / Обмен</a></li>
                <li><a href="">Правила пользования купонами</a></li>
            </ul>
        </div>
    </div>
  </footer>
  )
}

export default Footer