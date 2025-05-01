const express = require("express") ; 
const authrouter = require("./routes/authroute") ; 
const foodrouter = require("./routes/food.js")
const reservationrouter = require("./routes/reservationroutes.js") 
const reclamationrouter = require("./routes/reclamationrouter.js")
const blogrouter = require("./routes/blogroutes.js")
const cors = require("cors")

const app = express() ; 

app.use(cors())


  
  

app.use(express.json()) ; 
app.use("/" , authrouter) ; 
app.use("/", foodrouter)
app.use("/" , reservationrouter)
app.use("/" , reclamationrouter)
app.use("/" , blogrouter)

app.listen(5000,()=>{
console.log("server is running on port 5000 !!! ")
})