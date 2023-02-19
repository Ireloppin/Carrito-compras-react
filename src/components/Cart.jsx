import React, {useId} from 'react'
import  {AddToCartIcon, RemoveFromCartIcon, ClearCartIcon, CartIcon} from './Icons'
import './Cart.css'
import { useCart } from './hooks/useCart'

const Cart = () => {
  const cartCheckedID = useId()
  const {cart, addToCart, removeFromCart, clearCart}= useCart()
  
  return (
    <>
    <label className='cart-button' htmlFor={cartCheckedID}>
      <CartIcon/>
    </label>
    <input id={cartCheckedID} type='checkbox' hidden/>

    <aside className='cart'>
        <ul>
        {cart.map(cartProduct =>
          <li key= {cartProduct.id}>
          <img src={cartProduct.thumbnail} alt={cartProduct.title} />

          <div>
            <strong>{cartProduct.title}</strong> - {cartProduct.price}€
          </div>

          <footer>
            <small>
              Qty:{cartProduct.quantity}
            </small>
            <button style={{color:'#fff'}}
              onClick={()=> addToCart(cartProduct)}
            >+</button>
            <button
              onClick={()=> removeFromCart(cartProduct)}
            >  <RemoveFromCartIcon/> </button>
          </footer>

        </li>
        )}
        
      </ul>
      <button
      onClick={()=> clearCart()}
      >
        <ClearCartIcon/>
      </button>
      <label className='cart-button' htmlFor={cartCheckedID}>
      <CartIcon/>
    </label>
    <input id={cartCheckedID} type='checkbox' hidden/>
    </aside>
    </>
  )
}

export default Cart