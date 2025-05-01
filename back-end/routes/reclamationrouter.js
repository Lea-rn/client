const express = require("express") 

const reclamationController = require("../controller/reclamationcontroller.js")
const reclamationrouter = express.Router()



reclamationrouter.post("/addreclamation" , reclamationController.addreclamationcontroller)
 

module.exports = reclamationrouter ; 