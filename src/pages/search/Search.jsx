import React from 'react'
import "./Search.css"
import Card from '../../components/cards/Card'

function Search({data,srcData}) {
  console.log(srcData);
  
  
  
  return (
<div className="search">
<div className='container'>
{srcData && srcData.length > 0 ? (
  srcData.map((item) => (
    <Card key={item?.id} item={item} />
  ))
) : (
  data?.results?.map((item) => (
    <Card key={item?.id} item={item} />
  ))
)}

  
       
    </div>
</div>
  )
}

export default Search