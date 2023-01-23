//For catching async errors at single place and avoid try catch blocks
const catchAsyncErrors = (controller)=>{
    return (req,res,next)=>{
        return Promise.resolve(controller(req,res,next))
                        .catch(e=>{
                            console.log(e)
                            next(e)
                        })
    }
}

module.exports = catchAsyncErrors