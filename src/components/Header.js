import React from 'react'
import logo from "../Assets/connectskillz 13.svg"
import Button from '../Resources/Buttons'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Header = () => {
  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.clear("userEmail")
    navigate("/Login")
  }
  return (
    <div className='Header'>
        <div className='images'>
            <img src={logo} alt ="logo"/>
        </div>

        <div className='Logout'>
            <Button name="Logout" ondisplay={logOut}/>
        </div>
    </div>
  )
}

export default Header