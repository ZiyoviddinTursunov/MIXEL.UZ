import React, { useState } from "react";
import "./Card.css";
import Checkbox from "@mui/material/Checkbox";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { getToken } from "../../pages/service/token";

function Card({ item, getData, likedData }) {



  const liked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      product: id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/liked-items/add/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getData();
        likedData();
      })
      .catch((error) => console.error(error));
  };

const deletLiked=(id)=>{

  
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${getToken()}`);

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://abzzvx.pythonanywhere.com/liked-items/${id}/`, requestOptions)
  .then((response) => response.text())
  .then((result) =>{

    
    getData();
    likedData();
  })
  .catch((error) => console.error(error));
}

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
              onChange={(e) => {
                if (e.target.checked) {

                  liked(item?.id);
                } else {
      
                  deletLiked(item.like_id)
                }
              }}
              {...label}
              checked={item?.like}
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
