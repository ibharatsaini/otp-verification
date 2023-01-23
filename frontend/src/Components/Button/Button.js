import React from 'react'
import './buttonC.css'
function Button({text,clickHandle}) {
  return (
    <div className='composeButton' onClick={clickHandle}>
        {text}
    </div>
  )
}

export default Button