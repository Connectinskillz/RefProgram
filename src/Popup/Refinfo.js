import React, {useState, useEffect} from 'react'
import './Refinfo.css'
import msg from '../Assets/Mask group.svg'
import avatar from '../Assets/Vector.svg'
import gifts from '../Assets/gift.svg'

import { FaCopy, FaCheck } from "react-icons/fa"; 
import { IconContext } from 'react-icons';

const Refinfo = () => {
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

    const DispData = [
        {
            image: msg,
            title:"Send Invite",
            text:"Send your invite code to your friend for them to use."
        },

        {
            image:avatar,
            title:"Registration",
            text:"Let your friends register using your personal referral code."
        },

        {
            image:gifts,
            title:"Get Rewarded",
            text:"For every time people use your code, you get rewarded."
        }
    ]

  return (
    <div className='Refinfo'>
        <div className='heading'>
            <h1>Our Referral Program</h1>
            <p>Invite your friends to use your referral code and earn.</p>
        </div>

    <div className='mapdata'>
        {DispData.map((items, index) => (
            <div className='itemdiv' key = {index}>
                <div className='image'>
                    <img src={items.image} alt='message'/>
                </div>

                <div className='attrib'>
                    <h2>{items.title}</h2>
                    <p>{items.text} </p>
                </div>
            </div>
    ))}
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

export default Refinfo;