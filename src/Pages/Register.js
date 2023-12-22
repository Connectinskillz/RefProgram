import React, { useState } from 'react'
import Inputs from '../Resources/Inputs'
import Button from '../Resources/Buttons'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import './Reg.css'
import { IconContext } from 'react-icons'
import logo from "../Assets/connectskillz 13.svg"
import { Link } from 'react-router-dom'


const Register = () => {
    // to view password
    const [check, setCheck] = useState(false)
    // state management for input fields
    const [readInput, setReadInput] = useState({
        fullname: "",
        PhoneNumber: "", 
        email:"",
        Password:""
    })

    const viewer = (e) =>{
        setCheck(!check)
    }


    const handleChange = (e) =>{
        var name = e.target.name
        var value = e.target.value

        setReadInput({...readInput, [name]:value})
        console.log(readInput)
    }
// submit the form
    const handleSubmit = (e) =>{

    }

    
   return (
    <div className='register'>
        <div className='cent'>
         <img src={logo} alt='logo'/>
        </div>

        <div className='Reg-body'>
      
            <div className='Reg-head'>
                <h1>Register for our Referral Program</h1>
                <p>Register to be part of the referral program.</p>
            </div>

            <form onSubmit={handleSubmit}>


               <Inputs 
               classed="in-put"
               type="text"
               placeholder="Full Name "
               name = "fullname"
               inputvalue = {readInput['fullname']}
               handlechange ={handleChange}
               />

               <Inputs 
               classed="in-put"
               type="email"
               placeholder="Email Address"
               name = "email"
               inputvalue = {readInput['email']}
               handlechange ={handleChange}
               />

               <Inputs
               classed="in-put"
               type ="text"
               placeholder ="Phone Number"
               name ="PhoneNumber"
               inputvalue = {readInput['PhoneNumber']}
               handlechange= {handleChange}
               
               />

               <div className='pass'>
                    <Inputs 
                    classed="in-put"
                        type ={check ? "text": "password"}
                        placeholder ="Enter Password"
                        name = "Password"
                        value = {readInput["Password"]}
                        handlechange={handleChange}

                    />
                    <IconContext.Provider value ={{size:"20px", color:"#004aad"}}>
                    <div onClick={viewer} className='viewer'>
                        {check ? 
                            <GoEyeClosed /> :
                            <GoEye />
                        }
                    </div>
                    </IconContext.Provider>
               </div>
              <Button name = "Register" />
            </form>

            <div className='registered'>
                <p>Already Registered?</p>
                 <Link to='./Login'>signin</Link>
            </div>
        </div>
    </div>
  )
}

export default Register