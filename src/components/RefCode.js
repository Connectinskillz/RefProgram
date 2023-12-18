import React, { useEffect, useState } from 'react'
import BG from '../Assets/BG 13.svg'
import InputRef from '../Resources/InputRef'

const RefCode = () => {
   return (
    <div className='RefCode'>
        <div className='BgImg'>
            <img src={BG} alt='bkg'/>
        </div>

        <div className='ref'>
            <div className='ref-ct'>
                <h2>Share your code to get rewarded</h2>
                <p>Get your referral code and share with others:</p>
            </div>

            <InputRef />
        </div>
    </div> 
  )
}

export default RefCode