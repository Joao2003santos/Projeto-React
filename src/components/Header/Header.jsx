import React from 'react'
import CssHeader from '../Header/Header.module.css'
import Logo from './Logo'

function Header() {
  return (
    <div className={CssHeader.container}>
        <Logo/>
     </div>
  )
}

export default Header