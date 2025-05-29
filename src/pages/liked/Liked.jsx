import React from "react";
import "./Liked.css";
import { FaHeart } from "react-icons/fa";
import Card from "../../components/cards/Card";

function Liked({ dataLike, getData, likedData, setCardModal }) {
  return (
    <div className="Liked">
      <div className="container">
        {dataLike?.results?.length > 0 ? (
          dataLike.results.map((item) => (
            <Card
              setCardModal={setCardModal}
              likedData={likedData}
              getData={getData}
              key={item.id}
              item={item.product}
            />
          ))
        ) : (
          <div className="loader-wishlist">
            <img src="/public/imgs/wishlist.png" alt="wishlist" />
            <h3>Your favorites list is empty.</h3>
            <p>
              Explore our products and tap
              <FaHeart className="FaHeart" /> to save them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Liked;
