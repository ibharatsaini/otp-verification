import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Black from '../Black/Black'
import Contacts from './Contacts'
import './home.css'
import Messages from './Messages'
function Home() {
        const [show,setShow] = useState(true)
        const {messages} = useSelector(state=>state.message)
        return (
            <>
               <Black heading={`Contacts & Messages`} /> 

               <div className="menu">
                <div className='choose'>
                    <div className='option'>
                        <section onClick={()=>{setShow(true)}}>Contacts</section>
                        {show && (<span></span>)}
                    </div>
                    <div className='option'>
                        <section onClick={()=>{setShow(false)}}>Messages ({messages.length})</section>
                        {!show && (<span></span>)}
                    </div>

                </div>
                   {
                    show ? <Contacts /> : <Messages />
                   }

               </div>
            </>
        )
}

export default Home