import React from 'react'
import logo from "../Assets/connectskillz 13.svg"
import Button from '../Resources/Buttons'
import './style.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='image'>
            <img src={logo} alt ="logo"/>
        </div>

        <div className='Logout'>
            <Button name="Logout" />
        </div>
    </div>
  )
}

export default Header