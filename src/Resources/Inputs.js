import React from 'react'
import './inputs.css'

const Inputs = (props) => {
  return (
    <div className='in-div'>
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.inputvalue} 
        name ={props.name}
        onChange={props.handlechange}
        className ={props.classed}
        ref={props.inputRef}
        />
    </div>
  )
}

export default Inputs