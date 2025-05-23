import React from 'react'
import "./Liked.css"
import { FaHeart } from 'react-icons/fa'
import Card from '../../components/cards/Card';

function Liked({dataLike,getData,likedData}) {

  return (
    <div className='Liked'>
       <div className="container">
       {
  dataLike?.results?.length > 0 ? (
    dataLike.results.map((item) => (
      <Card
        likedData={likedData}
        getData={getData}
        key={item.id}
        item={item.product}
      />
    ))
  ) : (
    <div className="loader-wishlist">
      <img src="/public/imgs/wishlist.png" alt="wishlist" />
      <h3>Sevimli mahsulotlar yo'q</h3>
      <p>Mahsulotdagi <FaHeart className="FaHeart" /> belgisi bilan qo'shing️</p>
    </div>
  )
}






       </div>
    </div>
  )
}
export default Liked;