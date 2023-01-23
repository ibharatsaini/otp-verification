import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { sendMessage } from '../../reduxStore/actions/message.actions'
import Black from '../Black/Black'
import './messagesend.css'
import Loader from '../Loader/Loader'
import Button from '../Button/Button'


function MessageSend() {

  const [otp,setOtp] = useState(Math.floor(Math.random() * 1000000))
  const {selected } = useSelector(state=>state.contact)
  const {loading} = useSelector(state=>state.message)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [msg,setMsg] = useState('Hi! Your OTP is :')


  function sendMsg(){

    if(!otp && !(otp instanceof Number)) return

    //dispatch function to send sms
    dispatch(sendMessage({
                  message:`${msg} ${otp}`,
                  recipient:selected.phoneNo,
                  otp:otp,
                  fullName:selected.fullName
    }))
    navigate(`/`)

  }
  function updateOtp(){
    setOtp(Math.floor(Math.random()*1000000))
  }
  
  return (
    <>
        <Black heading={`Send Message`} />
        <div className='menu modBox'>
            { selected  ? (<> <h3>{selected.phoneNo}</h3>
                                  <div className='messageBox'>
                                    {msg} {otp}
                                  </div>
                                  <div className='rowButton'>

                                        <Button clickHandle={updateOtp} text={`New OTP`} />
                                      {loading ? (<div> <Loader /> </div> ): (<Button clickHandle={sendMsg} text={`Send Message`} />)}
                                  </div>
                                  </> ) :
                             <Link to={`/`} className='return'>Return To Home</Link>
              }
        </div>
    </>
  )
}

export default MessageSend