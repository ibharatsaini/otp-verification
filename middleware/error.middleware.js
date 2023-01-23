const ErrorHandler = require("../helpers/errorHandler")


module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || `Internal Server Error`

    if(err.name = 'RestException'){
        err = new ErrorHandler(404,'Unverified account')
    }
    
    return res.status(err.statusCode).json({
                                              success:false,
                                              error:err.message
                                          })
}