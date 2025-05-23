import React from 'react'
import "./Liked.css"
import { FaHeart } from 'react-icons/fa'
function Liked() {
  return (
    <div className='Liked'>
       <div className="container">
       <div className="loader-wishlist">
      <img src="/public/imgs/wishlist.png" alt="wishlist" />
      <h3>Sevimli mahsulotlar yo'q</h3>
      <p>Mahsulotdagi <FaHeart className='FaHeart'/> belgisi bilan qo'shing️</p>
    </div>
       </div>
    </div>
  )
}
export default Liked