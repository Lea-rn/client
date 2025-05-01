const blogmodel = require("../models/blogmodel.js")


//// get list of blogs controller : 

exports.getblogscontroller = (req , res)=>{
 blogmodel.getBlogModel().then((list)=>{
    res.send(list)
 })
}


