const app = require("./app");

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started at :- ${PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(err)
})