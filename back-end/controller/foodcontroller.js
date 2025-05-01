const foodModel = require("../models/foodmodel")



/// get list of food controller :
exports.getfoodcontroller = (req, res) => {
    foodModel.getFoodModel().then((list) => {
      res.send(list);
    });
  };
  
