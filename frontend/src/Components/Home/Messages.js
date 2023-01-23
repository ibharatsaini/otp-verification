import React from 'react'
import { useSelector } from 'react-redux'

function Messages() {
  const {messages} = useSelector(state=>state.message)
  console.log(messages.length)

  return (
    // <div id='menu'>
      <div className='contacts'>
        {
          messages.length>0 ?  messages.map(el=>(
                <div className='infoMsg'>
                       <span>{el.fullName}</span> 
                        <span>{el.otp}</span>
                        <span>{el.time}</span>
                </div>
            ))  : "No Messages"
        }

    {/* </div> */}
      
    </div>
  )
}

export default Messages