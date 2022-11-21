import React from 'react'
import './components_style/Header_style.css'

function Header() {
  return (
    <div className='Header_parent'>
        <img className='Header_icon' src="icons/Menu.png" />
        <p className='Header_logo' >Zintlr News</p>
        <img className='Header_icon' src="icons/Search.png" />
    </div>
  )
}

export default Header