import React from "react";
import "./Card.css";
import Checkbox from "@mui/material/Checkbox";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Card() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src="/imgs/cardImg.png" alt="" />
        </div>
        <div className="product-price">
          <span>458 000 сум/мес</span> 
          <del>529 000 сум</del>
        </div>
        <div className="product-title">
          <h5>Умные часы Haylou RT-LS05S</h5>
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
            <Checkbox {...label} icon={<FaHeart />} checkedIcon={<FaHeart color="var(--red)"/>} />
          </button>
          <button>
          <span className="borderLeft"  >|</span>
            {" "}
            <Checkbox
              {...label}
              icon={<FaBalanceScale />}
              checkedIcon={<FaBalanceScale  color="var(--red)"/>}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
