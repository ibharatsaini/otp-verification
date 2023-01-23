import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import fake from '../fakeContact'
function Contacts() {

      const {contacts} = useSelector(state=>state.contact)
      
  return (
    <div className='contacts'>
        {
            contacts.map(el=>(
                <Link to={`/contact/${el.id}`} className='info'>
                       <span>{el.fullName}</span> 
                        <span>{el.phoneNo}</span>
                </Link>
            ))
        }

    </div>
  )
}

export default Contacts