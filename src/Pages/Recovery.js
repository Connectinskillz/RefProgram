import React, { useRef, useState } from 'react'
import logo from "../Assets/connectskillz 13.svg"
import Inputs from '../Resources/Inputs'
import Button from '../Resources/Buttons'

const Recovery = () => {
    const recoveryRef = useRef()
    const [recEmail, setRecEmail] = useState("")

    const handleEntry = (e) =>{
        setRecEmail(e.target.value)
        console.log(recEmail)
    }

    const handleEmail = (e) =>{
        e.preventDefault()
        console.log(recEmail)
    }
  return (
    <div className='Recovery'>
        <div className='cent'>
            <img src={logo} alt='logo'/>
        </div>

        <div className='rec-body'>
            <div className='rec-head'>
                <h1>Forgot your Password?</h1>
                <p>Don't worry you can reset your Password. Enter your email</p>
            </div>

            <form onSubmit={handleEmail}>
                <Inputs 
                classed="in-put"
                type = "email"
                placeholder= "Email Address"
                name ="recEmail"
                inputvalue = {recEmail}
                handlechange ={handleEntry}
                
                />
                <div className='ct-btn'>
                    <Button name = "submit" />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Recovery