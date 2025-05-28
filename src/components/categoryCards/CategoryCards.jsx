import React from 'react'
import "./CategoryCards.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoCartOutline } from 'react-icons/io5';
import Checkbox from "@mui/material/Checkbox";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { getToken } from '../../pages/service/token';
function CategoryCards({item,getData,likedData}) {

    
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
        getData();
        likedData();
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
    <div className='CategoryCards'>
<div className='mainDiv'>
    
<div className="main-imge">
        <img src={item?.main_image} alt="" />
    </div>
    <div className="card-title">
        <h4>{item?.name}</h4>
        <p>Brend: <span>Apple</span></p>
        <p>Ishlab chiqaruvchi davlat:<span> {item?.country} </span></p>
        <p>Turi: <span>An‘anaviy</span></p>
    
    </div>
</div>
    <div className="cardBox">
        <span>{item?.monthly_price} сум/мес</span>
        <p>{item?.price} сум</p>
        <Stack spacing={2} direction="row">
<Button className='btn' variant="contained"><IoCartOutline/> Add to cart</Button>
</Stack>
<div className='cardBtn'>
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
              checkedIcon={<FaHeart color="var(--red)"/>}
          />
        </button>
        <span className="borderLeft">|</span>
        <button onClick={(e) => e.stopPropagation()}>
          <Checkbox
            {...label}
            icon={<FaBalanceScale />}
            checkedIcon={<FaBalanceScale color="var(--red)" />}
          />
        </button>
</div>
    </div>
    </div>
  )
}

export default CategoryCards