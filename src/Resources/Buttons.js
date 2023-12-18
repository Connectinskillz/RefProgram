import React from 'react'
import './button.css'

const Button = ({name, ondisplay, classed}) => {
  return (
    <button onClick={ondisplay} className={classed}>{name}</button>
  )
}

export default Button