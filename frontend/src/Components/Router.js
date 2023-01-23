import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import ContactInfo from './ContactInfo/ContactInfo'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import MessageSend from './MessageSend/MessageSend'

function Router() {
  return (
      
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/contact/:id' element={<ContactInfo />} />
                <Route path='/message' element={<MessageSend />} />
                 //404 redirect
                <Route path='*' element={<Navigate to={`/`} />} />
            </Routes>
  )
}

export default Router