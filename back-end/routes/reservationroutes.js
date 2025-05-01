const express = require("express") 
const reservationController = require("../controller/reservationcontroller.js")
const reservationrouter = express.Router() 



reservationrouter.post("/addreservation" , reservationController.addfoodcontroller) ; 

module.exports = reservationrouter