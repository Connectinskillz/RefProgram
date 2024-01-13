import React, { useState } from 'react'
import Inputs from '../Resources/Inputs'
import Button from '../Resources/Buttons'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import './Reg.css'
import { IconContext } from 'react-icons'
import logo from "../Assets/connectskillz 13.svg"
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const base_URL = 'https://backend.connectinskillz.com/api/referral_pg_reg'


const Register = () => {

    const Navigate = useNavigate()
    // to view password
    const [check, setCheck] = useState(false)
    // state management for input fields
    const [readInput, setReadInput] = useState({
        name: "",
        phone_number: "", 
        email:"",
        password:"",
        confirmpassword:""
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
    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await axios.post(base_URL, readInput)
            console.log(response)
            if (response.status === 200) {
                Navigate('/Dashboard')
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    
   return (
    <div className='register'>
        <div className='cent'>
         <img src={logo} alt='logo'/>
        </div>

        <div className='Reg-body'>
      
            <div className='Reg-head'>
                <h1>Registeration</h1>
                <p>Register to be part of the referral program.</p>
            </div>

            <form onSubmit={handleSubmit}>


               <Inputs 
               classed="in-put"
               type="text"
               placeholder="Full Name "
               name = "name"
               inputvalue = {readInput['name']}
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
               name ="phone_number"
               inputvalue = {readInput['phone_number']}
               handlechange= {handleChange}
               
               />

                    <Inputs 
                    classed="in-put"
                        type ={check ? "text": "password"}
                        placeholder ="Enter Password"
                        name = "password"
                        value = {readInput["password"]}
                        handlechange={handleChange}

                    />

                    <Inputs 
                    classed="in-put"
                        type ={check ? "text": "password"}
                        placeholder ="Confirm Password"
                        name = "confirmpassword"
                        value = {readInput["confirmpassword"]}
                        handlechange={handleChange}

                    />

                    <IconContext.Provider value ={{size:"15px", color:"#004aad"}}>
                    <div onClick={viewer} className='viewer'>
                        {check ? 
                            <div className='show'>
                                <GoEyeClosed />
                                <p>Hide Password</p>
                            </div> :
                            <div className='show'>
                                <GoEye /> 
                                <p>Show Password</p>
                            </div>
                        }
                    </div>
                    </IconContext.Provider>
               
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