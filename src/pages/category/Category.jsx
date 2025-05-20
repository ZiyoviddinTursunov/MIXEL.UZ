import React from "react";
import "./Category.css";
import { LuChevronRight } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

function Category() {
  return (
    <div className="categories">
      <div className="container">
        <div className="extra_info">
          <p>
            <span>
              Главная <LuChevronRight />
            </span>
            <span>
              Телефоны, планшеты <LuChevronRight />
            </span>
            <span>
              Телефоны и гаджеты <LuChevronRight />
            </span>
          </p>
          <p>Товаров 24 / 249</p>
        </div>

        <div className="ctgry_main_info">
          <h2>Смартфоны в Ташкенте</h2>
          <div className="ctgry_ordering">
            <p>
              <span>
                <TbCoins className="coin" />
                По цене
              </span>
              <span>
                <RiBarChartHorizontalLine className="coin" />
                По популярности
              </span>
            </p>
            <p>
              <span>
                <CiGrid41 className="coin" />
              </span>
              <span>
                <CiGrid2H className="coin" />
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className="features">
            <div className="features_info">
              <div>
                <h5 className="feature_title">Цена (cум)</h5>
                <div className="price_div">
                  <span>от 300 000</span>
                  <span>до 103 300 000</span>
                </div>
                <input type="range" name="" id="" />
              </div>

              <div>
                <h5 className="feature_title">Наличие</h5>
                <div className="nalichi">
                  <input type="checkbox" name="" id="" />
                  <p>Забрать сегодня</p>
                </div>
              </div>

              <div>
                <h5 className="feature_title">Бренд</h5>
                <ul>
                  <li>
                    <input type="checkbox" />  <label htmlFor="">LG (30)</label>
                  </li>
                  <li>
                    <input type="checkbox" />  <label htmlFor="">Samsung (30)</label>
                  </li>
                  <li>
                    <input type="checkbox" />  <label htmlFor="">Artel (7)</label>
                  </li>
                  <li>
                    <input type="checkbox" /> <label htmlFor="">Huawei (30)</label> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
