const resevationModel = require("../models/reservationmodel.js")





/////////// add reservation controller ::: 

exports.addfoodcontroller = (req, res) => {
    resevationModel.addreservation(
        req.body.recipe_id , 
        req.body.recipe_name ,
        req.body.user_name , 
        req.body.user_phone
    ).then((result) => {
        res.send(result);
      });
  };