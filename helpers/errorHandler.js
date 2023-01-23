class ErrorHandler extends Error{
    constructor(code , message){
        super(message)
        this.statusCode = code || 500
        Error.captureStackTrace(this, this.contructor)
    }

}

module.exports = ErrorHandler