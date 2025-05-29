import React from "react";
import "./Cart.css";
import { LuChevronRight } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { getToken } from "../service/token";

function Cart() {
  const getCartData = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
    `Bearer ${getToken()}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/cart-items/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="item_carts">
      <div className="container">
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

        <div className="cart_product">
          <div className="cart_image">
            <input type="checkbox" />
            <label htmlFor="">LG (30)</label>
          </div>
          <h3>200 000</h3>
          <h3>1</h3>
          <h3>600 000</h3>
          <h3>
            <span>
              <MdDelete />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
