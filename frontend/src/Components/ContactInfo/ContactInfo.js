import React,{useEffect} from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectContact } from '../../reduxStore/actions/contacts.actions'
import Black from '../Black/Black'
import Button from '../Button/Button'
import fake from '../fakeContact'
import './contactinfo.css'
function ContactInfo() {
    const {id} = useParams()
    const {contacts} = useSelector(state=>state.contact)
    const info = contacts.find(el=>el.id==id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(contacts,info)
    function updateSelect(){
        console.log(info)
        dispatch(selectContact(info))
        navigate(`/message`)
    }
    
    useEffect(() => {
      //returning if contact is found
      if(info) return 
      //redirecting when contact is not found
      toast.error("Contact Not Found")
      navigate(`/`)
      
    }, [])
    
    
    return info && (
        <>
            <Black heading={`Contact Info`} />
            <div className='menu modBox'>
                {
                    <div id='contactInfo'>
                        <h3>{info.fullName}</h3>
                        <section>{info.phoneNo}</section>
                        <Button text={`Send Message`} clickHandle={updateSelect} />
                    </div>

                }
            </div>
        </>
        
    )
}

export default ContactInfo