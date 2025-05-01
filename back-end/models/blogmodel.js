  
  const db = require("../database.js");

//// get list of blogs model :

 exports.getBlogModel = async ()=>{
    try {
        const [blogs] = await db.query("select * from blogs")
        return blogs

    } catch (err){
        console.log(err)
        return []
    }
 }

