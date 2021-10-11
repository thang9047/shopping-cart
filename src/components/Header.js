import React from 'react'
import Menu from './svg/menu.svg'
import Close from './svg/close.svg'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="logo">
          <h1><Link to="/products">Thang_Choi_Do</Link></h1>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login / Register</Link></li>
          <li>
            <img src={Close} alt="" width="30" className="menu" />
          </li>
        </ul>
        <div className="menu">
          <img src={Menu} alt="" width="30" />
        </div>
      </header>
  )
}

export default Header
