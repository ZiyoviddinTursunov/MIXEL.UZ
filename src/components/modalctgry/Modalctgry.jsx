import React from "react";
import "./Modal.css";
import { FaAngleRight } from "react-icons/fa";

function Modalctgry() {
  return (
    <div className="modal_ctgry">
      <div className="modal_ctgry_info">
        <div className="container">
          <ul className="ctgry_name">
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Периферийные устройства
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
            <li>
              <img src="/public/imgs/ctgry1.svg" alt="" />
              Телефоны, планшеты
              <FaAngleRight />
            </li>
          </ul>

          <ul className="ctgry_items">
            <h1>Сетевое оборудование</h1>
            <li>Коммутаторы</li>
            <li>Точки доступа Wi-Fi</li>
            <li>Медиаконверторы</li>
            <li>Сетевые адаптеры</li>
            <li>Сетевые адаптеры</li>
            <li>Сетевые адаптеры</li>
            <li>Сетевые адаптеры</li>
            <li>Сетевые адаптеры</li>
          </ul>

          <img className="ctgry_img" src="/public/imgs/modalctgry.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modalctgry;
