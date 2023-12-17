import React, { useEffect, useState } from 'react'
import BG from '../Assets/BG 13.svg'
import { FaCopy, FaCheck } from "react-icons/fa"; 
import { IconContext } from 'react-icons';

const RefCode = () => {
    const [RefCode, setRefCode] = useState("QWPsfw4y6iwOSjpus")
    const [copy, setCopy] = useState(false)
 
    // function to copy the text
    const copyRef = (e) =>{
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
    <div className='RefCode'>
        <div className='BgImg'>
            <img src={BG} />
        </div>

        <div className='ref'>
            <div className='ref-ct'>
                <h2>Share your code to get rewarded</h2>
                <p>Get your referral code and share with others:</p>
            </div>

            <div className='ref-field'>
                <input type='text' value={RefCode} readOnly/>

                <IconContext.Provider value={{color:"white", size:"15px"}}>
                <button className='copied' onClick={copyRef}>
                {copy ? 
                    <FaCheck />:
                    <FaCopy />
                }
            </button>
                </IconContext.Provider>
              
            </div>
        </div>
    </div> 
  )
}

export default RefCode