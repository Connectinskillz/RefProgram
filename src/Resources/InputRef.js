import React, {useEffect, useState} from 'react'
import { FaCopy, FaCheck } from "react-icons/fa"; 
import { IconContext } from 'react-icons';

const InputRef = () => {
    const [RefCode, setRefCode] = useState("QWPsfw4y6iwOSjpus")
    const [copy, setCopy] = useState(false)
 
    // function to copy the text
    const copyReferral = (e) =>{
        navigator.clipboard.writeText(RefCode)
        setCopy(true)
    }
// useEfect hook and the useTimeout to change the displaid data once the timer is out. they both take dependencies
    useEffect(() => {
        setTimeout(() =>{
            setCopy(false)
        }, [3000])
    })
  return (
    <div className='ref-field'>
    <input type='text' value={RefCode} readOnly/>

    <IconContext.Provider value={{color:"white", size:"15px"}}>
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