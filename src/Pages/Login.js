import React, { useState } from 'react'
import Inputs from '../Resources/Inputs'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import './Reg.css'
import { IconContext } from 'react-icons'
import logo from "../Assets/connectskillz 13.svg"
import Button from '../Resources/Buttons'


const Login = () => {
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
  const handleSubmit = (e) =>{
    console.log("hi")
  }
  return (
    <div className='Login'>
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
        <Button name="Login"/>

     </form>
      
      </div>
     
    </div>
  )
}

export default Login