import React from 'react'
import Location from './components/Location'
import Product from './components/Product'
import Description from './components/Description'
import Otherprods from './components/Otherprods'

const Single_Product = () => {
  return (
    <div>
      <Location/>
      <Product/>
      <Description/>
      <Otherprods/>
    </div>
  )
}

export default Single_Product