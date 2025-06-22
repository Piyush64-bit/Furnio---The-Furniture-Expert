import React from 'react'
import Location from './components/Location'
import Cart_products from './components/Cart_products'
import Quality_assurance from './components/Quality_assurance'

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