const app = require("./app");

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server started at :- ${PORT}`)
})


process.on('unhandledRejection',(err)=>{
    console.log(err)
})

