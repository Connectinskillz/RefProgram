import React, { useEffect, useRef, useState } from 'react'
import Inputs from '../Resources/Inputs'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import './Reg.css'
import { IconContext } from 'react-icons'
import logo from "../Assets/connectskillz 13.svg"
import Button from '../Resources/Buttons'
import {Link} from 'react-router-dom'

const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Login = () => {
  // useref to track to add focus to the email field
  const mailRef = useRef()
  const [validation, setvalidation] = useState(false)
  const [error, setError] = useState("")

  const [show, setShow ] =useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email:"",
    password:"",
  })
  const handleChange = (e) =>{
    var name = e.target.name
    var value = e.target.value

    setLoginInfo({...loginInfo, [name]:value})
  }
  
  const view = () =>{
    setShow(!show)
  }

  useEffect(() =>{
    mailRef.current.focus()
  }, [])

  useEffect(()=>{
  }, [loginInfo])


  const handleSubmit = (e) =>{
    console.log("hi")
  }


  return (
    <div className='Login'>
      <div className='cent'>
          <img src={logo} alt='logo'/>
      </div>
      <div className='Login-body'>

      <div className='Login-head'>
      <h1> Login to your Dashboard</h1>
      <p>welcome we've been expecting you</p>
     </div>

     <form onSubmit={handleSubmit}>
        <Inputs 
        classed="in-put"
        type="email"
        placeholder="Email Address"
        name = "email"
        inputvalue = {loginInfo['email']}
        handlechange ={handleChange}
        inputRef = {mailRef}
        />

        <div className='pass'>
          <Inputs 
          classed="in-put"
              type ={show ? "text": "password"}
              placeholder ="Enter Password"
              name = "Password"
              value = {loginInfo["Password"]}
              handlechange={handleChange}
          />
          
          <IconContext.Provider value ={{size:"20px", color:"#004aad"}}>
          <div onClick={view} className='viewer'>
              {show ? 
                  <GoEyeClosed /> :
                  <GoEye />
              }
          </div>
          </IconContext.Provider>
        </div>
        <div className='forg'> 
            <p className='forgot'><Link to='/Recovery'>Forgot your Password?</Link></p>
        </div>
        <Button name="Login"/>
    

     </form>
     <div className='registered'>
        <p>New here?</p>
          <Link to='/'>Register</Link>
      </div>
      </div>
     
    </div>
  )
}

export default Login