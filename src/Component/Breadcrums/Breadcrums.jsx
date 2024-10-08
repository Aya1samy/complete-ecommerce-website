import React from 'react'
import arrow_icon from '../Asserts/breadcrum_arrow.png'
import './Breadcrum.css'

const Breadcrums = (props) => {
  const {product} = props;
    
  return (
    
    <div className='Breadcrums'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums