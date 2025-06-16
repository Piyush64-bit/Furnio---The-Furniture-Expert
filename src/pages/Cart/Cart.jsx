import React from 'react'
import Location from './components/location'
import Cart_products from './components/cart_products'
import Quality_assurance from './components/quality_assurance'

const Cart = () => {
  return (
    <div>
      <Location />
      <Cart_products/>
      <Quality_assurance/>
    </div>
  )
}

export default Cart