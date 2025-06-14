import React, { useEffect, useState } from "react";
import "./Oneproduct.css";
import { LuChevronRight } from "react-icons/lu";
import { TfiInfoAlt } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";
import { FaBalanceScale, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import { baseURL } from "../../config";
import { getToken } from "../service/token";
import { useNavigate, useParams } from "react-router-dom";

function Oneproduct({ addCart, likedData }) {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState(null);
  const [mainimage, setMainImage] = useState(null);
  const navigate = useNavigate();
  const [count, setcount] = useState(1);
  // console.log(oneProduct);

  const getProduct = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${baseURL}/products/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOneProduct(result);
        setMainImage(result.main_image);
      })
      .catch((error) => console.error(error));
  };

  const addLike = (id) => {
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

    fetch(`${baseURL}/liked-items/add/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getProduct();
        likedData();
      })
      .catch((error) => console.error(error));
  };

  const deleteLike = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${baseURL}/liked-items/${id}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getProduct();
        likedData();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="one_product">
      <div className="container">
        <div className="extra_info">
          <p>
            <span onClick={()=>{
              navigate("/")
            }}>
              Главная <LuChevronRight />
            </span>
            <span onClick={()=>{
              navigate(`/category/${oneProduct?.category}`)
            }}>
              {oneProduct?.category_name}
              <LuChevronRight />
            </span>
            <span>
              Apple <LuChevronRight />
            </span>
          </p>
        </div>
        <div className="product_about">
          <div className="product_image">
            <img className="main_image" src={mainimage} alt="" />
            <div className="all_imgs">
              {oneProduct?.images?.map((item, index) => {
                return (
                  <img
                    key={index}
                    onClick={() => {
                      setMainImage(item?.image);
                    }}
                    src={item?.image}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className="product_main_info">
            <h1>{oneProduct?.name}</h1>

            <div className="oneProduct_counter">
              <span
                onClick={() => {
                  count == 1 ? setcount(1) : setcount(count - 1);
                }}
                className="cart_click"
              >
                <FaMinus />
              </span>
              <span>{count}</span>
              <span
                onClick={() => {
                  setcount(count + 1);
                }}
                className="cart_click"
              >
                <FaPlus />
              </span>
            </div>

            <div className="product_btns">
              <h3>
                {oneProduct?.price}
                <span>
                  <TfiInfoAlt />
                </span>
              </h3>

              <div>
                <span
                  onClick={() => {
                    addCart(id, count);
                  }}
                >
                  <FaCartShopping />
                </span>

                <span className="line">|</span>
                {oneProduct?.like ? (
                  <span
                    onClick={() => {
                      deleteLike(oneProduct?.like_id);
                    }}
                    className="added"
                  >
                    <FaHeart />
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      addLike(oneProduct?.id);
                    }}
                  >
                    <FaHeart />
                  </span>
                )}

                <span className="line">|</span>

                <span>
                  <FaBalanceScale />
                </span>
              </div>
            </div>

            <div className="product_buying">
              <button className="buying1">
                Купить <br /> сейчас{" "}
              </button>
              <button className="buying2">
                {" "}
                Купить в рассрочку <br /> сейчас
              </button>
            </div>

            <p>{oneProduct?.details}</p>
          </div>
          <div className="product_delivery">
            <div className="day30">
              <span>
                <MdRestartAlt />
              </span>
              <div className="day30_info">
                <h4>30 дней на обмен и возврат.</h4>
                <p>
                  Если купите товар сегодня, до 06 мая можете вернуть или
                  обменять.
                </p>
                <a href="">Подробнее о программе.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oneproduct;
