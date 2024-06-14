require("dotenv").config()
const http=require('http')
const PORT = process.env.PORT || 4000
require("./config/dbConnect")
const app=require('./app/app')




const server=http.createServer(app)
server.listen(PORT, console.log(`Server running on port ${PORT}`))
