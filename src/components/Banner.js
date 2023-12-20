import React from 'react'
import Button from '../Resources/Buttons'
import character from '../Assets/Character.svg'

const Banner = ({onDisp}) => {
  return (
    <div className='Banner'>
        <div className='Banner-ctnt'>
          <p className='userID'>Hi, Ademola Adegbamigbe</p>
            <h3>Refer People <br/>and earn cash rewards</h3>
            <p>Earn cash rewards for every paying customer you refer. The more you refer, the greater your income.  Click on the button to know more.</p>

            <div className='learn'>
                <Button name ="Learn More" ondisplay ={onDisp} classed ="learn"/>
            </div>
        </div>

        <div className='Banner-disp'>
            <img src={character} alt='character'/>
        </div>

        
    </div>
  )
}

export default Banner