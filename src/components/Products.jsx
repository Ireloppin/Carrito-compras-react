import React from 'react'
import {AddToCartIcon} from './Icons'
import './Products.css'
import { useCart } from './hooks/useCart'

const Products = ({products}) => {
  const {addToCart, cart, removeFromCart}= useCart()
  return (
    <main className='products'>
    <ul>
      {products.length <=0 ? 'No hay resultados para esta búsqueda':
      products.slice(0, 10).map(product =>(
        <li key= {product.id}> 
            <img src={product.thumbnail} alt={product.title}></img>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: <span>{product.price}</span>€</p>
            <button onClick={()=> addToCart(product)}>
                <AddToCartIcon />
            </button>
        </li>
    )
        ) }
       
    </ul>
    </main>
  )
}

export default Products