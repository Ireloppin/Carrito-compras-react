import React from 'react'
import Filters from './Filters'

const Header = ({ products}) => {
  return (
    <div>
       <h1>Ecommerce 🛒</h1>
        <Filters  products={products}/> 
    </div>
  )
}

export default Header