import React, { useState } from 'react'
import Inputs from '../Resources/Inputs'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import './Reg.css'
import Button from '../Resources/Buttons'
import logo from "../Assets/connectskillz 13.svg"



const Forgot = () => {
    const [showed, setShowed] = useState(false)
    const [updatePass, setUpdatepass] = useState({
        newPass:"",
        confirmPass:""
    })

    const handlePass = (e) =>{
        var  name = e.target.name 
        var value = e.target.value

        setUpdatepass({...updatePass, [name]: value})
        console.log(updatePass)
    }

    const handleShow = (e) =>{
        setShowed(!showed)
    }

    const handleSubmit = (e) =>{
        console.log('submitted')
    }
  return (
    <div className='fg-page'>
        <div className='cent'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='forgot-body'>
        
            <div className='fg-heading'>
                <h1>Reset your Password?</h1>
            </div>

            <form>
                    <Inputs 
                    classed="in-put"
                    type={showed ? "text" : "password"}
                    placeholder = "Enter New Password"
                    name = "newPass"
                    value = {updatePass['newPass']}
                    handlechange ={handlePass}
                    />        
                    
                    <Inputs 
                    classed="in-put"
                    type={showed ? "text" : "password"}
                    placeholder = "Confirm Password"
                    name = "confirmPass"
                    value = {updatePass['confirmPass']}
                    handlechange ={handlePass}
                    />     

                    <div onClick={handleShow} className='viewer'>
                        {showed ? 
                        <div className='disp-p'>
                            <GoEyeClosed /> 
                            <p>hide password</p>
                        </div>:
                        <div className='disp-p'>
                            <GoEye />
                            <p>show password</p>
                        </div>
                        }
                    </div>

                    <Button name = "Change Password" classed='btn-01'/>
            </form>
        </div>

    </div>
  )
}

export default Forgot