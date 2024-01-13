import React, {useEffect, useState} from 'react'
import { FaCopy, FaCheck } from "react-icons/fa"; 
import { IconContext } from 'react-icons';

const InputRef = ({refcode}) => {
    const [RefCode, setRefCode] = useState(refcode)
    const [copy, setCopy] = useState(false)
 
    // function to copy the text
    const copyReferral = (e) =>{
        navigator.clipboard.writeText(RefCode)
        setCopy(true)
    }

    const handleChange = (e) =>{
        setRefCode(refcode)
     }

    useEffect(() =>{
     handleChange()
    })
// useEfect hook and the useTimeout to change the displaid data once the timer is out. they both take dependencies
    useEffect(() => {
        setTimeout(() =>{
            setCopy(false)
        }, [3000])
    })
  return (
    <div className='ref-field'>
    <input type='text' name ="refCode" value={RefCode}  onChange={handleChange} readOnly/>

    <IconContext.Provider value={{color:"white", size:"10px"}}>
    <button className='copied' onClick={copyReferral}>
    {copy ? 
        <FaCheck />:
        <FaCopy />
    }
</button>
    </IconContext.Provider>
  
</div>
  )
}

export default InputRef