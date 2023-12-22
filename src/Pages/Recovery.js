import React, { useEffect, useRef, useState } from 'react'
import logo from "../Assets/connectskillz 13.svg"
import Inputs from '../Resources/Inputs'
import Button from '../Resources/Buttons'
import { IoIosMailUnread } from "react-icons/io";
import { IconContext } from 'react-icons';

const Recovery = () => {
    const recoveryRef = useRef()
    const [recEmail, setRecEmail] = useState("")
    const [prompt, setPrompt] = useState(false)

    const handleEntry = (e) =>{
        setRecEmail(e.target.value)
        console.log(recEmail)
    }

    const handleEmail = (e) =>{
        e.preventDefault()
        console.log(recEmail)
        setPrompt(true)
    }

    useEffect(() =>{
        setTimeout(() => {
            setPrompt(false)
        }, 4000);
    })

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
                inputref ={recoveryRef}
                
                />
                <div className='ct-btn'>
                    <Button name = "submit" />
                </div>

            </form>
        </div>
        { prompt ?
            <div className='prompt'>
                <div className='ptp-body'>
                <IconContext.Provider value={{size:"30px", color:"#004aad"}}> 
                    <IoIosMailUnread />
                </IconContext.Provider>
                    <h4>Email Sent</h4>
                    <p>Email to reset your password has been sent to your email.</p>
                </div>
            </div>
            :
            null
        }
        
    </div>
  )
}

export default Recovery