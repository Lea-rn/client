const db = require("../database.js");









  //// get list of food model :



exports.getFoodModel = async () => {
    try {
      const [food] = await db.query('SELECT * FROM recette');
      return food;
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  