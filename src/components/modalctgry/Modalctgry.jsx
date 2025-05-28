import React, { useState } from "react";
import "./Modalctgry.css";
import { FaAngleRight } from "react-icons/fa";

function Modalctgry({categoryInfo, data}) {
  // console.log(categoryInfo);
  // console.log(data);
  const [dataCategory,setDataCategory]=useState(null)
  const dataCategoryFunk=(id)=>{
setDataCategory(data?.results?.filter((item)=>item?.category==id))
  }




  return (
    <div className="modal_ctgry">
      <div className="modal_ctgry_info">
        <div className="container">
          <ul className="ctgry_name">
            {
              categoryInfo?.results?.map((item,index)=>{
                return    <li key={index} onClick={()=>{
                  dataCategoryFunk(item?.id);
                  
                }}>
               <div className="icon-name">
               <img src={item?.icon} alt="" />
               {item?.name}
               </div>
               
                <FaAngleRight className="FaAngleRight"/>
              </li>
              })
            }
         
        
          </ul>

          <ul className="ctgry_items">
            <h1>{dataCategory !=null ?  dataCategory[0]?.category_name:""}</h1>
     <div className="categoryBoxs">
     {
              dataCategory?.map((item,index)=>{
                return <li key={index}>{item?.name}</li>
              })
            }
     </div>
  

          </ul>

          <img className="ctgry_img" src="/public/imgs/modalctgry.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modalctgry;
