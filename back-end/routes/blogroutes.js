const express = require('express')
const blogroutes = express.Router()

const blogController = require("../controller/blogcontroller.js")

blogroutes.get("/blogs" ,blogController.getblogscontroller ) ; 

module.exports = blogroutes