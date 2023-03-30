import React from 'react'

import "./nav.css"

export const Nav = () => {
  return (
    <div>
    <div className='nav-container'>
      <img className='logo' src='https://seeklogo.com/images/M/meesho-logo-2E20AB77E8-seeklogo.com.png'/>
      <div className='search-container'>
        <input type="text" id='nav-search' placeholder='Try Saree, Kurta or Search by Prodect Code ' />
      </div>
      <div className='download border-right'>
        <p>Download App</p>
      </div>
      <div className='border-right suplier'>
        <p>Become a Supplier</p>
      </div>
      <div className='profile'>
        
        <p>
          Profile
        </p>
      </div>
      <div className='cart'>

        <p>Cart</p>
      </div>
    </div>
    <div className='lower-nav'>
      <ul>
        <li>Women Ethnic</li>
        <li>Women Western</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Home & Kitchen</li>
        <li>Beauty & Health</li>
        <li>Jewellery & Accessories</li>
        <li>Bag & Footwear</li>
        <li>Electronics</li>
      </ul>
    </div>
    </div>
  )
}
