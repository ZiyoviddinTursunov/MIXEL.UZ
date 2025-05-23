import React from 'react'
import "./Liked.css"
import { FaHeart } from 'react-icons/fa'
import Card from '../../components/cards/Card';

function Liked({dataLike}) {

  return (
    <div className='Liked'>
       <div className="container">
       {
  dataLike?.results?.map((item) => {
    return <Card key={item.id} item={item.product} />
  })
}

       <div className="loader-wishlist">
      <img src="/public/imgs/wishlist.png" alt="wishlist" />
      <h3>Sevimli mahsulotlar yo'q</h3>
      <p>Mahsulotdagi <FaHeart className='FaHeart'/> belgisi bilan qo'shing️</p>
    </div>
       </div>
    </div>
  )
}
export default Liked;