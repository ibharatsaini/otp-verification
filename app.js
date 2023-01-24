const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({path:"./.env"})


const app            = express()
const messagesRoutes = require('./routes/message.routes')
const errorMiddleware = require("./middleware/error.middleware")


app.use(cors())
app.use(express.json())
app.use(cookieParser())

//routes
app.use("/api/v1/message",messagesRoutes)

//For Production Only, Send the build
if(process.env.NODE_ENV ==='production'){
    console.log("running production code")
    app.use(express.static(path.join(__dirname,"./frontend/build")))
    app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
  }

  
//errorhandler middleware
app.use(errorMiddleware)


module.exports = app