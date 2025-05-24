import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-header">
          <img src="/imgs/footerLogo.svg" alt="" />
          <p>
            Call center working hours <br /> Monday - Saturday: 9:00–18:00
          </p>
          <span>
            Call center: <br />+ 998 (71) 205-93-93{" "}
          </span>
          <div className="footer-social">
            <div className="socialBox">
              <FaTelegramPlane />
            </div>
            <div className="socialBox">
              {" "}
              <FaInstagram />
            </div>
            <div className="socialBox">
              <FaFacebookF />
            </div>
            <div className="socialBox">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="footer-link">
          <ul className="footer_ul">
            <h5>Categories </h5>
            <li>
              <a href="">Laptops</a>
            </li>
            <li>
              <a href="">Gaming chairs</a>
            </li>
            <li>
              <a href="">Telephones</a>
            </li>
            <li>
              <a href="">Dress</a>
            </li>
          </ul>

          <ul className="footer_ul">
            <h5>General </h5>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Our shop</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <ul className="footer_ul">
            <h5>For customers </h5>
            <li>
              <a href="">Purchase in installments</a>
            </li>
            <li>
              <a href="">Доставка и оплата</a>
            </li>
            <li>
              <a href="">Rules for purchases with cashback</a>
            </li>
            <li>
              <a href="">Return / Exchange</a>
            </li>
            <li>
              <a href="">Rules for using coupons</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
