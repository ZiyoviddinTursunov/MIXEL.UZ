import React from 'react'
import "./Search.css"
import Card from '../../components/cards/Card'

function Search({data}) {
  return (
<div className="search">
<div className='container'>
    {data?.results?.map((item) => (
    <Card key={item.id} item={item} />
  ))}
       
    </div>
</div>
  )
}

export default Search