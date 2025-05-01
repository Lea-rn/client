const express = require('express')
const foodroutes = express.Router()

const foodcontroller = require('../controller/foodcontroller')

foodroutes.get("/home", foodcontroller.getfoodcontroller)


module.exports = foodroutes