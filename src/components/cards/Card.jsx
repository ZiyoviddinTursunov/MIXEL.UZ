import React from "react";
import "./Card.css";
import Checkbox from "@mui/material/Checkbox";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getToken } from "../../pages/service/token";

function Card({ item, getData, likedData, setCardModal }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const liked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({ product: id });

    fetch("https://abzzvx.pythonanywhere.com/liked-items/add/", {
      method: "POST",
      headers: myHeaders,
      body: raw,
    })
      .then((res) => res.text())
      .then(() => {
        getData?.();
        likedData?.();
      })
      .catch((err) => console.error(err));
  };

  const deletLiked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    fetch(`https://abzzvx.pythonanywhere.com/liked-items/${id}/`, {
      method: "DELETE",
      headers: myHeaders,
    })
      .then((res) => res.text())
      .then(() => {
        getData?.();
        likedData?.();
      })
      .catch((err) => console.error(err));
  };

  const comparisonAdd = (id) => {
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

    fetch("https://abzzvx.pythonanywhere.com/versus-items/add/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <Link to={`/product/${item?.id}`} className="card">
      <div className="cart_main_info">
        <div className="card-image">
          <img src={item?.main_image} alt={item?.name} />
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
        <button
          onClick={(e) => {
            e.stopPropagation();
          
          }}
        >
          <Checkbox
            {...label}
            icon={<FaCartShopping />}
            checkedIcon={<FaCartShopping color="var(--red)" />}
          />
        </button>
        <span className="borderLeft">|</span>
        <button onClick={(e) => e.stopPropagation()}>
          <Checkbox
            onChange={(e) => {
              e.stopPropagation();
              if (e.target.checked) {
                liked(item?.id);
              } else {
                deletLiked(item?.like_id);
              }
            }}
            checked={item?.like}
            {...label}
            icon={<FaHeart />}
            checkedIcon={<FaHeart color="var(--red)" />}
          />
        </button>
        <span className="borderLeft">|</span>
        <button onClick={(e) => e.stopPropagation()}>
          <Checkbox
            onChange={(e) => {
              e.stopPropagation();
              if (e.target.checked) {
                comparisonAdd(item?.id);
              } else {
              }
            }}
            checked={item?.versus}
            {...label}
            icon={<FaBalanceScale />}
            checkedIcon={<FaBalanceScale color="var(--red)" />}
          />
        </button>
      </div>
    </Link>
  );
}

export default Card;
