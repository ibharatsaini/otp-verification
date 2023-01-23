const catchAsyncErrors = require("../helpers/catchAsyncErrors");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require("twilio")(accountSid, authToken);


const sendMessage = async(req,res,next)=>{
        const {message , recipient} = req.body
        if(!message ||  !recipient ) return res.status(400).json({success:false,error:"Validatioin error"})
  
        //twilio api to send messages
        const data = await client.messages
                                    .create({ 
                                        body: message, 
                                        from: "+16205511070",
                                        to: `+91${recipient}`
                                    })
        
        return res.status(200)
                    .json({
                        success:true,
                        message:data
                    })

}



module.exports = {
    sendMessage: catchAsyncErrors(sendMessage),
}