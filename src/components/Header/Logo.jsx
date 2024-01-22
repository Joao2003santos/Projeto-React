import React from 'react'
import LogoImg from '../../assets/logo.png' 
import LogoCss from '../Header/Logo.module.css'

function Logo() {
  return (
    <div className={LogoCss.container}>
        <img className={LogoCss.logo} src={LogoImg} alt="" />

        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Sobre Nós</a>
            </li>
            <li>
                <a href="">Contato</a>
            </li>
        </ul>
    </div>
  )
}

export default Logo