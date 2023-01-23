import { toast } from "react-hot-toast"

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const LOADING_MESSAGE = 'LOADING_MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export const fetchMessage = ()=>{
    return {
        type: FETCH_MESSAGES
    }
}

export const loadingMessage = ()=>{
    return {
        type: LOADING_MESSAGE
    }
}

export const errorMessage = ()=>{
    return {
        type: ERROR_MESSAGE
    }
}

export const updateMessage = (data)=>{
    return {
        type: UPDATE_MESSAGE,
        payload:data
    }
}


// fetch call to send message
export const sendMessage = (msgBox)=>async (dispatch)=>{
        try{
            dispatch(loadingMessage())

            const data =await (await fetch('/api/v1/message/send',{
                                        method:'POST',
                                        headers:{
                                        'Content-Type':"application/json"
                                        },
                                        body:JSON.stringify({message:msgBox.message,recipient:msgBox.recipient})
                                    })).json()

            if(!data.success){
                console.log(data)
                toast.error("Please Use Twilio Verified Recipient")
                 return  dispatch(errorMessage())
            }
            toast.success("Message Sent Successfully!")
            return  dispatch(updateMessage({otp:msgBox.otp , fullName:msgBox.fullName , time: new Date().toLocaleTimeString()}))
        }catch(e){
            console.log(e)
        }
}