import React, { useEffect, useState } from "react";
import "./Cart.css";
import { LuChevronRight } from "react-icons/lu";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { getToken } from "../service/token";
import { baseURL } from "../../config";
import { useNavigate } from "react-router-dom";

function Cart({ cartData, getCartData }) {
  const navigate = useNavigate();

  const deleteCart = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${baseURL}/cart-items/${id}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getCartData();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="item_carts">
      <div className="container">
        {cartData.count != 0 ? (
          <>
            <div className="extra_info">
              <p>
                <span>
                  Home <LuChevronRight />
                </span>
                <span>
                  Cart
                  <LuChevronRight />
                </span>
              </p>
            </div>

            <h1>Cart</h1>

            <div className="cart_title">
              <h3 className="cart_image">Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
              <h3>Action</h3>
            </div>

            {cartData?.results.map((item, index) => {
              return (
                <div key={index} className="cart_product">
                  <div className="cart_image">
                    <input type="checkbox" />
                    <img src={item.main_image} alt="" />
                    <label
                      onClick={() => {
                        navigate(`/product/${item.product}`);
                      }}
                      htmlFor=""
                    >
                      {item.product_name}
                    </label>
                  </div>
                  <h3>{item.product_price}</h3>
                  <h3>{item.amount}</h3>
                  <h3>{item.total_price}</h3>
                  <h3
                    onClick={() => {
                      deleteCart(item.id);
                    }}
                  >
                    <span className="deleteCart">
                      <MdDeleteForever />
                    </span>
                  </h3>
                </div>
              );
            })}
          </>
        ) : (
          <div className="loader-wishlist">
            <img className="no_img" src="/public/imgs/shoppingcart.jpg" />
            <h3>No items found. Browse products and add to cart!</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
