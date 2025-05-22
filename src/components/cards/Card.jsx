import React from "react";
import "./Card.css";
import Checkbox from "@mui/material/Checkbox";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Card({ item }) {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="card">
        <div className="cart_main_info">
          <div className="card-image">
          <img src={item?.main_image} alt="" />
        </div>
        <div className="product-price">
          <span>{item?.monthly_price} сум/мес</span>
          <h5>{item?.price} сум</h5>
        </div>
        <div className="product-title">
          <h5>{item?.name}</h5>
        </div>
        </div>
        <div className="product-menu">
          <button>
            {" "}
            <Checkbox
              {...label}
              icon={<FaCartShopping />}
              checkedIcon={<FaCartShopping color="var(--red)" />}
            />
          </button>
          <span className="borderLeft">|</span>
          <button>
            {" "}
            <Checkbox
              {...label}
              icon={<FaHeart />}
              checkedIcon={<FaHeart color="var(--red)" />}
            />
          </button>
          <button>
            <span className="borderLeft">|</span>{" "}
            <Checkbox
              {...label}
              icon={<FaBalanceScale />}
              checkedIcon={<FaBalanceScale color="var(--red)" />}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
